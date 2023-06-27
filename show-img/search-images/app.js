const accessKey = 'c1AyFGssGbz-WTxW49ptew1E-jPh4NYKhkXKxawPNg8';

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('searchBox');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('showMore');

let keyword = '';
let page = 1;

async function searchImage() {
	keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;

	const response = await fetch(url);
	const data = await response.json();

	if (page === 1) {
		searchResult.innerHTML = '';
	}

	const results = data.results;

	results.map((result) => {
		const image = document.createElement('img');
		image.src = result.urls.small;
		const imgLink = document.createElement('a');
		imgLink.href = result.links.html;
		imgLink.target = '_blank';

		imgLink.appendChild(image);
		searchResult.appendChild(imgLink);
	});
	showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', function (e) {
	e.preventDefault();
	page = 1;
	searchImage();
});

showMoreBtn.addEventListener('click', () => {
	page++;
	searchImage();
});
