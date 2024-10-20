console.log("welocome to tictactoe");

// let music = new Audio("music.mp3");
let audioTurn = new Audio("ting2.mp3");
let gameover = new Audio("gameover.wav");

let turn = "X";


//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// /function to check win
const checkWin = () =>{

}

//main logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = document.querySelector('.boxtext');
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innertext = turn;
            changeTurn();    
            audioTurn.play();
            checkWin();   
            document.getElementsByClassName("turn")[0].innerText = "turn for"+turn;
        }
    })
})

