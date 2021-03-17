import React from "react";
import { Table, ButtonGroup } from "react-bootstrap";
import Price from "./PriceModel";
import Calendar from "./Calendar";
import Translator from "./Translator";
import defaultMsg from "./language/defaultMessages";
import fileImage from "../Assets/file.png";
import statImage from "../Assets/statistics-report.png";
import { convertToDate } from "../utils/functions";

// Component responsible for table of the webpage

function Tables(props) {
  // to get date in defined format
  function getMonth(date) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[date.getUTCMonth()];
  }
  function prettyDate(date) {
    return " " + date.getUTCFullYear() + ", " + date.getUTCDate();
  }
  let d = new Date();
  const today_date = convertToDate(d);

  let milsec = d.getTime();
  // days from milliseconds
  function DaysLeft(item_date) {
    const new_item_date = parseInt(item_date) - milsec;
    let days = Math.abs(new_item_date) / (60 * 60 * 24 * 1000);

    if (convertToDate(item_date) > today_date) {
      days = Math.ceil(days).toString();
    } else {
      days = Math.floor(days).toString();
    }

    return days;
  }

  if (props.data === null) {
    return <h3 className="text-center">Select a Compaign.</h3>;
  }

  return (
    <div>
      <Table
        responsive
        hover
        style={{
          color: "#57698a",
          backgroundColor: "white",
          border: "1px solid lightgrey",
          tableLayout: "auto",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f1f1f4" }}>
            <th>{Translator("date", defaultMsg.msg.err)}</th>
            <th>{Translator("campaign", defaultMsg.msg.err)}</th>
            <th>{Translator("view", defaultMsg.msg.err)}</th>
            <th>{Translator("actions", defaultMsg.msg.err)}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, idx) => (
            <tr key={idx}>
              <td style={{ fontSize: "0.95em" }}>
                {Translator(
                  getMonth(new Date(parseInt(item["createdOn"]))),
                  defaultMsg.msg.err
                )}
                {prettyDate(new Date(parseInt(item["createdOn"])))}
                <br />
                <sub>
                  <i>
                    {DaysLeft(item["createdOn"])}{" "}
                    {convertToDate(item["createdOn"]) > today_date
                      ? Translator("ahead", defaultMsg.msg.err)
                      : Translator("ago", defaultMsg.msg.err)}
                  </i>
                </sub>
              </td>
              <td>
                <img
                  alt="game_url"
                  className="mr-3"
                  src={item.image_url}
                  style={{ width: "3em", height: "3em", float: "left" }}
                />
                <div>
                  <p className="my-0">
                    <b> {item["name"]} </b>
                  </p>
                  <sub> {item["region"]} </sub>{" "}
                </div>
              </td>
              <td>
                <Price
                  item={{
                    name: item["name"],
                    region: item["region"],
                    price: item["price"],
                    image: item["image_url"],
                  }}
                />
              </td>
              <td>
                {" "}
                <ButtonGroup>
                  <img
                    alt="csv"
                    className="mr-3"
                    src={fileImage}
                    className="image-icon"
                  />
                  <p className="ml-1 mx-0 my-0"> CSV</p>
                  <img
                    alt="report"
                    className="ml-5 image-icon"
                    src={statImage}
                  />
                  <p className="ml-2 mx-0 my-0">
                    {Translator("report", defaultMsg.msg.err)}
                  </p>
                  <Calendar
                    item={{ name: item["name"], time: item["createdOn"] }}
                    updatedData={props.updatedData}
                  />
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
