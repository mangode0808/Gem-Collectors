$(document).ready(function() {

var counter = 0;
var wins = 0;
var losses = 0;
	
	var randomNumber = Math.floor(Math.random() * 101) + 19;

	console.log(randomNumber);

	$('#value').html(randomNumber);

function reset () {

	randomNumber = Math.floor(Math.random() * 101) + 19;
	$('#value').html(randomNumber);
	img1Num = Math.floor(Math.random() * 12) + 1;
	img2Num = Math.floor(Math.random() * 12) + 1;
	img3Num = Math.floor(Math.random() * 12) + 1;
	img4Num = Math.floor(Math.random() * 12) + 1;
	counter = 0;
}
	var img1Num = Math.floor(Math.random() * 12) + 1;

	console.log(img1Num);

		$('#img1').on('click', function() {

			counter = counter + parseInt(img1Num);
			console.log("Counter:" + counter);

			$('#counter').html(counter);

			if (counter === randomNumber){
				$('#status').html('You won!');
				wins ++;
				$('#win').html(wins);
				console.log(wins)
				reset();

			} else if ( counter > randomNumber){
				$('#status').html('You lost!')
				losses ++;
				$('#loss').html(losses);
				console.log(losses)
				reset();

			}
		});

			var img2Num = Math.floor(Math.random() * 12) + 1;

			console.log(img2Num);

			$('#img2').on('click', function() {


				counter = counter + parseInt(img2Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});
			
			var img3Num = Math.floor(Math.random() * 12) + 1;

			console.log(img3Num);

			$('#img3').on('click', function() {


				counter = counter + parseInt(img3Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});

			var img4Num = Math.floor(Math.random() * 12) + 1;

			console.log(img4Num);

			$('#img4').on('click', function() {


				counter = counter + parseInt(img4Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});
			
});