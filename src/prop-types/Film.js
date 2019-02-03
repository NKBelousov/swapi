import PropTypes from "prop-types";

export default function Film() {
  return {
    title: PropTypes.string.isRequired,
    episode_id: PropTypes.number.isRequired,
    opening_crawl: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    planets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    starships: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    vehicles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    species: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
}
