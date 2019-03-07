import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  length: attr('number'),
  startDate: attr('date'),
  user: belongsTo('user')
});
