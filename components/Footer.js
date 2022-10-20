import React from 'react';
import {View, Text, Image} from 'react-native';

const Logo = props => {
  const {heightFooter, style} = props;

  return (
    <View
      style={{
        flex: heightFooter,
      }}>
      <Text style={{color: 'white'}}>Foter</Text>
    </View>
  );
};

export default Logo;
