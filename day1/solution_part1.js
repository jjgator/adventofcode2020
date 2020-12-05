import teststring from './input';

const expenseReport = teststring.split('\n');

for (let i = 0; i < expenseReport.length; i++) {
  for (let j = i + 1; j < expenseReport.length; j++) {
    const sum = Number(expenseReport[i]) + Number(expenseReport[j]);
    if (sum === 2020) {
      console.log(expenseReport[i] * expenseReport[j]); // 870331
      break;
    }
  }
}
