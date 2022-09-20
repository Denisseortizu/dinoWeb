
console.log('script.js Se cargo :)');
//import fetch from 'node-fetch';

document.querySelector('#btnLoad').addEventListener('click', () => {

	//Si ya hay una imagen existente, borrarla
	if(document.querySelector('#dinoName')){
		document.querySelector('#dinoName').remove();
	}

	//Si ya hay una imagen existente, borrarla
	if(document.querySelector('#dinoImage')){
		document.querySelector('#dinoImage').remove();
	}
	getDinoImage();
	getDinoName();
});


async function getDinoName(){
    const response = await fetch('/dinoname');
	const data = await response.json();
	let dinoName = data.join(' ');
	console.log(dinoName);

	//Creamos div
	let dinoNameDiv = document.createElement('div');
	dinoNameDiv.id = 'dinoName';
	dinoNameDiv.textContent=dinoName;
	document.querySelector('#dinoWraper').appendChild(dinoNameDiv);
	
} 

async function getDinoImage(){
    const response = await fetch('/dinoimage');
	const data = await response.json();
	let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
	let dinoImageURL = dinoImage.thumbnailUrl
	let dinoImageAlt = dinoName;
	console.log(dinoImage);


	//Create element image
	let img = document.createElement('img');
	img.id = 'dinoImage'
	img.src = dinoImageURL;
	img.alt = dinoImageAlt;
	document.querySelector('#dinoWraper').appendChild(img);
} 