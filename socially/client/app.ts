import {Component, View, bind, bootstrap} from 'angular2/angular2';
import {routerInjectables, routerDirectives, Router, RouteConfig} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router'; // HTML5Location Strategy

// Components
import {PartiesList} from 'client/parties-list/parties-list';
import {PartyDetails} from 'client/party-details/party-details';

@Component({
  selector: 'app'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [routerDirectives]
})
@RouteConfig([
  {path: '/',  as: 'parties-list', component: PartiesList},
  {path: '/party/:partyId', as: 'party-details', component: PartyDetails}
])
class Socially {}

bootstrap(Socially, [
  routerInjectables,
  bind(LocationStrategy).toClass(HashLocationStrategy)
  //hashbang alternative: bind(LocationStrategy).toClass(HTML5LocationStrategy)
]);