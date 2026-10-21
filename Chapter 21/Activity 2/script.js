/* 

we are using loops here to print all alternate number between 5 to 50

*/

let outputText = "The final list of output is; ";

for(let i=5; i<=50; i+=2){
outputText += i + "<br />";
}

document.getElementById("impl").innerHTML = outputText;