import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { memo } from "react";
import styled from "styled-components";

import { getPersonByName } from "~/selectors/getPersonByName";

const Content = styled.div`
  color: ${props => props.theme.secondary};
  text-align: center;
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

  return (
    <Content>
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
    </Content>
  );
});

PersonInfo.displayName = "PersonInfo";

export default PersonInfo;
