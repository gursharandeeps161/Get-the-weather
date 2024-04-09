// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Define the API key and city for the weather API request
    const apiKey = 'ba2d38e0c2cef0624c38c63587a81bfd'; 
    const city = 'Calgary';
    // Construct the API URL with the API key and city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch weather data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Extract temperature and weather description from the response data
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            // Construct weather information string
            const weatherInfo = `Temperature: ${temperature}°C, Description: ${weatherDescription}`;
            // Update the weather element on the webpage with the weather information
            document.getElementById('weather').textContent = weatherInfo;
        })
        .catch(error => {
            // Log error message if there's an error fetching weather data
            console.error('Error fetching weather data:', error);
            // Display error message on the webpage
            document.getElementById('weather').textContent = 'Failed to fetch weather data';
        });
});
