import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';
import {PartiesForm} from 'client/parties-form/parties-form';

@Component({
  selector: 'parties-list'
})
@View({
  templateUrl: 'client/parties-list/parties-list.ng.html',
  directives: [NgFor, routerDirectives, PartiesForm]
})
export class PartiesList {
  parties: IParty[];
  constructor() {
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }
  remove(party) {
    Parties.remove(party._id);
  }
}