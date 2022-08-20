
def getOptimizeScriptSrc(domain):
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
        OptimizeRegex = re.compile(r'OPT-.{7}',re.DOTALL)
        addhttps = 'https://'
        addOptimizeSrc = 'www.googleoptimize.com/optimize.js?id='
        # Everything I tried :D
        OptimizeScript = OptimizeRegex.search(javascript)
        if OptimizeScript:
            return(addhttps + addOptimizeSrc + OptimizeScript[0])

    
    