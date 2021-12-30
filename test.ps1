Write-Output "Getting all users"
Invoke-WebRequest -Method Get -Uri "http://localhost:3000/users"
Write-Output "Getting user fatcow"
Invoke-WebRequest -Method Get -Uri "http://localhost:3000/users/fatcow"
Write-Output "Getting nonexistent user fatcat"
Invoke-WebRequest -Method Get -Uri "http://localhost:3000/users/fatcat"
Write-Output "Making new user"
$body = @{
    'username'='crazypig'
    "port"=1234
   } | ConvertTo-Json
Invoke-WebRequest -UseBasicParsing -Uri "http://localhost:3000/users" -ContentType "application/json" -Method POST -Body $body