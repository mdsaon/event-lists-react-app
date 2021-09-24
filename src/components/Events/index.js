/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import EventLists from './EventLists';

const Events = ({dispatch, eventLists, eventDetails}) => {
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  
  return(
    <div>
      <EventLists events={eventLists} eventDetails={eventDetails}/>
    </div>
  )
}


const mapStateToProps = (state) => ({
  eventLists: state.event.events,
  eventDetails: state.event.eventAttributes,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);