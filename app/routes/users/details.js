import Route from '@ember/routing/route';

export default Route.extend({
    model(people) {
        var id = people.id;
        return this.get('store').findRecord('user', id);

    }
});
