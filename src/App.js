import React, { Component } from 'react';
import './App.css';
import Skeleton from './components/Skeleton';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import Follow from './components/Follow';

const API_KEY = "f4537dfb12e2d8f63b7440be00602ffc";


class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    descicon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);

      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        descicon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        descicon: undefined,
        error: "Please enter valid data"
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
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          descicon={this.state.descicon}
          error={this.state.error}
        />
        <Follow />
      </div>
    );
  }
}

export default App;
