import styled from "styled-components";
import React, { memo } from "react";
import PropTypes from "prop-types";

const ID_REGEX = /\d+/;

const getImageUrl = url => {
  if (!url) {
    return "";
  }
  const [id] = url.match(ID_REGEX);
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
};

const Avatar = styled.img`
  border: 1px solid ${props => props.theme.secondary};
`;

const Image = memo(({ url }) => {
  return <Avatar src={getImageUrl(url)} />;
});

Image.displayName = "Image";

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
