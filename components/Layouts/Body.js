import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Logo = props => {
  const {heightBody, style} = props;

  return (
    <View
      style={{
        flex: heightBody,
      }}>
      <View>
        <Text style={{color: 'white'}}>Bodyq312qeqwadsaeqw12312s</Text>
        
      </View>
    </View>
  );
};



export default Logo;
