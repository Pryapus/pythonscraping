import requests
import re

from bs4 import BeautifulSoup


domain = "https://www.homechef.com"
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

    print(javascript)
    FilterRegex = re.compile(r'https:\/\/cdn.optimizely.com\/js\/.*')
    OptimzelyScript = FilterRegex.findall(javascript)
    if OptimzelyScript:
        print(OptimzelyScript[0])
