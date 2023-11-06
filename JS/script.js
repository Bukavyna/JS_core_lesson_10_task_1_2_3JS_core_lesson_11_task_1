"use strict";
/*
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
*/
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

/*
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
*/


//1 Задайте колір сторінки
function backgroundColorBody(body) {
	const baccolbod = document.querySelectorAll(`body`);

	baccolbod.forEach(bcb => {
		bcb.style.backgroundColor = body
	})
}

let body = prompt(`Задайте колір сторінки. Наприклад: `);
backgroundColorBody(body);


//2 Оберіть розташування заголовка
function headerLocation(locat) {
	const headloc = document.querySelectorAll(`h1`);

	headloc.forEach(hl => {
		hl.style.textAlign = locat
	})
}

let locat = prompt(`Оберіть розташування заголовка. Наприклад: center  left  right`);
headerLocation(locat);


//3 Задайте колір для заголовка
function headerColor(col) {
	const headcol = document.querySelectorAll(`h1`);

	for (let i=0; i<headcol.length; i++) {
		headcol[i].style.color = col
	}
}

let col = prompt(`Задайте колір для тегу "h1"`);
headerColor(col);


//4 Задайте стиль шрифта для заголовка
function fontFamily(family) {
	const fontfam = document.querySelectorAll(`h1`);

	for (let i=0; i<fontfam.length; i++) {
		fontfam[i].style.fontStyle = family
	}
}

let family = prompt(`Задайте стиль шрифта для заголовка`);
fontFamily(family);


//5 Задайте фон тега "ул"
function pageBackground(style) {
	const sstt = document.querySelectorAll(`ul`);

	sstt.forEach(past => {
		past.style.backgroundColor = style;
	})
}
let style = prompt(`Задайте фон тега "ул". Наприклад: Calamansi (#FCFFA4); Ghost white (#F8F8FF); і т.д`);
pageBackground(style);


//6 Задайте колір шрифта для тега 'ол'
function styleColor(color) {
	let col = document.querySelectorAll(`ul, ol`);

	for (let i=0; i<col.length; i++) {
		col[i].style.color = color;
	}
}

let color = prompt(`Задайте колір шрифта для тега 'ол'`);
styleColor(color);


//7 Задайте розмір шрифта для тега 'ол'
function fontSize(size) {
	const ff = document.querySelectorAll(`ul, ol`);

	ff.forEach(fs => {
		fs.style.fontSize = size
	})
}

let size = prompt(`Задайте розмір шрифта для тега 'ол' в пікселях`);
fontSize(size);


//8 Задайте товщину шрифта у тезі 'ол'
function fontWeight(weight) {
	const fw = document.querySelectorAll(`ul, ol`);

	for (let i=0; i<fw.length; i++) {
		fw[i].style.fontWeight = weight;
	}
}

let weight = prompt(`Задайте розмір шрифта для тега 'ol'`);
fontWeight(weight);


//9 Задайте маркер для елементів
function listStyleType(listStyle) {
	const list = document.querySelectorAll(`ul, ol`);

	list.forEach(lst => {
		lst.style.listStyleType = listStyle
	})
}

let listStyle = prompt(`Виберіть маркер: decimal, square, upper-roman`);
listStyleType(listStyle);


let ll = document.getElementsByTagName(`a`);

let input = prompt(`Введіть посилання`);

for (let i=0; i<ll.length; i++) {
	ll[i].href = input;
	ll[i].target = `_blank`;
	ll[i].textContent = input;
}
