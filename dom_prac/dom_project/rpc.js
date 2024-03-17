let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user= document.querySelector("#user-score");
const comp= document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","papper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play Again";
    msg.style.backgroundColor="pink";
};

const showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        user.innerText=userScore;
       msg.innerText="You Win!" ;
       msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice=== compChoice){
       drawGame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
           //scissors,papper
           userwin=compChoice==="papper" ? false:true;
        }else if(userChoice==="papper"){
            //rock,scissors
            userwin=compChoice==="scissors"?false:true;
        }else{
            //rock paper
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        playGame(userChoice);
    });
});
