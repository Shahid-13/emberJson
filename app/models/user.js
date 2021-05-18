import DS from 'ember-data';
const {
    attr
} = DS
import { get,computed } from '@ember/object';
export default DS.Model.extend({
    is_active: attr('boolean'),
    name: attr('string'),
    email: attr('string'),
    phone: attr('string'),
    address: attr('string'),
    created_at: attr('date'),
    updated_at: attr('date'),
    role: attr('string'),
    avatar: attr('string'),
    status: computed('is_active',function(){
        return get(this, 'is_active') ? 'active' : 'inactive'
    }),
    post: DS.hasMany('post', { polymorphic: true }),
    task: DS.hasMany('task'),
});