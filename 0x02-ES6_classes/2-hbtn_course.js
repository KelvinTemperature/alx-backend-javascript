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
        throw new TypeError('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof(newLength) === 'number') {
        this._length = newLength;
    } else{
        throw new TypeError('Length must be a number');
    }
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
        throw new TypeError('Students must be an array of strings');
    }
    if (!newStudents.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
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