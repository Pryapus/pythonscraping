def getABTastyScriptSrc(domain):

    import requests
    import re
    from bs4 import BeautifulSoup
    from urllib.error import HTTPError
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
            OptimizelyRegex = re.compile(r'try.abtasty.com\/.*.js')
            addhttps = 'https://'
            # Everything I tried :D
            OptimizelyScript = OptimizelyRegex.findall(javascript)
            if OptimizelyScript:
                print(addhttps + OptimizelyScript[0])


getABTastyScriptSrc("https://www.bitterliebe.com/")

