import requests

response = requests.get('https://cdn.optimizely.com/js/19724458180.js')
print(response.text)