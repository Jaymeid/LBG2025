import { Main } from "../../components/styled/Main.styled";
import Carousel from "./components/Carousel";
import FAQAccordion from "./components/FAQAccordion";
import {
  FlexRowContainer,
  StyledSustainabilityImage,
} from "./Sustainability.styled";
import sustainabilityImage from "../../assets/sustainability.jpg";
import Form from "./components/Form";

export default function SustainabilityPage() {
  return (
    <Main>
      <Carousel />
      <FlexRowContainer>
        <FAQA ccordion />
        <StyledSustainabilityImage src={undefinedVariable} />
      </FlexRowContainer>
      <Form />
    </Main>
  );
}
