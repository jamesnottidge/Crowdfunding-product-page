import React from "react";
import "../component-styles/Toggle.css";

export const Toggle = (props) => {
  return (
    <form>
      <label className="switch d-none d-sm-inline-block">
        <input type="checkbox" />
        <span className="slider ">
          <span className="slider-before">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd" className="svg">
                <circle
                  fill="#2F2F2F"
                  cx="28"
                  cy="28"
                  r="28"
                  className="color-change"
                />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
          </span>
        </span>
      </label>

      <label className="switch-mobile d-sm-none d-inline-block">
        <input type="checkbox" />
        <span className="mobile-toggle">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle
                fill="#2F2F2F"
                cx="28"
                cy="28"
                r="28"
                className="color-change"
              />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
        </span>
      </label>
    </form>
  );
};
