import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../common';

const ListItem = (props, { onPress }) => {

    // const { name } = this.props.profile;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {props.children}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  };

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ListItem;
