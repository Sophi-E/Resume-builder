import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "./Input";
import TextBox from "./TextBox";

const initialValues = {
  fullName: "",
  title: "",
  address: "",
  phone: "",
  email: "",
  skills: "",
  summary: "",
};
const FormFields = () => {
  const [formData, setFormData] = useState(initialValues);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFinish = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  let skillsArray = formData.skills.split(",");

  return (
    <Pane>
      <form onSubmit={onFinish} className="form">
        <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          name="fullName"
          onChange={onChange}
        />
        <Input
          label="Title"
          type="text"
          placeholder="Frontend Developer"
          name="title"
          onChange={onChange}
        />
        <Input
          label="Address"
          type="text"
          placeholder="10, street, Lagos"
          name="address"
          onChange={onChange}
        />
        <Input
          label="Phone"
          type="text"
          placeholder="+2340000000"
          name="phone"
          onChange={onChange}
        />
        <Input
          label="Email"
          type="email"
          placeholder="johndoe@test.com"
          name="email"
          onChange={onChange}
        />
        {/* PROFILE LINKS  */}

        {/* SKILLS */}
        <Input
          label="Skills"
          type="text"
          placeholder="html, css..."
          name="skills"
          onChange={onChange}
        />

        {/* EXPERIENCE */}
        <TextBox
          label="Professional Summary"
          name="summary"
          onChange={onChange}
          rows="4"
          cols="50"
        ></TextBox>
        <button type="submit">Submit</button>
      </form>

      <StyledContainer>
        <div className="header-container">
          <p className="name">{formData.fullName}</p>
          <p className="title">{formData.title}</p>
        </div>
        <main>
          <section className="left-pane">
            <div className="contact">
              <h2>Contact</h2>
              <ul>
                <li>
                  <span>Address</span>: {formData.address}
                </li>
                <li>
                  <span>Phone</span>: {formData.phone}
                </li>
                <li>
                  <span>Email</span>: {formData.email}
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
              <p>{formData.summary}</p>
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
      {/* )} */}
    </Pane>
  );
};

export default FormFields;
const Pane = styled.div`
  display: flex;
  .form {
    width: 50%;
    /* display: flex; */
  }
`;
const StyledContainer = styled.div`
  width: 60em;
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
