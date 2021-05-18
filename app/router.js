import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('newuser');
    this.route('card');
    this.route('details',{ path: '/:users_id' });
  });
});

export default Router;
