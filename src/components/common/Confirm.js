import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, CardSectionStyle } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection style={CardSectionStyle}>
          <Text style={textStyle}>{ children }</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>YES</Button>
          <Button onPress={onDecline}>NO</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles={
  CardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  }
}

export { Confirm };
