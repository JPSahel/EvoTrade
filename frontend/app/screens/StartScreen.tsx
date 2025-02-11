import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type StartScreenProps = {
  navigation: NavigationProp<any>;
};

const StartScreen = ({ navigation }: StartScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../../assets/images/placeholder.png')} /> 
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#000", // Black background
  },
  iconContainer: {
    marginBottom: 80,
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fff',
  },
    buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    },

});

export default StartScreen;