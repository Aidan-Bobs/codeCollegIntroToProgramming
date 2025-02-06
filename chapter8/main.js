var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
    }
    };

var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
        }
        return "The fifth letter of your name is " + name[4] + ".";
    };









var pickRandomWord = function(randomArray) {
    if (!Array.isArray(randomArray)){
        throw new TypeError("Arg must be an array!");
    }
    else{
        var randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
        return randomWord
    }
    
};
var randomInsultGenerator = function() {
    var randomBodyParts = ["Face", "Nose", "Hair", "Leg",
        "Arm", "Ear",
        "Toe", "Eyebrow",
        "Elbow", "Chin"];
    var randomAdjectives = ["Smelly", "Boring", 
        "Stupid", "Ugly", 
        "Weird", "Lazy", 
        "Clumsy", "Noisy", 
        "Annoying", "Goofy"];
    var randomAnimals = ["Fly", "Marmot", 
        "Stick", "Monkey", 
        "Rat", "Sloth", 
        "Penguin", "Giraffe", 
        "Octopus", "Dodo"];
    var randomAnimalBodyParts = ["Tail", "Fur", 
        "Whiskers", "Claws", 
        "Horns", "Beak", 
        "Wings", "Fangs", 
        "Paws", "Hooves"];

    var randomInsult = ["Your", pickRandomWord(randomBodyParts), "is more", pickRandomWord(randomAdjectives),
         "than a", pickRandomWord(randomAnimals) + "’s", pickRandomWord(randomAnimalBodyParts) + "."].join(" ");

    return randomInsult
}
    
    
console.log(randomInsultGenerator());