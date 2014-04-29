Gorgrly.Item = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  table: DS.belongsTo('table', {async: true})
});

Gorgrly.Item.FIXTURES = [
  {
    id: 1,
    name: 'Ortolan',
    price: 630,
    table: 2
  },
  {
    id: 2,
    name: 'Foie Gras',
    price: 50,
    table: 2
  },
  {
    id: 3,
    name: 'Artisan Gruel',
    price: 25,
    table: 3
  },
  {
    id: 4,
    name: 'Suckling Pig',
    price: 162,
    table: 4
  },
  {
    id: 5,
    name: 'Steak Tartare',
    price: 78,
    table: 4
  },
  {
    id: 6,
    name: 'Suckling Pig',
    price: 162,
    table: 5
  },
  {
    id: 7,
    name: 'Foie Gras',
    price: 50,
    table: 6
  },
  {
    id: 8,
    name: 'Artisan Gruel',
    price: 25,
    table: 6
  },
  {
    id: 9,
    name: 'Suckling Pig',
    price: 162,
    table: 6
  }
]
