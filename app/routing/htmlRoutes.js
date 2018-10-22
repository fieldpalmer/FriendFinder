// html page routes

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', (req, res) => { 
    res.sendFile(path.join(__dirname, 'survey.html'));
});