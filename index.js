// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let num = 99

// Prompt the user to guess the number
   let guess = prompt( "Guess the number")

// Cast the user input to a number

   guess = Number(guess)

// Create a new variable called attempts and set it to 0
  let attempts = 0

// Create a while loop that runs while the user guess is not equal to your number
  while (guess !== num){

// In the while loop, prompt the user to guess the number again (remember to cast)

 guess = prompt("Guess the number")
  guess = Number(guess)
// In the while loop, increase the attempts by 1
   attempts++


    if (guess >= num){
      comsole.log("TOO HIGH")
    }else if (guess <= num){
      console.log("TOO LOW")
    }else if (guess = num){
      console.log("YOU GOT IT")
    }

    console.log("It took" + attempts + "attempts")
  }
// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"




// After the while loop, print "It took (attempts) attempts" 

