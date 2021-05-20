import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, gradient }) => {
  return (
    <Link to={text} className="self-center">
      <button className={`bg-gradient-${gradient}`}>
        {/* {text.charAt(0).toUpperCase() + text.slice(1)} */}
      </button>
    </Link>
  );
};

export default Button;