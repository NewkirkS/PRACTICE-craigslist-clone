import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },
  actions: {
    destroyListing(model) {

      if(confirm('Are you sure you want to delete this listing?')) {
        model.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
