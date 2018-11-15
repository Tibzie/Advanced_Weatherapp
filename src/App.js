import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';


import Skeleton from './components/Skeleton';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import Follow from './components/Follow';

library.add(faTemperatureLow);
library.add(faTemperatureHigh);


const API_KEY = "f4537dfb12e2d8f63b7440be00602ffc";


class App extends Component {

  state = {
    city: undefined,
    temperature: undefined,
    condition: undefined,
    description: undefined,
    descicon: undefined,
    humidity: undefined,
    temp_min: undefined,
    temp_max: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);

      this.setState({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        descicon: data.weather[0].icon,
        humidity: data.main.humidity,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        condition: undefined,
        description: undefined,
        descicon: undefined,
        humidity: undefined,
        temp_min: undefined,
        temp_max: undefined,
        error: "Please enter a valid city."
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Skeleton />
        <SearchForm getWeather = {this.getWeather}/>
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          condition={this.state.condition}
          description={this.state.description}
          descicon={this.state.descicon}
          humidity={this.state.humidity}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          error={this.state.error}
        />
        <Follow />
      </div>
    );
  }
}

export default App;
