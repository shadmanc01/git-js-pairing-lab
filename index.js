//Code your solutions in this file
function fivetoonehunbred(){
    for(let i=5; i<= 100; i++){
        console.log(i);
    }
}
fivetoonehunbred();

function multiplesofThree() {
    for (let i = 0; i <= 100; i ++) {
        if(i % 3 === 0) {
            console.log(i);
        }
    }
}
multiplesofThree();

function multiplesofThreeorFive(){
    for(let i =1; i<= 100; i++){
        if(i % 3 === 0 || i%5 ===0){
            console.log(i);
        }
    }
}
multiplesofThreeorFive();

function untilNum(num) {
    for(let i = 1; i <= num; i++) {
        console.log(i);
    }
}

untilNum(100);

function multiply(a,b){
    return a*b;

}
console.log(multiply(2,6));
multiply(2,6);

function add(x,y) {
     let sum = x + y
        if(x === y) {
            return (sum * 3);
        } else {
            return sum;
        }
    } 

console.log(add(12,4));

function isNegative(num){
    if(num > 0){
        return false
    }
    if(num < 0){
        return true
    }else{
        return "number is 0"
    }
    
}
console.log(isNegative(-1));

function triangleArea(h,b) {
    return (b*h)/2
}

console.log(triangleArea(5,5));

function betweenTwentyAndFourty(num){
    if(num >= 20 && num<=100){
        return true;
    } else{
        return false;
    }
}
console.log(betweenTwentyAndFourty(19));
betweenTwentyAndFourty(21);

function largest(x,y,z) {
    if( x > y && x > z) {
        return x;
    }
    else if(y > x && y > z) {
        return y;
    }
    else { 
        return z;
    }
}
console.log(largest(5,2,3));

function printTime(){
    let current= new Date();
    return `${current.getUTCHours()-4} : ${current.getUTCMinutes()}: ${current.getUTCSeconds()}`;
}
console.log(printTime())

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(isLeapYear(2019));


function getExtention(string){
    let arr=string.split(".");
    let extension = arr.pop()
    console.log("."+extension)
}
getExtention("index.js")

function absoluteNineteen(num) {
    if( num > 19) {
        return Math.abs(num-19) *3;
    }
    else { 
        return Math.abs(num - 19);
}
}
console.log(absoluteNineteen(19));

function switchLetters(string){
    let ar= string.split("");
    let first=ar[0];
    let second=ar[ar.length-1]
    ar[0]=second;
    ar[ar.length-1]=first
    console.log(ar.join(""));
}
switchLetters("hello world")

function changeString(text){
    let words=text.split("")
    for(let i=0;i<words.length; i++){
        let ch=words[i];
        words[i]=String.fromCharCode( ch.charCodeAt(0)+1) 
    
    }
    words.join("")
    console.log(words)
}
console.log(changeString("hello world"))