export default function updateStudentGradeByCity(students, city, newGrades){
  if (newGrades instanceof Array) {
    if (!(newGrades.grade)){
        newGrades.grade = 'N/A';
    }
  }
  if (students instanceof Array) {
    return students
      .filter((students) => students.location === city)
      .map((students) => ({
        id: students.id,
        firstname: students.id,
        location: students.location,
        grade: newGrades.grade
      }))
  }
}