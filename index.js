// Step 1: Create a literal object named 'myDog'
let myDog = {
    name: "Scooby-Doo",
    show: "Scooby-Doo, Where Are You!",
    breed: "Great Dane",
    color: "Brown",
    firstAppearance: 1969,
    mySound: "Scooby-Doo says 'Ruh-roh! I love Scooby Snacks!'"
  };
  
  // Step 2: Display the dog’s properties in a message
  console.log(`Meet ${myDog.name}, a famous character from the show "${myDog.show}".`);
  console.log(`${myDog.name} is a ${myDog.color} ${myDog.breed} who made his debut in ${myDog.firstAppearance}.`);
  console.log(`What does ${myDog.name} sound like? ${myDog.mySound}`);
  
  // Step 3: Add a constructor function to create similar dog objects
  function Dog(name, show, breed, color, firstAppearance, mySound) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.color = color;
    this.firstAppearance = firstAppearance;
    this.mySound = mySound;
  }
  
  // Step 4: Add a method to the constructor
  Dog.prototype.describe = function() {
    return `Meet ${this.name}, a ${this.color} ${this.breed} from "${this.show}", first appearing in ${this.firstAppearance}. They sound like: "${this.mySound}"`;
  };
  
  // Step 5: Use the constructor to create another dog object
  let anotherDog = new Dog(
    "Brian Griffin",
    "Family Guy",
    "Labrador Retriever",
    "White",
    1999,
    "Brian says 'I may be a dog, but I have a refined sense of humor!'"
  );
  
  // Step 6: Display the new dog's properties using the describe method
  console.log(anotherDog.describe());
  