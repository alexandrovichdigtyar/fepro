class Calculator{
  constructor(){
    this.theNum = "";
    this._oldNum = "";
    this._resultNum;
    this._operator;
    this.nums = Calculator.el(".num");
    this.viewer = Calculator.el("#viewer");
    this.equals = Calculator.el("#equals");
    this.ops = Calculator.el(".ops");
    this.clearBtn = Calculator.el("#clear");
    this.calculator = Calculator.el('#calculator');
    this.resetBtn = Calculator.el('#reset');
  }
  static el = (element) => {
    if (element.charAt(0) === "#") {
      return document.querySelector(element); 
    }
    return document.querySelectorAll(element); 
  }
  setNum = (event) => {
    if (this.resultNum) {  
      this.theNum = event.target.getAttribute("data-num");
      this.resultNum = ""; 
    } else { 
      this.theNum += event.target.getAttribute("data-num");
    }
    this.viewer.innerHTML = this.theNum;
    
  }
  moveNum = (event) => { 
    this.oldNum = this.theNum;
    this.theNum = "";
    this.operator = event.target.getAttribute("data-ops");
    this.equals.setAttribute("data-result", ""); 
  }; 
  displayNum = () => {
    console.log(this)
    this.oldNum = parseFloat(this.oldNum);
    this.theNum = parseFloat(this.theNum);

    switch (this.operator) {
      case "plus":
        this.resultNum = this.oldNum + this.theNum;
        break;

      case "minus":
        this.resultNum = this.oldNum - this.theNum;
        break;

      case "times":
        this.resultNum = this.oldNum * this.theNum;
        break;

      case "divided by":
        this.resultNum = this.oldNum / this.theNum;
        break;

      default:
        this.resultNum = this.theNum;
    }
    if (!isFinite(this.resultNum)) {
      if (isNaN(this.resultNum)) { 
        this.resultNum = "You broke it!";
      } else { 
        this.resultNum = "Look at what you've done";
        this.calculator.classList.add("broken"); 
        this.resetBtn.classList.add("show"); 
      }
    }
    this.viewer.innerHTML = this.resultNum;
    this.equals.setAttribute("data-result", this.resultNum);
    this.oldNum = 0;
    this.theNum = this.resultNum;
   }

   clearAll = () => {
    this.oldNum = "";
    this.theNum = "";
    this.viewer.innerHTML = "0";
    this.equals.setAttribute("data-result", this.resultNum);
    
   }

  init = () => {
    for (let i = 0; i < this.nums.length; i++) {
      this.nums[i].addEventListener("click",this.setNum);
      
    } 
 
     for (let b = 0; b < this.ops.length; b++) {
      this.ops[b].addEventListener("click",this.moveNum);
    } 

    this.equals.addEventListener("click", this.displayNum);

    this.clearBtn.addEventListener("click", this.clearAll);
  }
}



let newCalc = new Calculator();

document.addEventListener("DOMContentLoaded", newCalc.init());
    
      


//--------------------------------------
/*  const countTotal = () => ({total: 100});
console.log(countTotal());

const result = `Today is ${new Date}`
console.log(result);


let a = 5; let b = 10;
   console.log(({a:b, b:a})) 

let a = 2;
let b = 3;

[a, b] = [b, a];

console.log(a);
console.log(b); */
