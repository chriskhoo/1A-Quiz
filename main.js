$(document).ready(function() {
  console.log('JS linked');

  var deckArray = [{
    question: 'q1',
    optionA: 'q1oA',
    optionB: 'q1oB',
    optionC: 'q1oC',
    optionD: 'q1oD',
    answer: 'B'
  }, {
    question: 'q2',
    optionA: 'q2oA',
    optionB: 'q2oB',
    optionC: 'q2oC',
    optionD: 'q2oD',
    answer: 'B'
  }, {
    question: 'q3',
    optionA: 'q3oA',
    optionB: 'q3oB',
    optionC: 'q3oC',
    optionD: 'q3oD',
    answer: 'B'
  }, {
    question: 'q4',
    optionA: 'q4oA',
    optionB: 'q4oB',
    optionC: 'q4oC',
    optionD: 'q4oD',
    answer: 'B'
  }, {
    question: 'q5',
    optionA: 'q5oA',
    optionB: 'q5oB',
    optionC: 'q5oC',
    optionD: 'q5oD',
    answer: 'B'
  }, {
    question: 'q6',
    optionA: 'q6oA',
    optionB: 'q6oB',
    optionC: 'q6oC',
    optionD: 'q6oD',
    answer: 'B'
  }, {
    question: 'q7',
    optionA: 'q7oA',
    optionB: 'q7oB',
    optionC: 'q7oC',
    optionD: 'q7oD',
    answer: 'B'
  }, {
    question: 'q8',
    optionA: 'q8oA',
    optionB: 'q8oB',
    optionC: 'q8oC',
    optionD: 'q8oD',
    answer: 'B'
  }, {
    question: 'q9',
    optionA: 'q9oA',
    optionB: 'q9oB',
    optionC: 'q9oC',
    optionD: 'q9oD',
    answer: 'B'
  }, {
    question: 'q10',
    optionA: 'q10oA',
    optionB: 'q10oB',
    optionC: 'q10oC',
    optionD: 'q10oD',
    answer: 'B'
  }, {
    question: 'q11',
    optionA: 'q11oA',
    optionB: 'q11oB',
    optionC: 'q11oC',
    optionD: 'q11oD',
    answer: 'B'
  }, {
    question: 'q12',
    optionA: 'q12oA',
    optionB: 'q12oB',
    optionC: 'q12oC',
    optionD: 'q12oD',
    answer: 'B'
  }, {
    question: 'q13',
    optionA: 'q13oA',
    optionB: 'q13oB',
    optionC: 'q13oC',
    optionD: 'q13oD',
    answer: 'B'
  }, {
    question: 'q14',
    optionA: 'q14oA',
    optionB: 'q14oB',
    optionC: 'q14oC',
    optionD: 'q14oD',
    answer: 'B'
  }, {
    question: 'q15',
    optionA: 'q15oA',
    optionB: 'q15oB',
    optionC: 'q15oC',
    optionD: 'q15oD',
    answer: 'B'
  }, {
    question: 'q16',
    optionA: 'q16oA',
    optionB: 'q16oB',
    optionC: 'q16oC',
    optionD: 'q16oD',
    answer: 'B'
  }, {
    question: 'q17',
    optionA: 'q17oA',
    optionB: 'q17oB',
    optionC: 'q17oC',
    optionD: 'q17oD',
    answer: 'B'
  }, {
    question: 'q18',
    optionA: 'q18oA',
    optionB: 'q18oB',
    optionC: 'q18oC',
    optionD: 'q18oD',
    answer: 'B'
  }, {
    question: 'q19',
    optionA: 'q19oA',
    optionB: 'q19oB',
    optionC: 'q19oC',
    optionD: 'q19oD',
    answer: 'B'
  }, {
    question: 'q20',
    optionA: 'q20oA',
    optionB: 'q20oB',
    optionC: 'q20oC',
    optionD: 'q20oD',
    answer: 'B'
  }];

  var remainingCards = null;
  var playerScore = [0, 0, 0];
  var currentPlayer = 1;
  var currentRound = 1;
  var response = null;
  var randomCard = null;
  var totalRounds = 10;
  var playedCards = [];
  var randomCardNum = null;

  function displaySetup() {
    $('#currentPlayer').html(currentPlayer);
    $('#player1Score').html(playerScore[1]);
    $('#player2Score').html(playerScore[2]);
    $('#currentRound').html(currentRound);
    $('#totalRounds').html(totalRounds);
  }

  var pullRandomCard = function(deckArray) {
    remainingCards = deckArray.length;
    randomCardNum = Math.floor(remainingCards * Math.random());
    randomCard = deckArray[randomCardNum];
    $('#questionDisplay').html(randomCard.question);
    $('#optionA').html(randomCard.optionA);
    $('#optionB').html(randomCard.optionB);
    $('#optionC').html(randomCard.optionC);
    $('#optionD').html(randomCard.optionD);
  };

  function getResponse() {
    $("#optionA, #optionB, #optionC, #optionD").click(answerClick);
    $("#buttonClearScores").click(clearScores);
    $("#buttonResetDeck").click(resetQuestions);
  }

  function checkResponse() {
    if (randomCard.answer == response) {
      console.log("right answer");
      // play right answer tone
      if (currentPlayer == 1) {
        playerScore[1]++;
        currentPlayer = 2;
      } else {
        playerScore[2]++;
        currentPlayer = 1;
      }
      currentRound++;
    } else {
      console.log("wrong answer");
      // play right answer tone
      if (currentPlayer == 1) {
        currentPlayer = 2;
      } else {
        currentPlayer = 1;
      }
      currentRound++;
    }
  }

  function answerClick() {
    response = this.id[6];
    console.log(response);
    checkResponse();
    if (currentRound > totalRounds) {
      displaySetup();
      var winner = whoWon();
      if (whoWon() == 3) {
        alert("It's a draw, try again.");
      } else {
        alert("Game over, player " + winner + " wins!");
      }
    clearScores();
    }

    else {
      deckArray.splice(randomCardNum,1);
      playedCards.push(randomCard);
      console.log("played"+playedCards);
      console.log("original deck"+deckArray);
      displaySetup();
      pullRandomCard(deckArray);
    }
  }

  function whoWon() {
    if (playerScore[1] == playerScore[2]) {
      return 3;
    } else if (playerScore[1] > playerScore[2]) {
      return 1;
    } else {
      return 2;
    }
  }

  function clearScores(){
    // to be defined
    playerScore = [0, 0, 0];
    currentPlayer = 1;
    currentRound = 0;
    response = null;
    randomCard = null;
    displaySetup();
    // pull a random card
    pullRandomCard(deckArray);
  }

  function resetQuestions(){
    playerScore = [0, 0, 0];
    currentPlayer = 1;
    currentRound = 0;
    response = null;
    randomCard = null;
    playedCards.forEach(function(card){
      deckArray.push(card);
    });
    playedCards=[];
    displaySetup();
    // pull a random card
    pullRandomCard(deckArray);
  }

  function gameInit() {
    // display all scores & player
    displaySetup();
    // pull a random card
    pullRandomCard(deckArray);
    // update game display
    getResponse();
  }

  gameInit();

  // required functions
  // function numberOfQuestions(){
  //   return totalRounds;
  // }

  // function currentQuestion(){
  //   return randomCardNum;
  // }

  // function correctAnswer(){
  //   return randomCard.answer;
  // }

  // function numberOfAnswers(){
  //   return randomCard.length;
  // }

  // function playTurn(response){
  //   return randomCard.answer == response;
  // }

  // function isGameOver(){
  //   return currentRound == 10;
  // }
  //




});
