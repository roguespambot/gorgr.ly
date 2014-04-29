Gorgrly.Item = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  tables: DS.hasMany('table', {async: true})
});

Gorgrly.Item.FIXTURES = [
  {
    id: 1,
    name: 'Ortolan',
    price: 630,
    tables: [2]
  },
  {
    id: 2,
    name: 'Foie Gras',
    price: 50,
    tables: [2, 6]
  },
  {
    id: 3,
    name: 'Artisan Gruel',
    price: 25,
    tables: [3, 6]
  },
  {
    id: 4,
    name: 'Suckling Pig',
    price: 162,
    tables: [4, 5, 6]
  },
  {
    id: 5,
    name: 'Steak Tartare',
    price: 78,
    tables: [4]
  }
]
