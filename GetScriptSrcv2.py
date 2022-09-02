from cgi import test
from operator import index
import re
from unittest import result

from GetVWOScript import *
from database.pushjstodatabase import push3itemstodatabase, pushtodatabase
from database.pushjstodatabase_v2 import update3itemstodatabase, updatetodatabase
from tools.requestandparse import *


def getScriptSrc(domain):



    soup = requestAndParse(domain)[0]
    #, r'_vwo_code.*var account_id=([0-9]*)' #r'visualwebsiteoptimizer\.com\/lib\/([0-9]*)',
    thislist = [r'(try.abtasty.com\/[\d|\w]*?.js)', r'(cdn\.\w*optimizely.com\/js\/[0-9]*.js)', r'(.{10}\.kameleoon\.eu\/kameleoon.js)', r'(cdn-\w*\.dynamicyield\.com\/api\/[0-9]*\/api_dynamic\.js)', r'(cdn.*.convertexperiments.com\/js\/.*.js)',  r'visualwebsiteoptimizer\.com\/j\.php\?a=(\d{6})', r'visualwebsiteoptimizer\.com\/lib\/(\d{6})', r'optimize\.js\?id=(.{11})', r'_vwo_code.*var account_id\s*=\s*(.{6})']
    toolnames = ["ABTasty", "Optimizely", "Kameleoon", "Dynamic Yield", "Convert", "VWO", "VWO", "Optimize", "VWO"]
    textsoup = str(soup)
    Triggered = 0
    #ToolMatch = ""
    for x in thislist:
        Regex = re.compile(x, re.DOTALL)
    
        if Regex.search(textsoup):
            #print(x)
            
            result = Regex.search(textsoup)
            link_js = result.group(1)
            testing_tool = toolnames[thislist.index(x)]
            #print(link_js)
            Triggered = Triggered + 1

            if Triggered == 1:
                ToolMatch = testing_tool
               
                try:
                    
                    push3itemstodatabase("JSLinks_production", "brand_domain", domain, "link_js", link_js, "testing_tool", testing_tool)
                    
                    print(testing_tool + " found for " + domain)
                except:
                    try:
                        update3itemstodatabase("JSLinks_production", "brand_domain", domain, "link_js", link_js, "testing_tool", testing_tool)
                        print(testing_tool + " found for " + domain)
                    except:
                        pass
                    
            elif Triggered == 2 and ToolMatch != testing_tool:
  
                try:
                    push3itemstodatabase("JSLinks_secondtool", "brand_domain", domain, "link_js", link_js, "testing_tool", testing_tool)
                    print(testing_tool + " found for " + domain)
                except:
                    try:
                        update3itemstodatabase("JSLinks_secondtool", "brand_domain", domain, "link_js", link_js, "testing_tool", testing_tool)
                        print(testing_tool + " found for " + domain)
                    except:
                        pass
                    pass
            

