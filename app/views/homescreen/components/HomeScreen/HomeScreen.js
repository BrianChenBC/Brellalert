import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Overview } from '../Overview/Overview';

// TODO: weatherData.weather is an array of clear, sunny, etc

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: 'new york',
      weatherData: null,
      units: 'metric',
    }
  }

  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=1002bfe286fdaa48398cb22c723ab03f`;

    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`${res.status} (${res.statusText})`);
        }
      })
      .then((weatherData) => {
        this.setState({ weatherData });
      })
      .catch(err => global.console.error(`Error in fetch weather data: ${err.message}`));
  }

  render() {
    if (!this.state.weatherData) return null;

    const weatherData = this.state.weatherData;

    return (
      <View style={styles.HomeScreen}>
        <Overview
          city={weatherData.name}
          main={weatherData.weather[0].main}
          temp={weatherData.main.temp}
          minTemp={weatherData.main.temp_min}
          maxTemp={weatherData.main.temp_max}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
