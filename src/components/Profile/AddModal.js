import React from 'react';
import { Text, View, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../common/Button';

const AddModal = ({ title, placeholder, value, visible, onButtonPress, onChangeText, onIconPress }) => {
  const {
          cardStyle,
          itemStyle,
          containerStyle,
          buttonStyle
        } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
    <View style={containerStyle}>
      <View style={cardStyle}>
        <View style={styles.sectionHeaderContainerStyle}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.sectionHeaderStyle}>{title}</Text>
          </View>
          <View style={styles.iconContainerStyle}>
            <Icon name="remove" style={{ color: '#FFF', fontSize: 22 }} onPress={onIconPress} />
          </View>
        </View>
        <View style={styles.itemContainerStyle}>
          <View>
            <TextInput
              placeholder={placeholder}
              style={itemStyle}
              value={value}
              onChangeText={onChangeText}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={buttonStyle}>
          <Button onPress={onButtonPress}>{title}</Button>
        </View>
      </View>
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
  }
};

export { AddModal };
