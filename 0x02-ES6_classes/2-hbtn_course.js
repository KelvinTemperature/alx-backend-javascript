export default class HolbertonCourse {

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    if (typeof(newName) === 'string') {
        this._name = newName;
    } else{
        console.log('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof(newLength) === 'number') {
        this._length = newLength;
    } else{
        console.log('Length must be a number');
    }
  }

  set students(newStudents) {
    for (student in newStudents) {
        if (typeof(student) === 'string')
    }
    } else{
        console.log('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}