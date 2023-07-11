/*
https://launchschool.com/exercises/0a8aaa5c

createStudent(name, year)

student properties:
- name: string
- year: string
- courses: array containing objects
  - course object: { name: str, code: num }

student methods:
- info(): print 'name is a year student'
- addCourse(courseObj): adds courseObj to courses arr
  - maybe adds empty note property (using updateNote?)
- listCourses(): prints courses array
- addNote(courseCode, noteStr):
  - create note property if needed, with value []
  - adds to note array
- updateNote(noteStr):
  - set note property to []
  - add noteStr to arr
- viewNotes():
  - iterate over each course, and print:
  course name: note1; note2
*/

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info: function() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      console.log(this.courses);
    },

    getCourse: function(courseCode) {
      return this.courses.find(elem => elem.code === courseCode);
    },

    addNote: function(courseCode, noteStr) {
      let course = this.getCourse(courseCode);
      if (course) {
        course.note = course.note ?? [];
        course.note.push(noteStr);
      }
    },

    viewNotes: function() {
      for (let course of this.courses) {
        if (!course.note) continue;
        console.log(`${course.name}: ${course.note.join('; ')}`);
      }
    },

    updateNote: function(courseCode, noteStr) {
      let course = this.getCourse(courseCode);
      if (course) {
        course.note = [];
        course.note.push(noteStr);
      }
    },

  };
}

let foo = createStudent('Foo', '1st');

foo.info();
// "Foo is a 1st year student"

foo.listCourses();
// [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"

foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
