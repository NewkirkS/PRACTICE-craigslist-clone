import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  timestamp: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
