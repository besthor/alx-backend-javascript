const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // split data and taking only list without header
      const lines = data.split('\n').slice(1, -1);
      // give the header of data
      const header = data.split('\n').slice(0, 1)[0].split(',');
      // find firstname and field index
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');
      // declarate two dictionaries for count each fields and store list of students
      const fields = {};
      const students = {};
      // it will contain all data
      const all = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]]
          ? `, ${list[idxFn]}`
          : list[idxFn];
      });
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          all[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      return resolve(all);
    });
  });
};
