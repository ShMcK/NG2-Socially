declare var Parties:Mongo.Collection<IParty>;

interface IParty {
  name: string;
  description: string;
}