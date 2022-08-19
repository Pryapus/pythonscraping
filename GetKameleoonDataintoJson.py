import requests
import re
import json

from bs4 import BeautifulSoup

#Domains to use
nutrimuscle = "https://lfztqvffnx.kameleoon.eu/kameleoon.js"
snocks = "https://u3nqc6abwf.kameleoon.eu/kameleoon.js"


domain = snocks
html = requests.get(domain)

soup = BeautifulSoup(html.text, "html.parser")
soupstr = str(soup)

# JSON = re.compile('Kameleoon.Internals = ({.*?}\)\(\));', re.DOTALL)
JSON = re.compile('Kameleoon.Internals = ({.*?),\"Gatherer\":.*}}', re.DOTALL)
#

matches = JSON.search(soupstr)
TwoBrackets= "}}"

append = matches.group(1) + TwoBrackets
#removed = re.sub(';\n}\)\(\)', "", matches.group(1))

JsonSoup = json.loads(append)
Configuration = JsonSoup["configuration"]
Experiments = Configuration["experiments"]
print(Experiments)
