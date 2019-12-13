import React, { memo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPersonByName } from "~/selectors/getPersonByName";

const Content = styled.div`
  color: ${props => props.theme.secondary};
`;

const PersonInfo = memo(() => {
  const { name } = useParams();
  const person = useSelector(getPersonByName(name));
  return <Content>{JSON.stringify(person, null, 2)}</Content>;
});

PersonInfo.displayName = "PersonInfo";

export default PersonInfo;
