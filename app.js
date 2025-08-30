
   function button () {
            document.getElementById("startBtn").innerHTML = "Roll Dice ";

            setTimeout(function() {
                var dice = Math.floor(Math.random() * 6) + 1;

                document.getElementById("result").innerHTML = "<img src= 'images/"+ dice + ".png ' />" ;

                var diceImg = document.getElementById("diceImage");

                if (dice === 1) {
                    diceImg.src = "images/dice1.png";
                } else if (dice === 2) {
                    diceImg.src = "images/dice2.png";
                } else if (dice === 3) {
                    diceImg.src = "images/dice3.png";
                } else if (dice === 4) {
                    diceImg.src = "images/dice4.png";
                } else if (dice === 5) {
                    diceImg.src = "images/dice5.png";
                } else if (dice === 6) {
                    diceImg.src = "images/dice6.png";
                }

            }, 1000);
        }