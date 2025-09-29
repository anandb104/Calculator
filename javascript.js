function add(a,b)
{
return y=+a+(+b);

}
function sub(a,b)
{
  return y=a-b;
    
}
function mul(a,b)
{
    return y=a*b;
  
}
function div(a,b)
{
     return y=a/b;

}
function dotadd(a,b)
{  
let y=((+a)*(10) + (+b)*(10)) / 10;
return y.toPrecision(4);
}
function dotsub(a,b)
{
let y= (a*10 - b*10) / 10;
return y.toPrecision(4);
}
function dotmul(a,b)
{
let y= (a*10 * b*10)/ 10;
return y.toPrecision(4);
}
function dotdiv(a,b)
{
let y= (a*10 / b*10) / 10;
return y.toPrecision(4);
}
function operator(num1,num2,operation){
if(operation==='+'){
    div1.textContent=" ";
    if(num3===1 && num4===1){
        console.log(num3);
        console.log(num4);
        div1.textContent+=dotadd(num1,num2);
        return dotadd(num1,num2);
    }
    else{
        console.log(num3);
        console.log(num4);
    div1.textContent+=add(num1,num2);
    return add(num1,num2);
    }
    
}
else if(operation==='-'){
    div1.textContent=" ";
    if(num3==1 && num4==1){
        div1.textContent+=dotsub(num1,num2);
        return dotsub(num1,num2);
    }
    div1.textContent+=sub(num1,num2);   
    return sub(num1,num2);
}
else if(operation==='*'){
    div1.textContent=" ";
    if(num3==1 && num4==1){
        div1.textContent+=dotmul(num1,num2);
        return dotmul(num1,num2);
    }
    div1.textContent+=mul(num1,num2);
    return mul(num1,num2);
}
else if(operation==='/'){
    div1.textContent=" ";
    if(num3==1 && num4==1){
        div1.textContent+=dotdiv(num1,num2);
        return dotdiv(num1,num2);
    }
    div1.textContent+=div(num1,num2);
    return div(num1,num2);
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
const btn18=document.querySelector(".button-backspace");
const div1=document.querySelector(".display");
const div2=document.querySelector(".calc");

let num1=null;
let operation=null;
let num2=null;
let num7;
let num3=0;
let num4=0;
function display(){
btn1.addEventListener("click",()=>{
   
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=1;
            }
           else{
            num1+="1";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=2;
            }
           else{
            num1+="2";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=3;
            }
           else{
            num1+="3";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=4;
            }
           else{
            num1+="4";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=5;
            }
           else{
            num1+="5";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=6;
            }
           else{
            num1+="6";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=7;
            }
           else{
            num1+="7";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=8;
            }
           else{
            num1+="8";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=9;
            }
           else{
            num1+="9";
           }
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
            if(num1==num7){
                div1.textContent=" ";
                num1=0;
            }
           else{
            num1+="0";
           }
           }
            else{
                div1.textContent=" ";
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
           if(num1!=null && num3==0 && num1==num7 ){
            div1.textContent=" ";
            div1.textContent="0.";
            num1="0.";
            num3+=1;
           }
           else if(num1!=null && num3==0){
            num1+=".";
            div1.textContent+=".";
            num3+=1;
           }
           else if(num3>=1){
            div1.textContent+="";
           }
        
           else  if(num1===null){
                div1.textContent=" ";
                div1.textContent="0.";
                num1="0.";
                num3+=1;
            }
    console.log(num1);
        }

        if(num1!==null && operation!==null){
            if(num2!=null && num4==0 ){
                num2+=".";
                div1.textContent+=".";
               num4+=1;
               console.log(typeof num2);
               }
               else if(num4>=1){
                div1.textContent+="";
                
               }
               else if(num2===null){
                    div1.textContent+="0.";
                    num2="0.";
                    num4+=1;
                }
            console.log(num2);
            }
});
btn12.addEventListener("click",()=>{ 
    div1.textContent=" ";
    num1=null;
    num2=null;
    num7=null;
    operation=null;
    num3=0;
    num4=0;
});
btn13.addEventListener("click",()=>{ 
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="+";
       operation="+";
        console.log(`operation=${operation}`);
        }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="+";
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="+";
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="+";
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="+";
                            num1=div(num1,num2);
                            }
            operation="+";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
            }
        }
});
btn14.addEventListener("click",()=>{ 
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="-"
                operation="-";
        console.log(`operation=${operation}`);
    }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="-"
            num1=add(num1,num2);
            }
            else if(operation==="-"){
                div1.textContent+="-"
                num1=sub(num1,num2);
                }
                else if(operation==="*"){
                    div1.textContent+="-"
                    num1=mul(num1,num2);
                    }
                    else if(operation==="/"){
                        div1.textContent+="-"
                        num1=div(num1,num2);
                        }
            console.log(num1);
            operation="-";
            console.log(`operation=${operation}`);
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
});
btn15.addEventListener("click",()=>{ 
    
    if(operation===null){ 
        if(div1.textContent==="Syntax Error"){
        div1.textContent=" ";
    }
    else{
        div1.textContent+="/"
                operation="/";
        console.log(`operation=${operation}`);
    }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="/"
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="/"
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="/"
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="/"
                            num1=div(num1,num2);
                            }
            operation="/";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
});
btn16.addEventListener("click",()=>{ 
   
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="*"
                operation="*";
        console.log(`operation=${operation}`);
        }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="*"
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="*"
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="*"
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="*"
                            num1=div(num1,num2);
                            }
            operation="*";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
});
btn17.addEventListener("click",()=>{ 
    if(num2===0 && operation==='/'){
        div1.textContent="Err(Div by 0)";
        num1=null;
        num2=null;
        operation=null;
    }
    else{
   num1=operator(num1,num2,operation);
   num7=num1;
    num2=null;
    operation=null;
    num3=0;
    num4=0;
    }
});
btn18.addEventListener("click",()=>{ 
    if(num1!=null && operation===null ){
        let length=num1.length;
        let part=num1.slice(0,length-1);
        div1.textContent=part;
        num1=part;
        console.log("num1 back");
    }
    else if(operation!==null && num2===null){
        div1.textContent=num1;
        operation=null;
        num2=null;
        console.log("oper back");
    }
    else if(num1!==null && operation!==null){
      if(num2.length===1){
        num2=null;
        div1.textContent=num1+operation;
      }
      else{
        num2.length=length;
        num2=num2.slice(0,length-1);
        div1.textContent=num1+operation+num2;
      }
        console.log("num2 back");
    }
});
}
div2.addEventListener("click",display());

document.addEventListener("keydown",(event)=>{
if(event.key==='0'){
    console.log(event.key)
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=0;
            }
           else{
            num1+="0";
           }
           }
            else{
                div1.textContent=" ";
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
}
if(event.key==='1'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=1;
            }
           else{
            num1+="1";
           }
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
}
if(event.key==='2'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=2;
            }
           else{
            num1+="2";
           }
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
}
if(event.key==='3'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=3;
            }
           else{
            num1+="3";
           }
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
}
if(event.key==='4'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=4;
            }
           else{
            num1+="4";
           }
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
}
if(event.key==='5'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=5;
            }
           else{
            num1+="5";
           }
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
}
if(event.key==='6'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=6;
            }
           else{
            num1+="6";
           }
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
}
if(event.key==='7'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=7;
            }
           else{
            num1+="7";
           }
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
}
if(event.key==='8'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=8;
            }
           else{
            num1+="8";
           }
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
}
if(event.key==='9'){
    if(num1===null||operation===null){
        if(num1!=null){
            if(num1==num7){
                div1.textContent=" ";
                num1=9;
            }
           else{
            num1+="9";
           }
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
}
if(event.key==='+'){
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="+";
       operation="+";
        console.log(`operation=${operation}`);
        }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="+";
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="+";
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="+";
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="+";
                            num1=div(num1,num2);
                            }
            operation="+";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
            }
        }
}
if(event.key==='='){
    if(num2===0 && operation==='/'){
        div1.textContent="Err(Div by 0)";
        num1=null;
        num2=null;
        operation=null;
    }
    else{
        if(operation!==null || num2!==null){
   num1=operator(num1,num2,operation);
    }
        else{
       num1=div1.textContent;
        }
   console.log(num1);
   num7=num1;
    num2=null;
    operation=null;
    num3=0;
    num4=0;
    }
}
if(event.key==='-'){
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="-"
                operation="-";
        console.log(`operation=${operation}`);
    }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="-"
            num1=add(num1,num2);
            }
            else if(operation==="-"){
                div1.textContent+="-"
                num1=sub(num1,num2);
                }
                else if(operation==="*"){
                    div1.textContent+="-"
                    num1=mul(num1,num2);
                    }
                    else if(operation==="/"){
                        div1.textContent+="-"
                        num1=div(num1,num2);
                        }
            console.log(num1);
            operation="-";
            console.log(`operation=${operation}`);
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
}
if(event.key==='*'){
    if(operation===null){
        if(div1.textContent==="Syntax Error"){
            div1.textContent=" ";
        }
        else{
            div1.textContent+="*"
                operation="*";
        console.log(`operation=${operation}`);
        }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="*"
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="*"
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="*"
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="*"
                            num1=div(num1,num2);
                            }
            operation="*";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
}
if(event.key==='/'){
    if(operation===null){ 
        if(div1.textContent==="Syntax Error"){
        div1.textContent=" ";
    }
    else{
        div1.textContent+="/"
                operation="/";
        console.log(`operation=${operation}`);
    }
    }
    else{
        if(num2!==null){
            if(operation==="+"){
                div1.textContent+="/"
                num1=add(num1,num2);
                }
                else if(operation==="-"){
                    div1.textContent+="/"
                    num1=sub(num1,num2);
                    }
                    else if(operation==="*"){
                        div1.textContent+="/"
                        num1=mul(num1,num2);
                        }
                        else if(operation==="/"){
                            div1.textContent+="/"
                            num1=div(num1,num2);
                            }
            operation="/";
            num2=null;
        }
        else{
            div1.textContent="Syntax Error";
            operation=null;
            num1=null;
            num2=null;
            num7=null;
            num3=0;
            num4=0;
        }
    }
}
if(event.key==='.'){
    if(num1===null||operation===null){
        if(num1!=null && num3==0 && num1==num7 ){
            div1.textContent=" ";
            div1.textContent="0.";
            num1="0.";
            num3+=1;
           }
        else if(num1!=null && num3==0){
            num1+=".";
            div1.textContent+=".";
            num3+=1;
           }
           if(num3>=1){
            div1.textContent+="";
           }
            else{
                div1.textContent=" ";
                div1.textContent="0.";
                num1="0.";
                num3+=1;
            }
    console.log(num1);
    }
        if(num1!==null && operation!==null){
            if(num2!=null && num4==0 ){
                num2+=".";
                div1.textContent+=".";
               num4+=1;
               }
               if(num4>=1){
                div1.textContent+="";
               }
                else{
                    div1.textContent+="0.";
                    num2="0.";
                    num4+=1;
                }
            console.log(num2);
            }
}
if(event.key ==='Backspace'){
    if(num1!=null && operation===null ){
        num1=num1.toString();
        let length=num1.length;
        let part=num1.slice(0,length-1);
        div1.textContent=part;
        num1=part;
        console.log("num1 back");
    }
    else if(operation!==null && num2===null){
        div1.textContent=num1;
        operation=null;
        console.log("oper back")
    }
    else if(num1!==null && operation!==null){
      if(num2.length===1){
        num2=num2.toString();
        num2=null;
        div1.textContent=num1+operation;
      }
      else{
         num2=num2.toString();
        num2.length=length;
        num2=num2.slice(0,length-1);
        div1.textContent=num1+operation+num2;
      }
        console.log("num2 back")
    }
}
});
