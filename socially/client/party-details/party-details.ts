import {Component, View, Inject} from 'angular2/angular2';
import {RouteParams, routerDirectives} from 'angular2/router';
import {formDirectives} from 'angular2/angular2';

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [routerDirectives, formDirectives]
})
export class PartyDetails {
  constructor(@Inject(RouteParams) routeParams:RouteParams) {
    this.partyId = routeParams.params.partyId;
  }
  onActivate() {
    this.party = Parties.find(this.partyId).fetch()[0];
    if (this.party) {
      return true;
    }
  }
}