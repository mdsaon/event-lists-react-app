/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { EventDetailsItems } from './styles';

const EventDetails = ({attributes}) => {
  return(
    <EventDetailsItems>
      <p>Name: {attributes.title}</p>
      <p>Duration: {attributes.duration}</p>
      <p>Starting Time: {attributes['start-time']}</p>
      <p>End Time: {attributes['end-time']}</p>
    </EventDetailsItems>
  )
}

export default EventDetails;