import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FoodList from './components/FoodList';
import FoodCreate from './components/FoodCreate';
import FoodEdit from './components/FoodEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar >

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
          <Scene Key="signup" component = {SignUpForm} title="Sign Up"/>
        </Scene>

        <Scene key="main">
          <Scene  rightTitle="Add"  onRight={() => {Actions.foodCreate()}}  key="foodList"  component={EmployeeList} title="Main Page"  initial />
          <Scene key="foodCreate" component={FoodCreate} title="Add New Food Item to Menu" />
          <Scene key="foodEdit" component={FoodEdit} title="Edit Food Item" />
          <Scene key="buyFood" component={BuyFood} title="Buy Food" />
        </Scene>

      </Scene>
    </Router>
  );
}

export default RouterComponent;
