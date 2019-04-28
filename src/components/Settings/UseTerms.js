import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const UseTerms = () => {
  const {
    screenStyle,
    textStyle,
    titleStyle,
    titleViewStyle,
    textViewStyle,
    subTitleStyle
   } = styles;

  return (
    <ScrollView style={screenStyle}>
      <View style={titleViewStyle}>
        <Text style={titleStyle}>
          Terms Of Use
        </Text>
      </View>

      <View style={titleViewStyle}>
        <Text style={[textStyle, { fontSize: 23 }]}>
          By using this site, you signify your assent to these Terms
          and Conditions. If you do not agree to all of these Terms
          and Conditions, do not use this site!
        </Text>
      </View>

      <View style={titleViewStyle}>
        <Text style={subTitleStyle}>
          This Application Does Not Provide Medical
          Advice
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          The contents of the Symptoms Checker Application, such as text, graphics,
          images, and other materials created by Symptoms Checker or obtained from
          Symptoms Checker&#39;s licensors, and other materials contained on the
          Symptoms Checker Application (collectively, &quot;Content&quot;) are for informational
          purposes only. The Content is not intended to be a substitute for professional
          medical advice, diagnosis, or treatment. Always seek the advice of your
          physician or other qualified health provider with any questions you may have
          regarding a medical condition. Never disregard professional medical advice or
          delay in seeking it because of something you have read on the Symptoms
          Checker!
          If you think you may have a medical emergency, call your doctor or medical
          support hotline immediately. Symptoms Checker does not recommend or
          endorse any specific tests, physicians, products, procedures, opinions, or other
          information that may be mentioned on the Application. Reliance on any
          information provided by Symptoms Checker, Symptoms Checker employees,
          others appearing on the Application at the invitation of Symptoms Checker, or
          other visitors to the application is solely at your own risk.
        </Text>
      </View>

      <View style={titleViewStyle}>
        <Text style={subTitleStyle}>
          The liability of Symptoms Checker
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          The use of the Symptoms Checker and the Content is at your own risk.
          When using the Symptoms Checker Application, information will be transmitted
          over a medium that may be beyond the control and jurisdiction of Symptoms
          Checker and its suppliers. Accordingly, Symptoms Checker assumes no liability
          for or relating to the delay, failure, interruption, or corruption of any data or
          other information transmitted in connection with use of the Symptoms
          Checker.
        </Text>
      </View>

      <View style={titleViewStyle}>
        <Text style={subTitleStyle}>
          Passwords
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          Symptoms Checker has several tools that allow you to record and store
          information. You are responsible for taking all reasonable steps to ensure that
          no unauthorized person shall have access to your Symptoms Checker
          passwords or accounts. It is your sole responsibility to: (1) control the
          dissemination and use of sign-in name, screen name and passwords; (2)
          authorize, monitor, and control access to and use of your Symptoms Checker
          account and password; (3) promptly inform Symptoms Checker if you believe
          your account or password has been compromised or if there is any other
          reason you need to deactivate a password. You grant Symptoms Checker and
          all other persons or entities involved in the operation of the Application the
          right to transmit, monitor, retrieve, store, and use your information in
          connection with the operation of the Application. Symptoms Checker cannot
          and does not assume any responsibility or liability for any information you
          submit, or your or third parties&#39; use or misuse of information transmitted or
          received using Symptoms Checker tools and services.
        </Text>
      </View>
      <View style={{ marginTop: 20 }} />
      <View style={titleViewStyle}>
        <Text style={titleStyle}>
          Privacy Policy
        </Text>
      </View>

      <View style={textViewStyle}>
        <Text style={textStyle}>
          Symptoms Checker understands how important the privacy of personal
          information is to our users. This Privacy Policy will tell you what information we
          collect about you and about your use of Symptoms Checker and its services. It
          will explain the choices you have about how your personal information is used
          and how we protect that information. We urge you to read this Privacy Policy
          carefully.
          We refer to the Symptoms Checker Application, along with the information and
          services made available to you through the Symptoms Checker App as the
          “Services.” This Privacy Policy also applies to the consumer-facing version of
          the Symptoms Checker Health Manager Product. However, if you are an
          employee or health plan member who has enabled access to your health record
          at Symptoms Checker by registering at your employer&#39;s or health plan&#39;s
          webapplication, the privacy policy applicable to your information at your
          employer&#39;s or health plan&#39;s webapplication remains applicable to your personal
          health record at Symptoms Checker. If your employer or health plan account is
          no longer made available to you by your employer or health plan, you will
          continue to have access to your health information from Symptoms Checker,
          using the same username and password, but will be subject to this Privacy
          Policy.
          Except where noted, statements in this Privacy Policy with respect to the
          Symptoms Checker Applications also apply to the Apps. If you do not want us

          to collect, use or disclose information about you and your use of the Services
          as described in this Privacy Policy, then you should not use the Services. By
          using the Services, you must agree to the Symptoms Checker Terms of Use,
          which is the contract between us and users of the Services.  By accepting the
          Symptoms Checker Terms of Use, you confirm that you have read and
          understand this Privacy Policy and the Symptoms Checker Cookie Policy and
          you acknowledge that we will store, use and otherwise process your
          information in the United States where we are located.
          References to &quot;Symptoms Checker,&quot; “we” or “us” mean Symptoms Checker
          LLC, including any company that Symptoms Checker LLC controls (for
          example, a subsidiary that Symptoms Checker LLC owns). Symptoms Checker
          may share information among its subsidiaries or webapplications that it owns
          or controls, but information collected under this Privacy Policy is always
          protected under the terms of this Privacy Policy. Except as otherwise noted in
          this Privacy Policy, Symptoms Checker LLC is the data controller responsible for
          the processing of your personal information as described in this Privacy Policy.
        </Text>
      </View>

      <View style={titleViewStyle}>
        <Text style={[subTitleStyle, { fontSize: 20 }]}>
          Even if you do not register with or provide any personal information to
          Symptoms Checker, we collect information about your use of the Symptoms
          Checker Application and the Services. We may also acquire information about
          our users from external sources.
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
  },
  subTitleStyle: {
    fontSize: 23,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#24A3E2',
  }
};
export default UseTerms;
