let signinBtn = document.querySelector('.signinBtn');
let signupBtn = document.querySelector('.signupBtn');
let body = document.querySelector('body');

signupBtn.onclick = function () {
	body.classList.add('side');
};

signinBtn.onclick = function () {
	body.classList.remove('side');
};
