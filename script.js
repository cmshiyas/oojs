// Creating Objects

function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.salutation = gender =="male" ? "He": "She";
    this.interests = interests;
}

Person.prototype.bio = function() {
    return (`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.salutation} likes ${this.interests[0]} and ${this.interests[1]} .`);
  };

Person.prototype.greeting = function() {
    return ('Hi! I\'m ' + this.name.first + '.');
  };

// Inheriting from existing Person Object
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    var prefix;
  
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      prefix = 'Mrs.';
    } else {
      prefix = 'Mx.';
    }
  
    return ('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
  };
  

// Creating instances of Objects
  var person1 = new Person('July', 'Smith', 32, 'female', ['music', 'skiing']);



// Script for displaying data in the html for Person Object
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

// Script for displaying data in the html for Teacher Object
var Teacher1 = new Teacher('Elcia', 'Smith', 32, 'female', ['music', 'skiing'], 'Maths')

var element = document.createElement("p");  
var bio = document.createTextNode(`${Teacher1.greeting()}`);
element.appendChild(bio);

htmlElement.appendChild(element);