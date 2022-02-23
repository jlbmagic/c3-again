//Here we're importing items we'll need. You can add other imports here.
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
//The first function. Remove this.

// const object = obj ? JSON.parse(obj) : {};
const events = [
  {
    events: [
      {
        id: "1",
        resourceId: "A",
        title: "DO THIS ONE",
        start: "2022-02-19T12:00:00",
        end: "2022-01-19T13:00:00",
      },
      {
        resourceId: "B",
        title: "event 2",
        start: "2022-02-09T12:00:00",
        end: "2022-02-09T13:00:00",
      },
    ],
    color: "green",
  },
  {
    color: "red",
    events: [
      {
        resourceId: "C",
        start: "2022-02-17",
        end: "2022-02-18",
        display: "background",
        allDay: true,
      },
      {
        resourceId: "E",
        start: "2022-02-18T10:00:00",
        end: "2022-02-18T13:00:00",
        display: "background",
        allDay: false,
      },
    ],
  },
];
const resources = [
  {
    id: "A",
    title: "Benny",
  },
  {
    id: "C",
    title: "Cora",
  },
  {
    id: "B",
    title: "Eleanor",
  },
  {
    id: "D",
    title: "Zelda",
  },
  {
    id: "E",
    title: "Quinston",
  },
];

let calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  initialView: "dayGridMonth",
  events: events,
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  },
});
calendar.render();
