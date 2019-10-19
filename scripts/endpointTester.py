import requests
url = 'http://192.168:8080/api/foods/new'
payload = {'key1': 'value1', 'key2': 'value2'}
headers = {'Content-Type': 'application/json'}

# POST with JSON 
import json
print(json.dumps(payload))
r = requests.post(url, data=json.dumps(payload), headers=headers)


# Response, status etc
r.text
r.status_code
