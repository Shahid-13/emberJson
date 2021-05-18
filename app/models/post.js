import DS from 'ember-data';
const {
    attr
} = DS
export default DS.Model.extend({
    created_at: attr('string'),
    owner: DS.belongsTo('user', { inverse: 'post' }),
    image: attr('string'),
    captions: attr('string'),
    // like: DS.hasMany('user'),
});
