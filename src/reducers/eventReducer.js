/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_EVENT_LIST,
} from "../actions/types";

const initialState = {
  events: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT_LIST:
      return {
        ...state,
        events: action.payload,
        eventAttributes: action.payload.data.map(event=>event.attributes)
      };
    default:
      return state;
  }
}