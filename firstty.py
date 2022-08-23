from unittest import result
from seleniumwire import webdriver  # Import from seleniumwire
import re

# Create a new instance of the Chrome driver
driver = webdriver.Chrome(executable_path='/Users/fabiangmeindl/Desktop/BeautifulSoupFirstTry/chromedriver')
# Go to the Google home page
driver.get('https://www.sassyclassy.de')

# Access requests via the `requests` attribute
for request in driver.requests.url:
    if request.response:
        Analytics_js = re.compile(r'.*settings.js.*', re.DOTALL)
        Result = Analytics_js.findall(str(request))
        print(type(request))


print(Result)

