//get HTML elements
let input=document.getElementById("input");
let lowercasecheck=document.getElementById("lowercase");
let upppercasecheck=document.getElementById("upppercase");
let numbercheck=document.getElementById("number");
let symbolscheck=document.getElementById("symbols");
let submit=document.getElementById("submit");



//shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i + 1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
} 

//array init
let lowerArray=[];
let upperArray=[];
let numbersArray=[0,1,2,3,4,5,6,7,8,9];
let symbolsArray=[];

//lower case generator function
function lowercasegenerator(){
 for(let i=61;i<=79;i++){
  lowerArray.push(String.fromCharCode(parseInt(i,16)));

}
lowerArray.push("z");

}

//upper case generator function
function uppercasegenerator(){
  for(let i=41;i<=59;i++){
   upperArray.push(String.fromCharCode(parseInt(i,16)));
 
 }
 upperArray.push("Z");
 
 }


 //symbol generator function
function symbolsgenerator(){
  for(let i=21;i<=27;i++){
   symbolsArray.push(String.fromCharCode(parseInt(i,16)));
 
 }
 symbolsArray.push("*");
 symbolsArray.push("-");

 symbolsArray.push("@");

 symbolsArray.push(",");
 symbolsArray.push("?");

 
 }
 

uppercasegenerator()
lowercasegenerator()
symbolsgenerator()


//submit button click eventListener
submit.onclick=function(e){
  e.preventDefault();
  if(lowercasecheck.checked==false && upppercasecheck.checked==false && symbolscheck.checked==false && numbercheck.checked==false){
    alert(`Check more than one box`)
  }else if(lowercasecheck.checked==true && upppercasecheck.checked==false && symbolscheck.checked==false && numbercheck.checked==false){
    alert(`WEAK PASSWORD
    Check more than one box`)
  } else  if(lowercasecheck.checked==false && upppercasecheck.checked==true && symbolscheck.checked==false && numbercheck.checked==false){
    alert(`WEAK PASSWORD
    Check more than one box`)
  } else  if(lowercasecheck.checked==false && upppercasecheck.checked==false && symbolscheck.checked==true && numbercheck.checked==false){
    alert(`WEAK PASSWORD
    Check more than one box`)
  } else if(lowercasecheck.checked==false && upppercasecheck.checked==false && symbolscheck.checked==false && numbercheck.checked==true){
    alert(`WEAK PASSWORD
    Check more than one box`)
  } 
  else if(lowercasecheck.checked==true && upppercasecheck.checked==true && symbolscheck.checked==false && numbercheck.checked==false){
    shuffle(upperArray);
    shuffle(lowerArray);
    let uppercut=[...upperArray];
    uppercut.length=4;
    
    let lowercut=[...lowerArray];
    lowercut.length=4;
    input.value=shuffle(uppercut.concat(lowercut)).join("");
  } 

  else if(lowercasecheck.checked==true && upppercasecheck.checked==false && symbolscheck.checked==true && numbercheck.checked==false){
    shuffle(lowerArray);
    shuffle(symbolsArray);
    let lowercut=[...lowerArray];
   lowercut.length=4;
    
    let symbolscut=[...symbolsArray];
   symbolscut.length=4;
    input.value=shuffle(lowercut.concat(symbolscut)).join("");
  }

  else if(lowercasecheck.checked==true && upppercasecheck.checked==false && symbolscheck.checked==false && numbercheck.checked==true){
    shuffle(lowerArray);
    shuffle(numbersArray);
    let lowercut=[...lowerArray];
   lowercut.length=4;
    
    let numberscut=[...numbersArray];
   numberscut.length=4;
    input.value=shuffle(lowercut.concat(numberscut)).join("");
  }
  else if(lowercasecheck.checked==false && upppercasecheck.checked==true && symbolscheck.checked==true && numbercheck.checked==false){
    shuffle(upperArray);
    shuffle(symbolsArray);
    let uppercut=[...upperArray];
   uppercut.length=4;
    
    let symbolscut=[...symbolsArray];
   symbolscut.length=4;
    input.value=shuffle(uppercut.concat(symbolscut)).join("");
  }

  else if(lowercasecheck.checked==false && upppercasecheck.checked==true && symbolscheck.checked==false && numbercheck.checked==true){
    shuffle(upperArray);
    shuffle(numbersArray);
    let uppercut=[...upperArray];
   uppercut.length=4;
    
    let numberscut=[...numbersArray];
    numberscut.length=4;
    input.value=shuffle(uppercut.concat(numberscut)).join("");
  }

  else if(lowercasecheck.checked==false && upppercasecheck.checked==false && symbolscheck.checked==true && numbercheck.checked==true){
    shuffle(symbolsArray);
    shuffle(numbersArray);
    let symbolscut=[...symbolsArray];
    symbolscut.length=4;
    
    let numberscut=[...numbersArray];
    numberscut.length=4;
    input.value=shuffle(symbolscut.concat(numberscut)).join("");
  }

  
  else if(lowercasecheck.checked==true && upppercasecheck.checked==true && symbolscheck.checked==true && numbercheck.checked==false){
    shuffle(symbolsArray);
    shuffle(upperArray);
    shuffle(lowerArray);
    let symbolscut=[...symbolsArray];
    symbolscut.length=2;
    
    let uppercut=[...upperArray];
    uppercut.length=3;

    let lowercut=[...lowerArray];
    lowercut.length=3;

    input.value=shuffle(symbolscut.concat(lowercut).concat(uppercut)).join("");
  }

  else if(lowercasecheck.checked==true && upppercasecheck.checked==true && symbolscheck.checked==false && numbercheck.checked==true){
    shuffle(numbersArray);
    shuffle(upperArray);
    shuffle(lowerArray);
    let numberscut=[...numbersArray];
    numberscut.length=3;
    
    let uppercut=[...upperArray];
    uppercut.length=3;

    let lowercut=[...lowerArray];
    lowercut.length=2;

    input.value=shuffle(numberscut.concat(lowercut).concat(uppercut)).join("");
  }

  else if(lowercasecheck.checked==true && upppercasecheck.checked==false && symbolscheck.checked==true && numbercheck.checked==true){
    shuffle(numbersArray);
    shuffle(symbolsArray);
    shuffle(lowerArray);
    let numberscut=[...numbersArray];
    numberscut.length=3;
    
    let symbolscut=[...symbolsArray];
    symbolscut.length=3;

    let lowercut=[...lowerArray];
    lowercut.length=2;

    input.value=shuffle(numberscut.concat(lowercut).concat(symbolscut)).join("");
  }

  else if(lowercasecheck.checked==false && upppercasecheck.checked==true && symbolscheck.checked==true && numbercheck.checked==true){
    shuffle(numbersArray);
    shuffle(upperArray);
    shuffle(symbolsArray);
    let numberscut=[...numbersArray];
    numberscut.length=3;
    
    let uppercut=[...upperArray];
    uppercut.length=3;

    let symbolscut=[...symbolsArray];
    symbolscut.length=2;

    input.value=shuffle(numberscut.concat(symbolscut).concat(uppercut)).join("");
  }

  else if(lowercasecheck.checked==true && upppercasecheck.checked==true && symbolscheck.checked==true && numbercheck.checked==true){
    shuffle(numbersArray);
    shuffle(upperArray);
    shuffle(symbolsArray);
    shuffle(lowerArray);

    let numberscut=[...numbersArray];
    numberscut.length=2;
    
    let uppercut=[...upperArray];
    uppercut.length=2;

    let symbolscut=[...symbolsArray];
    symbolscut.length=2;

    let lowercut=[...lowerArray];
    lowercut.length=2;

    input.value=shuffle(numberscut.concat(symbolscut).concat(uppercut).concat(lowercut)).join("");
  }
}