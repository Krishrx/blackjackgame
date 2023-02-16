let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let dismsg = document.getElementById("w")
let dissum = document.getElementById("sum")
let discard = document.getElementById("card")
function startGame(){
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}
function renderGame(){
    dissum.textContent = sum
    discard.textContent = "Cards :"
    for(let i=0;i<cards.length;i+=1){
        discard.textContent+=cards[i]+" "
    }
    if(sum<21){
        message = "Do you want to draw another Card?"
        
    }
    else if(sum===21){
        message = "Wow!! You got a blackjack"
        hasBlackjack = true
    }
    else{
        message = "You lost the game!!"
        isAlive = false
    }
    dismsg.textContent = message
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let thirdCard = getRandomNumber()
        cards.push(thirdCard)
        sum += cards[2]
        renderGame()
    }
}
function getRandomNumber(){
    let r =  Math.floor(Math.random()*13)+1
    if(r==1){
        return 11
    }
    else if(r>=11 && r<=13){
        return 10
    }
    return r
}
