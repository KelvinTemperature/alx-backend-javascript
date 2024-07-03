import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const id = getListStudentIds(students);
    return (id.reduce((acc, cur) => acc + cur));
  }
  return 0;
}
