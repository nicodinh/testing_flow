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
  },
];

function vegetarianPizzas() {
  return _.findWhere(pizzas, {
    vegetarian: true
  });
}

console.log(vegetarianPizzas());
