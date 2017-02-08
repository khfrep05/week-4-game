
$(document).ready(function() {

//Computer selects a random number between 19-120.
	var ComputeRanNum = Math.floor(Math.random() * (120-19+1)+19)

//Appending the random number to the computer random number box in html.
	$('#RandomNumber').text(ComputeRanNum);
	
//Setting up random numbers between 1 and 12 for each jewel.
	var num1= Math.floor(Math.random()*11+1)
  	var num2= Math.floor(Math.random()*11+1)
  	var num3= Math.floor(Math.random()*11+1)
  	var num4= Math.floor(Math.random()*11+1) 

 //Variables for totals
 	var userscore= 0;
 	var Wins= 0;
 	var Losses= 0;

//Attaching wins/losses to html Wins/Losses.
 	$(".wins").text(Wins);
	$(".losses").text(Losses);

 //Game Reset
 function gameReset() {
 	ComputeRanNum = Math.floor(Math.random() * (120-19+1)+19)
 	console.log(ComputeRanNum)

 	num1= Math.floor(Math.random()*11+1);
  	num2= Math.floor(Math.random()*11+1);
  	num3= Math.floor(Math.random()*11+1);
  	num4= Math.floor(Math.random()*11+1);

  	userscore= 0;
  	$('#RandomNumber').text(ComputeRanNum);
  	$(".myScorebox").text(userscore);
		reset()
 }

 	$("#Jewel1").on ('click', function(){
    userscore = userscore + num1;
    $(".myScorebox").text(userscore); 
          //sets win/lose conditions
        if (userscore == ComputeRanNum){
          Wins++;
          $(".wins").text(Wins);
          gameReset();
        }
        else if ( userscore > ComputeRanNum){
          Losses++;
          $(".losses").text(Losses);
          gameReset();
        }   
   })

 	$("#Jewel2").on ('click', function(){
    userscore = userscore + num2;
    $(".myScorebox").text(userscore); 
          //sets win/lose conditions
        if (userscore == ComputeRanNum){
          Wins++;
          $(".wins").text(Wins);
          gameReset();
        }
        else if ( userscore > ComputeRanNum){
          Losses++;
          $(".losses").text(Losses);
          gameReset();
        }
    })

    $("#Jewel3").on ('click', function(){
    userscore = userscore + num3;
    $(".myScorebox").text(userscore); 
          //sets win/lose conditions
        if (userscore == ComputeRanNum){
          Wins++;
          $(".wins").text(Wins);
          gameReset()
        }
        else if ( userscore > ComputeRanNum){
          Losses++;
          $(".losses").text(Losses);
          gameReset();
        }
    })

    $("#Jewel4").on ('click', function(){
    userscore = userscore + num4;
    $(".myScorebox").text(userscore); 
          //sets win/lose conditions
        if (userscore == ComputeRanNum){
          Wins++;
          $(".wins").text(Wins);
          gameReset();
        }
        else if ( userscore > ComputeRanNum){
          Losses++;
          $(".losses").text(Losses);
          gameReset();
        }
    });
});
