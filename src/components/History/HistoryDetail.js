import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HistoryDetail = ({ title, item, customStyle, iconName, onPress }) => {
  const {
    itemStyle,
    itemTitleStyle,
    itemContainerStyle,
    iconContainerStyle
   } = styles;

  return (
    <TouchableOpacity style={[itemContainerStyle, customStyle]} onPress={onPress}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

        <View style={{ width: '90%' }}>
          <Text style={itemTitleStyle}>{title} </Text>
          <Text style={itemStyle}>{item}</Text>
        </View>

        <View style={iconContainerStyle}>
          <Icon style={{ fontSize: 17 }} name={iconName} />
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = {
  itemContainerStyle: {
    alignItems: 'center',
    height: 'auto',
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  },
  iconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
    fontSize: 18,
    width: '10%'
  }
};
export default HistoryDetail;
