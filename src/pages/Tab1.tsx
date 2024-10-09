import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import WeatherService from '../services/WeatherService';

const Tab1: React.FC = () => {
  const weatherData = new WeatherService();
  const [weather, setWeather]: [any, any] = useState({
    lokasi: '',
    suhu: '',
    keterangan: '',
    icon: ''
  })

  useEffect(() => {
    weatherData.getData().then(data => {
      setWeather({
        lokasi: data.name,
        suhu: data.main.temp,
        ket: `${data.weather[0].main} (${data.weather[0].description})`,
        icon: data.weather[0].icon
      });
      console.log(data)
    })
  }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aplikasi Cuaca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <h1>{weather.suhu}</h1>
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.suhu}/>
          <h2>{weather.lokasi}</h2>
          <p>{weather.keterangan}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
