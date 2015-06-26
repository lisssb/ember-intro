import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('post');
  },
  deactivate(){
    const model = this.get('controller.model');
    if(model.get('isDirty')){
        model.destroyRecord();
    }
  }
});
