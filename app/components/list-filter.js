import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    results: computed('filter','value', function(){
        var userFilter = this.get('filter');
        var username = this.get('value');
        if(Ember.isEmpty(this.get('value'))){
            return userFilter;
        }
        else{
            return userFilter.filter(function(item){
                return item.get('name').toLowerCase().match(username.toLowerCase());
            })
        }
    })
});
