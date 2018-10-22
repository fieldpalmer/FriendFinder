// require dependencies
const express = require('express');
const path = require('path');

// set up express server

const app = express();
const PORT = process.env.PORT || 3000 ;

// enable data parsing on exprdss app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//make the server listen for action 

app.listen(PORT, () => {
    console.log('App listening on port' + PORT );
});