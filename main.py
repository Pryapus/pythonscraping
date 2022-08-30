from cgi import print_exception
from modules.GetScriptSrc import *
from database.pushjstodatabase import *
from database.csvtolist import *

brandlist = ['https://www.made.com']

for x in CleanedList:
    try:
        pushtodatabase("JSLinks", "brand_domain", x, "link_js", getScriptSrc(x))
        print(x + " successfully executed")
    except:
        pass


