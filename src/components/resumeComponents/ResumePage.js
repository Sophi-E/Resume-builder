import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getResumeById } from "../../actions/resume";
import PersonalDetail from "./PersonalDetail";

const ResumePage = ({ match, getResumeById, resume: { resume, loading } }) => {
  useEffect(() => {
    getResumeById(match.params.id);
  }, [getResumeById]);
  return (
    <>
      {resume === null || loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <PersonalDetail resume={resume} />
          </div>
        </>
      )}
    </>
  );
};

ResumePage.propTypes = {
  getResumeById: PropTypes.func.isRequired,
  resume: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getResumeById })(ResumePage);
