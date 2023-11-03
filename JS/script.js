"use strict";

function background(backgroundColor) {
	const body = document.querySelector(`body`);

	if (backgroundColor === 'blue') {
		document.body.style.backgroundColor = 'blue';
		//document.body.style.color = '#fff';
	} else if (backgroundColor === 'calamansi') {
		document.body.style.backgroundColor = '#FCFFA4';
		//document.body.style.color = 'green';
	} else if (backgroundColor === 'green') {
		document.body.style.backgroundColor = 'green';
		//document.body.style.color = 'pink';
	}
}
let backgroundColor = prompt(`Виберіть фон сторінки: green, calamansi, blue.`);
background(backgroundColor);


function textColor(color) {
	const bodyColor = document.body.querySelectorAll(`h1, ul`);

	if (color === `yellow`) {
		document.body.style.color = `yellow`;
	}
	else if (color === `white`) {
		document.body.style.color = `white`;
	}
	else if (color === `gray`) {
		document.body.style.color = `gray`;
	}
}
let color = prompt('Виберіть колір тексту: yellow, white, gray.');
textColor(color);

/*
function fontSize(size) {
	const mySize = document.body.querySelector(`ul`);

	if (size === `13px`) {
		document.body.style.fontSize = `13px`;
	}
	else if (size === `19px`) {
			document.body.style.fontSize = `19px`;
		}
	else if (size === `50px`) {
		document.body.style.fontSize = `50px`;
	}
}

let size = prompt(`Виберіть розмір шрифта: 13px, 19px, 50px.`);
fontSize(size);
*/


function fontSize(size) {
	const mySize = document.querySelectorAll(`ul, ol`);

	mySize.forEach(font => {
		font.style.fontSize = size;
	});
}

let size = prompt(`Виберіть розмір шрифта: 6px  13px  26px  50px.`);
fontSize(size);


function listStyleType(listStyle) {
	const lists = document.querySelectorAll(`ul, ol`);

	lists.forEach(list => {
		list.style.listStyleType = listStyle;
	});
}

let listStyle = prompt(`Виберіть маркер: decimal, square, upper-roman`);
listStyleType(listStyle);


