import React from "react";
import styled from "@emotion/styled";

const ResumeUi = () => {
  return (
    <StyledContainer>
      <div className="header-container">
        <h1 className="name">John doe</h1>
        <p className="title">Frontend Developer</p>
      </div>
      <main>
        <section className="left-pane">
          <div className="contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <span>Address</span>: Rivers, Nigeria 500927
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
                <a href="www.linkedin.com">https://linkedin.com/in/john-doe</a>
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
            </ul>
          </div>
        </section>
        <section className="right-pane">
          <div className="summary">
            <h2>Professional summary</h2>
            <p>
              thanks for the post, I got the same issue when changed api call
              and related infrastructure and my code was suddenly spitting a
              date object into the jsx instead of the previous date formatted
              string. The error message given wasn’t very helpful at the
              beginning, this helped me to track it down!
            </p>
          </div>
        </section>
      </main>
    </StyledContainer>
  );
};

export default ResumeUi;

const StyledContainer = styled.div`
  width: 62.5em;
  margin: 1em auto;
  background: #e5e9eb;

  .header-container {
    background-color: #576d7b;
    text-align: center;
    text-transform: uppercase;
    padding: 1em 0;
    color: #eef0f1 !important;
    margin-bottom: 3em;

    .name {
      font-size: 3.5em;
    }

    .title {
      font-size: 1.3em;
    }
  }

  main {
    width: 100%;
    padding: 0 0 0 2em;
    display: flex;

    h2 {
      text-transform: uppercase;
      font-weight: bold;
      padding: 1em 0;
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
        span {
          font-weight: bold;
        }
      }
    }

    .right-pane {
      background: #fff;
      width: 65%;
      padding: 0 2em;
    }
  }
`;
