import React, { Component } from 'react';
import { Picker, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import 'firebase/firestore';
import { Button } from '../common';
import Detail from './Detail';
import { profileUpdate, profileSave, profileFetch } from '../../actions';
import { AddModal } from './AddModal';

class EditProfile extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    allergyValue: '',
    medicationValue: '',
    historyValue: ''
   }

  componentWillMount() {
    this.props.profileFetch();
  }

  saveProfile() {
    const { name, age, gender, allergies, bloodGlucose, bloodPressure,
      bloodGroup, height, weight, history, medication } = this.props;

    this.props.profileSave({ name, age, gender, allergies, bloodGlucose, bloodPressure,
      bloodGroup, height, weight, history, medication });
  }

  removeMedication(index) {
    const newMedication = [...this.props.medication];
    if (index !== -1) {
      newMedication.splice(index, 1);
      this.props.profileUpdate({ prop: 'medication', value: newMedication });
    }
  }

  removeAllergy(index) {
    const newAllergies = [...this.props.allergies];
    if (index !== -1) {
      newAllergies.splice(index, 1);
      this.props.profileUpdate({ prop: 'allergies', value: newAllergies });
    }
  }

  removeHistory(index) {
    const newHistory = [...this.props.history];
    if (index !== -1) {
      newHistory.splice(index, 1);
      this.props.profileUpdate({ prop: 'history', value: newHistory });
    }
  }

  addAllergy(entry) {
    const newAllergies = [...this.props.allergies];
    if (entry !== null || entry !== '') {
      newAllergies.push(entry);
      this.props.profileUpdate({ prop: 'allergies', value: newAllergies });
      this.setState({ showModal1: false, allergyValue: '' });
    }
  }

  addMedication(entry) {
    const newMedication = [...this.props.medication];
    if (entry !== null || entry !== '') {
      newMedication.push(entry);
      this.props.profileUpdate({ prop: 'medication', value: newMedication });
      this.setState({ showModal2: false, medicationValue: '' });
    }
  }

  addHistory(entry) {
    const newHistory = [...this.props.history];
    if (entry !== null || entry !== '') {
      newHistory.push(entry);
      this.props.profileUpdate({ prop: 'history', value: newHistory });
      this.setState({ showModal3: false, historyValue: '' });
    }
  }

  renderAddModal(type) {
    switch (type) {
      case 1:
      this.setState({ showModal1: !this.state.showModal1 });
      break;
      case 2:
      this.setState({ showModal2: !this.state.showModal2 });
      break;
      case 3:
      this.setState({ showModal3: !this.state.showModal3 });
      break;
      default:
        return null;
    }
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
        <Button onPress={() => this.addOption()}>
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
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Name</Text>
              </View>
              <View style={[styles.itemContainerStyle4, { width: 120 }]}>
                <TextInput
                  style={itemStyle}
                  autoCorrect={false}
                  value={this.props.name}
                  autoCapitalize="none"
                  placeholder="..."
                  onChangeText={value => this.props.profileUpdate({ prop: 'name', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Age</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.age.toString()}
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={3}
                  placeholder="..."
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
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Health Information')}
            <View style={styles.itemContainerStyle2}>
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Height</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.height.toString()}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="..."
                  maxLength={3}
                  onChangeText={value => this.props.profileUpdate({ prop: 'height', value })}
                />
              </View>
              <View style={styles.itemContainerStyle5}>
                <Text style={{ fontSize: 16 }}> cm</Text>
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Weight</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.weight.toString()}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="..."
                  maxLength={3}
                  onChangeText={value => this.props.profileUpdate({ prop: 'weight', value })}
                />
              </View>
              <View style={styles.itemContainerStyle5}>
                <Text style={{ fontSize: 16 }}> kg</Text>
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
            <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Blood Group</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodGroup}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="..."
                  maxLength={7}
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodGroup', value })}
                />
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Blood Glucose</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodGlucose.toString()}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="..."
                  maxLength={2}
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodGlucose', value })}
                />
              </View>
              <View style={styles.itemContainerStyle5}>
                <Text style={{ fontSize: 16 }}> mmol/L</Text>
              </View>
            </View>

            <View style={styles.itemContainerStyle2}>
              <View style={styles.itemContainerStyle3}>
                <Text style={itemTitleStyle}>Blood Pressure</Text>
              </View>
              <View style={styles.itemContainerStyle4}>
                <TextInput
                  style={itemStyle}
                  value={this.props.bloodPressure}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="..."
                  maxLength={7}
                  onChangeText={value => this.props.profileUpdate({ prop: 'bloodPressure', value })}
                />
              </View>
              <View style={styles.itemContainerStyle5}>
                <Text style={{ fontSize: 16 }}> mmHg</Text>
              </View>
            </View>
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Allergies')}
            {this.props.allergies.map((item, key) => (
              <Detail
                item={item}
                key={key}
                iconName="remove"
                onIconPress={() => this.removeAllergy(key)}
              />
            ))}
            <View style={styles.buttonStyle}>
              <Button onPress={() => this.renderAddModal(1)}>
                <Icon name="plus" style={{ fontSize: 16 }}> Add Allergy</Icon>
              </Button>
            </View>
            <AddModal
              title='Add Allergy'
              placeholder='Enter allergy ...'
              onChangeText={text => this.setState({ allergyValue: text })}
              onButtonPress={() => this.addAllergy(this.state.allergyValue)}
              visible={this.state.showModal1}
              onIconPress={() => this.renderAddModal(1)}
            />
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('Medication')}
            {this.props.medication.map((item, key) => (
              <Detail
                item={item}
                key={key}
                iconName="remove"
                onIconPress={() => this.removeMedication(key)}
              />
            ))}
            <View style={styles.buttonStyle}>
              <Button onPress={() => this.renderAddModal(2)}>
                <Icon name="plus" style={{ fontSize: 16 }}> Add Medication</Icon>
              </Button>
            </View>
            <AddModal
              title='Add Medication'
              placeholder='Enter medication ...'
              onChangeText={text => this.setState({ medicationValue: text })}
              onButtonPress={() => this.addMedication(this.state.medicationValue)}
              visible={this.state.showModal2}
              onIconPress={() => this.renderAddModal(2)}
            />
          </View>

          <View style={cardStyle}>
            {this.renderSectionHeader('History')}
            {this.props.history.map((item, key) => (
              <Detail
                historyPageStyle={{ flexDirection: 'column' }}
                item={item}
                key={key}
                iconName="remove"
                onIconPress={() => this.removeHistory(key)}
              />
            ))}
            <View style={styles.buttonStyle}>
              <Button onPress={() => this.renderAddModal(3)}>
                <Icon name="plus" style={{ fontSize: 16 }}> Add History</Icon>
              </Button>
            </View>
            <AddModal
              title='Add History'
              placeholder='Enter condition history ...'
              onChangeText={text => this.setState({ historyValue: text })}
              onButtonPress={() => this.addHistory(this.state.historyValue)}
              onIconPress={() => this.renderAddModal(3)}
              visible={this.state.showModal3}
            />
          </View>
        </ScrollView>
        <View
        style={styles.saveButtonStyle}
        >
          <TouchableOpacity
          style={styles.saveButtonStyle}
          onPress={() => this.saveProfile()}
          >
            <Text style={{ fontSize: 20, color: '#FFF' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
  marginTop: 20,
  height: 60,
  borderWidth: 1,
  borderRadius: 30,
  borderColor: '#229AD5',
  backgroundColor: '#FFF',
},
  logOutButtonStyle: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  itemContainerStyle2: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainerStyle3: {
    width: 150
  },
  itemContainerStyle4: {
    marginLeft: 20,
    width: 80
  },
  itemContainerStyle5: {
    alignSelf: 'flex-end',
    paddingBottom: 6,
    marginLeft: 5
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
  genderCardStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 160,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  buttonStyle: {
    borderTopWidth: 1,
    borderColor: '#229AD5'
  },
  saveButtonStyle: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 5,
    marginLeft: 10,
    backgroundColor: '#229AD5',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    width: 60,
    height: 60,
    position: 'absolute'
  }
};

const mapStateToProps = ({ profile }) => {
  const { name, age, gender, allergies, bloodGlucose, bloodPressure,
    bloodGroup, height, weight, history, medication } = profile;

  return { name, age, gender, allergies, bloodGlucose, bloodPressure, bloodGroup, height, weight, history, medication };
};

export default connect(mapStateToProps, { profileUpdate, profileSave, profileFetch })(EditProfile);
// export default ProfilePage;
