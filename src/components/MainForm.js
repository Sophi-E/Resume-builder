// MainForm.jsx
import React, { useState } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./UserDetails";
// import Confirmation from "./Confirmation";
import Success from "./Success";

const initialState = {
  step: 1,
  name: "",
  title: "",
  email: "",
  address: "",
  phone: "",
  skills: [],
  profileLinks: [],
  summary: "",
  experience: [],
  education: "",
};
const MainForm = () => {
  const [userData, setUserData] = useState(initialState);

  const { step, firstName, lastName, email, age, city, country } = userData;

  const nextStep = () => {
    // const { step } = userData;
    setUserData({
      step: step + 1,
    });
  };

  const prevStep = () => {
    // const { step } = userData;
    setUserData({
      step: step - 1,
    });
  };

  const handleChange = (input) => (event) => {
    setUserData({ [input]: event.target.value });
  };

  const values = { firstName, lastName, email, age, city, country };
  switch (step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    // case 3:
    //     return (
    //         <Confirmation
    //             nextStep={nextStep}
    //             prevStep={prevStep}
    //             values={values}
    //         />
    //     );
    case 3:
      return <Success />;
  }
};

export default MainForm;
