import React, { useState,useEffect } from 'react'
import './Calendar.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [

    {
        title:'Webinar',
        start: new Date(2023,9,15),
        end: new Date(2023,9,16)       
    },
    {
        title:'Quiz',
        start: new Date(2023,10,14),
        end: new Date(2023,10,18)       
    },
    {
        title:'DSA Class',
        start: new Date(2023,10,15),
        end: new Date(2023,10,15)      
    },

]



function Calender() {

  const [allEvents, setAllEvents] = useState(events)
  const [newEvent, setNewEvent] = useState({
    title:"",
    start:"",
    end:""
  })
  const [isAdmin,setIsAdmin]=useState(true);
useEffect(() => {
  const isAuthenticated = localStorage.getItem('authenticatedAdmin');
  if (isAuthenticated !== 'true') {
    setIsAdmin(false);
  }
  });
  const handleAddEvent = () =>{

    const formattedStart = newEvent.start instanceof Date ? newEvent.start : parse(newEvent.start, 'yyyy-MM-dd', new Date());
    let formattedEnd = newEvent.end instanceof Date ? newEvent.end : parse(newEvent.end, 'yyyy-MM-dd', new Date());
    formattedEnd = new Date(formattedEnd.getTime() + 24 * 60 * 60 * 1000);
    setAllEvents([...allEvents, { ...newEvent, start: formattedStart, end: formattedEnd }]);

  }

  return (
    <div>
      
      {isAdmin &&
        <div className='add-events-admin'>
          <div className='add-events-header'>Add Event</div>
          <div className='add-events-inputs'>
            <div className='add-event-dates'>
              <div>Title :</div>
              <input className='add-events-title' type="text" placeholder='Add event title..' value={newEvent.title} onChange={(e)=>setNewEvent({...newEvent, title:e.target.value})}/>
            </div>
            <div className='add-event-dates'>
              <div>Start date :</div>
              <DatePicker value={newEvent.start} onChange={(start) => setNewEvent({...newEvent,start})}/>
            </div>
            <div className='add-event-dates'>
              <div>End date :</div>
              <DatePicker value={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})}/>
            </div>
            <button className='add-event-button' onClick={handleAddEvent}>Add event</button>
          </div> 
      </div>}

        <Calendar
      localizer={localizer}
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 , }}
    />
    </div>
  )
}

export default Calender