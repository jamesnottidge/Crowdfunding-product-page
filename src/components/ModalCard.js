import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decreaseStock } from "../features/counter/cardSlice";
import { setModalCompleted } from "../features/counter/modalSlice";
import "../component-styles/ModalCard.css";

export const ModalCard = (props) => {
  const { title, amount, subTitle, text, stock } = props;
  const [pledgeAmount, setPledgeAmount] = useState();
  const isDisabled = stock <= 0 && stock != null;
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (Number.isInteger(value)) {
      setPledgeAmount(value);
    }
  };

  const submitPledge = (pledgeAmount) => {
    console.log("also ran");
    if (pledgeAmount >= amount) {
      dispatch(decreaseStock({ title, pledgeAmount }));
      dispatch(setModalCompleted(true));
    } else if (pledgeAmount < amount) {
      alert("Too low! Try another reward!");
    }
  };

  return (
    <Card
      className={`mt-4 modal-card position-relative p-1 ${
        isDisabled ? "disabled" : ""
      }`}
    >
      <Card.Body className="modal-card-body">
        <div className="form-check ps-0 ps-sm-4">
          <input
            // onChange={(e) => setIsChecked(e.target.checked)}
            ref={ref}
            type="radio"
            id={title}
            name="modal"
            className="form-check-input me-3"
            disabled={isDisabled}
          />
          <div className="d-flex ">
            <label
              for={title}
              className="form-check-label ps-1 d-flex flex-wrap mb-3 "
            >
              <span className="mb-1 font-weight-700 bigger">{title}</span>
              <span className="ms-sm-3 mb-0 light-green font-weight-700">
                {subTitle}
              </span>
            </label>

            <p className="mb-0 ms-auto d-none d-sm-inline-block me-2 font-weight-700">
              <span className="font-weight-700 bigger">{stock}</span>
            </p>
            {stock === null ? null : (
              <span className="d-none d-sm-inline-block light-gray ms-1">
                left
              </span>
            )}
          </div>

          <Card.Text className="text-left light-gray pb-4">{text}</Card.Text>

          <p className="mb-3 mb-sm-0 d-inline-block d-sm-none">
            <span className="font-weight-700 bigger">{stock}</span>
            {stock === null ? null : (
              <span className="light-gray ms-1">left</span>
            )}
          </p>

          <footer className="pledge-footer">
            <input
              placeholder="Enter your Pledge"
              onChange={(e) => handleChange(e)}
              value={pledgeAmount}
            ></input>
            <p>
              <button
                onClick={() => submitPledge(amount)}
                variant="outline-secondary"
                className="fixed-pledge-button p-2 pe-4 ps- rounded-pill me-2"
              >
                <span className="pe-1 ps-1">$</span>
                <span className="ms-1">{amount}</span>
              </button>
              <button
                onClick={() => submitPledge(pledgeAmount)}
                className="rounded-pill p-2 pe-4 ps-3 font-weight-500 me-2 green-button continue-button"
              >
                Continue
              </button>
            </p>
          </footer>
        </div>
      </Card.Body>
    </Card>
  );
};
