import csv
import itertools
import json
import json5
import re

import _jsonnet
import demjson
import json5
import requests
from bs4 import BeautifulSoup

from database.pushjstodatabase import *
from tools.brackets import *
from tools.requestandparse import *

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
    Optimizelysoupstr = requests.get(domain).text
    OptimizelyJSON = re.compile('\"experiments\": \[{.*', re.DOTALL)
    Optimizelymatches = OptimizelyJSON.search(Optimizelysoupstr)
    stringmatches = Optimizelymatches.group(0)
    append = GetBracketContent("{{" + "\"" + stringmatches, "{", "}")
    print(append)
    JsonSoup = json.loads(append)
    print(JsonSoup)


getOptimizelyJSON("https://cdn.optimizely.com/js/19724458180.js")
# layers\": \[(\{.*)




# print(getOptimizelyJSON("https://cdn.optimizely.com/js/17529800006.js"))

# def getkameleoonJSON(domain):
#     Kameleoonsoupstr = str(requestAndParse(domain))
#     KameleoonJSON = re.compile('Kameleoon.Internals = ({.*?),\"Gatherer\":.*}}', re.DOTALL)
#     Kamleoonmatches = KameleoonJSON.search(Kameleoonsoupstr)
#     TwoBrackets= "}}"
#     append = Kamleoonmatches.group(1) + TwoBrackets
#     JsonSoup = json.loads(append)
#     Configuration = JsonSoup["configuration"]
#     Experiments = Configuration["experiments"]
#     return Experiments, domain


# #print(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[1] + "is running " + str(len(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[0])) + " experiments right now")

# # print(getkameleoonJSON("https://fukwt8dait.kameleoon.eu/kameleoon.js")[0])


# with open('kameleoonscripts.csv', newline='') as f:
#     reader = csv.reader(f)
#     data = list(reader)


# CleanedList = list(itertools.chain.from_iterable(data))

# for i in CleanedList:


#     domain = getkameleoonJSON(i)[1]
#     Experiments = getkameleoonJSON(i)[0]
#     ExperimentIDs = []
#     TestNames = []

#     def PushExpsIntoSupabase(jsonexp):
        
        
#         for i in range(len(jsonexp)):
#             push3itemstodatabase("Experiments", "id", jsonexp[i]["id"], "name", jsonexp[i]["name"], "domain", domain)
#             ExperimentIDs.append(jsonexp[i]["id"])
#             TestNames.append(jsonexp[i]["name"])


        

#     try:

#         PushExpsIntoSupabase(Experiments)
#         print(i + " successfully executed")
#     except:
#         pass

