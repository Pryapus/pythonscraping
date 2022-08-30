import csv
import requests
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup

from checkURL import checkURL

def requestAndParse(domain):
    domain = checkURL(domain)
    try:
        # define headers to be provided for request authentication
        headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) ' 
                        'AppleWebKit/537.11 (KHTML, like Gecko) '
                        'Chrome/23.0.1271.64 Safari/537.11',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
            'Accept-Encoding': 'none',
            'Accept-Language': 'en-US,en;q=0.8',
            'Connection': 'keep-alive'}
        html = requests.get(url = domain, headers = headers, timeout=10)
        data = [domain, "HTTP Response:", str(html.status_code)]
        with open('logs/logs.csv', 'a', encoding='UTF8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(data)
        
        soup = BeautifulSoup(html.text, "html.parser")
        return soup, domain

    except Exception as e:
        data = [e]
        with open('logs/errorlog.csv', 'a', encoding='UTF8', newline='') as x:
            writer = csv.writer(x)
            writer.writerow(data)
        pass


