import {bind, Inject} from 'angular2/angular2';

export class PartyService {
  // note: these methods are still client-side and thus insecure

  add(party:IParty) {
    Parties.insert({
      name: party.name,
      description: party.description,
      user: Meteor.userId()
    });
  }

  update(party:IParty) {
    Parties.update(party._id, {
      name: party.name,
      description: party.description,
      user: Meteor.userId()
    });
  }

  remove(partyId:string) {
    Parties.remove(partyId);
  }
}