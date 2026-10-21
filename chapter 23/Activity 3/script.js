function add(num1, num2){
return num1+num2;
}

function avg(num1, num2){

return add (num1, num2)/2;

}

let ans = avg(10, 40);
document.getElementById("out").innerHTML  = ans;