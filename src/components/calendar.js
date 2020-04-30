import React, { useState, useEffect } from "react"
import Zoom from 'react-reveal/Zoom'
import Moment from 'react-moment';
import moment from 'moment'
import Title from "./Common/Title"

function Calendar(props) {
  const [loading, setLoading] = useState(false)
  const [eventCounts, seteventCounts] = useState(0)
  
  useEffect(() => {
   
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/${props.data.key}`,
      true
    );
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          var lines = request.responseText.split("\n");
          var events = []
          var event = {}
          for (var i = 0; i < lines.length; i++) {
            if (lines[i].includes('DTSTART')) {
              var date = lines[i].split(":");
              if (date.length > 1) {
                event.date = date[1].replace(/\\/g, '');
              }
            }
            else if (lines[i].includes('SUMMARY')) {
              var title = lines[i].split(":");
              if (title.length > 1 ) {
              event.title = title[1].replace(/\\/g, '');
              }
            }
            else if (lines[i].includes('LOCATION')) {
              var location = lines[i].split(":");
              if (location.length > 1 && location[0].length === 8) {
                event.location = location[1].replace(/\\/g, '');
              }
            }
            else if (lines[i].includes('END:VEVENT')) {
              events.push(event);
              event = {}
            }
          }
          seteventCounts(events.sort(function (a, b) {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          }));
          setLoading(true);
        }
      }
    }
  }, [loading, props.data.key])

  function createEvents(events) {
    const start = Date.now()
    const AllEvents = events.map((key) => {
      if (moment(moment(key.date, "YYYYMMDDTHHmmssZ")).isAfter(start, 'minute')) {
        return (<Zoom key={key.date}>
          <div className="col-12">
            <div className="row">
              <div className="col-4 calendar-item text-center">
                {key.title}
              </div>
              <div className="col-4 calendar-item text-center">
                <i className="far fa-calendar-alt mr-2"></i>
                <Moment parse="YYYYMMDDTHHmmssZ" format="DD-MM-YYYY HH:mm" >
                  {key.date}
                </Moment>
              </div>
              <div className="col-4 calendar-item text-center">
                {key.location}
              </div>
            </div>
          </div>
        </Zoom>);
      }
      return ('');
    })
    return AllEvents
  }

  return (
    <section id="calendar" className="py-5">
      <div className="container ">
      <Title title={props.data.title} />
        <div className="row">
          <Zoom>
            <div className="col-12 mb-3">
              <div className="row">
                <div className="calendar-title col-4">
                  <h3 className="text-center">{props.event}</h3>
                </div>
                <div className="calendar-title  col-4">
                  <h3 className="text-center">{props.date}</h3>
                </div>
                <div className="calendar-title  col-4">
                  <h3 className="text-center">{props.location}</h3>
                </div>
              </div>
              <hr className="full" /> 
            </div>
          </Zoom>
          
          {loading ? eventCounts.length === 0 ? <div className="col-12 text-center"><p>{props.data.error}</p></div> : createEvents(eventCounts) : ''}
        </div>
      </div>
    </section>
  )
}

Calendar.defaultProps = {
  data: {
    key: 'https://calendar.google.com/calendar/ical/fh4on775u85k3lb3ka03r0v37s%40group.calendar.google.com/private-acff90dddc1498772f5babbfeb6f7aa0/basic.ics',
    title: 'Conciertos',
  },
  event:'Evento',
  date: 'Fecha',
  location: 'Locación',
  error: 'No hay próximos eventos'
}

export default Calendar