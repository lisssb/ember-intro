// este cfichero se ha generado con la siguient lineas
//ember post title:string body:string publishedAt:date
// ademas se ha generedo un fichero test


import DS from 'ember-data';

const {attr} = DS;
//const attr = DS.attr;  son equivalentes las lineas

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  publishedAt: attr('date')//ISO  YYYY-MM-DDThh:mm:ssZ
});
