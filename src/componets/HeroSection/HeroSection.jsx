import { SearchRounded, Tune } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";
import { padding } from "@mui/system";
import styled from "styled-components";
const imgUrl = process.env.PUBLIC_URL + "/assets/bg.jpg";
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1600431521340-491eca880813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  max-width: 100%;
  height: 80vh;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
`;
const Title = styled.span`
  color: white;
  font-size: 5rem;
  font-weight: bolder;
`;
const OverLay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(26, 26, 26, 0.6);
`;
const SubTitle = styled.div`
  display: flex;
  font-weight: 700;
  color: whitesmoke;
  font-size: 2rem;
  max-width: 70%;
  text-align: center;
`;

const SeachWrapper = styled.div`
  display: flex;
  width: 80%;
  gap: 10px;
  align-items: center;
`;
export const HeroSection = () => {
  return (
    <Container>
      <OverLay>
        <Right>
          <Title>Are you in need of a book</Title>
          <SubTitle>
            Don't look further, we've got the best in diffrent fields of study
            in you Library
          </SubTitle>
          <SeachWrapper>
            <Input
              id="input-with-icon-adornment"
              style={{
                background: "white",
                borderRadius: "5px",
                outline: "none",
                padding: "5px",
              }}
              placeholder="Search for books"
              startAdornment={
                <InputAdornment position="start">
                  <SearchRounded style={{ cursor: "pointer" }} />
                </InputAdornment>
              }
            />
            <Tune
              style={{
                background: "white",
                padding: "8px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            />
          </SeachWrapper>
        </Right>
        <Left>img</Left>
      </OverLay>
    </Container>
  );
};
