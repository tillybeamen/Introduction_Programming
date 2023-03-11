

function greet(name = "Dooku", timeOfDay = "morning ") {
    if (name == "Anakin") {
        console.log("Good " + timeOfDay + name);
    }
    else if (name == "Dooku") {
        console.log("Im coming for you, " + name);
    }
}

greet("Dooku", "night, ")
