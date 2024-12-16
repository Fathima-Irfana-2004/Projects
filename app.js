let boxes=document.querySelectorAll(".box");
let rst=document.querySelector("#reset");
let turno=true;
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".winnermsg");
let msg=document.querySelector("#msg");
const winpattern=[
    [0,1,2],
    [0,4,5],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;

        }
        box.disabled=true;
        checkWinner();
    })
});
const resetGame=()=>{
    turno=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
       
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
      msg.innerText=`congratulations ${Winner}  wins`;
      msgContainer.classList.remove("hide");
      disableboxes();
      
}
const checkWinner=()=>{
    for(let p of winpattern){
            let positionValue1=boxes[p[0]].innerText;
            let positionValue2=boxes[p[1]].innerText;
            let positionValue3=boxes[p[2]].innerText;

            if(positionValue1 !=""&&positionValue2 !=""&&positionValue3 !=""){
                if(positionValue1===positionValue2 && positionValue2===positionValue3 ){
                    showWinner(positionValue1);
                }
                
            }
    }
};
newgame.addEventListener("click",resetGame);
rst.addEventListener("click",resetGame);



