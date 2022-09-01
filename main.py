from cgi import print_exception
from GetScriptSrc import *
from database.pushjstodatabase import *
from database.csvtolist import *
from database.pushjstodatabase_v2 import updatetodatabase

brandlist = ['https://sassyclassy.de']

for x in CleanedList:
    try:
        pushtodatabase("JSLinks_production", "brand_domain", x, "link_js", getScriptSrc(x))
        print(x + " successfully executed")
    except:
        try:
            updatetodatabase("JSLinks_production", "brand_domain", x, "link_js", getScriptSrc(x))
        except:
            pass
        pass


