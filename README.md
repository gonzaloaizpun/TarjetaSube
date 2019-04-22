# TarjetaSube


*The way to get started is to quit talking and begin doing. (Walt Disney)*


### What?
Node module in order to let you verify if a Tarjeta SUBE number is it valid or not. 


### Example
Install TarjetaSUBE module
```sh
$ npm i tarjetasube
```

Code your `application.js`
```js
"use strict";

// the module
var tarjetaSUBE = require('tarjetasube');

// the cardnumber
var cardnumber = "6061268880223199";

// go go go!
if (tarjetaSUBE.isValid(cardnumber)) {
	console.log(`Yes! ${cardnumber} is a valid Tarjeta SUBE number.`);
} else {
	console.log(`Ooops... ${cardnumber} looks like an invalid Tarjeta SUBE number.`);
}

```