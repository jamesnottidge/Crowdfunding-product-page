import React from "react";
import "../component-styles/ProgressBar.css";

export const ProgressBar = (props) => {
  const { completed } = props;
  return (
    <div className="main-progress">
      <div style={{ maxWidth: `${completed}%` }} className="completed-progress">
        <span className="invisible">{`${completed}%`}</span>
      </div>
    </div>
  );
};
