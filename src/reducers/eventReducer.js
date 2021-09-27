/* eslint-disable import/no-anonymous-default-export */
import {
  SHOW_ERROR_MESSAGE,
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
      };
    case SHOW_ERROR_MESSAGE:
        return {
          ...state,
          errors: action.payload,
        };
    default:
      return state;
  }
}