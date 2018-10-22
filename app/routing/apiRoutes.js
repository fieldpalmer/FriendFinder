// api routes for getting and posting user data

app.get('/api/friends', (req, res) => {
    return res.json(friends)
})

app.post('/api/friends', (req, res) => {
    let newUser = req.body;
    //set up a route for each user to be a profile page futur dev
    newUser.routeName = newUser.name.replace(/\s+/g, '').toLowerCase();
    console.log(newUser);
    //push new user info to all users info in friends array in app/data/friends.js
    friends.push(newUser);
    res.json(newUser);
})