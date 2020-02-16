import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { foodsFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class FoodList extends Component {
  componentWillMount() {
    this.props.foodsFetch();
  }

  renderItem({ item }) {
    return <ListItem food={item} />
  }

  render() {
    return(
      <FlatList
        data={this.props.foods}
        renderItem={this.renderItem}
        />
    );
  }
}

const mapStateToProps = state => {
  const foods = _.map(state.foods, (val, uid) => {
    return { ...val, key: uid };
  });

  return { foods };
};

export default connect(mapStateToProps, { foodsFetch })(FoodList);
