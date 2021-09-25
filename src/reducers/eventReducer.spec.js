import eventReducer from './eventReducer';
import * as types from '../actions/types';

describe('Event_Lists', () => {
  it('should fetch events with desired data', () => {
    const initialState = {
      events: [],
    };

    const action = {
      type: types.FETCH_EVENT_LIST,
      payload: {
        data:[
          {
            "id": "1",
            "type": "time-slots",
            "attributes": {
              "title": "Keynote - Articifial Intelligence vs. Emotional Intelligence",
              "reservable": false,
              "duration": 30,
              "subtitle": "George Walcott, AI.ai with Jim Carrey, EI.io",
              "content": {
                "blocks": [
                  {
                    "text": "As AI rises, the importance of EI does too. Skills like persuasion, listening and empathy set us apart from machines and will be essential in the future. George Walcott and Jim Carrey discuss the benefits of each and why one will never replace the other.",
                    "type": "unstyled",
                    "entity_ranges": [
      
                    ]
                  }
                ],
                "entity_map": {
                }
              },
              "start-time-in-time-zone": "2021-02-04T09:00:00.000+02:00",
              "end-time-in-time-zone": "2021-02-04T09:30:00.000+02:00",
              "tag-order": [
                "1",
                "2"
              ],
              "start-time": "2021-02-04T09:00:00.000Z",
              "end-time": "2021-02-04T09:30:00.000Z"
            },
            "relationships": {
              "tags": {
                "data": [
                  {
                    "id": "1",
                    "type": "tags"
                  },
                  {
                    "id": "2",
                    "type": "tags"
                  }
                ]
              },
              "locations": {
                "data": [
                  {
                    "id": "3",
                    "type": "tags"
                  }
                ]
              },
              "speaker-assignments": {
                "data": [
                  {
                    "id": "1",
                    "type": "speaker-assignments"
                  },
                  {
                    "id": "2",
                    "type": "speaker-assignments"
                  }
                ]
              }
            }
          },
        ]
      }
    };

    const state = eventReducer(initialState, action);

    const expectedState = {
     events:{
       data:[
        {
          "id": "1",
          "type": "time-slots",
          "attributes": {
            "title": "Keynote - Articifial Intelligence vs. Emotional Intelligence",
            "reservable": false,
            "duration": 30,
            "subtitle": "George Walcott, AI.ai with Jim Carrey, EI.io",
            "content": {
              "blocks": [
                {
                  "text": "As AI rises, the importance of EI does too. Skills like persuasion, listening and empathy set us apart from machines and will be essential in the future. George Walcott and Jim Carrey discuss the benefits of each and why one will never replace the other.",
                  "type": "unstyled",
                  "entity_ranges": [
    
                  ]
                }
              ],
              "entity_map": {
              }
            },
            "start-time-in-time-zone": "2021-02-04T09:00:00.000+02:00",
            "end-time-in-time-zone": "2021-02-04T09:30:00.000+02:00",
            "tag-order": [
              "1",
              "2"
            ],
            "start-time": "2021-02-04T09:00:00.000Z",
            "end-time": "2021-02-04T09:30:00.000Z"
          },
          "relationships": {
            "tags": {
              "data": [
                {
                  "id": "1",
                  "type": "tags"
                },
                {
                  "id": "2",
                  "type": "tags"
                }
              ]
            },
            "locations": {
              "data": [
                {
                  "id": "3",
                  "type": "tags"
                }
              ]
            },
            "speaker-assignments": {
              "data": [
                {
                  "id": "1",
                  "type": "speaker-assignments"
                },
                {
                  "id": "2",
                  "type": "speaker-assignments"
                }
              ]
            }
          }
        },
       ]
     }
    };

    expect(state).toEqual(expectedState);
  });
});
