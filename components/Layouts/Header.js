import React from 'react';
import {View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {
  const {heightHeader, style} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        flex: heightHeader,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginStart: 10,
          alignItems: 'center',
          marginEnd: 10,
        }}>
        <Image
          source={require('~/assets/icons/fire.png')}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text style={{color: 'white', marginStart: 10}}>Supez</Text>
        <View
          style={{
            flex: 1,
          }}
        />
        <Image
          source={require('~/assets/icons/question.png')}
          style={{
            width: 20,
            height: 20,
            tintColor: 'white',
            marginEnd: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
