async function fetchWeather() {
  try {
    const response = await fetch(`API KEY`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather date');
    }

    const data = await response.json();

    updateWeatherUI(data);
  } catch (error){
    console.error('Error fetching weather data:', error);
  }
}

function updateWeatherUI(data) {
  const weatherInfo = `
    <P>온도 : ${data.current.temp_c}</P>`
}