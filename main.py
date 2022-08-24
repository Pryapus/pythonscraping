from modules.GetScriptSrc import *
from database.pushjstodatabase import *
from csvtolist import *

brandlist = ['https://snocks.com', 'https://buah.de', 'https://bitterliebe.com', 'https://hugoboss.com','https://www.piquelife.com/']

for x in ListofBrands:
    pushtodatabase("JSLinks", "brand_domain", x, "link_js", getScriptSrc(x))
    print(x + " successfully executed")


