import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios';

const ADD_SHOW = 'ADD_SHOW';
const SET_SHOWS = 'SET_SHOWS';
const SELECT_SHOW = 'SELECT_SHOW';
const SERVER = process.env.REACT_APP_SERVER || 3002;

// creating actions
export const addShow = createAction('ADD_SHOW');
export const setShows = createAction('SET_SHOWS');
export const selectShow = createAction('SELECT_SHOW');

export const getShows = () => async (dispatch, getState) => {
  // this will ultimately hit our 'shows' database table
  // let response = await axios.get(`${SERVER}/show`);
  let response = await axios.get(`${SERVER}/show`);
  // console.log('response: ', response.data);
  dispatch(setShows(response.data));
};

// create reducer
const showReducer = createReducer({
  // initial state
  list: [],
  selectedShow: null,
}, {
  // adding a show to state
  [ADD_SHOW]: (state, action) => ({
    list: [...state, action.payload]
  }),
  // setting all shows into state from database
  [SET_SHOWS]: (state, action) => ({
    list: action.payload,
  }),
  // setting selected show into state for use by Details component
  [SELECT_SHOW]: (state, action) => ({
    selectedShow: action.payload,
  }),
});

export default showReducer;