export default function updateStudentGradeByCity(students, city, newGrades){
  const defaultGrade = { grade: 'N/A'};

  if (students instanceof Array) {
    return students
      .filter((students) => students.location === city)
      .map((students) => ({
        id: students.id,
        firstname: students.firstName,
        location: students.location,
        grade: (newGrades
            .filter((grade) => grade.studentId === students.id)
            .pop() || defaultGrade).grade
      }))
  }
}