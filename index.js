let btns = document.getElementsByTagName("button");
let input = document.getElementById("input");
for(btn of btns){
  btn.addEventListener('click',(e)=>{
    let handler = e.target.innerHTML;
    if(handler === "="){
      let result = 0;
       
        try{
          result =  eval(input.value);
          if(result === Infinity || result == -Infinity){
          result = "Error: not divide by zero";
          
        }
        }catch(e){
          result = "Error: Syntax Error";
        }
        input.value = result;
        return;
         
    }
    if(handler === "AC"){
      input.value = "";
      return;
    }
    if(handler === "X"){
      handler = "*";
      input.value += handler;
      return;
    }
    if(handler === "÷"){
      handler = "/";
      input.value += handler;
      return;
    }
    if(handler === "Del"){
      input.value = caluDel(input.value);
      return;
    }
    if(handler === "+/-"){
     input.value =toggleSign(input.value);
      return;
    }
    input.value += handler;
    
  });
}



function caluDel(arr){
  let list = Array.from(arr);
  list.pop();
  let str = list.join("");
  return str;
}

var tracker = 0;
function toggleSign(arr){
  let list = Array.from(arr);
  if(tracker === 0){
  let checkPlus = list.lastIndexOf("+");
  let checkMinus = list.lastIndexOf("-");
  let checkMultiply= list.lastIndexOf("*");
  let checkDivision = list.lastIndexOf("/");
  if(checkPlus === -1 && checkMinus === -1 && checkMultiply === -1 && checkDivision === -1 ){
    list.splice(0,0,"-");
    
  }
  if(checkPlus != -1){
    list.splice(checkPlus+1,0,"-");
    list.splice(checkPlus+1,0,"(");
    list.push(")");
    
  }
  if(checkMinus != -1){
    list.splice(checkMinus+1,0,"-");
    list.splice(checkMinus+1,0,"(");
    list.push(")")
  }
  if(checkMultiply != -1){
    list.splice(checkMultiply+1,0,"-");
    list.splice(checkMultiply+1,0,"(");
    list.push(")");
  }
  if(checkDivision != -1){
    list.splice(checkDivision+1,0,"-");
    list.splice(checkDivision+1,0,"(");
    list.push(")");
  }
  tracker++;
  }else{
    if(list[0] === "-"){
      list.shift();
    }else{
    let i = list.lastIndexOf("-");
    list.splice(i,1);
    list.splice(i-1,1);
    list.pop();
    }
    tracker= 0;
  }
  
  let str = list.join("");
  
  return str;
  
}
