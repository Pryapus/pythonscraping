import requests
import itertools
import json

proxies = {
   'https': 'https://lum-customer-c_fcafbbc8-zone-zone1-ip-178.171.73.56:o2arbf7qgs8p@zproxy.lum-superproxy.io:22225',
}
response = requests.get("https://ipinfo.io/json", proxies= proxies)
print(response.json())