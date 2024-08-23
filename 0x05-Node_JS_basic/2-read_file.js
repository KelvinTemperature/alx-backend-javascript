#!/usr/bin/env node

const { csvToJSON, getStudentsInfo, readDBSync } = require('./utils');

function countStudents(path) {
  const data = readDBSync(path);
  const studentsData = JSON.parse(csvToJSON(data));
  console.log(`Number of students: ${studentsData.length}`);

  console.log(getStudentsInfo(studentsData, 'CS'));
  console.log(getStudentsInfo(studentsData, 'SWE'));
};

module.exports = countStudents;
