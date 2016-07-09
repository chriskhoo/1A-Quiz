$(document).ready(function() {
  console.log('JS linked');

  var deckArray = [{
    question: "What is the name of Tin tin's dog?",
    optionA: 'Snowflake',
    optionB: 'Whitey',
    optionC: 'Snowy',
    optionD: 'Josh',
    answer: 'C'
  }, {
    question: "What is the name of Hagrid's dog in Harry Potter?",
    optionA: 'Fang',
    optionB: 'Crookshanks',
    optionC: 'Hedwig',
    optionD: 'Fawkes',
    answer: 'A'
  }, {
    question: "What is the name of the Doctor's dog (from Dr Who)?" ,
    optionA: 'Ajax',
    optionB: 'K-9',
    optionC: 'Codex',
    optionD: 'Digit',
    answer: 'B'
  }, {
    question: "What is the name of Bill Clinton's dog?",
    optionA: 'Rollo',
    optionB: 'Fido',
    optionC: 'Jet',
    optionD: 'Buddy',
    answer: 'D'
  }, {
    question: "What is the name of Odysseus's faithful hound in Homer's Odyssey?",
    optionA: 'Argos',
    optionB: 'Ace',
    optionC: 'Castor',
    optionD: 'Rex',
    answer: 'A'
  }, {
    question: "What is the name of Lord Byron's dog?",
    optionA: 'Rex',
    optionB: 'Boatswain',
    optionC: 'Thespis',
    optionD: 'Valerian',
    answer: 'B'
  }, {
    question: "What is the name of the bulldog in Tom and Jerry cartoons?",
    optionA: 'Bud',
    optionB: 'Crusher',
    optionC: 'Punch',
    optionD: 'Spike',
    answer: 'D'
  }, {
    question: "What is the name of the First Dog of the United States? (Obama's first)",
    optionA: 'Duxton',
    optionB: 'Sunny',
    optionC: 'Bo',
    optionD: 'Buddy',
    answer: 'C'
  }, {
    question: "President Barack Obama's two dogs are of which breed?",
    optionA: 'American Cocker Spaniel',
    optionB: 'Tibetan Mastiff',
    optionC: 'Golden Retriever',
    optionD: 'Portuguese Water Dog',
    answer: 'D'
  }, {
    question: "What is the name of President Barack Obama's second dog?",
    optionA: 'Sunny',
    optionB: 'Bo',
    optionC: 'Dash',
    optionD: 'Jet',
    answer: 'A'
  }, {
    question: 'What breed of dog is Queen Elizabeth II strongly associated with?',
    optionA: 'British Bulldog',
    optionB: 'Corgis',
    optionC: 'Scottish Terrier',
    optionD: 'West Highland White Terrier',
    answer: 'B'
  }, {
    question: 'What breed is Lassie?',
    optionA: 'Lassie',
    optionB: 'St. Bernard',
    optionC: 'Collie',
    optionD: 'Old English Sheepdog',
    answer: 'C'
  }, {
    question: 'What breed is Snoopy from Peasnuts?',
    optionA: 'Border Collie',
    optionB: 'Dachshund',
    optionC: 'Jack Russell Terrier',
    optionD: 'Beagle',
    answer: 'D'
  }, {
    question: "What is the name of Stanley Ipkiss's the dog from the Mask?",
    optionA: 'Kiss',
    optionB: 'Horlicks',
    optionC: 'Jack',
    optionD: 'Milo',
    answer: 'D'
  }, {
    question: 'What breed are the dogs from the movie Beethoven?',
    optionA: 'St. Bernard',
    optionB: 'German Shepherd',
    optionC: 'Doberman Pinscher',
    optionD: 'Collie',
    answer: 'A'
  }, {
    question: 'What breed of dog is gromit from Wallace and Gromit?',
    optionA: 'Jack Russell Terrier',
    optionB: 'Beagle',
    optionC: 'Golden Retriever',
    optionD: 'Shar Pei',
    answer: 'B'
  }, {
    question: "What is the name of Andy's pet dog from the movie Toy Story",
    optionA: 'Buster',
    optionB: 'Rusty',
    optionC: 'Butch',
    optionD: 'Russell',
    answer: 'A'
  }, {
    question: "What is the breed of Andy's pet dog from Toy Story?",
    optionA: 'Golden Retriever',
    optionB: 'Rottweiler',
    optionC: 'Dachshund',
    optionD: 'Havanese',
    answer: 'C'
  }, {
    question: "What is the name of The Phantom's dog in the movie serial(based off the comic)?",
    optionA: 'Devil',
    optionB: 'Shadow',
    optionC: 'Dagger',
    optionD: 'Hound',
    answer: 'A'
  }, {
    question: 'What is the name of the dog from the comic strip Dilbert?',
    optionA: 'Cuffburgh',
    optionB: 'Dogbert',
    optionC: 'Albert',
    optionD: 'Robert',
    answer: 'B'
  }, {
    question: "What is the name of Gru's dog from the cartoon Despicable Me?",
    optionA: 'Hank',
    optionB: 'Kyle',
    optionC: 'Gus',
    optionD: 'Fluffa',
    answer: 'B'
  }, {
    question: "What is the Mickey Mouse's dog?",
    optionA: 'Snoopy',
    optionB: 'Pooch',
    optionC: 'Pluto',
    optionD: 'Spike',
    answer: 'C'
  }, {
    question: "What is the name of the dog from Garfield?",
    optionA: 'Pluto',
    optionB: 'Odie',
    optionC: 'Rocky',
    optionD: 'Snowy',
    answer: 'A'
  }, {
    question: "What is the name of Scooby-Doo's Nephew?",
    optionA: 'Spike',
    optionB: 'Scruffy-Too',
    optionC: 'Slugger',
    optionD: 'Scrappy-Doo',
    answer: 'D'
  }, {
    question: "What is the name of Snoopy's older brother?",
    optionA: 'Spike',
    optionB: 'Stan',
    optionC: 'Sparky',
    optionD: 'Slugger',
    answer: 'A'
  }, {
    question: "What is the name of the American Bulldog from the movie Homeward Bound?",
    optionA: 'Boxer',
    optionB: 'Shadow',
    optionC: 'Chance',
    optionD: 'Sassy',
    answer: 'C'
  }, {
    question: "What is the name of the Golden Retrieve from the movie Homeward Bound?",
    optionA: 'Rocky',
    optionB: 'Shadow',
    optionC: 'Chance',
    optionD: 'Sassy',
    answer: 'A'
  }, {
    question: "What is the name of the dog protagonist from Disney's All Dogs Go To Heaven?",
    optionA: 'Buddy',
    optionB: 'Hooch',
    optionC: 'Benji',
    optionD: 'Charlie',
    answer: 'D'
  }, {
    question: "What is the screen name of Marty Crane's dog from the sitcom Frasier?",
    optionA: 'Eddie',
    optionB: 'Barney',
    optionC: 'Rob',
    optionD: 'Jack',
    answer: 'A'
  }, {
    question: "What is name of Jon Snow's direwolf from the series Game of Thrones?",
    optionA: 'Ghost',
    optionB: 'Grey Wind',
    optionC: 'Shaggydog',
    optionD: 'Summer',
    answer: 'A'
  }, {
    question: "What is name of Robb Stark's direwolf from the series Game of Thrones?",
    optionA: 'Ghost',
    optionB: 'Grey Wind',
    optionC: 'Shaggydog',
    optionD: 'Summer',
    answer: 'B'
  }, {
    question: "What is name of Rickon Stark's direwolf from the series Game of Thrones?",
    optionA: 'Ghost',
    optionB: 'Grey Wind',
    optionC: 'Shaggydog',
    optionD: 'Nymeria',
    answer: 'C'
  }, {
    question: "What is name of Arya Stark's direwolf from the series Game of Thrones?",
    optionA: 'Summer',
    optionB: 'Lady',
    optionC: 'Shaggydog',
    optionD: 'Nymeria',
    answer: 'D'
  }, {
    question: "What is name of Sansa Stark's direwolf from the series Game of Thrones?",
    optionA: 'Summer',
    optionB: 'Lady',
    optionC: 'Shaggydog',
    optionD: 'Nymeria',
    answer: 'B'
  }, {
    question: "What is name of Bran Stark's direwolf from the series Game of Thrones?",
    optionA: 'Summer',
    optionB: 'Lady',
    optionC: 'Shaggydog',
    optionD: 'Nymeria',
    answer: 'A'
  }];

  var remainingCards = null;
  var playerScore = [0, 0, 0];
  var currentPlayer = 1;
  var player1Name = prompt("Player 1's name");
  var player2Name = prompt("Player 2's name");
  var currentRound = 1;
  var response = null;
  var randomCard = null;
  var totalRounds = 10;
  var playedCards = [];
  var randomCardNum = null;

  function displaySetup() {
    if(currentPlayer==1){
      $('#currentPlayer').html(player1Name);
    }
    else{
      $('#currentPlayer').html(player2Name);
    }

    $('#player1Name').html(player1Name);
    $('#player2Name').html(player2Name);
    $('#player1Score').html(playerScore[1]);
    $('#player2Score').html(playerScore[2]);
    $('#currentRound').html(currentRound);
    $('#totalRounds').html(totalRounds);
  }

  var pullRandomCard = function(deckArray) {
    remainingCards = deckArray.length;
    console.log(remainingCards);
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
