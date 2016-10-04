'use strict';

var _underscore = require('underscore');

var pizzas = [{
  title: 'Four cheese',
  vegetarian: true
}, {
  title: 'Margherita',
  vegetarian: true
}, {
  title: 'Pepperoni',
  vegetarian: false
}, {
  title: 'Quatre fromage',
  vegetarian: true
}, {
  title: 'Hawaiian',
  vegetarian: false
}];

function vegetarianPizzas() {
  return _underscore._.findWhere(pizzas, {
    vegetarian: true
  });
}

console.log(vegetarianPizzas());