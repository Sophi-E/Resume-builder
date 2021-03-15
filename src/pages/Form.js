import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../components/Input";
import TextBox from "../components/TextBox";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createResume } from "../actions/resume";
import ResumePage from "../components/resumeComponents/ResumePage";

const initialValues = {
  name: "",
  title: "",
  address: "",
  phone: "",
  email: "",
  skills: "",
  summary: "",
};
const FormFields = ({ createResume, history }) => {
  const [formData, setFormData] = useState(initialValues);
  const [displaySkills, toggleSkills] = useState(false);
  const [displaySummary, toggleSummary] = useState(false);
  const [displayExperience, toggleExperience] = useState(false);
  const [displayEducation, toggleEducation] = useState(false);

  const { name, title, phone, email, address, summary, skills } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = (e) => {
    e.preventDefault();

    createResume(formData, history);

    console.log(formData);
  };

  let skillsArray = skills.split(",");

  return (
    <Pane>
      <form onSubmit={onFinish} className="form">
        <h2>Personal Details</h2>
        <div className="personalDetails">
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            name="name"
            onChange={onChange}
          />
          <Input
            label="Title"
            type="text"
            value={title}
            placeholder="Frontend Developer"
            name="title"
            onChange={onChange}
          />
          <Input
            label="Address"
            type="text"
            value={address}
            placeholder="10, street, Lagos"
            name="address"
            onChange={onChange}
          />
          <Input
            label="Phone"
            value={phone}
            type="text"
            placeholder="+2340000000"
            name="phone"
            onChange={onChange}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            placeholder="johndoe@test.com"
            name="email"
            onChange={onChange}
          />
        </div>
        {/* PROFILE LINKS  */}

        {/* summary */}
        <h2>Professional summary</h2>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => toggleSummary(!displaySummary)}
        >
          Add Summary
        </button>
        {displaySummary && (
          <TextBox
            label="Professional Summary"
            name="summary"
            value={summary}
            onChange={onChange}
            rows="4"
            cols="50"
          ></TextBox>
        )}

        {/* SKILLS */}
        <h2>Skills</h2>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => toggleSkills(!displaySkills)}
        >
          Add Skills
        </button>
        <br />
        {displaySkills && (
          <>
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
            <Input
              label="Skills"
              type="text"
              value={skills}
              placeholder="html, css..."
              name="skills"
              onChange={onChange}
            />
          </>
        )}

        <br />
        <button type="submit">Submit</button>
      </form>

      <StyledContainer>
        <div className="header-container">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
        </div>
        <main>
          <section className="left-pane">
            <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <span>Address</span>: {address}
                </li>
                <li>
                  <span>Phone</span>: {phone}
                </li>
                <li>
                  <span>Email</span>: {email}
                </li>
              </ul>
            </div>

            <div className="links">
              <h2>Profile Links</h2>
              <ul>
                <li>
                  <a href="https://github.com/john-doe">Github</a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/john-doe">Linkedin</a>
                </li>
                <li>
                  <a href="https://jondoe.com">Portfolio</a>
                </li>
              </ul>
            </div>

            <div className="Skills">
              <h2>Skills</h2>

              {skillsArray.map((skill) => (
                <ul key={skill}>
                  <li>{skill}</li>
                </ul>
              ))}
            </div>
          </section>
          <section className="right-pane">
            <div className="summary">
              <h2>Professional summary</h2>
              <p>{summary}</p>
            </div>
            {/* <div className="work-history">
              <h2>Work history</h2>
              <div>
                <p>
                  <span>{formData.jobTitle},</span> {formData.duration} <br />
                  <span>{formData.company}</span>- {formData.location}{" "}
                </p>
                <ul>
                  <li>
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a
                  </li>
                  <li>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>Front End Developer,</span> 12/2019 - 12/2020 <br />
                  <span>TechSoft Inc</span>- Port Harcourt, Rivers{" "}
                </p>
                <ul>
                  <li>
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a
                  </li>
                  <li>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                  </li>
                </ul>
              </div>
              <div>
                <p>
                  <span>Front End Developer,</span> 12/2019 - 2020 <br />
                  <span>TechSoft Inc</span>- Port Harcourt, Rivers{" "}
                </p>
                <ul>
                  <li>
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially
                  </li>
                  <li>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a
                  </li>
                  <li>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                  </li>
                </ul>
              </div>
            </div>
            <div className="education">
              <h2>education</h2>
              <p>
                <span>Bachelor of Arts: </span>Fine Arts, 12/2019 - 2020
                <br />
                <span>TechSoft Academy</span>- Port Harcourt, Rivers{" "}
              </p>
            </div> */}
          </section>
        </main>
      </StyledContainer>

      {/* <ResumePage /> */}
    </Pane>
  );
};

FormFields.propTypes = {
  createResume: PropTypes.func.isRequired,
};
export default connect(null, { createResume })(FormFields);

const Pane = styled.div`
  display: flex;
  position: relative;
  .form {
    width: 50%;
    padding: 3em;
    background: #fff;
    height: 100vmax;
    margin-right: 3em;
    .personalDetails {
      display: grid;
      grid-template: auto auto / auto auto;
    }
  }
`;

const StyledContainer = styled.div`
  width: 50em;
  background: #e5e9eb;
  max-height: 100%;
  margin: 5em;
  margin-left: 57%;
  position: fixed;

  .header-container {
    background-color: #576d7b;
    text-align: center;
    text-transform: uppercase;
    padding: 1em 0;
    color: #eef0f1 !important;
    margin-bottom: 3em;
    font-family: "Roboto Slab", serif;

    .name {
      font-size: 3.5em;
      margin-bottom: 0;
    }

    .title {
      /* font-size: 1.3em; */
    }
  }

  main {
    width: 100%;
    padding: 0 0 0 2em;
    display: flex;
    @media (max-width: 760px) {
      flex-direction: column;
    }
    font-family: "Oswald", sans-serif;

    h2 {
      text-transform: uppercase;
      font-weight: bold;
      padding: 1em 0 0 0;
    }

    span {
      font-weight: bold;
    }
    .left-pane {
      width: 35%;
      /* h2 {
        text-transform: uppercase;
        font-weight: bold;
        padding: 1em 0;
      } */
      ul {
        padding: 0 0 0 2em;
      }
      .contact {
        li {
          list-style: none;
        }
      }
      .links a {
        text-decoration: none;
        color: #333;
      }
    }

    .right-pane {
      background: #fff;
      width: 65%;
      padding: 0 2em 2em 2em;

      p {
        padding: 0 0 0 2em;
      }
      ul {
        padding: 0 0 0 3.2em;
      }
    }
  }
`;
