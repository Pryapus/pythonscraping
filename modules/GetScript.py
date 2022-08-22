import requests
import re
from bs4 import BeautifulSoup
from urllib.error import HTTPError

def getABTastyScriptSrc(domain):


    headers = {"User-Agent": "Mozilla/5.0"}

    try:
        html = requests.get(domain, headers=headers)
        html.raise_for_status()
    except HTTPError as hp:
        print("Error: " + hp)
        
    else:
        print("http initialized")
        soup = BeautifulSoup(html.text, "html.parser")
        # Find all script tags
        for n in soup.find_all('script'):
            # Check if the src attribute exists, and if it does grab the source URL
            if 'src' in n.attrs:
                javascript = n['src']
            # Otherwise assume that the javascript is contained within the tags
            else:
                javascript = ''
            
            extracedScript = regex_script(javascript)
            if extracedScript != None:
                print("Script found: " + extracedScript)
            

            
def regex_script(javascript):
    # print("Regex function initialized")
    Regex = re.compile(r'try.abtasty.com\/.*.js')
    addhttps = 'https://'
    OptimizelyScript = Regex.search(javascript)
    if OptimizelyScript:
        # print("Regex found something")
        result = addhttps + OptimizelyScript[0]
        # print(result)
        return result




getABTastyScriptSrc("https://www.bitterliebe.com/")
