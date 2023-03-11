//Variables to determine if a rider meets the ride qualifications

// Stretch feature 1
function getOnThatRide(height, age){
    var min_height = 42;
    var min_age = 10;
    if ( height >= min_height &&  age >= min_age) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
    
}
getOnThatRide(42, 31)

// Stretch feature 2
function getOnThatRide2(height, age){
    var min_height = 42;
    var min_age = 10;
    if ( height >= min_height ||  age >= min_age) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
    
}
getOnThatRide2(42, 3)


