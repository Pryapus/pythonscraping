import json
import re

import requests
from bs4 import BeautifulSoup
from tools.requestandparse import *

nutrimuscle = "https://lfztqvffnx.kameleoon.eu/kameleoon.js"
snocks = "https://u3nqc6abwf.kameleoon.eu/kameleoon.js"
optimizescript = "https://www.googleoptimize.com/optimize.js?id=OPT-N3JG2FV"
domain = optimizescript
soupstr = str(requestAndParse(domain))



# JSON = re.compile('Kameleoon.Internals = ({.*?}\)\(\));', re.DOTALL)
KameleoonJSON = re.compile('Kameleoon.Internals = ({.*?),\"Gatherer\":.*}}', re.DOTALL)
OptimizeJSON = re.compile('var data = {.*', re.DOTALL)
#




print(soupstr)
matches = OptimizeJSON.search(soupstr)
print(matches)
#TwoBrackets= "}}"

#append = matches.group(1) + TwoBrackets
#removed = re.sub(';\n}\)\(\)', "", matches.group(1))

#JsonSoup = json.loads(append)
#Configuration = JsonSoup["configuration"]
#Personalizations = Configuration["personalizations"]

# Format into a dict and flatten it
    #for ExperimentData in Experiments:
    #Expsdict = dict.fromkeys(ExperimentData)
    #print(Expsdict)
