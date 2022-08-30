import requests
import re
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import csv  
from tools.requestandparse import *

def getScriptSrc(domain):


    # headers = {"User-Agent": "Mozilla/5.0"}
    # html = requests.get(domain, headers=headers)
    
    # data = [domain, "HTTP Response:", str(html.status_code)]
    # with open('logs/logs.csv', 'a', encoding='UTF8', newline='') as f:
    #     writer = csv.writer(f)
    #     writer.writerow(data)

    # # try:
    # #     #html = requests.get(domain, headers=headers)
    # #     html.raise_for_status()
    # # except HTTPError as hp:
    # #     print(hp)
        
        
    
    # soup = BeautifulSoup(html.text, "html.parser")
    soup = requestAndParse(domain)[0]


    # Find all script tags
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
    addhttps = 'https://'
    ScriptList = []
    OptimizelyScript = SrcRegex.findall(javascript)
    if OptimizelyScript:
        result = addhttps + OptimizelyScript[0]
        return result
    

