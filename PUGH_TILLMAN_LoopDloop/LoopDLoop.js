// How do we know we need a loop here? we need to hand out candy every 2 miles ran 
// Whats the starting point of the loop? the starting point is at the 2 mile mark
// When should the loop stop? the loop needs to stop at the 6 mile mark
// How will the loop know when to stop? the loop will stop with a <= 6 operation
// What variables do we need? mile and candy
// Whats incrementing for each iteration of the loop? the mileage is incrementing every iteration of the loop

function candy(milesBiked, avgMph){
    var mile = 0
    var min_mph = 5.5
    for (var mile = 1; mile < 6; mile += 2) {
        
        if (mile < milesBiked && min_mph < avgMph) {
            console.log("Ooh! Piece of candy!!!")
        }
    }
    
}

candy(6, 10)


/* I am not sure if the question is telling me to stop 
giving out candy on mile 6 or as soon as mile 7 is achieved and beyond
no more candy is awarded. */