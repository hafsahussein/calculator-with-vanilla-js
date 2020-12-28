const operators= document.querySelectorAll('.operator');
const numbers= document.querySelectorAll('.number');
const dot=document.querySelector('#dot');
const sign=document.querySelector("#sign");
const result=document.querySelector("#result")
const history=document.querySelector("#history")
const clear=input=>{
    input.textContent="";
}
const format=num=>Number(num).toLocaleString("en");
const reverseFormat=input=>input.replace(/,/g,'');
const printResult=()=>{
if(!result.textContent.includes('.'))
result.textContent= format(reverseFormat(result.textContent));
}
numbers.forEach(number=>{
    number.addEventListener('click',e=>{
       result.textContent+=e.target.id;
       printResult();
    })
})
sign.addEventListener('click',()=>{
    if(result.textContent!=''){
        result.textContent=reverseFormat(result.textContent)*-1;
        printResult()  
    }
})
dot.addEventListener('click',()=>{
     if(result.textContent!=''
     &&(!result.textContent.includes('.')))
    result.textContent=reverseFormat(result.textContent)+'.';
})
operators.forEach(operator=>{
    operator.addEventListener('click',e=>{
        if(e.target.id=='='){
           // if(eval(history.textContent))
            result.textContent=eval(history.textContent+reverseFormat(result.textContent))
            printResult();
            clear(history)
        }
        
        else if(e.target.id=='C'){
            clear(result)
            clear(history)
        }
        else if(e.target.id=="backspace"){
            result.textContent=result.textContent.slice(0,result.textContent.length-1)
            printResult()
        }
        else{
            if(history.textContent===''){
                history.textContent=reverseFormat(result.textContent)+e.target.id;
                clear(result)
  }  
                
     else {
        if(isNaN(history.textContent[history.textContent.length-1])&&result.textContent=="") 
       {
        history.textContent=history.textContent
        .replace(/.$/,e.target.id)+reverseFormat(result.textContent);
        clear(result)
       } 
        else{
        history.textContent+=
        reverseFormat(result.textContent)+e.target.id;    
        clear(result)
                }
        }}
    })
})
          