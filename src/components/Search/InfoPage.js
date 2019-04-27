import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { diseaseFetch } from '../../actions';

class InfoPage extends Component {

  componentWillMount() {
    this.props.diseaseFetch(this.props.disease);
  }

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

  render() {
    return (
    <ScrollView style={styles.screenStyle}>
      <View style={styles.textViewStyle}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleStyle}>{this.props.name}</Text>
        </View>

        <View style={styles.sectionContainerStyle}>
          <Text style={styles.subtitleStyle}>Overview</Text>
          <Text style={styles.textStyle}>{this.props.overview}</Text>
        </View>

        <View style={styles.sectionContainerStyle}>
          <Text style={styles.subtitleStyle}>Causes</Text>
          <Text style={styles.textStyle}>{this.props.causes}</Text>
        </View>

        <View style={styles.sectionContainerStyle}>
          <Text style={styles.subtitleStyle}>Symptoms</Text>
          { this.props.symptoms.map((item, key) =>
            (<Text key={key} style={styles.textStyle}>{key + 1}. {item}</Text>)) }
        </View>

        <View style={styles.sectionContainerStyle}>
          <Text style={styles.subtitleStyle}>Suggestion</Text>
          <Text style={styles.textStyle}>{this.props.suggestion}</Text>
        </View>

        <View style={styles.sectionContainerStyle}>
          <Text style={styles.subtitleStyle}>Worsen By</Text>
          <Text style={styles.textStyle}>{this.props.worseBy}</Text>
        </View>
      </View>
    </ScrollView>
  );
  }
}

const styles = {
  screenStyle: {
    backgroundColor: '#E8F8FF',
    flex: 1,
  },
  titleViewStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#229AD5'
  },
  textViewStyle: {
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle: {
    fontSize: 18,
    color: '#58595A',
    lineHeight: 28,
  },
  subtitleStyle: {
    fontSize: 24,
    color: '#24A3E2',
    fontWeight: 'bold',
    marginBottom: 15
  },
  titleContainerStyle: {
    alignItems: 'center',
    marginBottom: 15
  },
  sectionContainerStyle: {
    marginBottom: 15,
    marginTop: 15
  }
};

const mapStateToProps = ({ disease }) => {
  const { id, name, causes, overview, suggestion, worseBy, symptoms } = disease;

  return { id, name, causes, overview, suggestion, worseBy, symptoms };
};

export default connect(mapStateToProps, { diseaseFetch })(InfoPage);
