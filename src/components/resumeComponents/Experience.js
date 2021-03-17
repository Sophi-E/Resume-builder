import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Experience = ({
  experience: { company, title, location, current, from, to, description },
}) => (
  <div>
    <h4 className="text-dark">{company}</h4>
    <p>
      {dayjs(from).format("DD/MM/YYYY")} - {""}
      {!to ? "Now" : dayjs(to).format("DD/MM/YYYY")}
    </p>
    <p>
      <strong>{title}</strong>
    </p>
    <p>{description}</p>
  </div>
);

Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default Experience;
