import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  posts : computed(
    'model.[]',  // diferencia entre model solo y .[] es que tambien detecto cuando modifique elementos.
    'model.@each.publishedAt',
    {
      get(){
        return this.get('model').sortBy('publishedAt').reverseObjects();
      }
    }
  )
});
