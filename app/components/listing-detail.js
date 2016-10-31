import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('listing.price', 'listing.title', 'listing.timestamp', function() {
    return '$' + this.get('listing.price') + ' - ' + this.get('listing.title');
  })

});
