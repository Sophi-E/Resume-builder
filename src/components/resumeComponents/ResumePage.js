import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getResume } from "../../actions/resume";
import PersonalDetail from "./PersonalDetail";
import auth from "../../reducers/auth";

const ResumePage = ({
  getResume,
  resume: { resume, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getResume();
  }, [getResume]);

  console.log(resume);
  return (
    <>
      {resume === null || loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {resume !== null && (
            <div>
              <PersonalDetail resume={resume} />
            </div>
          )}
        </>
      )}
    </>
  );
};

ResumePage.propTypes = {
  getResume: PropTypes.func.isRequired,
  resume: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getResume })(ResumePage);
