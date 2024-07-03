export default function getListStudentIds(arr) {
  let newArr = [];
  if (!(arr instanceof Array)) {
    newArr = [];
  } else {
    newArr = arr.map((item) => item.id);
  }
  return newArr;
}
