'use strict'

  // var date = prompt('Як вас звати', 'Sasha');
  // hello = alert('Привіт Sasha');

  // console.log(date, hello);
 
//  if (confirm("Ви підтверджуєте дію")) {
//    alert("Дякую за підтвердження!");
// } else {
//   alert("Дію відмінено!");
//  }
danger = alert('Ця дія небезпечна!');

var approve = confirm('Підтверджуєте виконання дії?');

if (approve) {
  alert('Дякую за підтвердження!');
} else {
  alert('Дію відмінено!');
}
  console.log(danger, approve);