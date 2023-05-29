var screen= document.getElementById("screen");

function btnClick(value){
    screen.value +=value;
}

function clrScreen(){
    screen.value ="";
}

function findResult(){
    var result= eval(screen.value)
    screen.value=result;
}