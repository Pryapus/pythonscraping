import json
import re
from doctest import OutputChecker
from multiprocessing.connection import wait
from urllib import response
from urllib.parse import urlparse

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from seleniumwire import webdriver
from seleniumwire.utils import decode



def get_resources(url: str) -> set:
    chrome_options = Options()
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--ignore-certificate-errors')
    chrome_options.add_argument("--proxy-server=http://" + url)

    driver = webdriver.Chrome(options=chrome_options, executable_path='/Users/fabiangmeindl/Desktop/BeautifulSoupFirstTry/chromedriver')

    resources = []

    driver.get(url)
    waited = driver.wait_for_request(r'.*delivery?.*')
    respone = decode(waited.response.body, waited.response.headers.get('Content-Encoding', 'identity'))


    return(respone)
    # Access requests via the `requests` attribute
    # for request in driver.requests:
    #    if request.response and urlparse(url).netloc not in urlparse(request.url).netloc:
     #       resources.append(request.url)

    #return set(resources)
    driver.quit()





allrequests = get_resources("https://www.huk24.de/")
strallrequest = str(allrequests)


ExpRegex = re.compile(r'"execute":.*')
Exps = ExpRegex.findall(strallrequest)

OutputTarget = "{" + Exps[0]

Output = OutputTarget[:-1]

JsonOutput = json.loads(Output)


print(JsonOutput)


# for x in allrequests:
#    Analytics_js = re.compile(r'.*settings.js\?a=.{6}', re.DOTALL)
#    Result = Analytics_js.findall(str(x))
 #   if Result:
#        print(Result[0])

