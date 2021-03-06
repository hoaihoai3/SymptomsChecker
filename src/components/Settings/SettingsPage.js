import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';
import { logOutUser } from '../../actions';
import { Confirm } from '../common/Confirm';

class SettingsPage extends Component {

  state = { showModal: false }

  componentWillUnmount(state) {
    this.setState({ ...state });
  }

  onAccept() {
    this.setState({ showModal: false });
    this.props.logOutUser(this.props.user);
  }

  onDecline() {
    this.setState({ showModal: false });
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

      <View style={styles.screenStyle}>
        <View style={styles.cardStyle}>
          <View style={styles.buttonContainerStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={Actions.account}>
              <Icon name="user" style={styles.iconStyle}>
                <Text>  Account Settings</Text>
              </Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainerStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={Actions.about}>
              <Icon name="info" style={styles.iconStyle}>
                <Text>  About Us</Text>
              </Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainerStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={Actions.useTerms}>
              <Icon name="book" style={styles.iconStyle}>
                <Text style={{ fontSize: 18 }}>  Terms of Use & Privacy Policy</Text>
              </Icon>
            </TouchableOpacity>
          </View>
        </View>

        {this.renderError()}

        <View
        style={
          [styles.buttonContainerStyle,
             { borderRadius: 30, marginTop: 40, alignItems: 'center', height: 45 }]}
        >
          <TouchableOpacity
          style={styles.logOutButtonStyle}
          onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            <Icon name="sign-out" style={[styles.iconStyle, { color: '#007aff' }]}>
              <Text> Log Out</Text>
            </Icon>
          </TouchableOpacity>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
          Continue to log out?
        </Confirm>

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
  cardStyle: {
    backgroundColor: '#E8F8FF',
    margin: 2,
    marginTop: 20,
    borderRadius: 5,
    padding: 2,
    borderColor: '#58595A',
    borderBottomWidth: 0
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#229AD5'
  },
  buttonContainerStyle: {
    marginTop: 20,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
  },
  buttonStyle: {
    flex: 1,
    marginRight: 10,
    paddingLeft: 20,
    justifyContent: 'center',
    width: 300,
    height: 50
  },
  iconStyle: {
    fontSize: 19,
    color: '#58595A'
  },
  logOutButtonStyle: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { user, error } = auth;

  return { user, error };
};

export default connect(mapStateToProps, { logOutUser })(SettingsPage);
