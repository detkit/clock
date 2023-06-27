const sec = document.getElementById('seconds-hand');
const min = document.getElementById('minutes-hand');
const hour = document.getElementById('hours-hand');

		

function getTime() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const timeInterval = 6;

	sec.style.transform = 'rotate(' + seconds * timeInterval + 'deg)';
	min.style.transform =
		'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)';
	hour.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
}

setInterval(getTime, 100);
