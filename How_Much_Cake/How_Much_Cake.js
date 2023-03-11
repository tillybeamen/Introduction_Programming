function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var remainingPieces = numberOfPieces % numberOfPeople;
    if (remainingPieces == 0){
        console.log("No leftovers for you!")
    }
    else if (remainingPieces <= 2){
        console.log("You have some leftovers")
    }
    else if (remainingPieces >= 3 && remainingPieces <= 5){
        console.log("You have leftovers to share")
    }
    else if (remainingPieces > 5){
        console.log("Hold another party!")
    }
    return remainingPieces
}

howMuchLeftOverCake(12, 5)