import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Firebase from '../../Firebase';

const db = Firebase.firestore()



class InfoPage extends Component {


  // render() {
  //   return (
  //   <View>
  //     <Text>{this.props.disease.id}</Text>
  //     <Text>{this.props.disease.overview}</Text>
  //     { this.props.disease.symptoms.map((item, key) => (<Text key={key} >{item}</Text>)) }
  //     <Text>{this.props.disease.suggestion}</Text>
  //     <Text>{this.props.disease.worseBy}</Text>
  //   </View>
  // );
  // }

  render(){
    return (

    )
  }
}


export default InfoPage;
