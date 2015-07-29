Meteor.publish("parties", function () {
  return Parties.find({
    $or:[
      {$and:[
        {"isPublic": true},
        {"isPublic": {$exists: true}}
      ]},
      {$and:[
        {user: this.userId},
        {user: {$exists: true}}
      ]}
    ]});
});