import DS from 'ember-data';
const {
    attr
} = DS
export default DS.Model.extend({
    is_done: attr('boolean'),
    title: attr('string'),
    end_date: attr('string'),
    status: attr('string'),
    owner: DS.belongsTo('user')
});
