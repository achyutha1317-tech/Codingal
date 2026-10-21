//the project actually ignores negative number calcualtion

//small functions that help us to do some basic but important task begins



//assuming number is properly taken as input 
//Also the input is assuming to be in string

function getHistory(){
return document.getElementById("history").innerText
}
function printHistory(num){
document.getElementById("history").innerText = num
}


function getOutput(){
return document.getElementById("result").innerText = num; 
}

function print0utput(num){
if(num==""){
document.getElementById("result").innerText = num;
}
else{
document.getElementById("result").innerText = getFormaattedNumber(num);
//getFormatted function will give a returned number which will have coma for formatting so that it resumbles a calculator
}
}


//formatting is done here
function getFormaattedNumber(num){
 if(num== "-"){
 alert("Negative calculation is not available now!!!!");
 return "";
}

 let n = Number(num); //Number helps to convert each digit back into an integer digit 
 let value = n.toLocaleString('en');//actual formatting finally happeded here
 return value;
}

function reverseNumber(num){
 return Number(num.replace(/,/g,'')); //regex just makes the number without commas
}

//small functions that help us to do some basic but important task ends

//Actual logic implements here - 

let op = document.getElementsByClassName("op")


//this keywords job is to just take care of the current iteration 
for(let i=0; i<op.length; i++){
op[i].addEventListener("click", function (){
 if(this.id == "all_clear"){
    //takes care of things which needs to be done when you click on all clear
    printHistory("");
    printOutput("")


 }
 else if(this .id == "clear"){
      //takes care of things which needs to be done when you click on all clear or we can say will act as backspace
      let out = reverseNumber(getOutput()).toString();//recived value which is a string 
      if(out){
        out = out.slice(0, -1);
        printOutput(out); 
      }


 }
 else{
    //normal other operators will function here
    let out = getOutput();
    let his = getHistory();
    if (out == "") && (his() != ""){
        if(isNaN(his[his.length()-1])){
            his=his.slice()(0,-1)
        }
    }

 }
})
}