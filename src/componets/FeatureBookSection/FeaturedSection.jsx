import {
  ArrowCircleRight,
  Article,
  ColorLens,
  CreditCard,
  Facebook,
  FileCopy,
  History,
  Instagram,
  Phone,
  RateReviewOutlined,
  Science,
  Support,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Avatar, Rating } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { options } from "../../adapter/config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
`;
const BookCardContainer = styled.div`
  display: flex;
  height: 300px;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(253, 213, 222);
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 100%;
  font-weight: 800;
  font-size: 1.5rem;
  height: 100%;
  max-height: 250px;
  max-width: 250px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const Featured = styled.div`
  display: flex;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bolder;
  align-items: center;
  color: black;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const AllCat = styled(Featured)`
  display: flex;
  gap: 5px;
  font-size: 1rem;
  justify-content: flex-end;
`;
export const FeaturedSection = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <Container>
      <Wrapper>
        <>
          {" "}
          <Title>
            <Featured>Featured</Featured>
            <AllCat>
              All Catrgories <ArrowCircleRight style={{ color: "gray" }} />
            </AllCat>
          </Title>
          <BookCardContainer>
            <Card>
              <div>
                <ColorLens
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card
              style={{ background: "rgb(207,207,207)", marginBottom: "1rem" }}
            >
              <div>
                <Science
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(121,23,48)", color: "white" }}>
              <div>
                <History
                  style={{
                    width: "80px",
                    height: "80px",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(31,27,28)", color: "white" }}>
              <div>
                <CreditCard
                  style={{
                    width: "80px",
                    height: "80px",
                    fontWeight: "100",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
          </BookCardContainer>
        </>
        <>
          {" "}
          <Title>
            <Featured>Trending Books</Featured>
            <AllCat>
              View All <ArrowCircleRight style={{ color: "gray" }} />
            </AllCat>
          </Title>
          <BookCardContainer>
            <Card>
              <div>
                <ColorLens
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card
              style={{ background: "rgb(207,207,207)", marginBottom: "1rem" }}
            >
              <div>
                <Science
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(121,23,48)", color: "white" }}>
              <div>
                <History
                  style={{
                    width: "80px",
                    height: "80px",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(31,27,28)", color: "white" }}>
              <div>
                <CreditCard
                  style={{
                    width: "80px",
                    height: "80px",
                    fontWeight: "100",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
          </BookCardContainer>
        </>
        <>
          {" "}
          <Title>
            <Featured>Frequently Search </Featured>
            <AllCat>
              View All <ArrowCircleRight style={{ color: "gray" }} />
            </AllCat>
          </Title>
          <BookCardContainer>
            <Card>
              <div>
                <ColorLens
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card
              style={{ background: "rgb(207,207,207)", marginBottom: "1rem" }}
            >
              <div>
                <Science
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "inherit",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(121,23,48)", color: "white" }}>
              <div>
                <History
                  style={{
                    width: "80px",
                    height: "80px",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
            <Card style={{ background: "rgb(31,27,28)", color: "white" }}>
              <div>
                <CreditCard
                  style={{
                    width: "80px",
                    height: "80px",
                    fontWeight: "100",
                    color: "white",
                  }}
                />
              </div>
              <div>Art & Creative</div>
              <div>Checkout Now</div>
            </Card>
          </BookCardContainer>
        </>
        <ReviewContainer>
          <ReviewTitle>Reviews</ReviewTitle>
          <ReviewWrapper>
            <ReviewContents>
              <ContentTitle>Kelvin</ContentTitle>
              <ContentMessage>
                I'm more that how i thought i would be after using this library
              </ContentMessage>
              <ContentRating>
                <Rating />
              </ContentRating>
            </ReviewContents>
            <ReviewContents>
              <ContentTitle>Mercy</ContentTitle>
              <ContentMessage>
                I'm more that how i thought i would be after using this library
              </ContentMessage>
              <ContentRating>
                <Rating />
              </ContentRating>
            </ReviewContents>
            <ReviewContents>
              <ContentTitle>Akin</ContentTitle>
              <ContentMessage>
                I'm more that how i thought i would be after using this library
              </ContentMessage>
              <ContentRating>
                <Rating />
              </ContentRating>
            </ReviewContents>
          </ReviewWrapper>
        </ReviewContainer>
        <Footer>
          <LogoContainer>Book Library</LogoContainer>
          <AboutContainer>
            <AboutTitle>About</AboutTitle>
            <AboutContent>
              <ul>
                <Link to="/vision">Vision</Link>
                <Link to="/career">Career</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/terms">Terms and Condition</Link>
              </ul>
            </AboutContent>
          </AboutContainer>
          <SupportContainer>
            {" "}
            <AboutTitle>Support</AboutTitle>
            <AboutContent>
              <ul>
                <Link to="/help">
                  <Phone style={{ with: "15px", height: "15px" }} /> Help center
                </Link>
                <Link to="/career">Career</Link>
                <Link to="/blog">
                  <Article style={{ with: "15px", height: "15px" }} /> Blog
                </Link>
                <Link to="/terms">
                  {" "}
                  <FileCopy style={{ with: "15px", height: "15px" }} /> Terms
                  and Condition
                </Link>
              </ul>
            </AboutContent>
          </SupportContainer>
          <ContactContainer>
            {" "}
            <AboutTitle>Social</AboutTitle>
            <SocialMedia>
              <WhatsApp style={{ cursor: "pointer" }} />
              <Twitter style={{ cursor: "pointer" }} />
              <Facebook style={{ cursor: "pointer" }} />
              <Instagram style={{ cursor: "pointer" }} />
            </SocialMedia>
          </ContactContainer>
          <SocialContainer></SocialContainer>
        </Footer>
      </Wrapper>
    </Container>
  );
};
const SocialMedia = styled.div``;
const AboutTitle = styled.div``;
const AboutContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: normal;
    a {
      display: flex;
      text-decoration: none;
      font-size: 12px;
      color: white;
      gap: 3px;
      align-items: center;
    }
  }
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 3rem;
  height: 200px;
  color: white;
  flex-wrap: wrap;
  background: rgb(126, 124, 125);
`;
const LogoContainer = styled.div`
  display: flex;
  font-weight: bolder;
  font-size: 2rem;
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;
const SupportContainer = styled(AboutContainer)``;
const ContactContainer = styled(AboutContainer)`
  display: flex;
  gap: 1rem;
`;
const SocialContainer = styled(AboutContainer)``;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 1rem;
`;
const ContentMessage = styled.div`
  display: flex;
  font-weight: bold;
  color: gray;
`;
const ContentRating = styled.div``;
const ReviewContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin: 0 auto;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
`;
const ReviewTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 2rem;
`;
const ReviewWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  cursor: pointer;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  max-width: 100%;
  transition: all 300ms ease;
`;
const ReviewContents = styled.div`
  display: flex;
  background: white;
  gap: 1rem;

  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  height: 100%;
  min-height: 150px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 500ms ease;
  &:hover {
    opacity: 0.7;
    margin-top: 1rem;
  }

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;
