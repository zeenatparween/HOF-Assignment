function GenerateRandomNumberWithDelay(delayInSeconds){
    let delayInMills = delayInSeconds * 1000;
    let timeLeft = delayInSeconds;

    // Display Progress message every seconds
    let countdownInterval = setInterval(()  => {
        console.log(`Generating random number in ${timeLeft} seconds...`);
        timeLeft--;
    },1000 );

    // Delay for specific time before generating random number
    setTimeout(() => {
        clearInterval(countdownInterval);
        let randomNumber = Math.floor(Math.random()* 100)+1;
        console.log(`Random Number Generated: ${randomNumber}`);
    },delayInMills)
}
//Example usage: generate a random number after a 5 second delay
GenerateRandomNumberWithDelay(8);