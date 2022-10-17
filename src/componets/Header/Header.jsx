import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
// const imgUrl = process.env.PUBLIC_URL + "/assets/bg.jpg";
const Container = styled.div`
  display: flex;
  height: 70px;
  background: #fff;
  position: fixed;
  z-index: 5;
  padding: 5px 20px;
  align-items: center;
  width: 100%;
`;
const link = {
  textDecoration: "none",
  color: "gray",
  fontWeight: "700",
  fontSize: "1.4rem",
};
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex: 4;
`;
const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 320px;
  overflow-wrap: normal;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const AuthWrapper = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  div {
    width: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
export const Header = () => {
  return (
    <Container>
      <NavWrapper>
        <LogoContainer>
          <h1>
            {" "}
            <span>B</span>ook Library
          </h1>
        </LogoContainer>
        <MenuWrapper>
          <MenuContainer>
            {["Home", "About", "Categories", "My Books", "Contact"].map(
              (list) => (
                <Link style={link} key={list}>
                  {list}
                </Link>
              )
            )}
          </MenuContainer>
        </MenuWrapper>
        <AuthWrapper>
          <div>
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
          <div>
            <ShoppingCart />
          </div>
        </AuthWrapper>
      </NavWrapper>
    </Container>
  );
};
