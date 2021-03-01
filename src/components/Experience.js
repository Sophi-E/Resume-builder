import React, { useState } from "react";
import Input from "./Input";

const initialValues = {
  jobTitle: "",
  duration: "",
  company: "",
  location: "",
};
const Experience = () => {
  const [formData, setFormData] = useState(initialValues);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Input
        label="Job Title"
        name="jobTitle"
        type="text"
        placeholder="Senior frontend developer"
        onChange={onChange}
      />
      <Input
        label="Job Duration"
        name="duration"
        type="text"
        placeholder="12/2019 - 12/2020"
        onChange={onChange}
      />
      <Input
        label="Company"
        name="company"
        type="text"
        placeholder="Google Inc"
        onChange={onChange}
      />
      <Input
        label="Job Location"
        name="location"
        type="text"
        placeholder="Boston, Ma"
        onChange={onChange}
      />
    </>
  );
};

export default Experience;
