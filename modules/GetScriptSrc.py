import requests
import re
from bs4 import BeautifulSoup
from urllib.error import HTTPError

def getScriptSrc(domain):


    headers = {"User-Agent": "Mozilla/5.0"}

    try:
        html = requests.get(domain, headers=headers)
        html.raise_for_status()
    except HTTPError as hp:
        print(hp)
        
    else:
        soup = BeautifulSoup(html.text, "html.parser")
        # Find all script tags
        for n in soup.find_all('script'):
            # Check if the src attribute exists, and if it does grab the source URL
            if 'src' in n.attrs:
                javascript = n['src']
            # Otherwise assume that the javascript is contained within the tags
            else:
                javascript = ''
            thislist = [r'try.abtasty.com\/.*.js', r'cdn.*.optimizely.com\/js\/.*.js', r'optimize\.js\?id=.{11}', r'[\w].*kameleoon.js', r'cdn.*.dynamicyield.com\/api\/.*.api_dynamic.js', r'cdn.*.optimizely.com\/js\/.*.js', r'cdn.*.convertexperiments.com\/js\/.*.js']
            for x in thislist:
                extractFromRegex(x, javascript)

def extractFromRegex(regex, javascript):
    SrcRegex = re.compile(regex, re.DOTALL)
    addhttps = 'https://'
    ScriptList = []
    OptimizelyScript = SrcRegex.findall(javascript)
    if OptimizelyScript:
        print("found script: " +addhttps + OptimizelyScript[0])
    
    





