import styled from "styled-components";
import { FeaturedSection } from "../componets/FeatureBookSection/FeaturedSection";
import { HeroSection } from "../componets/HeroSection/HeroSection";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Container>
      <HeroSection />
      <FeaturedSection />
    </Container>
  );
};
