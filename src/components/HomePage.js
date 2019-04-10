import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Navigator, NativeModules, Image, TouchableOpacity } from 'react-native';
import { Button, CardSection, Card } from './common';

class Homepage extends Component {

  onSearch() {
    console.log('Searching symptoms');
  }

  render() {
    return (

      <View style={styles.screenStyle}>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../img/blood-analysis.png')}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Symptom Checker</Text>
        </View>
        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onSearch.bind(this)}>
            <Icon name="search" style={styles.iconStyle}>
              <Text>  Check Symptoms</Text>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = {
  screenStyle: {
    alignItems: 'center',
    backgroundColor: '#E8F8FF',
    flex: 1,
  },
  viewStyle: {
    marginTop: 100,
    width: 155,
    height: 155,
    padding: 5,
    backgroundColor: '#E8F8FF',
  },
  imageStyle: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    tintColor: '#04699B',

  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#229AD5'
  },
  buttonContainerStyle: {
    marginTop: 5,
    padding: 10,
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#229AD5',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50
  },
  iconStyle: {
    fontSize: 20,
    color: '#58595A'
  }
};

export default Homepage;
