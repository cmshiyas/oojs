Prototypes are the mechanism by which JavaScript objects inherit features from one another. 

We look at how the prototype property can be used to add methods to existing constructors.

JavaScript is often described as a prototype-based language — each object has a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

Well, to be exact, the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.

