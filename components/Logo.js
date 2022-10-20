import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Logo = props => {
  const {heightLogo, style} = props;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: heightLogo,
      }}>
      <Text style={styles.text_color}>Welcome</Text>
      <Image
        source={require('../assets/icons/organic.png')}
        style={{
          width: 100,
          height: 100,
          tintColor: 'white',
        }}/>
      <Text style={styles.text_color}>Please login your account!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text_color: {
        color: 'white',
    },
  });

export default Logo;
