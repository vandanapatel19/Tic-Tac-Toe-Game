let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turn0 == true){
           box.innerText="0";
           box.style.color= "Black";
           turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color= "#EAEFEF";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const win_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [3,6,8],
];

const resetgame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS,  WINNER IS  ${winner}  `;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for( let pattern of win_pattern){
        
           let pos1 = boxes[pattern[0]].innerText;
           let pos2 = boxes[pattern[1]].innerText;
           let pos3 = boxes[pattern[2]].innerText;
        
           if(pos1 != ""  &&  pos2 != ""  &&  pos3 != "" ){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
           }
           
    }

};
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);