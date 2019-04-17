import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';

const SettingsPage = () => {
  return (
    <Card>
      <CardSection>
        <Text>Account Settings</Text>
      </CardSection>

      <CardSection>
        <Text>Terms of Use & Privacy Policy</Text>
      </CardSection>

      <CardSection>
        <Text>About Us</Text>
      </CardSection>

      <CardSection>
        <Button>Log Out</Button>
      </CardSection>
    </Card>

  );
};

export default SettingsPage;
