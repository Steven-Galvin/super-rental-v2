import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);      
    }
  }
});
