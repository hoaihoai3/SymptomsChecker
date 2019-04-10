// import libraries for making Component

import React from 'react';
import { Text, View } from 'react-native';


//making Component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
     backgroundColor: '#F8F8F8',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 30,
     shadowColor: '#000',
     shadowOffSet: { width: 0, height: 10 },
     shadowOpacity: 0.5,
     elevation: 2,
     position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
};
//make component available for other parts of the app
export { Header };
