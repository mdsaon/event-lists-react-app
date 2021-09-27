/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import EventLists from './EventLists';
import { Wrapper } from './styles';

const Events = ({dispatch, eventLists, eventDetails}) => {
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  
  return(
    <Wrapper>
      <EventLists 
        events={eventLists} 
        eventDetails={eventDetails}/>
    </Wrapper>
  )
}


const mapStateToProps = (state) => ({
  eventLists: state.event.events,
  eventDetails: state.event.events.length !==0 && state.event.events.data.map(event=>event.attributes),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);