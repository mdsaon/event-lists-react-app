/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import EventDetails from './EventDetails';
import {EventListsContainer, EventDetailsContainer} from './styles';

const EventLists = ({ events, eventDetails }) => {
  return (
    <EventListsContainer>
      <h1>Event details</h1>
      <EventDetailsContainer>
        {eventDetails && eventDetails.map((attributes, index) => <EventDetails key={index} attributes={attributes} />)}
      </EventDetailsContainer>
    </EventListsContainer>
  );
};

export default EventLists;
