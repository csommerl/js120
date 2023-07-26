const personPrototype = {
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  communicate: function() {
    console.log('Communicating');
  },

  eat: function() {
    console.log('Eating');
  },

  sleep: function() {
    console.log('Sleeping');
  },

  init: function(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    return this;
  },
}

function createPerson(firstName, lastName, age, gender) {
  return Object.create(personPrototype).init(firstName, lastName, age, gender);
}

const doctorPrototype = Object.create(personPrototype);

doctorPrototype.diagnose = function() {
  console.log('Diagnosing');
}

doctorPrototype.init = function(firstName, lastName, age, gender, specialization) {
  personPrototype.init.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
  return this;
}

function createDoctor(firstName, lastName, age, gender, specialization) {
  return Object
    .create(doctorPrototype)
    .init(firstName, lastName, age, gender, specialization);
}

let person = createPerson('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
console.log(personPrototype.isPrototypeOf(person)); // true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = createDoctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
console.log(doctorPrototype.isPrototypeOf(doctor)); // true
console.log(personPrototype.isPrototypeOf(doctor)); // true
console.log(person.isPrototypeOf(doctor)); // true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

/*
let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
*/
