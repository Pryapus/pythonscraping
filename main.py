from cgi import print_exception
from GetScriptSrcv2 import getScriptSrc

from database.pushjstodatabase import *
from database.csvtolist import *
from database.pushjstodatabase_v2 import updatetodatabase

brandlist = ['https://sassyclassy.de']

for x in CleanedList:
    try:
        getScriptSrc(x)
    except:
        print(x + " could not be executed")
        pass


