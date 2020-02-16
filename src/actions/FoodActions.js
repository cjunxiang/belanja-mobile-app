
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  FOOD_UPDATE,
  FOOD_CREATE,
  FOOD_FETCH_SUCESS,
  FOOD_SAVE_SUCCESS
} from './types';

export const foodUpdate = ({ prop, value }) => {
  return {
    type: FOOD_UPDATE,
    payload: { prop, value }
  }
};

export const foodCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/foods`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: FOOD_CREATE });
        Actions.pop();
      });
  };
};

export const foodsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/foods`)
      .on('value', snapshot => {
        dispatch({ type: FOOD_FETCH_SUCESS, payload: snapshot.val() });
      });
  };
};

export const foodSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/foods/${uid}`)
      .set({ name, phone, shift})
      .then(() => {
        dispatch({ type: FOOD_SAVE_SUCCESS });
        Actions.pop();
      });
  }
};

export const FOODDelete = ({ key }) => {
  const { currentUser } = firebase.auth();

  return () => {
      firebase.database().ref(`/users/${currentUser.uid}/foods/${key}`)
        .remove()
        .then(() => {
          Actions.pop();
        })
  };
};
