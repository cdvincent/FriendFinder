var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
      res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    let newFriend = req.body;
    let newFriendTotal = 0;

    for (let i = 0; i < newFriend.scores.length; i++) {
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
      newFriendTotal += newFriend.scores[i];
    }
    

    let bestFriend = 49;
    let index = 0;
    let friendTotal = 0;
    
    for (let j = 0; j < friends.length; j++) {
      let friendDiff = 0;
      for (let k = 0; k < friends[j].scores.length; k++) {
        friendTotal += friends[j].scores[k];
        friendDiff = Math.abs(newFriendTotal - friendTotal);
      }
      if (friendDiff <= bestFriend) {
        bestFriend = friendDiff;
        index = j;
      }
      friendTotal = 0;
    }
    friends.push(newFriend);
    res.json(friends[index]);
  });
}