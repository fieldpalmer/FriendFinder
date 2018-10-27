// load userData from friends.js
const friends = require("../data/friends.js");

// api routes for getting and posting user data exported for use

module.exports = (app) => {
    
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    
    app.post('/api/friends', (req, res) => {
        let totalDiffArr = [];
        let newuser = req.body;
        let userScores = newuser.scores.map( score => {
            return parseInt(score);
        })
        console.log(newuser);
        console.log(userScores);
        
        for (var i = 0 ; i < friends.length ; i++) {

            let sumDiff = 0;
            let compScores = friends[i].scores.map( score => {
                return parseInt(score);
            });
            
            for ( var j = 0 ; j < userScores.length ; j++) {
                sumDiff += Math.abs(userScores[j] - compScores[j]);
            }

            totalDiffArr.push(sumDiff);

        }

        //find lowest diff to find match and save the index
        let bestMatchVal = 1000000 ;
        let bestMatchIndex = 0;
        for ( var i = 0 ; i < totalDiffArr.length ; i++ ) {
            if (totalDiffArr[i] < bestMatchVal) {
                bestMatchVal = totalDiffArr[i];
                bestMatchIndex = i;
            }
        }

        //push new user info to all users info in friends array in app/data/friends.js
        friends.push(newuser);
        res.json(friends[bestMatchIndex]);
    })
}
