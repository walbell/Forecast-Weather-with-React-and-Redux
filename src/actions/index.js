import axios from 'axios';

const API_KEY = 'edf0553c13a021fe369d66d2192e39b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	console.log('Request', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}