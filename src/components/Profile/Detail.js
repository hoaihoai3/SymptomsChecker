import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Detail = ({ title, item, unit, iconName, onIconPress }) => {
  const {
    itemStyle,
    itemTitleStyle,
    itemContainerStyle,
    iconContainerStyle
   } = styles;

  return (
    <View style={itemContainerStyle}>
      <View>
        <Text>
          <Text style={itemTitleStyle}>{title} </Text>
          <Text style={itemStyle}>{item} {unit}</Text>
        </Text>
      </View>
      <View>
        <Icon style={iconContainerStyle} name={iconName} onPress={onIconPress} />
      </View>
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
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  },
  iconContainerStyle: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingTop: 4
  }
};
export default Detail;
