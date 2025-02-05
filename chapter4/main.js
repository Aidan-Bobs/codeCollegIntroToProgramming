//arrays
var array = [1,2,3,4,5]

array[2]

//methods
//adds to the end
array.push(6)

//removes from end
array.pop()

//adds to beining
array.unshift(0)

//removes from beining
array.shift()

// the methods above that remove can also assing the removed value to a new array/var


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

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 10)];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 10)];

var randomAnimal = randomAnimals[Math.floor(Math.random() * 10)];

var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 10)]
var randomInsult = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal + "’s", randomAnimalBodyPart + "."].join(" ");



//objects

// you can add key value pairs to objects by

var object = {}

object["key"] = "value"

//or by using . notation

object.key2 = "value2"


//bellow is just the combination of objects and arrays 

var relationships = [
    {
      relation: "mother",
      name: "Alice",
      age: 45,
      favoriteColor: "blue"
    },
    {
      relation: "father",
      name: "John",
      age: 50,
      favoriteColor: "green"
    },
    {
      relation: "brother",
      name: "Michael",
      age: 20,
      favoriteColor: "red"
    }
  ];

  
// or i could do it like this

var relationships2 = {
    mother:{
      name: ["a","l","i","c","e"],
      age: 45,
      favoriteColor: "blue"
    },
    father:{
      name: "John",
      age: 50,
      favoriteColor: "green"
    },
    brother:{
      name: "Michael",
      age: 20,
      favoriteColor: "red"
    }
};

console.log(relationships2)
//note, this is not a program just a mish mash of things learnt in the lecture, console.log any of these variables and i think something might break