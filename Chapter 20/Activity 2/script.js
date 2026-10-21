let x = 5;

function test(){
let y = 9;
document.getElementById("demo").innerHTML = y*x; // actually x is not in the scope of the function
}

document.getElementById("demo").innerHTML = x;
document.getElementById("last2").innerHTML = y; //y is outside of the scope