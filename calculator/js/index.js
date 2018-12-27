
//TODO https://www.w3schools.com/js/js_numbers.asp

var collectInput = 0;
var ev;
// TODO https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Legacy_Internet_Explorer_and_attachEvent
var val;
var displayStr = ""
    //--------------------------------------
    // GET INPUT from e.target save as val
    // 
    //-------------------------------------
 
function addEL(e) {
  if(e.target !== e.currentTarget){
    val = e.target.value;
    /////tog not working
    // var next = this.nextElementSibling;
    // if (next.style.display == "none") {
    //     next.style.display = "block";
    // } else {
    //     next.style.display = "none";
    // }
    ////tog
    
    //--------------------------------------
    //INPUT VALIDATION remove c and =
    //DO DO ENTER MULTIPLE 0s
    //-------------------------------------
    if(val==="c"){
      val = 0;
      displayStr = 0;
      ev = 0;
      collectInput = 0;
     
       document.getElementById("output").innerHTML = 0;
       document.getElementById("display").innerHTML = 0;
    } else if(val==="="){
     evaluate(collectInput);
    } else {
    //--------------------------------------
    //call function displayVal with 1,2,3,4,5,6,7,8,9 or 0.
    //-------------------------------------
      displayVal(val);
    }
  }
  e.stopPropagation();
}

//--------------------------------------
// TODO: DISPLAY INPUT
// 
//--------------------------------------

function displayVal(val){
  
  //TODO - REMOVE 1st 0
  // if (collectInput === 0){
  //   collectInput = "";
  // }
  
  collectInput += val;
  //console.log("away:", val);
  if (collectInput.length > 35){
    console.log("tooooo lonng");
    document.getElementById("display").innerHTML = "35 characters max length";
  }else{
  document.getElementById("display").innerHTML = collectInput;
  }
}

//--------------------------------------
// TODO: EVALUATE INPUT
// collectInput saved to var ev 
// to 5 decimal places, toFixed(5);
// < 28 characters
//--------------------------------------

function evaluate(collectInput){
  //TODO if collectInput contains > 1 dot or other operator
  // console.log("ev:", ev);
  console.log("=:",val);
  ev = eval(collectInput).toFixed(5);
  console.log("ev:",ev); 

  if (ev.length < 28){
  document.getElementById("output").innerHTML = ev;
  document.getElementById("display").innerHTML = collectInput;
  }else {document.getElementById("output").innerHTML = "number too long";}
    if(document.getElementById("output").innerHTML === "NaN"){
      document.getElementById("output").innerHTML = "Not a Number";
    }
 if(document.getElementById("display").innerHTML === "0/0" ||          document.getElementById("display").innerHTML === "00/00" || document.getElementById("display").innerHTML === "0/00" || document.getElementById("display").innerHTML === "00/0"){
      document.getElementById("display").innerHTML = "Don't divide 0 by 0!"; 
    }
  }
  //document.getElementById("display").innerHTML = ev;


// add event listener to button
var numb = document.getElementById("box");
numb.addEventListener("click", addEL, false);

// TODO https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Legacy_Internet_Explorer_and_attachEvent