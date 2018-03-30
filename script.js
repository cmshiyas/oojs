function Person(name) {
    this.name =name;
    this.greeting = function(){
        alert('Hi! I\'m ' + this.name+ '.');
    }
}

var scott = new Person  ('Scott');
var rob = new Person  ('Rob');
scott.greeting();
rob.greeting();

scott.name = "Scott Surname";
rob.name = "Rob Surname";

scott.greeting();
rob.greeting();
