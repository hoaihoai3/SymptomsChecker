import React from 'react';
import { View, Text } from 'react-native';

const Info = ({ title, detail }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{detail}</Text>
    </View>
  )
}

export { Info };
