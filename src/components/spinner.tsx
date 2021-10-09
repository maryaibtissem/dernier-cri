import React from "react";

import styled from "styled-components";

const ActivityIndicator = styled.ActivityIndicator`
  position: absolute;
  top: 550;
  left: 0;
  right: 0;
`;

const Spinner = () => {
  return <ActivityIndicator size="large" color="white" />;
};

export default Spinner;
