import {Component, View, Inject} from 'angular2/angular2';
import {RouteParams, routerDirectives} from 'angular2/router';
import {formDirectives} from 'angular2/angular2';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'party-details',
  viewInjector: [PartyService]
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [routerDirectives, formDirectives]
})
export class PartyDetails {
  partyId: string;
  resetToParty: IParty;
  party: IParty;
  partyService:PartyService;
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

