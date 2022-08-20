
def getKameleoonScriptSrc(domain):
    import requests
    import re
    from bs4 import BeautifulSoup
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
        addhttps = 'https://'
        # Everything I tried :D
        kameleeonScript = kameleoonRegex.findall(javascript)
        if kameleeonScript:
            print(addhttps + kameleeonScript[0])





getKameleoonScriptSrc('https://nutrimuscle.com')
