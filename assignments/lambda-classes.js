// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }
  speak() {
    return `My name is ${this.name} and I love Lambda!`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${this.subject}.`);
  }
  grade(student, subject) {
    console.log(`${this.name} recieves a perfect score on ${this.subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
  listSubjects(favSubjects) {
    console.log(`My favorite subjects are ${this.favSubjects}.`);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${this.subject}.`);
  }
  sprintChallenge(subject) {
    console.log(
      `${student.name} has begun sprint challenge on ${this.subject}`
    );
  }
}
