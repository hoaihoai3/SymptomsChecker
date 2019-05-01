import React from 'react';
import { Text, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardSection, Input } from '../common';

const PasswordModal = ({
   visible,
   onIconPress,
   onChangeCurrentPassword,
   onChangeNewPassword,
   onChangeConfirmPassword,
   currentPassword,
   newPassword,
   confirmPassword,
   error,
   button
    }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <View style={styles.cardStyle}>
          <View style={styles.sectionHeaderContainerStyle}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.sectionHeaderStyle}>Change Password</Text>
            </View>
            <View style={styles.iconContainerStyle}>
              <Icon name="remove" style={{ color: '#FFF', fontSize: 22 }} onPress={onIconPress} />
            </View>
          </View>


          <View style={styles.itemContainerStyle}>
            <CardSection>
              <Input
                secureTextEntry
                autoCapitalize="none"
                placeholder='Current Password'
                maxLength={20}
                onChangeText={onChangeCurrentPassword}
                value={currentPassword}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                autoCapitalize="none"
                placeholder='New Password'
                maxLength={20}
                onChangeText={onChangeNewPassword}
                value={newPassword}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                autoCapitalize="none"
                placeholder='Confirm New Password'
                maxLength={20}
                onChangeText={onChangeConfirmPassword}
                value={confirmPassword}
              />
            </CardSection>

            <View style={{ marginBottom: 20 }} />

            <View>
              {error}
            </View>

            <CardSection>
              {button}
            </CardSection>
          </View>

        </View>
      </View>
    </Modal>

  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  sectionHeaderStyle: {
    fontSize: 22,
    paddingLeft: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  sectionHeaderContainerStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#229AD5',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainerStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 5
  },
  cardStyle: {
    marginLeft: 2,
    marginRight: 2,
    height: 'auto',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#229AD5',
    backgroundColor: '#FFF',
  },
  itemTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemStyle: {
    fontSize: 16,
    color: '#58595A'
  },
  itemContainerStyle3: {
    marginLeft: 20
  },
  buttonStyle: {
    borderTopWidth: 1,
    borderColor: '#229AD5',
    height: 30
  },
  iconContainerStyle: {
    alignSelf: 'flex-end',
    paddingBottom: 5,
    paddingRight: 10,
    justifyContent: 'center'
  },
  gapStyle: {
    marginBottom: 30
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#229AD5'
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
  }
};


export { PasswordModal };
