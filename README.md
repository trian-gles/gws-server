# gws-server
A REST API server for facilitating matchmaking in the game Girls With Swords.  Allows creation, modification and deletion of users.

## Setup
First time usage:
`npm install`

Running:
`node ./index.js`

## Example Usage
Interacting with the API using powershell:

```
$body = @{
    'username'='coolcow'
    "port"=8001
    "ip"=127.0.0.1
   } | ConvertTo-Json
Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000/users" -ContentType "application/json" -Method POST -Body $body
# {"message":"New user coolcow created"}

$body = @{
    'username'='crazypig'
    "port"=1234
    "ip"=127.0.0.1
   } | ConvertTo-Json
Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000/users" -ContentType "application/json" -Method POST -Body $body
# {"message":"New user crazypig created"}

Invoke-WebRequest -Uri "http://localhost:3000/users" -Method Get 
# [{"username":"coolcow","ip":"127.0.0.1","port":8001,"isOnline":true,"inMatch":false,"outChallenges":[],"inChallenges":[]},
# {"username":"crazypig","ip":"127.0.0.1","port":1234,"isOnline":true,"inMatch":false,"outChallenges":[],"inChallenges":[]}]

Invoke-WebRequest -Method Delete -Uri "http://localhost:3000/users/coolcow"
# {"message":"Successfully deleted user coolcow"}

$body = @{
    'username'='crazypig'
    "port"=5678
    "ip"=127.0.0.1
    "isOnline":$true
    "inMatch":$false
    "outChallenges"=@()
    "inChallenges"=@()
   } | ConvertTo-Json
Invoke-WebRequest -Method Get -Uri "http://localhost:3000/users"
# [{"username":"crazypig","ip":"127.0.0.1","port":5678,"isOnline":true,"inMatch":false,"outChallenges":[],"inChallenges":[]}]
```
