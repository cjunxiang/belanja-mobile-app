














//below is not real


import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { foodUpdate, foodCreate } from '../actions';
import FoodForm from './FoodForm';

class FoodCreate extends Component {
  onButtonPress() {
    const { name, price, description } = this.props;
    this.props.foodCreate({ name, price, description });
  }

  render() {
    return (
      <Card>
        <FoodForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add New Food
          </Button>
        </CardSection>
      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const { name, price, description} = state.foodForm;

  return { name, price, description };
}

export default connect(mapStateToProps, { foodUpdate, foodCreate })(FoodCreate);
