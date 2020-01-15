# randomstringsgenerator
This package will generate a random string with params, for example you can use this package to generate passwords. 

# Getting started :
 ``` npm i randomstringsgenerator ```  <br>
 or <br>
 ``` yarn add randomstringsgenerator ```

# How to use:

The packge accepts 5 params, if you call the generator without passing any params, <br>
it will return a random string including lowerCase and numbers only with the length of 10 chars.<br>
 Now for the params :  <br>
 length => a number, represent the length of the string, <br>
 params => Array accept the following strings 'upperCase','lowerCase','specialChars','numbers' <br>
 ```javascript
randomstringsgenerator(length,params)
```
# Example
If i want a random string including uppercase, lowercase, special characters and numbers, with a length of 15 <br>
 ```javascript
randomstringsgenerator(15,['numbers','upperCase','lowerCase','specialChars')
```


