import Route from '@ember/routing/route';
import {get} from '@ember/object';

export default Route.extend({
    model() {
        return {
            users: get(this,'store').findAll('user'),
            posts: get(this,'store').findAll('post'),
            tasks: get(this,'store').findAll('task'),
        }
    },
});
