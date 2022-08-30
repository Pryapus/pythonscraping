import json, _jsonnet
import json5
import re

import requests
from bs4 import BeautifulSoup
from tools.requestandparse import *
from tools.brackets import *
import demjson



# JSON = re.compile('Kameleoon.Internals = ({.*?}\)\(\));', re.DOTALL)
KameleoonJSON = re.compile('Kameleoon.Internals = ({.*?),\"Gatherer\":.*}}', re.DOTALL)




#get abtasty json
# not a valid json beacuse of ""

# not working yet
def getABTastyJSON(domain):
    ABTastysoupstr = str(requestAndParse(domain))
    ABTastyJSON = re.compile('(accountSettings:.*)', re.DOTALL)
    ABTastymatches = ABTastyJSON.search(ABTastysoupstr)
    stringmatches = ABTastymatches.group(1)
    abtastystring = GetBracketContent("{" + stringmatches, "{", "}")
    return abtastystring







#ABTastySoup = (getABTastyJSON("https://try.abtasty.com/6cbb03f69a32e01687bfac67112f6eab.js"))
#print(json.loads(_jsonnet.evaluate_snippet('snippet', ABTastySoup)))

#optimizely
# Expecting ',' delimiter: line 1 column 1453 (char 1452)
#optimizelysoup = re.compile('var DATA=({.*)', re.DOTALL)
#matches = optimizelysoup.search(soupstr)
#optstringmatches = matches.group(1)
#optimizelystring = GetBracketContent(optstringmatches, "{", "}")
# print(optimizelystring)
#OptimizelyJsonSoup = json.loads(optimizelystring)
# print(OptimizelyJsonSoup)


# get optimize json
def getOptimizeJSON(domain):
    Optimizesoupstr = str(requestAndParse(domain))
    OptimizeJSON = re.compile('var data = ({.*)', re.DOTALL)
    Optimizematches = OptimizeJSON.search(Optimizesoupstr)
    stringmatches = Optimizematches.group(1)
    append = GetBracketContent(stringmatches, "{", "}")
    JsonSoup = json.loads(append)
    Resource = JsonSoup["resource"]
    return Resource


#not working yet
def getOptimizelyJSON(domain):
    Optimizelysoupstr = str(requestAndParse(domain))
    OptimizelyJSON = re.compile('("layers": \[{.*)', re.DOTALL)
    Optimizelymatches = OptimizelyJSON.search(Optimizelysoupstr)
    stringmatches = Optimizelymatches.group(0)
    append = GetBracketContent("{" + stringmatches, "{", "}")
    JsonSoup = json.loads(append)
    
    return JsonSoup


#print(getOptimizelyJSON("https://cdn.optimizely.com/js/17529800006.js"))

def getkameleoonJSON(domain):
    Kameleoonsoupstr = str(requestAndParse(domain))
    KameleoonJSON = re.compile('Kameleoon.Internals = ({.*?),\"Gatherer\":.*}}', re.DOTALL)
    Kamleoonmatches = KameleoonJSON.search(Kameleoonsoupstr)
    TwoBrackets= "}}"
    append = Kamleoonmatches.group(1) + TwoBrackets
    JsonSoup = json.loads(append)
    Configuration = JsonSoup["configuration"]
    Experiments = Configuration["experiments"]
    return Experiments, domain


print(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[1] + "is running " + str(len(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[0])) + " experiments right now")

print(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[0])