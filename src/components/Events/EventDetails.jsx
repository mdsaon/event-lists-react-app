/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

const EventDetails = ({attributes}) => {
  return(
    <div>
      <p>Name: {attributes.title}</p>
      <p>Duration: {attributes.duration}</p>
      <p>Starting Time: {attributes['start-time']}</p>
      <p>End Time: {attributes['end-time']}</p>
    </div>
  )
}

export default EventDetails;