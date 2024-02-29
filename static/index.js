


// Create a random number 


 var playerOneNum = Math.floor(Math.random()*6) + 1

 var playerTwoNum = Math.floor(Math.random()*6) + 1

 console.log(playerOneNum, playerTwoNum)


 var playerOneNum = Math.floor(Math.random()*6) + 1

var imgArray = document.querySelectorAll("img");
imgArray[0].setAttribute("src", "docs/images/dice"+(playerOneNum)+".png")
imgArray[1].setAttribute("src", "docs/images/dice"+(playerTwoNum)+".png")

if (playerOneNum > playerTwoNum) {
    document.querySelector('h1').textContent = "Player 1 wins"
}   
else if (playerOneNum < playerTwoNum){
    document.querySelector('h1').textContent = "Player 2 wins"
} else {
    document.querySelector('h1').textContent = "It is a draw!"
}