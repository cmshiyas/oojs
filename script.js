function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.salutation = gender =="male" ? "He": "She";
    this.interests = interests;
    this.bio = function() {
        return (`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.salutation} likes ${this.interests[0]} and ${this.interests[1]} .`);
      };
    this.greeting = function() {
        return ('Hi! I\'m ' + this.name.first + '.');
      };
}

var person1 = new Person('July', 'Smith', 32, 'female', ['music', 'skiing']);

var htmlElement = document.getElementById("root");
var element = document.createElement("p");  
var bio = document.createTextNode(`${person1.bio()}`);
element.appendChild(bio);

htmlElement.appendChild(element);

var person2 = Object.create(person1);

var element = document.createElement("p");  
var greeting = document.createTextNode(`${person2.greeting()}`);
element.appendChild(greeting);

htmlElement.appendChild(element);