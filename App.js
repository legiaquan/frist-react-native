/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import HelloWorld from '~/components/HelloWorld';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const App: () => Node = () => {

  return (
    <ScrollView>
      <HelloWorld message={"Hello world!"} />
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
       }}
        defaultValue="You can type in me"
      />
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>Scrolling down</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>What's the best</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>Framework around?</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 80}}>React Native</Text>
    </ScrollView>
  );
};

export default App;
