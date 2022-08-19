import requests
import re

from bs4 import BeautifulSoup


domain = "https://nutrimuscle.com"
html = requests.get(domain)

soup = BeautifulSoup(html.text, "html.parser")

# Find all script tags
for n in soup.find_all('script'):

    # Check if the src attribute exists, and if it does grab the source URL
    if 'src' in n.attrs:
        javascript = n['src']

    # Otherwise assume that the javascript is contained within the tags
    else:
        javascript = ''


    kameleoonRegex = re.compile(r'[\w].*kameleoon.js')
    #Everything I tried :D
    kameleeonScript = kameleoonRegex.findall(javascript)
    if kameleeonScript:
        print(kameleeonScript[0])
