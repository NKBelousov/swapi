import PropTypes from "prop-types";

export default function Person() {
  return {
    birth_year: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gender: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    mass: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    species: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    starships: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    url: PropTypes.string.isRequired,
    vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };
}
