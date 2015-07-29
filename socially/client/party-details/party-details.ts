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

  add(party) {

    if (party.name.length && party.description.length) {
      // insert parties (insecure way)
      Parties.update(party._id, {
        name: party.name,
        description: party.description
      });

      this.reset();
    }
  }

  reset() {
    this.party = this.originalParty;
  }

  onActivate() {
    this.party = Parties.find(this.partyId).fetch()[0];
    if (this.party) {
      this.originalParty = this.party;
      return true;
    }
  }
}