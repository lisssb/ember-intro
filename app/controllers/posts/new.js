import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePost() {
      this.set('model.publisedAt', new Date());
      this.get('model').save().then((savePost) => {
        this.transitionToRoute('posts.show', savePost);
      })
    }
  }
});
