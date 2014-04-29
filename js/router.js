Gorgrly.Router.map(function(){
  this.resource('tables', { path: '/' }, function() {
    this.resource('table', { path: '/:table_id'}, function() {
      this.resource('items', {path: '/items'}, function(){
        this.resource('item', {path: '/:item_id'})
      });
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

Gorgrly.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
     this.controllerFor('item').set('model', this.store.find('item'));
   }
});

// Gorgrly.TablesNewTableRoute = Ember.Route.extend({
//   model: function() {
//     var table = this.store.createRecord('table');
//     table.save();
//   }
// });
