import styled from "styled-components";
import { Header } from "../Header/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`;
const Children = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  scroll-behavior: smooth;
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Children>{children}</Children>
    </Container>
  );
};
