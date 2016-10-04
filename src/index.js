// @flow

import { _ } from 'underscore';

const pizzas = [
  {
    title: 'Four cheese',
    vegetarian: true
  },
  {
    title: 'Margherita',
    vegetarian: true
  },
  {
    title: 'Pepperoni',
    vegetarian: false
  },
  {
    title: 'Quatre fromage',
    vegetarian: true
  },
  {
    title: 'Hawaiian',
    vegetarian: false
  }
];

function vegetarianPizzas(vegetarian:boolean) {
  return _.findWhere(pizzas, {
    vegetarian: vegetarian
  });
}

console.log(vegetarianPizzas(true));
console.log(vegetarianPizzas(false));
//console.log(vegetarianPizzas()); --> undefined
