Gorgrly.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var newNum = this.get('length');
      var table = this.store.createRecord('table', {
        tableNumber: newNum + 1
      });
      table.save();
    }
  }
});
