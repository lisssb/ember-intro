//los modelos se cargan en las rutas
import Ember from 'ember';

export default Ember.Route.extend({
  //equivalente model : function(){}
  model(){
    return this.store.findAll('post');
  },
});
