import PropTypes from "prop-types";

export default PropTypes.shape({
  active: PropTypes.bool.isReqiured,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}).isRequired;
