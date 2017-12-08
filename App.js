/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './src/HomePage/index.js';

const instructions = Platform.select({
  ios: 'App running in iOS\n',
  android: 'App running in Android\n',
});

export default class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return <HomePage />;
    // return (
    //   <View>
    //     <Text> Hi </Text>
    //   </View>
    // );
  }
};