import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, autoCapitalize, istyle, maxLength }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[inputStyle, istyle]}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    marginLeft: 5,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    textAlign: 'center'
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export { Input };
