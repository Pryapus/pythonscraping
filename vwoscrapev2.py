import json
import re

import requests
from tools.brackets import *

headers = {
    'authority': 'dev.visualwebsiteoptimizer.com',
    'accept': '*/*',
    'accept-language': 'en;q=0.9',
    'sec-fetch-dest': 'script',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'cross-site',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
}

params = {
    'a': '588595',
}

vwosoupstr = requests.get('https://dev.visualwebsiteoptimizer.com/settings.js', params=params, headers=headers)
VWOJSON = re.compile('\'updateSettings\',(\{.*)', re.DOTALL)
VWOmatches = VWOJSON.search(vwosoupstr.text)
stringmatches = VWOmatches.group(0)
append = GetBracketContent(stringmatches, "{", "}")
JsonSoup = json.loads("{\"configuration\": " + append + "}")
#print(range(len((JsonSoup))))

TestNames = []


onesity = (JsonSoup["configuration"])
#name = onesity.keys
#namen = name[0]["name"]
#for key in onesity.keys():
 #   print(key)
#print(onesity.text)


for i in range(len(onesity.keys())):
    #push3itemstodatabase("Experiments", "id", jsonexp[i]["id"], "name", jsonexp[i]["name"], "domain", domain)
    #ExperimentIDs.append(jsonexp[i]["id"])
    TestNames.append(onesity[i]["name"])

print(TestNames[0])
