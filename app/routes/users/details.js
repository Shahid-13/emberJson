import Route from '@ember/routing/route';

export default Route.extend({
    model(people) {
        return {
            user: this.get('store').findRecord('user', people.users_id),
            
        }
    }
});
