import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { foodUpdate } from '../actions';
import { CardSection, Input } from './common';

class FoodForm extends Component {
  render () {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Signature Chicken Rice"
            value={this.props.name}
            onChangeText={text => this.props.foodUpdate({ prop: 'name', value: text })}
            />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}> Price </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.foodUpdate({ prop: 'Price', value })}
          >
            <Picker.Item label="2.50" value="2.50" />
            <Picker.Item label="3.00" value="3.00" />
            <Picker.Item label="3.50" value="3.50" />
            <Picker.Item label="4.00" value="4.00" />
            <Picker.Item label="4.50" value="4.50" />
            <Picker.Item label="5.00" value="5.00" />
            <Picker.Item label="5.50" value="5.50" />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="Cafe Orbital's signature Chicken Rice comes with Chicken and Rice! Wow!"
            onChangeText={text => this.props.foodUpdate({ props: 'Description', value: text })}
            value={this.props.phone}
          />
        </CardSection>


      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
  const { name, price, description} = state.foodForm;

  return {name, price, description };
}

export default connect(mapStateToProps, { foodUpdate })(FoodForm);
