import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Card, Image, Button } from "react-bootstrap";
import imageheromobile from "./Img/image-hero-mobile.jpg";
import imageherodesktop from "./Img/image-hero-desktop.jpg";
import { Toggle } from "./components/Toggle";
import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCards,
  selectTotalReceived,
  selectDaysLeft,
  selectExpected,
  selectTotalBackers,
} from "./features/counter/cardSlice";
import { HomeCard } from "./components/HomeCard";
import { Modal } from "./components/Modal";
import {
  setModalCompleted,
  toggleModalShowing,
} from "./features/counter/modalSlice";
import { selectModalShowing } from "./features/counter/modalSlice";
function App() {
  const dataArray = useSelector(selectCards);
  const modalShowing = useSelector(selectModalShowing);
  const totalReceived = useSelector(selectTotalReceived);
  const expected = useSelector(selectExpected);
  const totalBackers = useSelector(selectTotalBackers);
  const daysLeft = useSelector(selectDaysLeft);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header className="" />
      <img
        src={imageheromobile}
        className="hero-image d-sm-none d-block"
        alt=""
      />
      <img
        src={imageherodesktop}
        className="hero-image d-none d-sm-block"
        alt=""
      />
      <div className="container main position-relative">
        <Card className="p-4 text-center">
          <Card.Body>
            <Card.Title>
              <h1 className="mb-3 font-weight-700 biggest">
                Mastercraft Bamboo Monitor Riser
              </h1>
            </Card.Title>
            <Card.Text className="mb-4 light-gray">
              A beautifully handcrafted monitor stand to reduce neck pain and
              stress
            </Card.Text>

            <Card.Text className="top-card-bottom">
              <button
                className="p-3 ps-3 pe-3 p-sm-3 rounded-pill green-button font-weight-700 text-white"
                onClick={() => dispatch(toggleModalShowing())}
              >
                Back this project
              </button>
              <Toggle />
            </Card.Text>
          </Card.Body>
        </Card>

        <svg
          width="56"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute masterkraft-logo"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#000" cx="28" cy="28" r="28" />
            <g fill-rule="nonzero">
              <path
                d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                fill="#444"
              />
              <path
                d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>

        <Card className="mt-4 p-4 text-center mb-4">
          <Card.Body className="second-segment-body">
            <ul className="mb-3">
              <li>
                <p className="font-weight-700 really-large">${totalReceived}</p>
                <span>of ${expected} backed</span>
                <hr />
              </li>
              <li>
                <p className="font-weight-700 really-large">{totalBackers}</p>
                <span>total backers</span>
                <hr />
              </li>
              <li className="exception">
                <p className="really-large font-weight-700">{daysLeft}</p>
                <span>days left</span>
              </li>
            </ul>
            <ProgressBar completed={(totalReceived / expected) * 100} />
          </Card.Body>
        </Card>

        <Card className="p-1 pt-3 ">
          <Card.Body>
            <h3 className="text-left font-weight-700 bigger">
              About this project<br></br>
              <br></br>
            </h3>
            <Card.Text className="text-left light-gray">
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
              <br /> <br />
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand
            </Card.Text>

            {dataArray.map((object) => {
              if (object.amount) {
                return <HomeCard {...object} />;
              } else {
                return null;
              }
            })}
          </Card.Body>
        </Card>
      </div>
      {modalShowing ? <Modal className="" /> : null}
    </div>
  );
}

export default App;
