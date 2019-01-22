
class Person {
    constructor(name= 'Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        return `Hi. I am ${this.name}!.`;
    }
    getDrescription () {
      return `${this.name} is ${this.age} year(s) old`
    }
}

//Creating a Subclass
class Student extends Person {
    constructor (name, age,major) {
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !! this.major
    }
    getDrescription () {
       let description = super.getDrescription();
       if(this.hasMajor()) {
          description += ` My major is ${this.major}`
       }
          return description;
    }
}

// Creating a subclass 
class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting () {
       let greeting = super.getGreeting();
       if (this.homeLocation) {
          greeting += `I'm visiting from ${this.homeLocation}`
      }
      return greeting
    }
}

const me = new Traveler('Andrew Mead', 26, 'Maryland');
console.log(me.getGreeting())


const other = new Traveler(undefined, undefined, 'nowhere')
console.log(other.getGreeting())