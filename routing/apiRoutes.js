// load userData from friends.js
const friends = require("../data/friends.js");

// api routes for getting and posting user data

module.exports = (app) => {
    
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    
    app.post('/api/friends', (req, res) => {
        let newuser = req.body;
        //set up a route for each user to be a profile page futur dev
        // newuser.routeName = newuser.name.replace(/\s+/g, '').toLowerCase();
        console.log(newuser);
        //push new user info to all users info in friends array in app/data/friends.js
        friends.push(newuser);
        res.json(newuser);
    })
}
