// class person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// class cat {
//     constructor(tiredness, hunger, loneliness, happiness) {
//         if (tiredness > 10 || tiredness < 0 || typeof tiredness != "number") {
//             return console.log("tiredness error");

//         }
//         if (hunger > 10 || hunger < 0 || typeof hunger != "number") {
//             return console.log("hunger error");

//         }

//         if (loneliness > 10 || loneliness < 0 || typeof loneliness != "number") {
//             return console.log("loneliness error");

//         }
//         if (happiness > 10 || happiness < 0 || typeof happiness != "number") {
//             return console.log("happiness error");

//         }
//         this.tiredness = tiredness;
//         this.hunger = hunger;
//         this.loneliness = loneliness;
//         this.happiness = happiness;
//     }

//     //actions to increase the arguments
//     stayingUp(howMuch) {//tiredness+
//         if (howMuch + this.tiredness > 10 || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("stayingUp error");
//         }
//         this.tiredness += howMuch;
//         console.log("my tiredness is " + this.tiredness);
//         return this.tiredness;
//     }
//     feed(howMuch) {//hunger+
//         if (howMuch + this.hunger > 10 || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("feeding error");
//         }
//         this.hunger += howMuch;
//         console.log("my hunger is " + this.hunger);
//         return this.hunger;
//     }
//     leftAlone(howMuch) {//loneliness+
//         if (howMuch + this.loneliness > 10 || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("leftalone error");
//         }
//         this.loneliness += howMuch;
//         console.log("my loneliness is " + this.loneliness);
//         return this.loneliness;
//     }
//     play(howMuch) {//happiness+
//         if (howMuch + this.happiness > 10 || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("playing error");
//         }
//         this.happiness += howMuch;
//         console.log("my happiness is " + this.happiness);
//         return this.happiness;
//     }


//     //actions to decrease the arguments

//     sleep(howMuch) {//tiredness-
//         if (howMuch > this.tiredness || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("sleep error");
//         }
//         this.tiredness -= howMuch;
//         console.log("my tiredness is " + this.tiredness);
//         return this.tiredness;
//     }

//     running(howMuch) {//hunger-
//         if (howMuch > this.hunger || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("running error");
//         }
//         this.hunger -= howMuch;
//         console.log("my hunger is " + this.hunger);
//         return this.hunger;
//     }

//     cuddling(howMuch) {//loneliness-
//         if (howMuch > this.loneliness || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("cuddling error");
//         }
//         this.loneliness -= howMuch;
//         console.log("my loneliness is " + this.loneliness);
//         return this.loneliness;
//     }

//     yelling(howMuch) {//happiness-
//         if (howMuch > this.happiness || howMuch < 0 || typeof howMuch != "number") {
//             return console.log("yelling error");
//         }
//         this.happiness -= howMuch;
//         console.log("my happiness is " + this.happiness);
//         return this.happiness;
//     }
// }

//ex3 here is when i realised i waas building classes instead of objects

