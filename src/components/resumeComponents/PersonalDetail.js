import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const PersonalDetail = ({
  resume: { name, title, email, address, phone, summary, skills },
}) => {
  let skillsArray = skills.split(",");
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
