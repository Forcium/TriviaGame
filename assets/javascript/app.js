$(document).ready(function() {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var question = ["What rarity should all steak be served at?", "What is ginger used for when eating sushi?", "Which of these are not authentic mexican food?"];

  var correct = 0;
  var incorrect = 0;

  var q1answer = ["Rare", "Medium Rare", "Medium", "Well Done"];
  var q2answer = ["Spicing it up", "Garnish", "Cleaning taste palate", "Cover up the wasabi taste"];
  var q3answer = ["Taco", "Tamales", "Enchiladas", "Burritos"];


  var count = 4;
  var counter;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  function timeDown() {
      counter = setInterval(decrement, 1000);
      count = 3;
  }

  function stop() {
    clearInterval(counter);
  }

  function decrement() {
    count--;
    $("#timerCount").html(count);

    if (count === 0) {
      stop();

  //     setTimeout(function() {
  //
  //       for (i = 0; i < question.length; i++){
  //         $("#question").html(question[i]);
  //         console.log(question[i]);
  //       }
  //       for (x = 0; x < answerBulk.length; x++){
  //         $("#answer1").html(answerBulk[x][0]);
  //         $("#answer2").html(answerBulk[x][1]);
  //         $("#answer3").html(answerBulk[x][2]);
  //         $("#answer4").html(answerBulk[x][3]);
  //         console.log(answerBulk[x][0]);
  //         console.log(answerBulk[x][1]);
  //         console.log(answerBulk[x][2]);
  //         console.log(answerBulk[x][3]);
  //       }
  //       timeDown();
  //     }, 4000);
    }
  }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~Start - Click~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $('#clickMe').on("click", function() {
      $("#clickMe").remove();
      $('#triviaStart').removeClass('hidden');

      // $("#question").html(question[0]);
      // $("#answer1").html(answerBulk[0][0]);
      // $("#answer2").html(answerBulk[0][1]);
      // $("#answer3").html(answerBulk[0][2]);
      // $("#answer4").html(answerBulk[0][3]);
        timeDown();
    })


});
