import PropTypes from "prop-types";
import { NONE, LOADING, READY } from "~/actions/constants";

export default PropTypes.shape({
  data: PropTypes.array.isRequired,
  status: PropTypes.oneOf([LOADING, NONE, READY]).isRequired,
}).isRequired;
