function add(a,b)
{
console.log(a+b);
}
function sub(a,b)
{
console.log(a-b);
}
function mul(a,b)
{
console.log(a*b);
}
function div(a,b)
{
console.log(a/b);
}
let a=1;
let b=2;
add(a,b);
sub(a,b);
mul(a,b);
div(a,b);

let num1;
let operation='+';
let num2;
function operator(num1,num2){
if(operation==='+'){
    console.log(add(num1,num2));
}
else if(operation==='-'){
    console.log(sub(num1,num2));
}
else if(operation==='*'){
    console.log(mul(num1,num2));
}
else if(operation==='/'){
    console.log(div(num1,num2));
}
}
operator(num1,num2);
