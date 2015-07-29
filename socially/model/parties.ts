Parties = new Mongo.Collection("parties");

Parties.allow({
  insert: function (party) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  },
  update: function (party, fields, modifier) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  },
  remove: function (party) {
    var userId = Meteor.userId();
    return userId && party.owner === userId;
  }
});