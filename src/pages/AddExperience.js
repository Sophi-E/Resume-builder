import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "../components/Input";
import TextBox from "../components/TextBox";
import { connect } from "react-redux";
import { addExperience } from "../actions/resume";

const initialValues = {
  title: "",
  company: "",
  location: "",
  from: "",
  to: "",
  current: false,
  description: "",
};

const AddExperience = ({ addExperience, history }) => {
  const [expData, setExpdata] = useState(initialValues);

  const { title, company, location, from, to, description, current } = expData;

  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setExpdata({ ...expData, [e.target.name]: e.target.value });
  };

  const onFinish = (e) => {
    e.preventDefault();
    addExperience(expData, history);
  };

  return (
    <div>
      <form onSubmit={onFinish} className="form">
        <h2>Experience</h2>

        <Input
          label="Job Title"
          type="text"
          value={title}
          placeholder="Frontend Developer"
          name="title"
          onChange={onChange}
        />
        <Input
          label="Company"
          type="text"
          value={company}
          placeholder="Google inc"
          name="company"
          onChange={onChange}
        />
        <Input
          label="Location"
          type="text"
          value={location}
          placeholder="Lagos, Nigeria"
          name="location"
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
        <TextBox
          label="Job Description"
          name="description"
          value={description}
          onChange={onChange}
          rows="4"
          cols="50"
        ></TextBox>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
