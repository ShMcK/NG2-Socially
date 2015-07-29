export class PartyService {
  // note: these methods are still client-side and thus insecure

  add(party:IParty) {
    Parties.insert(this.getPartyObject(party));
  }

  update(party:IParty) {
    Parties.update(party._id, this.getPartyObject(party));
  }

  remove(partyId:string) {
    Parties.remove(partyId);
  }

  getPartyObject(party) {
    return {
      name: party.name,
      description: party.description,
      user: Meteor.userId()
    };
  }
}