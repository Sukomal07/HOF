let delay = 3000
let timeleft = delay / 1000
let intervalId

function generateRandomNumber() {
    return Math.floor(Math.random()*10) + 1
}

function updateCountDown(){
    if(timeleft > 0){
        console.log(`Time left: ${timeleft--} seconds....`);
    }
}

console.log(`Generate random Number in ${timeleft} seconds...`);

intervalId = setInterval(updateCountDown, 1000)

setTimeout(function(){
    clearInterval(intervalId)
    let randomNumber = generateRandomNumber()
    console.log(`Random Number generated: ${randomNumber}`);
},delay)