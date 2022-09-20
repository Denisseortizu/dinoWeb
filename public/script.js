
console.log('script.js Se cargo :)');
//import fetch from 'node-fetch';

document.querySelector('#btnLoad').addEventListener('click', () => {
	getDinoName();
});


async function getDinoName(){
    const response = await fetch('/dinoname');
	const data = await response.json();
	let dinoName = data.join(' ');
	console.log(dinoName);
	document.querySelector('#dinoName').textContent = dinoName;
	getDinoImage();
} 

async function getDinoImage(){
    const response = await fetch('/dinoimage');
	const data = await response.json();
	let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
	let dinoImageURL = dinoImage.thumbnailUrl
	let dinoImageAlt = dinoName;
	console.log(dinoImage);

	//Si ya hay una imagen existente, borrarla
	if(document.querySelector('#dinoImage')){
		document.querySelector('#dinoImage').remove();
	}


	//Create element image
	let img = document.createElement('img');
	img.id = 'dinoImage'
	img.src = dinoImageURL;
	img.alt = dinoImageAlt;
	document.getElementById('body').appendChild(img);
} 