$(document).ready(function(){

	showLoadingDots();
	var showDots;

	var delay = 1;
	timer(delay);

	function showLoadingDots() {
		showDots = setInterval(function(){
			if ($(".loadingDots").length  >0) {
				var dots = '...';
				var i = 1;
				if ($(".loadingDots").html().length == 0 || ($(".loadingDots").html().length == dots.length)){
					$(".loadingDots").html('');
					var i = 1;
				} else {
					i++;
				}
				$(".loadingDots").html($(".loadingDots").html()+".");
			} else {
	           clearInterval(showDots);
	       }
	   },400);
	}


	function timer(delay = 61){
		var counter = delay;
		var interval = setInterval(function() {
			counter--;
			$("#counter").html(counter);

			if (counter === 0) {
				clearInterval(interval);

				$.ajax({
					type: "GET",
					url: "/refresh",
					success: function(data){
						$(".loadingDots").html('');
						clearInterval(showDots);
						$("#gdax_trade").html(data.gdax.last);
						$("#zebpay_buy").html(data.zebpay.buy);
						$("#zebpay_sell").html(data.zebpay.sell);
						// var buy = parseFloat(data.unocoin.buy);
						// var effective_buy = buy + (buy*0.01) + (buy*0.01*0.18);

						// var sell = parseFloat(data.unocoin.sell);
						// var effective_sell = sell - (sell*0.01) - (sell*0.01*0.18);

						// $("#unocoin_buy").html(effective_buy);
						// $("#unocoin_sell").html(effective_sell);
	                    timer();
                	},
				});
			}

		}, 1000);
	}

});