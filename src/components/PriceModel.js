import React from "react";
import { Button } from "react-bootstrap";
import CardModal from "./CardModal";
import Translator from "./Translator";
import defaultMsg from "./language/defaultMessages";
import Dollar from "../Assets/Price.png";

// this component handles the price modal whenever click.

function Price(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <span>
      <img className="mr-1" src={Dollar} className="image-icon" alt="price" />
      <Button
        variant="light"
        style={{ color: "#57698a", textDecoration: "none", fontSize: "0.95em" }}
        onClick={() => setModalShow(true)}
      >
        {Translator("viewPricing", defaultMsg.msg.err)}
      </Button>
      <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={props.item}
      />
    </span>
  );
}

export default Price;
