import React from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

const ResumeUi = () => {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <div className="header-container">
          <p className="name">John doe</p>
          <p className="title">Frontend Developer</p>
        </div>
        <main>
          <section className="left-pane">
            <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <span>Address</span>: Rivers, World 500927
                </li>
                <li>
                  <span>Phone</span>: +234900000000
                </li>
                <li>
                  <span>Email</span>: johndoe@test.com
                </li>
              </ul>
            </div>

            <div className="links">
              <h2>Profile Links</h2>
              <ul>
                <li>
                  <a href="www.github.com">https://github.com/john-doe</a>
                </li>
                <li>
                  <a href="www.linkedin.com">
                    https://linkedin.com/in/john-doe
                  </a>
                </li>
                <li>
                  <a href="!#">https://jondoe.com</a>
                </li>
              </ul>
            </div>

            <div className="Skills">
              <h2>Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Vue.js</li>
                <li>Git</li>
              </ul>
            </div>
          </section>
          <section className="right-pane">
            <div className="summary">
              <h2>Professional summary</h2>
              <p>
                Thanks for the post, I got the same issue when changed api call
                and related infrastructure and my code was suddenly spitting a
                date object into the jsx instead of the previous date formatted
                string. The error message given wasn’t very helpful at the
                beginning!
              </p>
            </div>
            <div className="work-history">
              <h2>Work history</h2>
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
            </div>
          </section>
        </main>
      </StyledContainer>
    </>
  );
};

export default ResumeUi;

const StyledContainer = styled.div`
  width: 60em;
  margin: 2em auto;
  background: #e5e9eb;

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
      padding: 0 2em;

      p {
        padding: 0 0 0 2em;
      }
      ul {
        padding: 0 0 0 3.2em;
      }
    }
  }
`;
