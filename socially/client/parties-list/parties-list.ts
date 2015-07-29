import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';
import {PartiesForm} from 'client/parties-form/parties-form';
import {PartyService} from 'client/lib/party-service';

@Component({
  selector: 'parties-list',
  viewInjector: [PartyService]
})
@View({
  templateUrl: 'client/parties-list/parties-list.ng.html',
  directives: [NgFor, routerDirectives, PartiesForm]
})
export class PartiesList {
  parties: IParty[];
  partyService: PartyService;

  constructor(@Inject(PartyService) partyService:PartyService) {
    this.partyService = partyService;
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }
  remove(party) {
    this.partyService.remove(party._id)
  }
}