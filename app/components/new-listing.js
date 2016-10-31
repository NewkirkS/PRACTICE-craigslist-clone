import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
