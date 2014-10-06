Ember.Handlebars.helper('products', Ember.View.extend({
  templateName: 'controls/autocomplete',
  
  filteredList: function() {
    var list = this.get('list'),
        filter = this.get('filter');

    if (!filter) { return list; }
    
    return list.filter(function(item) {
      return item.name.indexOf(filter) !== -1;
    });
  }.property('list.@each', 'filter')
}));


