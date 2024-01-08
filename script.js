async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Dallas&minDate=2024-01-09&maxDate=2024-01-11&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fa13f8f67msh783c4eafdb18ee8p14a60bjsn287fc9e75181',
		'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

const response = await fetch(url, options);
const result = await response.json();

document.getElementById("concerts").innerHTML = result.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData();