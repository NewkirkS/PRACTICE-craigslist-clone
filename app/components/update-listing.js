import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateListing(listing) {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
        timestamp: moment().format("MM-")
      };
      this.set('isShowingModal', false);
      this.sendAction('updateListing', listing, params);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
