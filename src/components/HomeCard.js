import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { decreaseStock } from "../features/counter/cardSlice";
import {
  setModalCompleted,
  toggleModalShowing,
} from "../features/counter/modalSlice";
export const HomeCard = (props) => {
  const { title, amount, subTitle, text, stock } = props;
  const isDisabled = stock === 0;
  const dispatch = useDispatch();
  const handleRewardSelectClick = () => {
    if (stock > 0) {
      dispatch(decreaseStock({ title, pledgeAmount: amount }));
      dispatch(toggleModalShowing());
      dispatch(setModalCompleted(true));
    } else {
      alert("Out of Stock!");
    }
  };

  return (
    <Card className={` mt-4 ${isDisabled ? "disabled" : ""}`}>
      <Card.Body>
        <header className="d-sm-flex align-items-sm-center pb-3">
          <h6 className="mb-1 font-weight-700 bigger">{title}</h6>
          <p className="ms-sm-auto light-green font-weight-700">{subTitle}</p>
        </header>
        <Card.Text className="text-left light-gray pb-4">{text}</Card.Text>
        <footer className="d-sm-flex aligin-items-sm-center">
          <p className="mb-3 mb-sm-0 d-flex align-items-center">
            <span className="font-weight-700 biggest">{stock}</span>
            <span className="light-gray ms-1">left</span>
          </p>
          <button
            className="back-button  p-3 ps-4 pe-4 ms-sm-auto rounded-pill green-button text-white font-weight-700"
            onClick={() => handleRewardSelectClick()}
          >
            Select Reward
          </button>
        </footer>
      </Card.Body>
    </Card>
  );
};
