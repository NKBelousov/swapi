import PropTypes from "prop-types";

export default function Person() {
  return {
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.number.isRequired,
    orbital_period: PropTypes.number.isRequired,
    diameter: PropTypes.number.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.number.isRequired,
    population: PropTypes.string.isRequired,
    residents: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
}
