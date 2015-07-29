declare var Parties:Mongo.Collection<IParty>;

interface IParty {
  _id: string;
  name: string;
  description: string;
  user: string;
}