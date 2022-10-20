import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Header from '../components/Header'
import Logo from '../components/Logo'
import Body from '../components/Body'
import Footer from '../components/Footer'

const WelcomeScreen = props => {
  const heightContainer = {
    total: 100,
    header: 8,
    logo: 30,
    footer: 10,
    body: function () {
      return this.total - this.header - this.footer - this.logo;
    },
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      resizeModel="cover"
      style={{
        flex: 1,
        // justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'column',
          flex: 100,
        }}>
        <Header heightHeader={heightContainer.header} style={styles.header}/>
        <Logo heightLogo={heightContainer.logo} style={styles.logo}/>
        <Body heightBody={heightContainer.body()} style={styles.body}/>
        <Footer heightFooter={heightContainer.footer} style={styles.footer}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
});


export default WelcomeScreen;