import React, { Component } from 'react';
import { Picker, View, Text, SectionList, ListItem } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { CardSection, Input, Button } from '../common';
import { profileFetch } from '../../actions';
import ProfileDetail from './Detail';

// import ListItem from './ListItem';

class ProfilePage extends Component {

  componentDidMount() {
    this.props.profileFetch();
  }

  movePage() {
    Actions.main();
  }

  renderSectionHeader(title) {
    return (
      <View style={styles.sectionHeaderContainerStyle}>
        <Text style={styles.sectionHeaderStyle}>{title}</Text>
      </View>
    );
  }

  renderProfileDetail(item) {
    switch (item) {
      // case 0 || '' || null:
      //  return <View style={styles.itemContainerStyle} />;
      case this.props.name:
        // console.log(index);
        return <ProfileDetail title='Name: ' item={item} />;
      case this.props.age:
        return <ProfileDetail title='Age: ' item={item} />;
      case this.props.height:
        return <ProfileDetail title='Height: ' item={item} unit='cm' />;
      case this.props.weight:
        return <ProfileDetail title='Weight: ' item={item} unit='kg' />;
      case this.props.bloodGroup:
        return <ProfileDetail title='Blood Group: ' item={item} />;
      case this.props.bloodGlucose:
        return <ProfileDetail title='Blood Glucose: ' item={item} unit='mmol/L' />;
      case this.props.bloodPressure:
        return <ProfileDetail title='Blood Pressure: ' item={item} unit='mmHg' />;
      case this.props.history:
        return <ProfileDetail item={item} />;
      case this.props.medication:
        return <ProfileDetail item={item} />;
      case this.props.allergies:
        return <ProfileDetail item={item} />;
      case this.props.gender:
        return <ProfileDetail title='Gender: ' item={item} />;
      default:
        return <ProfileDetail item={item} />;
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.listStyle}>
          <SectionList
            sections={[
              { title: 'Basic Information',
                data: [
                  this.props.name,
                  this.props.age,
                  this.props.gender
                ] },
              { title: 'Health Information',
                data: [
                  this.props.height,
                  this.props.weight,
                  this.props.bloodGroup,
                  this.props.bloodGlucose,
                  this.props.bloodPressure
                ] },
              { title: 'Allergies', data: [this.props.allergies] },
              { title: 'Medication', data: [this.props.medication] },
              { title: 'History', data: [this.props.history] }
            ]}
            renderItem={({ item }) => this.renderProfileDetail(item)}
            renderSectionHeader={({ section }) => this.renderSectionHeader(section.title)}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#E8F8FF'
  },
  listStyle: {
    backgroundColor: '#E8F8FF',
    borderWidth: 1,
    margin: 2,
    marginTop: 5,
    borderRadius: 3,
    padding: 2,
    flex: 1,
    borderColor: '#58595A',
    // borderTopWidth: 0,
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
    borderRadius: 3,
    // borderWidth: 1,
    // borderTopWidth: 0,
    // borderBottomWidth: 0,
    // borderColor: '#58595A'
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
  }
};

const mapStateToProps = ({ profile }) => {
  const { name, age, gender, allergies, bloodGlucose, bloodPressure,
    bloodGroup, height, weight, history, medication } = profile;

  return { name, age, gender, allergies, bloodGlucose, bloodPressure, bloodGroup, height, weight, history, medication };
};

export default connect(mapStateToProps, { profileFetch })(ProfilePage);
// export default ProfilePage;
