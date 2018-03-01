import PropTypes from "prop-types";
import { NONE, LOADING, READY } from "~/constants/modes.js";

export default PropTypes.shape({
  data: PropTypes.array.isRequired,
  status: PropTypes.oneOf([LOADING, NONE, READY]).isRequired,
}).isRequired;
