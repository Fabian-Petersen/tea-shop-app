import React from "react";
import styled from "styled-components";

const Divider = () => {
  return (
    <Wrapper>
      <div></div>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 0.5rem;
  background: linear-gradient(
    to left,
    var(--clr-primary),
    #e9b949,
    var(--clr-primary)
  );
`;

export default Divider;
