"use strict";

class TarjetaSUBE
{
    isValid(cardnumber) 
    {
		 if (!this.simpleValidation(cardnumber)) {
			return false;
		} else if (!this.complexValidation(cardnumber)) {
			return false;
		} else {
			return true;
		}
    }

	simpleValidation(cardnumber) 
	{
		// Length validation
		if (cardnumber.length != 16) {
			return false;
		}

		// Prefix validation
		if (cardnumber.substring(0, 4) != "6061") {
			return false;
		}

		return true;
	}

	complexValidation(cardnumber) 
	{
		// string to array
		var digits = cardnumber.split("");

		// delete last item
		digits.pop();

		// iterate over all digits
		var sum = 0;
		for(var i = 0; i < digits.length; i++) 
		{
			// even or odd?
			var even = (i % 2 == 0);

			if (even) 
			{
				// digit * 2
				var multiplier = digits[i] * 2;

				// check overflow
				if (multiplier > 9) {
					multiplier = multiplier - 9;
				}

				// update digit
				digits[i] = multiplier;
			}

			sum = sum + Number(digits[i]);
		}

		// module between the sum and base10
		let rest = sum % 10; 

		// digito verificador
		var lastdigit = 0;
		if (rest > 0) {
			lastdigit = 10 - rest;
		}

		// verificar la tarjeta original vs la tarjeta con digito verificador
		let newCardnumber = cardnumber.substring(0, 15) + lastdigit;

		return (cardnumber == newCardnumber);
	}
}


module.exports = new TarjetaSUBE();
