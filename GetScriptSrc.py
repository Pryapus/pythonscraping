import requests
import re
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import csv  
from tools.requestandparse import *
from GetVWOScript import *

def getScriptSrc(domain):



    soup = requestAndParse(domain)[0]

    try: 
        result = getVWOScriptSrc(soup)
        return result
    except:
        for n in soup.find_all('script'):
            # Check if the src attribute exists, and if it does grab the source URL
            if 'src' in n.attrs:
                javascript = n['src']
            # Otherwise assume that the javascript is contained within the tags
            else:
                javascript = ''

            thislist = [r'try.abtasty.com\/.*.js', r'cdn.*.optimizely.com\/js\/.*.js', r'googleoptimize\.com\/optimize\.js\?id=.{11}', r'[\w].*kameleoon.js', r'cdn.*.dynamicyield.com\/api\/.*.api_dynamic.js', r'cdn.*.optimizely.com\/js\/.*.js', r'cdn.*.convertexperiments.com\/js\/.*.js']
            for x in thislist:
                if extractFromRegex(x, javascript):
                    result = extractFromRegex(x, javascript)
                    return result
            

def extractFromRegex(regex, javascript):
    SrcRegex = re.compile(regex, re.DOTALL)
    OptimizelyScript = SrcRegex.findall(javascript)
    if OptimizelyScript:
        result = OptimizelyScript[0]
        return result
    
