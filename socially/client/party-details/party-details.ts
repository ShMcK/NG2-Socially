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
  partyId: string;
  resetToParty: IParty;
  party: IParty;
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

      this.resetToParty = _.clone(party);
    }
  }

  reset(event) {
    // stops field reset
    event.preventDefault();
    this.party = this.resetToParty;
  }

  onActivate() {
    this.party = Parties.find(this.partyId).fetch()[0];
    if (this.party) {
      this.resetToParty = _.clone(this.party);
      return true;
    }
  }
  canDeactivate() {
    // not working, not sure why.
    if (_.isEqual(this.party, this.resetToParty)) {
      return confirm("Are you sure you want to leave without saving?");
    }
  }
}

