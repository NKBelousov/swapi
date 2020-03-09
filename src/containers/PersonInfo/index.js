import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";
import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

import { getPersonByName } from "~/selectors/getPersonByName";
import { fetchPeople } from "~/actions";
import Preloader from "~/components/Utility/Preloader";
import Image from "~/components/Layout/Image";

const Content = styled(animated.div)`
  color: ${props => props.theme.secondary};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const Details = styled(animated.div)`
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Name = styled.h1`
  font-weight: bold;
`;

const Item = styled.h2`
  text-align: center;
  opacity: 0.8;
`;

const ItemValue = styled.span`
  letter-spacing: 0.25ch;
  margin-left: 0.5em;
  text-decoration-color: ${props => props.theme.secondary};
  text-decoration-style: dotted;
  text-decoration: underline;
  text-transform: uppercase;
`;

const renderGender = gender => {
  switch (gender) {
    case "male":
      return "♂";
    case "female":
      return "♀";
    default:
      return "";
  }
};

const PersonInfo = memo(() => {
  const { name } = useParams();
  const person = useSelector(getPersonByName(name));
  const dispatch = useDispatch();

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 500, friction: 160 },
  });

  useEffect(() => {
    if (!person) {
      dispatch(fetchPeople());
    }
  }, [person]);

  if (!person) {
    return <Preloader />;
  }

  return (
    <Content onClick={() => set(state => !state)}>
      <Image
        url={person.url}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      />
      <Details
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}>
        <Name>
          {person.name} {renderGender(person.gender)}
        </Name>
        <Item>
          Height: <ItemValue>{person.height}</ItemValue>
        </Item>
        <Item>
          Mass: <ItemValue>{person.mass}</ItemValue>
        </Item>
        <Item>
          Hair color: <ItemValue>{person.hair_color}</ItemValue>
        </Item>
        <Item>
          Skin color: <ItemValue>{person.skin_color}</ItemValue>
        </Item>
        <Item>
          Eye color: <ItemValue>{person.eye_color}</ItemValue>
        </Item>
      </Details>
    </Content>
  );
});

PersonInfo.displayName = "PersonInfo";

export default PersonInfo;
