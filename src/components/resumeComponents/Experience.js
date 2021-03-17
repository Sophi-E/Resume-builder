import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Experience = ({
  experience: { company, title, location, current, from, to, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      {dayjs(from).format("DD/MM/YYYY")} - {""}
      {!to ? "Now" : dayjs(to).format("DD/MM/YYYY")}
    </p>
    <p>
      <strong>Position</strong> {title}
    </p>
    <p>
      <strong>Description</strong> {description}
    </p>
  </div>
);

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
