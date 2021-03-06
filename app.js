// var currency_exchange_endpoint_base_euro = "http://data.fixer.io/api/latest?access_key=5bfb479c750aade3ac636ad3eedc2370";


// function convertCurrency(event) {
//   if ('type' in event.target 
// // document.body.addEventListener('click', convertCurrency);

// var currency_exchange_endpoint_base_euro = new XMLHttpRequest();
// currency_exchange_endpoint_base_euro.open('GET', "http://data.fixer.io/api/latest?access_key=5bfb479c750aade3ac636ad3eedc2370");
// currency_exchange_endpoint_base_euro.onload = function() {

// var currency_exchange_data = JSON.parse(currency_exchange_endpoint_base_euro.responseText);

// renderHTML(currency_exchange_data);

// regular arithmetic for money conversion

// US dollar input * foreign conversion rate = foreign conversion output

// convert to code info we have so far:

// euro example:
// #output_amount = #usDollar * #euro

// in regular function:

// function #output_amount (#usDollar, #euro) {
// 	return (#usDollar * #euro);
// }

// how to get euro conversion rate from API:

// $.get(currency_exchange_endpoint_base_euro.responseText, (response) => {
// 	console.log(response.rate.EUR);
// });

// }&& event.target.type === 'button') {
//     console.log('handle currency conversion here');
//   }
// }


// important snippet from Joe's solution: 


// $("input[type=button]").on("click", function(){
// 	$(this).val();

// 	$.get("http://data.fixer.io/api/latest?access_key=5bfb479c750aade3ac636ad3eedc2370", function(response){
// 		console.log(response); <=== this can be put at the top so it'll cover the entire thing (do other functions within this)
// 	})

// });

// $("#output_amount").append("<p> this equals </p>" + finalAnswer + " " + countryCode + ".<p>");


// <============= RE DO ================>


	$.get("http://data.fixer.io/api/latest?access_key=5bfb479c750aade3ac636ad3eedc2370", function(response){
		
	let usRateFromEuro = (response.rates.EUR) / (response.rates.USD);

	// determine exchange rate from US to other :DONE

	// regular math is: input(usRateFromEuro)* country's currency rate: DONE

	//create click event that grabs input from #usDollar

	$('#euro').on('click', function(){
			usInput = $('#usDollar').val();
		
		let usToEuro = (usInput * usRateFromEuro) * (response.rates.EUR);

		$('#output_amount').append("<p> Today, $" + usInput + " is about \u20ac" + usToEuro.toFixed(2));
	});

	//finish the rest of the currencies!!

	$('#britPound').on('click', function(){
			usInput = $('#usDollar').val();
		
		let usToGBP = (usInput * usRateFromEuro) * (response.rates.GBP);

		$('#output_amount').append("<p> Today, $" + usInput + " is about \u00a3" + usToGBP.toFixed(2));
	});

	$('#chinaYuan').on('click', function(){
			usInput = $('#usDollar').val();
		
		let usToCNY = (usInput * usRateFromEuro) * (response.rates.CNY);

		$('#output_amount').append("<p> Today, $" + usInput + " is about " + usToCNY.toFixed(2) + " RMB.");
	});

	$('#japanYen').on('click', function(){
			usInput = $('#usDollar').val();
		
		let usToJPY = (usInput * usRateFromEuro) * (response.rates.JPY);

		$('#output_amount').append("<p> Today, $" + usInput + " is about " + usToJPY.toFixed(2) + " Yen.");
	});
});












