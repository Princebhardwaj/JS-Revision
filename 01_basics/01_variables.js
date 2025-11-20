const accountId = 29292
let accountEmail = "prince@example.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2

accountEmail = "email@demo.com"

accountPassword = "212121"

accountCity = "jp"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
