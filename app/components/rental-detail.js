import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
