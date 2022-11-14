const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
	e.target.classList.toggle('red');
});