import fetch from 'node-fetch';
console.log('script.js Se cargo :)');

console.log('Hola');
getDinoName();

console.log('No se cargó funcion :(');

async function getDinoName(){
    console.log('Se carga funcion <3');
    const response = await fetch('/');
	const data = await response.json();
	let dinoName = data[0].join(' ');
	console.log(dinoName);
} 