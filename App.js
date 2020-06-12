import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Components/Header';
import List from './Components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Restaurant App" />
      <List />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }

});

export default App;
