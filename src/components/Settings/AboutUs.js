import React from 'react';
import { View, ScrollView, Text } from 'react-native';

const AboutUs = () => {
  const { screenStyle, textStyle, titleStyle, titleViewStyle, textViewStyle } = styles;

  return (
    <ScrollView style={screenStyle}>
      <View style={titleViewStyle}>
        <Text style={titleStyle}>
          About Us
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          According to a huge lack of consciousness for healthcare, there is a concerned
          increase in number of noncommunicable diseases, especially in Vietnam, which
          has led to hundred thousand deaths every year. This problem also leads to
          many other consequences such as increased costs of healthcare services,
          improper medical treatments, overloaded hospitals and medical centers, etc.
          This project aims to raise the knowledge of NCDs for its users, especially for
          Vietnamese people, and to help them make appropriate and early decisions in
          order to prevent and treat their conditions.
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          Symptoms Checker is the mobile application that we believe that can fulfill the
          promise of health information on the Internet. We provide credible information,
          supportive communities, and in-depth reference material about health subjects
          that matter to you. We are a source for original and timely health information
          as well as material from well-known content providers.
          As serious as we are about credibility, we also know that at times, health
          information can and should be engaging, exciting, and entertaining.
          We pride ourselves in knowing our audience&#39;s needs and delivering the most
          appropriate experience. Our mission is to fulfill all these needs in the most
          appropriate ways possible.
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          We are committed to improving our application. We will continue to publish
          even more content, communities, and services to help make your life better, to
          help you find your way when faced with healthcare decisions, and to help you
          feel better about your health and that of your family.
        </Text>
      </View>
    </ScrollView>
  );
};

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
    fontSize: 20,
    color: '#58595A'
  }
};

export default AboutUs;
