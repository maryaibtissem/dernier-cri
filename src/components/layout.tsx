import React, { FC, ReactChild, ReactNode, ReactElement } from "react";
import styled from "styled-components";

const SafeAreaView = styled.SafeAreaView`
  background-color: #10121b;
  min-height: 100%;
`;
const Layout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Layout;
