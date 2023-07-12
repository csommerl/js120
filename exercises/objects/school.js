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

    getCourse: function(courseCodeOrName) {
      return this.courses.find(course => {
        if (typeof courseCodeOrName === 'number') {
          return course.code === courseCodeOrName;
        } else {
          return course.name === courseCodeOrName;
        }
      });
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
  students: [],

  addStudent: function(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

    if (!VALID_YEARS.includes(year)) {
      console.log('Invalid Year');
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },

  enrollStudent: function(student, name, code) {
    student.addCourse({ name, code, }); 
  },

  addGrade: function(student, courseCode, grade) {
    let course = student.getCourse(courseCode);

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    for (let course of student.courses) {
      console.log(`${course.name}: ${course.grade ?? 'In progress'}`);
    }
  },

  courseReport: function(courseName) {
    return null;
  },
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.addGrade(foo, 101, 95);
school.enrollStudent(foo, 'Advanced Math', 102);
school.addGrade(foo, 'Advanced Math', 90);
school.enrollStudent(foo, 'Physics', 202);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 101, 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.addGrade(qux, 101, 93);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
