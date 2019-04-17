import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button, CardSection, Card } from '../common';
import { emailChanged, passwordChanged, goToLogIn, goToSignUp } from '../../actions';

class WelcomePage extends Component {

  goToSignUp() {
    this.props.goToSignUp();
  }

  goToLogIn() {
    this.props.goToLogIn();
  }

  render() {
    return (

      <View style={styles.screenStyle}>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../../img/blood-analysis.png')}
          />
        </View>

        <View>
          <Text style={styles.titleStyle}>Symptom Checker</Text>
        </View>

        <View style={styles.gapStyle} />

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.goToLogIn.bind(this)}>
              <Text style={styles.buttonTextStyle}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.goToSignUp.bind(this)}>
              <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = {
  screenStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F8FF',
    flex: 1,
  },
  viewStyle: {
    marginTop: 20,
    width: 150,
    height: 150,
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
  gapStyle: {
    marginBottom: 50
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#229AD5',
    // fontFamily: 'sans-serif'
  },
  buttonContainerStyle: {
    marginTop: 5,
    padding: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
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
  buttonTextStyle: {
    fontSize: 20,
    color: '#58595A'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, goToLogIn, goToSignUp })(WelcomePage);
