
let Btn7 = document.getElementById("btn7");
let Btn8 = document.getElementById("btn8");
let Btn9 = document.getElementById("btn9");
let Btn4 = document.getElementById("btn4");
let Btn5 = document.getElementById("btn5");
let Btn6 = document.getElementById("btn6");
let Btn1 = document.getElementById("btn1");
let Btn2 = document.getElementById("btn2");
let Btn3 = document.getElementById("btn3");

let Equal = document.getElementById("equal");

let Plus = document.getElementById("plus")
let Minus = document.getElementById("minus")
let Mul = document.getElementById("multiplication")
let divi = document.getElementById("divition")

let inPut = document.querySelector("input")

Btn7.onclick = () => inPut.value += Btn7.value
Btn8.onclick = () => inPut.value += Btn8.value
Btn9.onclick = () => inPut.value += Btn9.value

Btn4.onclick = () => inPut.value += Btn4.value
Btn5.onclick = () => inPut.value += Btn5.value
Btn6.onclick = () => inPut.value += Btn6.value

Btn1.onclick = () => inPut.value += Btn1.value
Btn2.onclick = () => inPut.value += Btn2.value
Btn3.onclick = () => inPut.value += Btn3.value

Plus.onclick = () => inPut.value += Plus.value
Minus.onclick = () => inPut.value += Minus.value
Mul.onclick = () => inPut.value += Mul.value
divi.onclick = () => inPut.value += divi.value



equal.onclick = function () {
    
    
    if(inPut.value[1] == '+'){
       let result = parseInt(inPut.value[0]) + parseInt(inPut.value[2]);
       let p = document.querySelector("p");
         p.innerHTML = result;
         inPut .value = ""
         inPut.onmouseenter = function () {
             p.innerHTML = ""
         }
         
           

    }else if(inPut.value[1] == '-'){
        let result = parseInt(inPut.value[0]) - parseInt(inPut.value[2]);
        let p = document.querySelector("p");
         p.innerHTML = result;
         inPut .value = ""
         inPut.onmouseenter = function () {
             p.innerHTML = ""
         }
         

    }else if(inPut.value[1] == '*'){
        let result = parseInt(inPut.value[0]) * parseInt(inPut.value[2]);
        let p = document.querySelector("p");
         p.innerHTML = result;
         inPut .value = ""
         inPut.onmouseenter = function () {
             p.innerHTML = ""
         }
         

    }else if(inPut.value[1] == '/'){
        let result = parseInt(inPut.value[0]) / parseInt(inPut.value[2]);
        let p = document.querySelector("p");
         p.innerHTML = result;
         inPut .value = ""
         inPut.onmouseenter = function () {
             p.innerHTML = ""
         }
         
    }

}
