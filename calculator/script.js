const display = document.getElementById('result');

function dis(val){
    display.value += val;
}

function solve(){
    let disVal = display.value;
    if (disVal.includes('Ex')){
        expo(disVal);
    }else if (disVal.includes('√')){
        nRooter(disVal);
    }else if (disVal.includes('^')){
        nPower(disVal);
    }
    let x = display.value;
    let y = eval(x);
    display.value = y; 
}

function del(){
    let y = display.value;
    y = y.slice(0, y.length - 1);
    display.value = y;
}

function ac(){
    display.value = '';
}

function xn(n){
    display.value = Math.pow(display.value,n);
}

function trigo(op){
    console.log(display.value);
    display.value = Math[op](display.value);
}
function trigoIn(op){
    display.value = 1/Math[op](display.value);
}

function log(){
    display.value = Math.log10(display.value);
}
function ln(){
    display.value = Math.log(display.value);
}

function nRoot(n){
    display.value = Math.pow(display.value,1/n);
}

function prcnt(){
    let x = display.value;
    let y = (eval(x)/100);
    display.value = y;
}

function expo(str){
    str = str.split('Ex');
    let s = str[0];
    let p = str[1]
    let x = (s*(Math.pow(10,p)))
    display.value = x;
}

function nRooter(str){
    str = str.split('√');
    let m = str[0];
    let n = str[1];
    display.value = Math.pow(n,1/m)
}

function nPower(str){
    str = str.split('^');
    let m = str[0];
    let n = str[1];
    display.value = Math.pow(m,n);
}