//ex1
let person = {
    firstName: "joe",
    lastName: "mam",
    displayname: function () {
        console.log("my first name is " + this.firstName);
        console.log("my last name is " + this.lastName);
    }
}
person.displayname()

//ex2
const cat = {
    tiredness: 3,
    hunger: 6,
    loneliness: 2,
    happiness: 9,


    //decreasing stats
    sleep: function (howMuch) {//tiredness-
        if (howMuch > this.tiredness || howMuch < 0 || typeof howMuch != "number") {
            return console.log("sleep error");
        }
        this.tiredness -= howMuch;
        console.log("my tiredness is " + this.tiredness);

    },
    feed(howMuch) {//hunger-
        if (howMuch > this.hunger || howMuch < 0 || typeof howMuch != "number") {
            return console.log("feed error");
        }
        this.hunger -= howMuch;
        console.log("my hunger is " + this.hunger);
        
    },

    cuddling(howMuch) {//loneliness-
        if (howMuch > this.loneliness || howMuch < 0 || typeof howMuch != "number") {
            return console.log("cuddling error");
        }
        this.loneliness -= howMuch;
        console.log("my loneliness is " + this.loneliness);
        
    },

    yelling(howMuch) {//happiness-
        if (howMuch > this.happiness || howMuch < 0 || typeof howMuch != "number") {
            return console.log("yelling error");
        }
        this.happiness -= howMuch;
        console.log("my happiness is " + this.happiness);
      
    },
    //actions to increase the arguments
    stayingUp(howMuch) {//tiredness+
        if (howMuch + this.tiredness > 10 || howMuch < 0 || typeof howMuch != "number") {
            return console.log("stayingUp error");
        }
        this.tiredness += howMuch;
        console.log("my tiredness is " + this.tiredness);
        
    },
    running(howMuch) {//hunger+
        if (howMuch + this.hunger > 10 || howMuch < 0 || typeof howMuch != "number") {
            return console.log("running error");
        }
        this.hunger += howMuch;
        console.log("my hunger is " + this.hunger);
       
    },
    leftAlone(howMuch) {//loneliness+
        if (howMuch + this.loneliness > 10 || howMuch < 0 || typeof howMuch != "number") {
            return console.log("leftalone error");
        }
        this.loneliness += howMuch;
        console.log("my loneliness is " + this.loneliness);
       
    },
    play(howMuch) {//happiness+
        if (howMuch + this.happiness > 10 || howMuch < 0 || typeof howMuch != "number") {
            return console.log("playing error");
        }
        this.happiness += howMuch;
        console.log("my happiness is " + this.happiness);
        
    }

}
cat.yelling(2);
cat.sleep(4);
cat.cuddling(2);
cat.running(2)
//ex1 with class by accident
// const jojo = new person("joseph", "joestar")

// function displayname(person) {
//     console.log("my first name is " + person.firstName);
//     console.log("my last name is " + person.lastName);
// }

// displayname(jojo)

//ex2 with class by accident
// const drama = new cat(5, 8, 4, 7)
// drama.feed(3);
// drama.sleep(4);
// console.log(drama.hunger);
// drama.feed("ww");
// drama.leftAlone(4);
// drama.cuddling(3);

//ex3 here is when i realised i been making classes 

const recipe = {
    title: "DAT burger",
    numberOfOrders: 3,
    isVegan: false,
    ingredients: [
        "bun", "hamburger", "cheese", "onions", "lettuce"
    ],
    updateServings: function (howMuch) {
        if (howMuch < 0 && howMuch * -1 > this.numberOfOrders)
            return console.log("reducing too many orders");

        this.numberOfOrders += howMuch;
    },
    updateIngredients: function (newIng) {
        this.ingredients.push(newIng);
    },
    deleteIngredient: function (badIng) {
        this.ingredients = this.ingredients.filter(function (ingredients) {
            return ingredients != badIng;
        })
    },
    printRecipt: function () {
        console.log(`your order for ${this.numberOfOrders} orders of ${this.title} has arrived. vegan : ${this.isVegan} the meal has : ${this.ingredients}`);

    }

}

recipe.deleteIngredient("cheese")
recipe.updateIngredients("omlette")
console.log(recipe.ingredients);
recipe.printRecipt();

//felt like the check if vegan function shouldnt be in the recipe object since it recieves a recipt
function checkVegan(recipt) {
    return recipt.checkVegan;
}

//ex4

const books = [
    {
        title: "cheese on the loose",
        author: "nota ratt",
        alreadyRead: true
    },
    {
        title: "one piece",
        author: "oda",
        alreadyRead: true
    },
    {
        title: "sonic da hedgehog",
        author: "sega ",
        alreadyRead: false
    },
]

books.forEach(function (book) {
    if (book.alreadyRead) {
        console.log(`you have already read ${book.title} by ${book.author}`);
    }
    else {
        console.log(`you still need to read ${book.title} by ${book.author}`);
    }
})