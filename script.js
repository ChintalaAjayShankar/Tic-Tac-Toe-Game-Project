const resetButton = document.getElementById("reset");
let music = new Audio('sound3.mp3');
let audioTurn = new Audio("sound4.mp3");
let gameover = new Audio("sound2.mp3");

let turn = "X";
let isgameOver = false;



// function to change turn:

const changeturn = () => {
    return turn === "X" ? "0" : "X";
}



// function to checkwin():

const checkwin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
    ];
    wins.forEach(e => {
        if ((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== "")) {
            document.querySelector(".info").innerHTML = boxText[e[0]].innerHTML + "  Won";

            e.forEach(index => {
                document.getElementsByClassName("box")[index].style.backgroundColor = "lightgreen";
            })
            isgameOver = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "150px";
            
        }

    });
    
    

};



// gameLogic():
// music.play();
let boxes = document.getElementsByClassName("box");
        Array.from(boxes).forEach(element => {
            let boxText = element.querySelector(".boxText");
            element.addEventListener("click", () => {
                if (boxText.innerHTML === "") {
                    boxText.innerHTML = turn;
                    turn = changeturn();
                    audioTurn.play();
                    checkwin();
                    if (!isgameOver) {
                        document.querySelector('.info').innerHTML = "Turn For:" + turn;
                    }
                }
            })
        });


// resetButton:
document.getElementById("reset").addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(e => {
        e.innerHTML = "";
    });

    let boxes = document.querySelectorAll(".box");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="";
    };
    turn = "X";
    isgameOver = false;
    document.querySelector('.info').innerHTML = "Turn For: " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
    
});