import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech} &nbsp;
      <button onClick={onDelete} type="button">
        Remove
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Unknown"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
