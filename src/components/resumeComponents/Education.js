import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Education = ({
  education: { school, degree, fieldofstudy, current, from, to },
}) => (
  <div>
    <p>
      <strong>{degree} -</strong> {""}
      {fieldofstudy}
    </p>
    <p className="text-dark">
      {school} | {dayjs(from).format("DD/MM/YYYY")} - {""}
      {!to ? "Now" : dayjs(to).format("DD/MM/YYYY")}
    </p>
    {/* <p>
      {dayjs(from).format("DD/MM/YYYY")} - {""}
      {!to ? "Now" : dayjs(to).format("DD/MM/YYYY")}
    </p> */}
  </div>
);

Education.propTypes = {
  education: PropTypes.object.isRequired,
};

export default Education;
