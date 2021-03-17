import React, { useState } from "react";
import Calendar from "react-calendar";
import ControlledTabs from "./Tabs";
import Translator from "./Translator";
import defaultMsg from "./language/defaultMessages";
import "react-calendar/dist/Calendar.css";
import { Button, Modal } from "react-bootstrap";
import calendarImage from "../Assets/calendar.png";
// this component handles the calender of the web page .
// changed the calendar component  - used react hooks useState

function CustomCalendar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [param, setParam] = useState("");
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleChange = (date) => {
    const time = new Date(date).getTime() + 5.5 * 3600000; // for Indian std Time
    props.updatedData(time, props.item);
    setDate(date);
    setView(false);
    setUpdate(true);
    handleClose();
  };

  const handleClick = () => {
    setView((prevState) => !prevState);
    setUpdate(false);
    setParam(props.item["name"]);
    handleShow();
  };
  const activeView = view;

  const someUpdate = update;
  const renderUpdate = () => {
    if (someUpdate) {
      return (
        <div>
          <ControlledTabs
            key={update}
            param={param}
            update={update}
            date={date}
          />
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <img alt="calendar" className="ml-5 image-icon" src={calendarImage} />
      <button onClick={handleClick} variant="light" className="btn-style">
        <p className="ml-0 mx-0 my-0">
          {" "}
          {Translator("scheduleAgain", defaultMsg.msg.err)}
        </p>
      </button>

      <div style={{ display: "none" }}>{renderUpdate()}</div>
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Calender</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Calendar defaultView="month" onChange={handleChange} value={date} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CustomCalendar;
