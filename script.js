'use strict';

// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
// на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
// для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

console.log('Ответ задача 1');

var max = 999;
var digit = {
  number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
  units: 0,
  tens: 0,
  hundreds: 0,
};
if (digit.number <= 9){
  digit.units = digit.number;
} else if (digit.number <= 999){
  digit.units = Math.floor(digit.number % 10);
  digit.tens = Math.floor(digit.number / 10 % 10);
  digit.hundreds = Math.floor(digit.number / 100 % 10);
}else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);


// Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
//   объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.


 //Функция добавления товара в корзину
 function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price*this.quantity;
}

var basket = [
    {product: 'T-shirt',
    price: 500,
    quantity: 3,
    total: totalSum},
    {product: 'panties',
    price: 1000,
    quantity: 1,
    total: totalSum},
    {product: 'dress',
    price: 1100,
    quantity: 3,
    total: totalSum},
    {product: 'socks',
    price: 150,
    quantity: 5,
    total: totalSum},
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

console.log('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));