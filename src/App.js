import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCFeV6Awe5cSKwSdu6xxsfAdtDN7eOuMDI",
    authDomain: "udemymanager-87cde.firebaseapp.com",
    databaseURL: "https://udemymanager-87cde.firebaseio.com",
    projectId: "udemymanager-87cde",
    storageBucket: "udemymanager-87cde.appspot.com",
    messagingSenderId: "367451881223"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
