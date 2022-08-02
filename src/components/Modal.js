import React from "react";
import { ModalCard } from "./ModalCard";
import { useSelector } from "react-redux";
import { selectCards } from "../features/counter/cardSlice";
import { Button, Card } from "react-bootstrap";
import "../component-styles/Modal.css";
import { useDispatch } from "react-redux";
import {
  selectModalShowing,
  selectModalCompleted,
  toggleModalShowing,
  setModalCompleted,
} from "../features/counter/modalSlice";
import { useState } from "react";

export const Modal = (props) => {
  const dataArray = useSelector(selectCards);
  const modalShowing = useSelector(selectModalShowing);
  const modalCompleted = useSelector(selectModalCompleted);
  // const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const onModalClose = () => {
    dispatch(toggleModalShowing());
    dispatch(setModalCompleted(false));
  };
  return (
    <Card className="modal-custom fixed-top" onClick={() => onModalClose()}>
      {modalCompleted ? (
        <div
          className="custom-modal-content modal-completed p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            className="mb-3"
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                stroke-width="5"
                d="M20 31.86L28.093 40 44 24"
              />
            </g>
          </svg>
          <h4 className="font-weight-700 bigger mb-2">
            Thanks for your Support!
          </h4>
          <Card.Text className="mb-4 light-gray">
            Your Pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </Card.Text>
          <button
            onClick={() => onModalClose()}
            className="text-white p-3 rounded-pill green-button font-weight-700 "
          >
            Got it!
          </button>
        </div>
      ) : (
        <div
          className="custom-modal-content p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Card.Title className="d-flex">
            <h3 className="text-left font-weight-700 bigger">
              Back this project
            </h3>
            <button
              onClick={() => onModalClose()}
              className="ms-auto background-none"
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FAF" fill-rule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            </button>
          </Card.Title>
          <Card.Text className="text-left light-gray">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Card.Text>
          <Card.Body className="p-0">
            <form>
              {dataArray.map((object) => (
                <ModalCard {...object} />
              ))}
            </form>
          </Card.Body>
        </div>
      )}
    </Card>
  );
};
