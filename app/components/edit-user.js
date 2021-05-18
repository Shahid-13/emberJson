import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    store: inject(),
    handleEdit(people){
        people.save();
    }
});
