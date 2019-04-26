import React from 'react';
import { Text, View } from 'react-native';

const HistoryDetail = ({ title, item, customStyle }) => {
  const {
    itemStyle,
    itemTitleStyle,
    itemContainerStyle,
   } = styles;

  return (
    <View style={[itemContainerStyle, customStyle]}>
      <View>
        <View>
          <Text style={itemTitleStyle}>{title} </Text>
          <Text style={itemStyle}>{item}</Text>
        </View>
      </View>
    </View>
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
    alignSelf: 'flex-end',
    justifyContent: 'center',
    paddingTop: 3,
    fontSize: 18
  }
};
export default HistoryDetail;
