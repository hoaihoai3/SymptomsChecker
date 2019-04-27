import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  profileFetch,
  profileUpdate,
  passwordChanged,
  confirmPasswordChanged,
  oldPasswordChanged,
  changePassword
} from '../../actions';
import { Button, Spinner } from '../common';
import Detail from '../Profile/Detail';
import { ChangePassModal } from './ChangePassModal';
import { PasswordModal } from './PasswordModal';

class AccountPage extends Component {

  state = { showModal: false };

  componentWillMount() {
    this.props.profileFetch();
  }


  // onButtonPress() {
  //   const { email, password } = this.props;
  //
  //   this.props.loginUser({ email, password });
  // }
  onChangeCurrentPassword(text) {
    this.props.oldPasswordChanged(text);
  }

  onChangeNewPassword(text) {
    this.props.passwordChanged(text);
  }

  onChangeConfirmPassword(text) {
    this.props.confirmPasswordChanged(text);
  }

  changePassword() {
    const { oldPassword, password, confirmPassword } = this.props;
    this.props.changePassword({ oldPassword, password, confirmPassword });
  }

  renderSectionHeader(title) {
    return (
      <View style={styles.sectionHeaderContainerStyle}>
        <Text style={styles.sectionHeaderStyle}>{title}</Text>
      </View>
    );
  }

  renderProfileDetail(item, key) {
    switch (key) {
      case 1:
        return <Detail title='Name: ' item={item} />;
      case 2:
        return <Detail title='Email: ' item={item} />;
      default:
        return null;
    }
  }

  renderModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.changePassword.bind(this)}>
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
    const {
            containerStyle,
            listStyle,
            cardStyle,
            buttonContainerStyle
          } = styles;

    return (
      <View style={containerStyle}>
        <View style={listStyle}>
          <View style={cardStyle}>
            {this.renderSectionHeader('Account Information')}
            {this.renderProfileDetail(this.props.name, 1)}
            {this.renderProfileDetail(this.props.email, 2)}
          </View>
            <TouchableOpacity style={buttonContainerStyle} onPress={() => this.renderModal()}>
              <Text style={{ color: '#007aff', fontSize: 18 }}>Change Password</Text>
            </TouchableOpacity>

            <PasswordModal
              visible={this.state.showModal}
            />
        </View>
      </View>
    );
  }
}

// <ChangePassModal
//   visible={this.state.showModal}
//   error={this.renderError}
//   button={this.renderButton}
//   currentPassword={this.props.oldPassword}
//   newPassword={this.props.password}
//   confirmPassword={this.props.confirmPassword}
//   onChangeCurrentPassword={(text) => this.onChangeCurrentPassword(text)}
//   onChangeNewPassword={(text) => this.onChangeNewPassword(text)}
//   onChangeConfirmPassword={(text) => this.onChangeConfirmPassword(text)}
//   onIconPress={() => this.renderModal}
// />

const styles = {
 containerStyle: {
    flex: 1,
    backgroundColor: '#E8F8FF'
  },
  listStyle: {
    backgroundColor: '#E8F8FF',
    margin: 2,
    marginTop: 5,
    borderRadius: 3,
    padding: 2,
    borderColor: '#58595A',
    borderBottomWidth: 0
  },
  sectionHeaderStyle: {
    fontSize: 22,
    paddingLeft: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  sectionHeaderContainerStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#229AD5',
    height: 60,
  },
  itemContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E8F8FF',
    borderBottomWidth: 1,
    borderColor: '#F3F3F3'
  },
  cardStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
    marginBottom: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    shadowRadius: 5,
    shadowColor: '#000'
  },
  buttonContainerStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const mapStateToProps = ({ profile, auth }) => {
  const { name, email } = profile;
  const { user, oldPassword, password, confirmPassword, error, loading } = auth;

  return { name, email, user, oldPassword, password, confirmPassword, error, loading };
};

export default connect(mapStateToProps, {
  profileFetch,
  profileUpdate,
  passwordChanged,
  confirmPasswordChanged,
  oldPasswordChanged,
  changePassword
 })(AccountPage);
// export default ProfilePage;
