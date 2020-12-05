import teststring from './input';

for (let i = 0; i < expenseReport.length; i++) {
  for (let j = i + 1; j < expenseReport.length; j++) {
    for (let k = j + 1; k < expenseReport.length; k++) {
      const sum = Number(expenseReport[i]) + Number(expenseReport[j]) + Number(expenseReport[k]);
      if (sum === 2020) {
        console.log(Number(expenseReport[i]) * Number(expenseReport[j]) * Number(expenseReport[k])); // 283025088
        break;
      }
    }
  }
}
