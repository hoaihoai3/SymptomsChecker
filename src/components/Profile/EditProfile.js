import React, { Component } from 'react';
import { Picker, View, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { CardSection, Input, Button } from '../common';
import { profileUpdate, profileSave, profileFetch } from '../../actions';
import ProfileDetail from './Detail';

// import ListItem from './ListItem';

class EditProfile extends Component {
  state = { showModal: false }


  componentWillMount() {
    this.props.profileFetch();
  }

  onIconPress() {
    console.log('Icon Pressed');
  }

  addOption() {
    console.log('Add Option');
  }

  renderSectionHeader(title) {
    return (
      <View style={styles.sectionHeaderContainerStyle}>
        <Text style={styles.sectionHeaderStyle}>{title}</Text>
      </View>
    );
  }

  renderButton(text) {
    return (
      <View style={styles.buttonStyle}>
        <Button onPress={this.addOption.bind(this)}>
          <Icon name="plus" style={{ fontSize: 16 }}> Add {text} </Icon>
        </Button>
      </View>
    );
  }

  render() {
    const {
            containerStyle,
            listStyle,
            cardStyle,
            itemStyle,
            itemTitleStyle,
            genderCardStyle
          } = styles;

    return (
      <View style={containerStyle}>
        <ScrollView style={listStyle}>
          <View style={cardStyle}>
            {this.renderSectionHeader('Basic Information')}
            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Name</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.name}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'name', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Age</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.age.toString()}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'age', value })}
                />
              </View>
            </View>

            <View style={genderCardStyle}>
              <Text style={itemTitleStyle}>Gender </Text>
              <Picker
                mode="dropdown"
                selectedValue={this.props.gender}
                onValueChange={value => this.props.profileUpdate({ prop: 'gender', value })}
              >
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
              </Picker>
            </View>
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Health Information')}
            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Height</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.height.toString()}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'height', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Weight</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.weight.toString()}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'weight', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
            <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Blood Group</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodGroup}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodGroup', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Blood Glucose</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodGlucose.toString()}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodGlucose', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={{ width: 150 }}>
                <Text style={itemTitleStyle}>Blood Pressure</Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodPressure}
                  autoCapitalize="none"
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodPressure', value })}
                />
              </View>
            </View>
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Allergies')}
            {this.props.allergies.map((item, key) => (
                <ProfileDetail item={item} key={key} />
            ))}
            {this.renderButton('Allergy')}
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Medication')}
            {this.props.medication.map((item, key) => (
              <ProfileDetail
                item={item}
                key={key}
                iconName="remove"
                onIconPress={this.onIconPress.bind(this)}
              />
            ))}
            {this.renderButton('Medication')}
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('History')}
            {this.props.history.map((item, key) => (
                <ProfileDetail item={item} key={key} />
            ))}
            {this.renderButton('History')}

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
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 5
  },
  itemContainerStyle2: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  },
  itemContainerStyle3: {
    marginLeft: 20
  },
  genderCardStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 200,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    borderRadius: 5
  },
  buttonStyle: {
    borderTopWidth: 1,
    borderColor: '#229AD5'
  }
};

const mapStateToProps = ({ profile }) => {
  const { name, age, gender, allergies, bloodGlucose, bloodPressure,
    bloodGroup, height, weight, history, medication } = profile;

  return { name, age, gender, allergies, bloodGlucose, bloodPressure, bloodGroup, height, weight, history, medication };
};

export default connect(mapStateToProps, { profileUpdate, profileSave, profileFetch })(EditProfile);
// export default ProfilePage;
