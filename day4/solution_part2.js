import teststring from './input_part2';

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
  const {byr = '', iyr = '', eyr = '', hgt = '', hcl = '', ecl = '', pid = ''} = passport;
  if (byr.length !== 4 || iyr.length !== 4 || eyr.length !== 4) {
    return false;
  }
  if (Number(byr) < 1920 || Number(byr) > 2002) {
    return false;
  }
  if (Number(iyr) < 2010 || Number(iyr) > 2020) {
    return false;
  }
  if (Number(eyr) < 2020 || Number(eyr) > 2030) {
    return false;
  }
  if (!hgt.includes('cm') && !hgt.includes('in')) {
    return false;
  }
  if (hgt.includes('cm')) {
    const pure = Number(hgt.replace('cm', ''));
    if (pure < 150 || pure > 193) {
      return false;
    }
  }
  if (hgt.includes('in')) {
    const pure = Number(hgt.replace('in', ''));
    if (pure < 59 || pure > 76) {
      return false;
    }
  }
  if (!hcl.startsWith('#')) {
    return false;
  } else if (!hasOnlyValidHairColorChars(hcl)) {
    return false;
  }
  if (ecl.length !== 3 || !['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) {
    return false;
  }
  if (pid.length !== 9) {
    return false;
  }
  return true;
};

// helper to determine validity of hair color values
const hasOnlyValidHairColorChars = (hcl) => {
  const validChars = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  if (hcl.split('').some((char) => !validChars.includes(char))) {
    return false;
  }
  return true;
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

console.log(numberOfValidPassports);
