import requests

cookies = {
    '_gcl_au': '1.1.1812574492.1661917259',
    'nd.auid': 'e9490223-8a99-4d65-a4c1-be9d981bc03e',
    'nd.sessionhash': 'MDNhMDczODNiMjIyMTIwYTNiNTNlZTUxNDVjNTk3MDA6NDAzNzliNWZhOWNlNzNmMDg1ZmM3MTlhN2U5MjNmOGQyMzE3YjIzMjJkMTgyZjVm',
    'nd.search.count': '2',
}

headers = {
    'authority': 'api.nerdydata.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en;q=0.9',
    # Requests sorts cookies= alphabetically
    # 'cookie': '_gcl_au=1.1.1812574492.1661917259; nd.auid=e9490223-8a99-4d65-a4c1-be9d981bc03e; nd.sessionhash=MDNhMDczODNiMjIyMTIwYTNiNTNlZTUxNDVjNTk3MDA6NDAzNzliNWZhOWNlNzNmMDg1ZmM3MTlhN2U5MjNmOGQyMzE3YjIzMjJkMTgyZjVm; nd.search.count=2',
    'origin': 'https://www.nerdydata.com',
    'referer': 'https://www.nerdydata.com/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Mobile Safari/537.36',
}

params = {
    'search': '{"all":[{"type":"report","value":"de430186-0083-49eb-9c68-50601a9d5c05"}],"any":[],"none":[]}',
    'page': 'AoJUsw81bGltbWF0dGFsZXJ6ZWl0dW5nLmNo',
}

response = requests.get('https://api.nerdydata.com/search', params=params, cookies=cookies, headers=headers)
print(response.content)