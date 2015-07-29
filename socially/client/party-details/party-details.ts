import {Component, View, Inject, NgFor} from 'angular2/angular2';
import {RouteParams, routerDirectives} from 'angular2/router';
import {formDirectives} from 'angular2/angular2';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'party-details',
  viewInjector: [PartyService]
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [routerDirectives, formDirectives, NgFor]
})
export class PartyDetails {
  partyId: string;
  resetToParty: IParty;
  party: IParty;
  partyService:PartyService;
  users;
  constructor(@Inject(RouteParams) routeParams:RouteParams, @Inject(PartyService) partyService:PartyService) {
    this.partyId = routeParams.params.partyId;
    this.partyService = partyService;
  }

  add(party) {

    if (party.name.length && party.description.length) {
      this.partyService.update(party);
      this.resetToParty = _.clone(party);
    }
  }

  reset(event) {
    // stops field reset
    event.preventDefault();
    this.party = this.resetToParty;
  }

  canActivate() {
    if (!Meteor.userId()) {
      alert('Please login first');
      return false;
    }
    return true;
  }

  onActivate() {
    Meteor.subscribe('parties', this.partyId);
    this.users = Meteor.users;
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

