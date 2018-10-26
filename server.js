// require dependencies
const express = require('express');

// set up express server to run on heroku-compatibile port or 3000
const app = express();
const PORT = process.env.PORT || 3000 ;

// enable data parsing on express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// retrieve routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//make the server listen for action 
app.listen(PORT, () => {
    console.log('App listening on port' + PORT );
});

