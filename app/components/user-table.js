import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    store: inject(),
    deleteid:false,

    deleteId(people){
        this.set('deleteItem',people);
        this.set('deleteid',true);
    },
    editUser(people){
        this.set('user',people);
        this.toggleProperty('edituser');
        },
    cancel(){
        this.set('deleteid',false);
    },
    deleteuser(deleteItem){
        deleteItem.destroyRecord();
        window.location.reload();
    },
});
