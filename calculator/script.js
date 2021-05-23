function dis(val){
    const display = document.getElementById('result');
    display.value += val;
}

function solve(){
    const display = document.getElementById('result');
    let x = display.value;
    let y = eval(x);
    display.value = y; 
}

function ac(){
    const display = document.getElementById('result');
    display.value = '';
}

function xn(n){
    const display = document.getElementById('result');
    display.value = Math.pow(display.value,n);
}

function sin(){
    const display = document.getElementById('result');
    display.value = Math.sin(display.value*((Math.PI)/180));
}
function sinh(){
    const display = document.getElementById('result');
    display.value = Math.sinh(display.value);
}
function asin(){
    const display = document.getElementById('result');
    display.value = Math.asin(display.value);
}

function asinh(){
    const display = document.getElementById('result');
    display.value = Math.asinh(display.value);
}

function cos(){
    const display = document.getElementById('result');
    display.value = Math.cos(display.value);
}

function cosh(){
    const display = document.getElementById('result');
    display.value = Math.cosh(display.value);
}

function acos(){
    const display = document.getElementById('result');
    display.value = Math.acos(display.value);
}

function acosh(){
    const display = document.getElementById('result');
    display.value = Math.acosh(display.value);
}

function tan(){
    const display = document.getElementById('result');
    display.value = Math.tan(display.value);
}

function tanh(){
    const display = document.getElementById('result');
    display.value = Math.tanh(display.value);
}

function atan(){
   
   
    const display = document.getElementById('result');
    display.value = Math.atan(display.value);
}

function atanh(){
    const display = document.getElementById('result');
    display.value = Math.atanh(display.value);
}

function cot(){
    const display = document.getElementById('result');
    display.value = 1/Math.tan(display.value);

}
function coth(){
    const display = document.getElementById('result');
    display.value = 1/Math.tanh(display.value);
}

function log(){
    const display = document.getElementById('result');
    display.value = Math.log10(display.value);
}
function ln(){
    const display = document.getElementById('result');
    display.value = Math.log(display.value);
}

function nRoot(n){
    const display = document.getElementById('result');
    display.value = Math.pow(display.value,1/n);
}

function prcnt(){
    const display = document.getElementById('result');
    let x = display.value;
    let y = (eval(x)/100);
    display.value = y;
}

function del(){
    const display = document.getElementById('result');
    let y = display.value;
    y = y.slice(0, y.length - 1);
    display.value = y;
}
