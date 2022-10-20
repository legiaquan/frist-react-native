import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Logo = props => {
  const {heightBody, style} = props;

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{color: '#ff421d'}}>Influencer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Logo;
