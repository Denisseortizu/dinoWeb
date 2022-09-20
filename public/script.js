
console.log('script.js Se cargo :)');
//import fetch from 'node-fetch';

getDinoName();


async function getDinoName(){
    const response = await fetch('/dinoname');
	const data = await response.json();
	let dinoName = data.join(' ');
	console.log(dinoName);
} 