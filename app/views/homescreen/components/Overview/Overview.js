import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  city: PropTypes.string,
  main: PropTypes.string, //clear, sunny, etc
  temp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
};

// TODO: Default propTypes

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const Overview = ({city, main, temp, minTemp, maxTemp}) => {
  const dayOfWeek = weekdays[new Date().getDay()];

  return (
    <View style={styles.Overview}>
      <Text style={styles.Overview__city}>
        Need an umbrella
      </Text>
      <Text style={styles.Overview__main}>{main}</Text>
      <Text style={styles.Overview__temp}>{Math.round(temp)}</Text>

      <View style={styles.Overview__summary}>
        <Text style={styles.Overview__summary__today}>{`${dayOfWeek} TODAY`}</Text>
        <Text style={styles.Overview__summary__maxTemp}>{Math.round(maxTemp)}</Text>
        <Text style={styles.Overview__summary__minTemp}>{Math.round(minTemp)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Overview: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF',
  },
  Overview__city: {
    fontSize: 40,
    color: '#fff',
  },
  Overview__main: {
    fontSize: 20,
    color: '#fff',
  },
  Overview__temp: {
    fontSize: 80,
    color: '#fff',
  },
  Overview__summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  Overview__summary__today: {
    flex: 4,
  },
  Overview__summary__maxTemp: {
    flex: 1,
  },
  Overview__summary__minTemp: {
    flex: 1,
  },
});
