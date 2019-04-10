import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from './common';
import { emailChanged, passwordChanged, signUpUser } from '../actions';

class SignUpForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.signUpUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: '#E8F8FF' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
      <View style={styles.viewStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../img/blood-analysis.png')}
        />
      </View>

      <View>
        <Text style={styles.titleStyle}>Sign Up</Text>
      </View>

      <View style={styles.gapStyle} />

        <View>
            <CardSection>
              <Input
                label='Email'
                autoCapitalize="none"
                placeholder='user@gmail.com'
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                autoCapitalize="none"
                label='Password'
                placeholder='password'
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            {this.renderError()}

            <CardSection>
              {this.renderButton()}
            </CardSection>
        </View>
      </View>

    );
  }
}

const styles = {
  viewStyle: {
    alignSelf: 'center',
    marginTop: 50,
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
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#229AD5'
  },
  containerStyle: {
    backgroundColor: '#E8F8FF',
    flex: 1
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, signUpUser })(SignUpForm);
