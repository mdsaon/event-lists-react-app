import {
  SHOW_ERROR_MESSAGE,
  FETCH_EVENT_LIST,
} from "./types";
import axios from "axios";

export const displayErrorMessage = (text) => dispatch => {
  dispatch({
    type: SHOW_ERROR_MESSAGE,
    payload: text,
  });
};

export const getEvents = () => dispatch => {
  axios
    .get("https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots")
    .then(res =>
      dispatch({
        type: FETCH_EVENT_LIST,
        payload:res.data,
      }))
      .catch(e => {
        console.error(e);
        dispatch(displayErrorMessage('404 not found'));
      });
};