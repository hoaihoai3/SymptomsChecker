import React from 'react';
import { Text, View } from 'react-native';

const ProfileDetail = ({ title, item, unit }) => {
  const {
    itemStyle,
    itemTitleStyle,
    itemContainerStyle } = styles;

  return (
    <View style={itemContainerStyle}>
      <Text>
        <Text style={itemTitleStyle}>{title} </Text>
        <Text style={itemStyle}>{item} {unit}</Text>
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
    backgroundColor: '#E8F8FF',
    // borderWidth: 1,
    // borderTopWidth: 0,
    // borderBottomWidth: 0,
    borderRadius: 3
    // borderColor: '#58595A'
  },
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  }
};
export default ProfileDetail;
