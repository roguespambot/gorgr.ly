Gorgrly.Table = DS.Model.extend({
  tableNumber: DS.attr('number'),
  items: DS.hasMany('item', {async: true})

});

Gorgrly.Table.FIXTURES = [
  {
    id: 1,
    tableNumber: 1
  },
  {
    id: 2,
    tableNumber: 2,
    items: [1, 2]
  },
  {
    id: 3,
    tableNumber: 3,
    items: [3, 4]
  },
  {
    id: 4,
    tableNumber: 4,
    items: [5]
  },
  {
    id: 5,
    tableNumber: 5,
    items: [6]
  },
  {
    id: 6,
    tableNumber: 6,
    items: [7, 8, 9]
  }
]
