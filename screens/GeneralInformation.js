// screens/GeneralInformationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GeneralInformation = () => {
  return (
    <View style={styles.container}>
      <Text>General Information About Albinism</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GeneralInformation;