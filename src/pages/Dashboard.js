import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import { getResume } from "../actions/resume";
import PersonalDetail from "../components/resumeComponents/PersonalDetail";
import PdfDownloader from "../utils/pdfDownloader";

const Dashboard = ({
  getResume,
  auth: { user },
  resume: { resume, loading },
}) => {
  useEffect(() => {
    getResume();
  }, [getResume]);

  console.log(resume);
  return loading && resume === null ? (
    <p>Loading...</p>
  ) : (
    <StyledWrapper>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.user.name}</p>

      {resume !== null ? (
        <>
          <Link to="/create-resume">Edit Resume</Link> | {""}
          <Link to="/add-experience">Add Experience to Resume</Link> | {""}
          <Link to="/add-education">Add Education to Resume</Link>
          <br />
          <br />
          <hr />
          <PdfDownloader downloadFileName="ResumePdf" elementId="resumePdf" />
          <div id="resumePdf">
            <PersonalDetail resume={resume} />
          </div>
        </>
      ) : (
        <>
          <p>You have not created any resume yet</p>
          <Link to="/create-resume">Create Resume</Link>
        </>
      )}
    </StyledWrapper>
  );
};

Dashboard.propTypes = {
  getResume: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  resume: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  resume: state.resume,
});
export default connect(mapStateToProps, { getResume })(Dashboard);

const StyledWrapper = styled.div`
  padding: 2em 5em;
`;
