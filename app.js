function button {
    document.getElementById("startBtn").innerHTML = "Game Started";
    setTimeout(function() {
        var dice= Math.floor(Math.random() * 6) + 1;
        document.getElementById("startBtn").innerHTML = " <img  src= 'images/" + dice + ".png' alt='Dice' width='100' height='100'> ";
    }, 1000);















}