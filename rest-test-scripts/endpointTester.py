import requests
url = 'http://localhost:8080/api/foods/new'
payloadForPush = {'food': ['nakki', 'makkara']}
payloadForRemove = {
    'id': '8',
    'food':'makkara'
    }
headers = {'Content-Type': 'application/json'}

# POST with JSON 
import json
print(json.dumps(payloadForPush))
r = requests.post(url, data=json.dumps(payloadForPush), headers=headers)


# Response, status etc
r.text
r.status_code
