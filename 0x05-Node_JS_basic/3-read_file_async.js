#!/usr/bin/env node

const { csvToJSON, getStudentsInfo, readDBAsync } = require('./utils');

async function countStudents(path) {
  const data = await readDBAsync(path);
  const studentsData = JSON.parse(csvToJSON(data));

  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
}

module.exports = countStudents;