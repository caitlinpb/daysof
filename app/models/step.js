import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  challenge: belongsTo('challenge'),
  number: attr('number'),
  date: attr('date'),
  completed: attr('boolean'),
  description: attr('string')
});
