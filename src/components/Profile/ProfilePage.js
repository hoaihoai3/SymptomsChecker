import React, { Component } from 'react';
import { Picker, View, Text, SectionList, ListItem, ScrollView } from 'react-native';
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

  componentWillMount() {
    this.props.profileFetch();
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
        return <ProfileDetail title='Name: ' item={item} />;
      case 2:
        return <ProfileDetail title='Age: ' item={item} />;
      case 3:
        return <ProfileDetail title='Gender: ' item={item} />;
      case 4:
        return <ProfileDetail title='Height: ' item={item} unit='cm' />;
      case 5:
        return <ProfileDetail title='Weight: ' item={item} unit='kg' />;
      case 6:
        return <ProfileDetail title='Blood Group: ' item={item} />;
      case 7:
        return <ProfileDetail title='Blood Glucose: ' item={item} unit='mmol/L' />;
      case 8:
          return <ProfileDetail title='Blood Pressure: ' item={item} unit='mmHg' />;
      case 9:
        return <ProfileDetail item={item} />;
      default:
        return null;
    }
  }

  render() {
    const {
            containerStyle,
            listStyle,
            cardStyle
          } = styles;

    return (
      <View style={containerStyle}>
        <ScrollView style={listStyle}>
          <View style={cardStyle}>
            {this.renderSectionHeader('Basic Information')}
            {this.renderProfileDetail(this.props.name, 1)}
            {this.renderProfileDetail(this.props.age, 2)}
            {this.renderProfileDetail(this.props.gender, 3)}
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Health Information')}
            {this.renderProfileDetail(this.props.height, 4)}
            {this.renderProfileDetail(this.props.weight, 5)}
            {this.renderProfileDetail(this.props.bloodGroup, 6)}
            {this.renderProfileDetail(this.props.bloodGlucose, 7)}
            {this.renderProfileDetail(this.props.bloodPressure, 8)}
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Allergies')}
            {this.props.allergies.map((item, key) => (
                <ProfileDetail item={item} key={key} />
            ))}
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Medication')}
            {this.props.medication.map((item, key) => (
                <ProfileDetail item={item} key={key} />
            ))}
          </View>

          <View style={cardStyle}>

            {this.renderSectionHeader('History')}

            {this.props.history.map((item, key) => (
                <ProfileDetail item={item} key={key} />
            ))}

          </View>

        </ScrollView>
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
    margin: 2,
    marginTop: 5,
    borderRadius: 3,
    padding: 2,
    flex: 1,
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
  }
};

const mapStateToProps = ({ profile }) => {
  const { name, age, gender, allergies, bloodGlucose, bloodPressure,
    bloodGroup, height, weight, history, medication } = profile;

  return { name, age, gender, allergies, bloodGlucose, bloodPressure, bloodGroup, height, weight, history, medication };
};

export default connect(mapStateToProps, { profileFetch })(ProfilePage);
// export default ProfilePage;
