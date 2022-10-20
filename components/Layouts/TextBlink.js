import React from 'react';
import {Text, View} from 'react-native';

const TextBlink = props => {
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

export default TextBlink;
