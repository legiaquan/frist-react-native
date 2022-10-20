import React from 'react';
import {Text, View} from 'react-native';

const HelloWorld = props => {
  const {message} = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{message}</Text>
    </View>
  );
};

export default HelloWorld;
