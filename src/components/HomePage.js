import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { profileFetch } from '../actions';


class Homepage extends Component {

  componentWillMount() {
    this.props.profileFetch();
  }

  componentDidMount() {

  }

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

        <View style={{ marginTop: 10 }}>
          <Text style={styles.textStyle}>Hi {this.props.name}!</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={[styles.textStyle, { fontSize: 25 }]}>What can I help you?</Text>
        </View>

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={Actions.check}>
            <Icon name="search" style={styles.iconStyle}>
              <Text>  Check Symptoms</Text>
            </Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={Actions.history}>
            <Icon name="history" style={styles.iconStyle}>
              <Text>  Search History</Text>
            </Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={Actions.profile}>
            <Icon name="book" style={styles.iconStyle}>
              <Text>  Medical Profile</Text>
            </Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={Actions.settings}>
            <Icon name="gear" style={styles.iconStyle}>
              <Text>  Settings</Text>
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
    marginTop: 50,
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
    color: '#229AD5'
  },
  buttonContainerStyle: {
    marginTop: 30,
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
  iconStyle: {
    fontSize: 20,
    color: '#58595A'
  }
};

const mapStateToProps = ({ profile }) => {
  const { name } = profile;

  return { name };
};

export default connect(mapStateToProps, { profileFetch })(Homepage);
