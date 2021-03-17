import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "../components/Input";
import TextBox from "../components/TextBox";
import { connect } from "react-redux";
import { addEducation } from "../actions/resume";

const initialValues = {
  school: "",
  fieldofstudy: "",
  degree: "",
  from: "",
  to: "",
  current: false,
};

const AddEducation = ({ addEducation, history }) => {
  const [eduData, setEduData] = useState(initialValues);

  const { school, fieldofstudy, degree, from, to, current } = eduData;

  const onChange = (e) => {
    setEduData({ ...eduData, [e.target.name]: e.target.value });
  };

  const onFinish = (e) => {
    e.preventDefault();
    addEducation(eduData, history);
  };

  return (
    <div>
      <form onSubmit={onFinish} className="form">
        <h2>Education</h2>

        <Input
          label="School"
          type="text"
          value={school}
          placeholder="MIT"
          name="school"
          onChange={onChange}
        />
        <Input
          label="Field of Study"
          type="text"
          value={fieldofstudy}
          placeholder="Computer Science"
          name="fieldofstudy"
          onChange={onChange}
        />
        <Input
          label="Degree"
          type="text"
          value={degree}
          placeholder="Masters"
          name="degree"
          onChange={onChange}
        />
        <Input
          label="From"
          type="date"
          value={from}
          placeholder="2/2/2020"
          name="from"
          onChange={onChange}
        />
        <Input
          label="To"
          type="date"
          value={to}
          placeholder="2/2/2020"
          name="to"
          onChange={onChange}
        />

        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
