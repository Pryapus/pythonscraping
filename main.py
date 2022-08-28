from modules.GetScriptSrc import *
from database.pushjstodatabase import *
from database.csvtolist import *

brandlist = ['https://www.lotuscrafts.eu']

for x in CleanedList:
    pushtodatabase("JSLinks", "brand_domain", x, "link_js", getScriptSrc(x))
    print(x + " successfully executed")


