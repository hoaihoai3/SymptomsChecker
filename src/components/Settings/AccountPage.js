import React, { Component } from 'react';
import { Picker, View, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { CardSection, Input, Button } from '../common';
import { profileFetch } from '../../actions';

// import ListItem from './ListItem';

class AccountPage extends Component {

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
          } = styles;

    return (
      <View style={containerStyle}>
        <View style={listStyle}>
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
          </View>
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
  const { name, email } = profile;

  return { name, email };
};

export default connect(mapStateToProps, { profileFetch })(AccountPage);
// export default ProfilePage;
