console.log('Yo');

//create express framework
const express = require('express')
const app = express()

//accessable through localhost:3000
app.listen(3000, function() {
  console.log('listening on 3000')
})

//on open load HTML
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


//on button press, play game
app.get('/action_page.php', function(req, res) {
  var myVar = 7;
  var userVar = 0;

  function myFunction() {
    userVar = document.getElementById("input1").value;
    if (userVar == myVar) {
      playGame(userVar, done);
    }
    else {
      playGame(userVar);
    }
  }

  function playGame(guess, callback) {
    if (myVar < userVar) {
      document.getElementById("answer").innerHTML = "Lower...";
    }

    else if (myVar > userVar) {
      document.getElementById("answer").innerHTML = "Higher...";
    }

    callback();
  }

  function done() {
    document.getElementById("answer").innerHTML = "You guessed the number!";
  }
})
