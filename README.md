# randomstringsgenerator
This package will generate a random string with params, for example you can use this package to generate passwords. 

# Getting started :
 ``` npm i randomstringsgenerator ```  <br>
 Or <br>
 ``` yarn add randomstringsgenerator ``` <br>
 Next we import it  <br>
  ``` const rsg = require('randomstringsgenerator') ```
 

# How to use:

The packge accepts 2 inputs, if you call the generator without passing any params, <br>
it will return a random string including lowerCase and numbers only, with the length of 10 chars.<br>
# Inputs :  <br>
1- length => a number, represents the length of the string. <br>
2- params => Array [] accepts the following strings ['upperCase', 'lowerCase', 'specialChars', 'numbers'].<br>
 ```javascript
rsg(length,params)
```
# Example
If i want a random string including uppercase, lowercase, special characters and numbers, with a length of 15 <br>
 ```javascript
rsg(15,['numbers','upperCase','lowerCase','specialChars')
```


