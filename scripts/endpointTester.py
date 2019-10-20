import requests
url = 'http://localhost:8080/api/foods/delete'
payloadForPush = {'food': ['nakki', 'makkara']}
payload = {
    'id': '8',
    'food':'makkara'
    }
headers = {'Content-Type': 'application/json'}

# POST with JSON 
import json
print(json.dumps(payload))
r = requests.post(url, data=json.dumps(payload), headers=headers)


# Response, status etc
r.text
r.status_code
