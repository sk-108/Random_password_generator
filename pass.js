const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if(!password) { return; }

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
    if(length >= 12 && length <= 32){
	resultEl.innerText = generatePassword(length);
    }
    else{
        alert('Password Length is not between 12 and 32. Make sure your password length is Entered according to the instructions given. ');
    }
});

function generatePassword(length) {
	let generatedPassword = '';
	generatedPassword += getRandomLower();
	generatedPassword += getRandomSymbol();
	generatedPassword += getRandomUpper();
	generatedPassword += getRandomNumber();
	generatedPassword += getRandomLower();
    for(let i=1; i<length-5; i+=1) {
		generatedPassword += getRandomValue();
		};
    generatedPassword += getRandomUpper();
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomValue() {
	const val = '~!@#$%^&*()_-+=|\}]{[":;?/>.<,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789'
	return val[Math.floor(Math.random() * val.length)];
}
function getRandomSymbol() {
	const symbols = '`~!@#$%^&*()_-+=|\}]{[":;?/>.<,'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

