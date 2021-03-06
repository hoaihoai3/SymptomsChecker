import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class LoginForm extends Component {
  componentWillUnmount(state) {
    this.setState({ ...state, email: '', password: '' });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
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
            source={require('../../img/blood-analysis.png')}
          />
        </View>

        <View>
          <Text style={styles.titleStyle}>Log In</Text>
        </View>

        <View style={styles.gapStyle} />

        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <CardSection>
              <Input
                autoCapitalize="none"
                placeholder='Email'
                maxLength={254}
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                autoCapitalize="none"
                placeholder='Password'
                maxLength={20}
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            <View style={{ marginBottom: 20 }} />

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
    backgroundColor: '#E8F8FF'
  },
  imageStyle: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    tintColor: '#04699B',
  },
  gapStyle: {
    marginBottom: 30
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
