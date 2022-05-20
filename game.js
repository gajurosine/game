



 let cards=[]
 let firstCard = getRandomCard();
 let secondCard = getRandomCard();
 let blackjack= false;
 let isLIve=false;
 let message = " "
 let  sum =0;
 console.log(cards);

 let Sumel= document.getElementById("Sum-el")
 let cardel=document.getElementById("card-el")
 let startGameel = document.getElementById("startGame-el")


 let player={

      Name:"Lets",
      Marks:123,

 }

let rosineel = document.getElementById('rosine-el')
rosineel.textContent= player.Name + " play and win more than " + ": $" + player.Marks;

function getRandomCard(){
    let  randomNumber=Math.floor(Math.random() * 13) +1;
if (randomNumber >10){
    return 10
}else if(randomNumber ==11){
    return 6
}else {
    return randomNumber;
}
}
console.log(getRandomCard);


function renderGame(){

  cardel.textContent = "Card:" ;  
for(let i=0 ; i <cards.length; i++){
    cardel.textContent +=cards[i]
}
    if(sum <20) {
        message = " you  will lost your card please😒😒😒😒😒 "
    
    } else if(sum>20){
        message="Do you want to draw a new  card !👌👌👌😂💗👌👌"

     blackjack = true; 
    }else if(sum=>40){

        message=" waouuuuu ,ooh you get a bonus cards ✨❤️💝😘"
    }else{
        message = 'you are out of the game  ✨'
    }

   startGameel.textContent = message; 
   Sumel.textContent ="Sum: " + sum;
}
 


function NewCard(){

    if(isLIve==true && blackjack==false){
        sum+=card;
        console.log(card);
    }
message="drawing a new card from the jack";
    let card =getRandomCard()
     sum += card
    console.log(card);

}

function startGame(){
    isLIve=true;
    let firstCard= getRandomCard()
    let secondCard=getRandomCard()

    cards=[firstCard,secondCard];
    sum =firstCard + secondCard;
    renderGame()
}































