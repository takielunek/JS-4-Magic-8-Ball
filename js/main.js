const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
	'Tak!',
	'Nie.',
	'Może.',
	'Ciężko powiedzieć...',
	'Nie chcesz znać odpowiedzi na to pytanie...',
	'Nie wiem ale się dowiem.',
	'Wiem tyle co ty.',
	'Tak mi się wydaje.',
	'A jak myślisz?',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswear();
		error.textContent = '';
		ball.classList.remove('shake-animation');
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".';
		answer.textContent = '';
		ball.classList.remove('shake-animation');
	} else {
		error.textContent = 'Musisz zadać jakieś pytanie.';
		answer.textContent = '';
		ball.classList.remove('shake-animation');
	}
};

const generateAnswear = () => {
	const number = Math.floor(Math.random() * 9);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

ball.addEventListener('click', generateAnswear);
