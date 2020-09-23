import requests, json

BASE_URL = 'https://swapi.dev/api'

# get request
url = BASE_URL + '/people/'
params = {'search': 'r2'}
res = requests.get(url, params=params)
data = res.json()

# post request
url = BASE_URL + '/...'
data = {'data': {'data': 'data'}}
res = requests.post(url, data=json.dumps(data))