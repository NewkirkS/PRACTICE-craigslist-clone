import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  price: DS.attr('number'),
  description: DS.attr(),
  image: DS.attr(),
  timestamp: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
