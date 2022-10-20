import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const Logo = props => {
  const {heightBody, style} = props;

  return (
    <View
      style={{
        flex: heightBody,
      }}>
      <View>
        <Text style={{color: 'white'}}>Body</Text>
        <TouchableOpacity
          style={styles.button}
          >
          <Text style={{color: 'white'}}>Influencer</Text>
          {/* <Icon name="comments" size={30} color="#900" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
});


export default Logo;
