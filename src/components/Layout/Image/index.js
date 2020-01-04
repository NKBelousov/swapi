import styled from "styled-components";
import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

import Preloader from "~/components/Utility/Preloader";
import { IMAGE_ROOT } from "~/constants/Api";

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
  return `${IMAGE_ROOT}/${IMAGE_TYPES[type]}/${id}.jpg`;
};

const Avatar = styled.img`
  border: 1px solid ${props => props.theme.secondary};
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const Image = memo(({ url }) => {
  const [isLoading, setLoading] = useState(true);
  const [realUrl, setRealUrl] = useState(url);

  useEffect(() => {
    setLoading(true);
    setRealUrl(getImageUrl(url));

    const img = document.createElement("img");
    img.src = getImageUrl(url);
    img.style.display = "none";
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
      setRealUrl(`${IMAGE_ROOT}/big-placeholder.jpg`);
    };
    document.body.appendChild(img);
    return () => document.body.removeChild(img);
  }, [url]);

  if (isLoading) {
    return <Preloader />;
  }

  return <Avatar src={realUrl} />;
});

Image.displayName = "Image";

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
