
require('dotenv').config();
console.log(process.env);
const express = require('express');
const app = express();
const port = 3000;
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/dinoname', async (request, response) => {
	const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1');
	const dinoNameResponse = await fetchApi.json();
	console.log(dinoNameResponse);
	response.json(dinoNameResponse[0]);
});

app.get('/dinoimage', async (request, response) => {

	const fetchApi = await fetch(
		'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20',
		{
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.API_KEY,
		    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
			},
		}
	);
	const dinoImageResponse = await fetchApi.json();
	console.log(dinoImageResponse);
	response.json(dinoImageResponse);
});

