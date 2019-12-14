app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });