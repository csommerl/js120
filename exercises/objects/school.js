// https://launchschool.com/exercises/4a1f0eb3

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

let school = {

};

