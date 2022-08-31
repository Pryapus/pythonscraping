import requests

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

response = requests.get('https://dev.visualwebsiteoptimizer.com/settings.js', params=params, headers=headers)

print(response.text)