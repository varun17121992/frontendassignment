import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles.css";

function LabelPrice({ label, price }) {
  return (
    <div className="labelPriceContainer">
      <p className="label">{label}</p>
      <p className="price">{`$ ${price}`}</p>
    </div>
  );
}

function CardModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-3">
        <div className="row">
          <img
            className="modal_image"
            src={props.item.image}
            alt="popupImage"
          />
          <div style={{ alignSelf: "flex-end", paddingLeft: "1rem" }}>
            <p className="modal_title">
              {props.item.name}
              <br />
              <sub className="modal_subtitle">{props.item.region}</sub>{" "}
            </p>
          </div>
        </div>
        <div className="py-3">
          <h4 className="heading">Pricing: </h4>
          <div className="py-2">
            <LabelPrice label="1 Week - 1 Month" price={props.item.price} />
            <LabelPrice label="6 Months" price={props.item.price * 5} />
            <LabelPrice label="1 Year" price={props.item.price * 9} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button className="modal_button" onClick={props.onHide}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CardModal;
