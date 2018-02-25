import PropTypes from "prop-types";

const LOADING = "loading";
const NONE = "none";
const READY = "ready";

export default PropTypes.shape({
  data: PropTypes.array.isRequired,
  status: PropTypes.oneOf([LOADING, NONE, READY]).isRequired,
}).isRequired;
