import React from "react";
import { useThemeContext } from "../../styles/themeContext";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Switch = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <Container>
      <button onClick={toggleTheme}>{`스위치`}</button>
    </Container>
  );
};

export default Switch;
