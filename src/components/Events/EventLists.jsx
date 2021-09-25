/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import EventDetails from './EventDetails';

const EventLists = ({ events, eventDetails }) => {
  return (
    <div>
      Event details
      <div>
        {eventDetails && eventDetails.map((attributes, index) => <EventDetails key={index} attributes={attributes} />)}
      </div>
    </div>
  );
};

export default EventLists;
