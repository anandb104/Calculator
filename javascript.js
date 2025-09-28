function add(a,b)
{
return +a+(+b);
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}
function operator(num1,num2,operation){
if(operation==='+'){
    div1.textContent=" ";
    div1.textContent+=add(num1,num2);
}
else if(operation==='-'){
    div1.textContent=" ";
    div1.textContent+=sub(num1,num2);    
}
else if(operation==='*'){
    div1.textContent=" ";
    div1.textContent+=mul(num1,num2);
   
}
else if(operation==='/'){
    div1.textContent=" ";
    div1.textContent+=div(num1,num2);
    
}
}
const btn1=document.querySelector(".button-1");
const btn2=document.querySelector(".button-2");
const btn3=document.querySelector(".button-3");
const btn4=document.querySelector(".button-4");
const btn5=document.querySelector(".button-5");
const btn6=document.querySelector(".button-6");
const btn7=document.querySelector(".button-7");
const btn8=document.querySelector(".button-8");
const btn9=document.querySelector(".button-9");
const btn10=document.querySelector(".button-0");
const btn11=document.querySelector(".button-dot");
const btn12=document.querySelector(".button-AC");
const btn13=document.querySelector("#button-pl");
const btn14=document.querySelector("#button-min");
const btn15=document.querySelector("#button-div");
const btn16=document.querySelector("#button-mul");
const btn17=document.querySelector("#button-eq");
const div1=document.querySelector(".display");
const div2=document.querySelector(".calc");

let num1=null;
let operation=null;
let num2=null;
function display(){
btn1.addEventListener("click",()=>{
   
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="1";
           }
            else{
                div1.textContent=" ";
                num1=1;
            }
            div1.textContent+=1;
    console.log(num1);
    }
    if(num1!==null && operation!==null){
       if(num2!=null){
        num2+="1";
       }
        else{
            num2=1;
        }
        div1.textContent+=1;
        console.log(num2);
        }
});
btn2.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="2";
           }
            else{
                div1.textContent=" ";
                num1=2;
            }
            div1.textContent+=2;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="2";
               }
                else{
                    
                    num2=2;
                }
                div1.textContent+=2;
            console.log(num2);
            }
});
btn3.addEventListener("click",()=>{ 

    if(num1===null||operation===null){
        if(num1!=null){
            num1+="3";
           }
            else{
                div1.textContent=" ";
                num1=3;
            }
            div1.textContent+=3;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="3";
               }
                else{
                    num2=3;
                }
                div1.textContent+=3;
            console.log(num2);
            }
});
btn4.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="4";
           }
            else{
                div1.textContent=" ";
                num1=4;
            }
            div1.textContent+=4;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="4";
               }
                else{
                    num2=4;
                }
                div1.textContent+=4;
            console.log(num2);
            }
});
btn5.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="5";
           }
            else{
                div1.textContent=" ";
                num1=5;
            }
            div1.textContent+=5;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="5";
               }
                else{
                    num2=5;
                }
                div1.textContent+=5;
            console.log(num2);
            }
});
btn6.addEventListener("click",()=>{ 
   
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="6";
           }
            else{
                div1.textContent=" ";
                num1=6;
            }
            div1.textContent+=6;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="6";
               }
                else{

                    num2=6;
                }
                div1.textContent+=6;
            console.log(num2);
            }
});
btn7.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="7";
           }
            else{
                div1.textContent=" ";
                num1=7;
            }
        div1.textContent+=7;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="7";
               }
                else{
                    num2=7;
                }
                div1.textContent+=7;
            console.log(num2);
            }
});
btn8.addEventListener("click",()=>{ 

    if(num1===null||operation===null){
        if(num1!=null){
            num1+="8";
           }
            else{
                div1.textContent=" ";
                num1=8;
            }
            div1.textContent+=8;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="8";
               }
                else{
                    num2=8;
                }
                div1.textContent+=8;
            console.log(num2);
            }
});
btn9.addEventListener("click",()=>{ 
   
    if(num1===null||operation===null){
        if(num1!=null){
            num1+="9";
           }
            else{
                div1.textContent=" ";
                num1=9;
            }
            div1.textContent+=9;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="9";
               }
                else{
                    num2=9;
                }
                div1.textContent+=9;
            console.log(num2);
            }
});
btn10.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            div1.textContent=" ";
            num1+="0";
           }
            else{
                num1=0;
            }
            div1.textContent+=0;
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+="0";
               }
                else{
                    num2=0;
                }
                div1.textContent+=0;
            console.log(num2);
            }
});
btn11.addEventListener("click",()=>{ 
    
    if(num1===null||operation===null){
        if(num1!=null){
            num1+=".";
           }
            else{
                div1.textContent=" ";
                num1=".";
            }
            div1.textContent+=".";
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null){
                num2+=".";
               }
                else{
                    num2=".";
                }
                div1.textContent+=".";
            console.log(num2);
            }
});
btn12.addEventListener("click",()=>{ 
    div1.textContent=" ";
});
btn13.addEventListener("click",()=>{ 
    div1.textContent+="+"
    if(operation===null){
       operation="+";
        console.log(`operation=${operation}`);
    }
    else{
        if(num2!==null){
            num1=add(num1,num2);
            operation="+";
            num2=null;
        }
    }
});
btn14.addEventListener("click",()=>{ 
    div1.textContent+="-"
    if(operation===null){
                operation="-";
        console.log(`operation=${operation}`);
    }
    else{
        if(num2!==null){
            num1=sub(num1,num2);
            operation="-";
            num2=null;
        }
    }
});
btn15.addEventListener("click",()=>{ 
    div1.textContent+="/"
    if(operation===null){
                operation="/";
        console.log(`operation=${operation}`);
    }
    else{
        if(num2!==null){
            num1=div(num1,num2);
            operation="/";
            num2=null;
        }
    }
});
btn16.addEventListener("click",()=>{ 
    div1.textContent+="*"
    if(operation===null){
                operation="*";
        console.log(`operation=${operation}`);
    }
    else{
        if(num2!==null){
            num1=mul(num1,num2);
            operation="*";
            num2=null;
        }
    }
});
btn17.addEventListener("click",()=>{ 
    operator(num1,num2,operation);
    num1=null;
    num2=null;
    operation=null;
});
}
div2.addEventListener("click",display());