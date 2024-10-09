class WeatherService {
    async getData() {
      const api = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Manado&appid=e6a764bab35fab7cd11c0e19355217b9&units=metric');
      const weather = await api.json();
  
      return weather;
    }
  
    async getForecast() {
      const api = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Sleman&appid=a7e76f8cdd2eb1cd27c95b2c25738582&units=metric');
      const weather = await api.json();
      console.log('Memanggil API')
      return weather;
    }
  }
  
  export default WeatherService;