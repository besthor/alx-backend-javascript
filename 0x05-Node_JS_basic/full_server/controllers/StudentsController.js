const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let printData = 'This is the list of our students';
        for (const field in data) {
          if (Object.hasOwnProperty.call(data, field)) {
            const element = data[field];
            printData += `\nNumber of students in ${field}: ${element.number}. ${element.students}`;
          }
        }
        response.send(printData);
      })
      .catch((err) => { response.send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) response.status(500).send('Major parameter must be CS or SWE');
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = data[request.params.major].students;
        if (printData) response.send(printData);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((err) => { response.send(err.message); });
  }
};
