let input = "hello sir"

function reverseString(str) {
    return str.split("").reverse().join("")
}

// set timout reverse string after 2 sec
setTimeout(function(){
    let reverse = reverseString(input)
    console.log(reverse);
}, 2000)