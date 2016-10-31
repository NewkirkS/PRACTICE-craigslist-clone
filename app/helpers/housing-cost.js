import Ember from 'ember';

export function housingCost(params) {
  var price1 = parseInt(params[0].get('price'));

  if (params[0].get('category').get('name') === "Housing") {
    if (price1 >= 400000){
      return '$$$$';
    } else if(price1 >= 300000) {
      return '$$$';
    } else if(price1 >= 200000) {
      return'$$';
    } else {
      return '$';
    }
  } else {
    return '$' + price1;
  }
}

export default Ember.Helper.helper(housingCost);
