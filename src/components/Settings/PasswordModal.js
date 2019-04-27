import React from 'react';
import { Text, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardSection, Input } from '../common/Button';

const PasswordModal = ({ visible }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <Text>
          Hey
        </Text>
      </View>
    </Modal>

  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  listStyle: {
    backgroundColor: '#E8F8FF',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 5
  },
  cardStyle: {
    marginLeft: 2,
    marginRight: 2,
    height: 165,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
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
  buttonStyle: {
    borderTopWidth: 1,
    borderColor: '#229AD5',
    height: 30
  },
  iconContainerStyle: {
    alignSelf: 'flex-end',
    paddingBottom: 5,
    paddingRight: 10,
    justifyContent: 'center'
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


export { PasswordModal };
