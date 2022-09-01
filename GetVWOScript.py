import requests
import re
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import csv  
from tools.requestandparse import *

def getVWOScriptSrc(soup):

    textsoup = str(soup)
    VWORegex = re.compile(r'_vwo_code.*var account_id=(.{6})', re.DOTALL)
    account_number = VWORegex.findall(textsoup)[0]
    output = "https://dev.visualwebsiteoptimizer.com/settings.js?a=" + VWORegex.findall(textsoup)[0]


    return output
    
            