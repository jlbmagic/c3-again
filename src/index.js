//Here we're importing items we'll need. You can add other imports here.
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
//The first function. Remove this.

// const object = obj ? JSON.parse(obj) : {};
const events = [
  {
    id: "1",
    resourceId: "A",
    title: "DO THIS ONE",
    start: "2022-02-19T12:00:00",
    end: "2022-02-19T13:00:00",
  },
  {
    resourceId: "B",
    title: "event 2",
    start: "2022-02-09T12:00:00",
    end: "2022-02-09T13:00:00",
  },
];

let calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  events: events,
  eventClick: function (info) {
    console.log(info.event.title);
  },
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  },
});
calendar.render();
