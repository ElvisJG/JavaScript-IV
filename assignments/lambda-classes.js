// CODE here for your Lambda Classes

console.log('---------- Lambda Classes ----------');

// Base Person object/contructor, has a name, age, location, gender, and speak function
class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak() {
    return `My name is ${this.name}, i am from ${this.location}`;
  }
}

// Instructor class extended from Person, has a specialty, favorite language,
// catchphrase, demo function, object function, and all traits inherited from the Person class
class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(Student, subject) {
    return `${Student.name} recieves a perfect score on ${subject}.`;
  }
}

// Student class extended from Person, has a previous background, class name, favorite subjects, and 3 functions that
// List the favorite subjects, submits a PR assisgnment, and begins a sprint challenge 🙀
class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects() {
    return `My favorite subjects are ${this.favSubjects}.`;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

// PM Class that extends from instructor, has all instructor attributes and it's own attributes of gradClassname,
// favInstructor, and 2 functions to announce to the slack channel and debug code
class PM extends Instructor {
  constructor(PMAttributes) {
    super(PMAttributes);
    this.gradClassName = this.gradClassName;
    this.favInstructor = this.favInstructor;
  }
  standup(slackchannel) {
    return `${this.name} announces to ${slackchannel} @channel standup time!`;
  }
  debugsCode(Student, subject) {
    return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
  }
}

const Elvis = new Student({
  name: 'Elvis',
  age: 28,
  location: 'Charleston, SC',
  gender: 'Male',
  previousBackground: 'Wearer of Many Hats',
  favSubjects: ['SASS/LESS', 'JS', 'Python']
});

const Keiran = new Instructor({
  name: 'Keiran',
  age: 'Unknown',
  location: 'Secret Lambda Location 🎩',
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'JavaScript',
  catchPhrase: '*DOG IN BACKGROUND* 🐶'
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const Richard = new PM({
  name: 'Richard',
  age: 'Unknown',
  location: 'Unknown',
  gender: 'Male',
  favLanguage: 'JavaScript?',
  specialty: 'JavaScript?',
  catchPhrase: 'Alright Guys 👍',
  gradClassName: 'WEBPT6',
  favInstructor: 'Keiran'
});

const Matt = new Student({
  name: 'Matt',
  age: 'unknown',
  location: 'Cant remember',
  gender: 'Male',
  previousBackground: 'Ahead of us all 🧙‍♂️',
  favSubjects: ['JS', 'React', 'Node']
});

const Josh = new Instructor({
  name: 'Josh',
  age: 'Unknown',
  location: 'Unknown',
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'JavaScript',
  catchPhrase: '00100101010010010100101'
});

const JB = new PM({
  name: 'JB',
  age: 'Unknown',
  location: 'Unknown',
  gender: 'Male',
  favLanguage: 'JavaScript',
  specialty: 'JavaScript?',
  catchPhrase: '📺',
  gradClassName: 'WEBPT6',
  favInstructor: 'Keiran'
});

console.log(Elvis.name);
console.log(Elvis.speak());
console.log(Elvis.sprintChallenge('Javascript'));
console.log(Elvis.listSubjects());
console.log(Elvis.PRAssignment('Javascript'));
console.log(Keiran.speak());
console.log(Keiran.demo('PHP'));
console.log(Keiran.grade(Elvis, 'Javascript'));
console.log(Richard.speak());
console.log(Richard.standup('WEBPT6'));
console.log(Richard.debugsCode(Elvis, 'Javascript'));
