const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/dinoname', async(request, response)=> {
    //runn code stuff
    // Using Fetch API
    const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error('Where did all the dinosaurs go?'));

    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
});