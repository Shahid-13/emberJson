import Component from '@ember/component';
import {get} from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
    store: inject(),
    handleCreate(){
        var post = get(this, 'store').createRecord('user',{
            is_active:this.active,
            name:this.name,
            email:this.email,
            phone:this.phone,
            address:this.address,
            created_at: '',
            updated_at:'',
            role: 'ADMIN',
            avatar:'',
        });
        post.save();
    }
});
