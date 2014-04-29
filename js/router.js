Gorgrly.Router.map(function(){
  this.resource('tables', { path: '/' }, function() {
    this.resource('table', { path: '/:table_id'}, function() {
      this.resource('items', {path: '/items'})
    });
  });
});

Gorgrly.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Gorgrly.ItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('item');
  }
});


// Gorgrly.TablesNewTableRoute = Ember.Route.extend({
//   model: function() {
//     var table = this.store.createRecord('table');
//     table.save();
//   }
// });
