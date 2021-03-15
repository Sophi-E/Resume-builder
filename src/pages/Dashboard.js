import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getResume } from "../actions/resume";
import PersonalDetail from "../components/resumeComponents/PersonalDetail";

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
    <>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.user.name}</p>

      {resume !== null ? (
        <>
          <Link to="/resume">View Resume</Link>
          <PersonalDetail resume={resume} />
        </>
      ) : (
        <>
          <p>You have not created any resume yet</p>
          <Link to="/create-resume">Create Resume</Link>
        </>
      )}
    </>
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
