//Assignment 4
//Part 1
/*
1.	Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 


var ANIMAL = ANIMAL || {};  // PLACES DOG AND CAT IN NAMESPACE
var ANIMAL.Dog = function() {  // class should be capatalized - namespace all caps
var ANIMAL.Cat = function()
*/

/*
2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation

 
 
function Cat(){}
var Dog = function () {
  console.log('instance created');
};


*/
 
 
 
 /*
 3.Directly underneath, create a new instance of the Dog class.

var dog2 = new Dog();
 
 
 
 
 4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
 
 */
/*
var animal = new Object;
function Animal() {

  console.log("The Animal has been created");
}; 
  var dog1 = new Animal();

*/


// 5.Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument // into the constructor at the moment that the Animal class is instantiated.

/* 
var animal = new Object;
function Animal(type) {
    this._type = type;
  console.log(this._type);
}; 
  var dog1 = new Animal("Poodle");

*/




//6.	Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and  length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
/*
var animal = new Object;
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
  console.log(this._type);
}; 
  var dog1 = new Animal("Poodle");

*/


//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
/*
var animal = new Object;
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
  console.log(this._type);
    }; 

  var dog1 = new Animal();
  
for(var property in dog1){
console.log(property);
}

*/

// 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.


/*


function speak(type, color) {

  		  if(type == "dog") {
        console.log("The " + color + " dog is barking!");
    }
    else{
        console.log("The " + color + " cat is meowing!")
}
}
var dog1 = new speak("cat", "white");
*/



// 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”


/*
function checkType(type, color) {
      this._type = type;
        this._color = color;
		  if(type == "dog" || "cat") 
          {
    
    }
    
}
 var dog1 = new checkType("dog", "white");

*/
/*


function speak() {

  		 checkType()
         console.log("The " + type + " has made a noise")
         
}

*/




//10.	Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.







/*
//The Recipe Card (15 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
Guacamole
Serves: 4
Ingredients: 
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper

*/

/*


var recipe = [];
recipe.title = "Guacamole";
recipe.serves = "4";
recipe.ingredients = ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Gound Pepper"];

console.log(recipe.title);
console.log("Serves " + recipe.serves);

recipe.ingredients.forEach(function (item, index, array) {
  console.log("-" + item);

});


*/


    
/*
//The Reading List (15 points)
Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
*/
/*
     var bk1 =[];
            bk1["title"] = "Trout Fishing";
            bk1["author"] = "Bill Jones";
            bk1["alreadyRead"] = true;
            
            
   var bk2 =[];
            bk2["title"] = "Red line";
            bk2["author"] = "Jane Smith";
            bk2["alreadyRead"] = false;

 var bk3 =[];
            bk3["title"] = "The Clown";
            bk3["author"] = "Clara Bell";
            bk3["alreadyRead"] = false;

 var bk4 =[];
            bk4["title"] = "Baseball";
            bk4["author"] = "Barry Bonds";
            bk4["alreadyRead"] = false;

 var bk5 =[];
            bk5["title"] = "Gold Coast";
            bk5["author"] = "I.M. Nugget";
            bk5["alreadyRead"] = true;
            
var bk =[bk1, bk2, bk3, bk4, bk5];
            
           
  var arrayLength =  bk.length
var msg = "";
var i;

console.log("All Books");

for (i = 0; i < arrayLength; i++){
    msg = bk[i];
 
console.log(msg);
    
}

if(bk[i][2] == true){
  for (i = 0; i < arrayLength; i++){
    msg = bk[i];
 
console.log(msg);
  }
}
  
*/