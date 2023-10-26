import React from 'react'
import './Calendar.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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
  return (
    <div>
        <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    </div>
  )
}

export default Calender