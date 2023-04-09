import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts";
import { colors } from "consts/colors";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Wrapper>Header</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  transition: margin 0.2s ease-out;
  background-color: ${colors.primery};
  height: ${HEADER_HEIGHT}px;
  z-index: ${Z_INDEX_LEVEL_2}px;
  color: "fff";
`;
