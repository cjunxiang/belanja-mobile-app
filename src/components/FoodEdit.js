import React, { Component } from 'react';
import FoodForm from './FoodForm';
import { connect } from 'react-redux';
import { foodUpdate, foodSave, foodDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import _ from 'lodash';
import Communications from 'react-native-communications';

class FoodEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.food, (value, prop) => {
      this.props.foodUpdate({ prop, value });
    });
  }

  onButtonPress () {
    const { name, phone, shift } = this.props;
    this.props.foodSave({ name, phone, shift, uid: this.props.food.key });
  }

  onTextPress () {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { key } = this.props.food;
    this.props.foodDelete({ key });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <Card>
        <FoodForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Scheudle
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={()=> this.setState({ showModal: !this.state.showModal })}>
            Fire Food
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.foodForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { foodUpdate, foodSave, foodDelete })(FoodEdit);
