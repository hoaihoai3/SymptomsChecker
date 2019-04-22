import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileDetail = ({ title, item, unit, iconName, onIconPress, id }) => {
  const {
    itemStyle,
    itemTitleStyle,
    itemContainerStyle,
   } = styles;

  return (
    <View style={itemContainerStyle} id={id}>
      <Text>
        <Text style={itemTitleStyle}>{title} </Text>
        <Text style={itemStyle}>{item} {unit}</Text>
        <Icon name={iconName} onPress={onIconPress} />
      </Text>
    </View>
  );
};

const styles = {
  itemContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  },
};
export default ProfileDetail;
