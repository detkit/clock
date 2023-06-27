const hrs = document.getElementById('hrs');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

setInterval(() => {
	const currentTime = new Date();

	hrs.innerHTML =
		(currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
	mins.innerHTML =
		(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
	secs.innerHTML =
		(currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000);
