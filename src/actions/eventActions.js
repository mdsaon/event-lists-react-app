import {
  FETCH_EVENT_LIST,
} from "./types";
import axios from "axios";

export const getEvents = () => dispatch => {
  axios
    .get("https://api.brella.io/api/aalto/events/unicorndemo2025/time_slots")
    .then(res =>
      dispatch({
        type: FETCH_EVENT_LIST,
        payload:res.data,
      })
    );
};