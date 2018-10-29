// load userData from friends.js
const friends = require("../data/friends.js");

// routes for reading and creating user data exported for use
module.exports = (app) => {

    // set up api page to hold data object    
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

    // matchmaking action happens on user create
    app.post('/api/friends', (req, res) => {
        let newuser = req.body; //create new user record from $.post action on survey

        //isolate array of user score number values
        let userScoresArr = newuser.scores.map(num => {
            return parseInt(num);
        });
                
        let allDiffArr = []; // blank arr for holding scored val differnces

        //iterate over objects from friendsArray in friends.js
        for (var i = 0 ; i < friends.length ; i++) {
            // 0 sum counter for scored diff values
            let sumDiff = 0;
            //isolate array of potential match score number values
            let compScoresArr = friends[i].scores.map(num => {
                return parseInt(num)
            });
            //within each iteration of friends data loop through userScores
            for (var j = 0 ; j < userScoresArr.length ; j++) {
                //find absolute value diff and add it to sumDiff counter
                sumDiff += Math.abs( userScoresArr[j] - compScoresArr[j] );
            }
            // push the final total to arr | diff val index matches user index 
            allDiffArr.push(sumDiff);
        }

        // compare results of each calculated iteration to find best match (lowest diff value)
        let highMatchVal = 1000; // high enough number that first time always works
        let highMatchIndex = 0; // set to zero to start and initialize numvar
        for ( var i = 0 ; i < allDiffArr.length ; i++ ) {
            if (allDiffArr[i] < highMatchVal ) {
                //update values with best best match info
                highMatchVal = allDiffArr[i];
                highMatchIndex = i;
            }
        }
        
        //push new user info to all users info in app/data/friends.js
        friends.push(newuser);

        //return matched user data object
        res.json(friends[highMatchIndex]);
    })
}
