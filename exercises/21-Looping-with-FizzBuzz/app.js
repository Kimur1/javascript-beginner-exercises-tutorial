function fizzBuzz() {  
	for( let i = 1; 1 < 100; i++){
        if (i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
        }
        else if (i  === 3){
            console.log("Fizz");
        } else if (i === 5){
            console.log("Buzz");
        } else {
            console.log (i)
        }
    }
    return 0;
}

console.log(fizzBuzz[i]);