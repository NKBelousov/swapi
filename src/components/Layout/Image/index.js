import styled from "styled-components";
import React, { memo } from "react";
import PropTypes from "prop-types";

const ID_REGEX = /(\w+)\/(\d+)/;
const IMAGE_TYPES = {
  people: "characters",
  films: "films",
  species: "species",
  starships: "starships",
  planets: "planets",
  vehicles: "vehicles",
};

const getImageUrl = url => {
  if (!url) {
    return "";
  }
  const [_, type, id] = url.match(ID_REGEX);
  return `https://starwars-visualguide.com/assets/img/${IMAGE_TYPES[type]}/${id}.jpg`;
};

const Avatar = styled.img`
  border: 1px solid ${props => props.theme.secondary};
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const Image = memo(({ url }) => {
  return <Avatar src={getImageUrl(url)} />;
});

Image.displayName = "Image";

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
