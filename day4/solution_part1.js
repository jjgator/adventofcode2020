import teststring from './input';

// passport data is separated by two newlines
const passports = teststring.split('\n\n');

// passport dta key value pairs are separated by spaces or newlines
// make separators consistent
const replaceNewLinesWithSpaces = (passport) => {
  let shinyNewPassport = passport;
  while (shinyNewPassport.includes('\n')) {
    shinyNewPassport = shinyNewPassport.replace('\n', ' ');
  }
  return shinyNewPassport;
};

const isValid = (passport) => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return requiredFields.every((field) => passport[field]);
};

const numberOfValidPassports = passports.reduce((number, pp) => {
  const formattedPassport = {};
  const pairs = replaceNewLinesWithSpaces(pp)
    .split(' ')
    .forEach((pair) => {
      const keyVal = pair.split(':');
      formattedPassport[keyVal[0]] = keyVal[1];
    });
  if (isValid(formattedPassport)) number++;
  return number;
}, 0);

console.log(numberOfValidPassports); // 245
