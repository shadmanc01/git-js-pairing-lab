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
            console.log(i)
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
console.log(multiply(2,6))
multiply(2,6)