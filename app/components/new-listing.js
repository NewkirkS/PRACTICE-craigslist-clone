import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    addListing() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        title: this.get('title') ? this.get('title') : "",
        price: this.get('price') ? this.get('price') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        timestamp: moment().valueOf(),
        category: this.get('category')
      };
      this.set('isShowingModal', false);
      this.sendAction("addListing", params);
      this.set('user', "");
      this.set('title', "");
      this.set('price', "");
      this.set('description', "");
      this.set('image', "");
    }
  }
});
