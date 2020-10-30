# Git Report Library

1. Clone and run `npm install`
2. run the app.js server
3. Put a github personal token in the root directory in the secret folder `secret/secret.js`
4. Make a github Repository and put the accout details in app.js
5. Make a repository you want to use as a database, and put the details in app.js

Secret File is like 

````
const KEY = 'YOUR-GITHUB-PERSONAL-TOKEN'
module.exports = KEY;

````
Personal Tokens can be generated from the settings of your github account.
