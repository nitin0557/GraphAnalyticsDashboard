import React from "react";
import test from "../components/Images/svgz.svg";

const Icons = ({ name, size, color }) => {
  return (
    <div className="svg">
      <svg className={`bi bi-${name}`} fill={color} height={size} width={size}>
        <use href={`${test}#bi-${name}`} />
      </svg>
    </div>
  );
};
export default Icons;
