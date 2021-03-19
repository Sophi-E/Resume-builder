import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Experience from "./Experience";
import Education from "./Education";

const PersonalDetail = ({
  resume: {
    experience,
    education,
    name,
    title,
    email,
    address,
    phone,
    summary,
    skills,
  },
}) => {
  return (
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

            {skills.map((skill) => (
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

          <h2>Work Experience</h2>
          {experience.length > 0 ? (
            <>
              {experience.map((experience) => (
                <Experience key={experience._id} experience={experience} />
              ))}
            </>
          ) : (
            <h4> No experience credentials</h4>
          )}
          <h2>Education</h2>
          {education.length > 0 ? (
            <>
              {education.map((education) => (
                <Education key={education._id} education={education} />
              ))}
            </>
          ) : (
            <h4> No education credentials</h4>
          )}
        </section>
      </main>
    </StyledContainer>
  );
};

PersonalDetail.propTypes = {
  resume: PropTypes.object.isRequired,
};
export default PersonalDetail;

const StyledContainer = styled.div`
  width: 50em;
  background: #e5e9eb;
  max-height: 100%;

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
