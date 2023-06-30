import HolbertonCourse from './2-hbtn_course';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  // eslint-disable-next-line no-unused-vars
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}
