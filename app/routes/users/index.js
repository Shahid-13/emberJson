import Route from '@ember/routing/route';

export default Route.extend({
    Table:false,
    actions:{
        usertable(){
            this.toggleProperty('Table');
            
        }
    }
});
