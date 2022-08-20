def getDYOScriptSrc(domain):
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
        
        DYORegex = re.compile(r'cdn.dynamicyield.com\/api\/.*.api_dynamic.js')
        addhttps = 'https://'
        # Everything I tried :D
        DYOScript = DYORegex.findall(javascript)
        if DYOScript:
            print(addhttps + DYOScript[0])

        print(soup)
        
        


print(getDYOScriptSrc("https://www.hugoboss.com/"))