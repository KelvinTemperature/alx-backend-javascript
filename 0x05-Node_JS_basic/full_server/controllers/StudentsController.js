const readDatabase = require('../utils');

// The path to the database file
const dbFile = 'database.csv';

class StudentsController {
  static async getAllStudents(req, res) {
    return readDatabase(dbFile)
        .then((data) => {
        const sweStudents = data.SWE;
        const computerScienceStudents = data.CS;
        res.status(200).send(
            'This is the list of our students\n'
            + `Number of students in CS: ${computerScienceStudents.length}. `
            + `List: ${computerScienceStudents.join(', ')}\n`
            + `Number of students in SWE: ${sweStudents.length}. `
            + `List: ${sweStudents.join(', ')}\n`,
            );
        })
        .catch(() => res.status(500).send('Cannot load the database'));
    };

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    
    if ((major === undefined) || ((major !== 'CS') && (major !== 'SWE'))) {
        res.status(500).send('Major parameter must be CS or SWE');
    };

    return readDatabase(dbFile)
        .then((data) => res.status(200).send(`List: ${data[major].join(', ')}`))
        .catch(() => res.status(500).send('Cannot load the database'));
    };
};
