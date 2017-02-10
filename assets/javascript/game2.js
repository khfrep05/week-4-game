var game = {
	Wins: 0,
	Losses: 0,
	userscore: 0,


	
	startgame: function() {
	this.ComputeRanNum = Math.floor(Math.random() * (120-19+1)+19);
	$('#RandomNumber').text(this.ComputeRanNum);
	this.num1 = Math.floor(Math.random()*11+1);
	this.num2 = Math.floor(Math.random()*11+1);
	this.num3 = Math.floor(Math.random()*11+1);
	this.num4 = Math.floor(Math.random()*11+1);
	$(".wins").text(this.Wins);
	$(".losses").text(this.Losses);

	},

	gamereset: function() {
	this.ComputeRanNum = Math.floor(Math.random() * (120-19+1)+19);
	this.num1 = Math.floor(Math.random()*11+1);
	this.num2 = Math.floor(Math.random()*11+1);
	this.num3 = Math.floor(Math.random()*11+1);
	this.num4 = Math.floor(Math.random()*11+1);
	this.userscore = 0;
	$("#RandomNumber").text(this.ComputeRanNum);
	$(".myScorebox").text(this.userscore);
		reset();
	},
};

$("#Jewel1").on ('click', function(){
	console.log(game.num1);
    game.userscore = game.userscore + game.num1;
    console.log(game.userscore);
    $(".myScorebox").text(game.userscore); 
          //sets win/lose conditions
        if (game.userscore == game.ComputeRanNum){
          game.Wins++;
          $(".wins").text(game.Wins);
          game.gamereset();
        }
        else if (game.userscore > game.ComputeRanNum){
          game.Losses++;
          $(".losses").text(game.Losses);
          game.gamereset();
        }
       }); 

$("#Jewel2").on ('click', function(){
    game.userscore = game.userscore + game.num2;
    $(".myScorebox").text(game.userscore); 
          //sets win/lose conditions
        if (game.userscore == game.ComputeRanNum){
          game.Wins++;
          $(".wins").text(game.Wins);
          game.gamereset();
        }
        else if (game.userscore > game.ComputeRanNum){
          game.Losses++;
          $(".losses").text(game.Losses);
          game.gamereset();
        }     
      });  

$("#Jewel3").on ('click', function(){
    game.userscore = game.userscore + game.num3;
    $(".myScorebox").text(game.userscore); 
          //sets win/lose conditions
        if (game.userscore == game.ComputeRanNum){
          game.Wins++;
          $(".wins").text(game.Wins);
          game.gamereset()
        }
        else if (game.userscore > game.ComputeRanNum){
          game.Losses++;
          $(".losses").text(game.Losses);
          game.gamereset();
        }
    });

$("#Jewel4").on ('click', function(){
    game.userscore = game.userscore + game.num4;
    $(".myScorebox").text(game.userscore); 
          //sets win/lose conditions
        if (game.userscore == game.ComputeRanNum){
          game.Wins++;
          $(".wins").text(game.Wins);
          game.gamereset();
        }
        else if (game.userscore > game.ComputeRanNum){
          game.Losses++;
          $(".losses").text(game.Losses);
          game.gamereset();
        }
    });
 		game.startgame();
