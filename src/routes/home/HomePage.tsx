import Hero from "./components/Hero";
import { Main } from "../../components/styled/Main.styled";
import Products from "./components/Products";
import CustomerReviews from "./components/CustomerReviews";
import BigDropDown from "../../components/bigDropDown/BigDropDown";
import DropdownTextBox from "../../components/dropdownTextBox/DropdownTextBox";
import GoalField from "../../components/goalField/GoalField";
import ProgressBar from "../../components/progressBar/ProgressBar";
import StyledButtonComponent from "../../components/styledButton/StyledButton";
import * as routes from "../manifest";
import TextBox from "../../components/textBox/TextBox";
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import { VerticalFlexBox } from "../../components/verticalFlexBox/VerticalFlexBox.styled";
import PartitionedProgressBar from "../../components/partitionedProgressBar/PartitionedProgressBar";

export default function HomePage() {
  return (
    <Main>
      <Hero />
      <Products />
      <CustomerReviews />
      <BigDropDown title={"Big drop down"} expandedHeight={2000}>
        <h1>This is how to use the big drop down</h1>
      </BigDropDown>
      <VerticalFlexBox gap={160}>
        <p>hola</p>
        <h2>Muchacho</h2>
        <h3>Brothers</h3>
      </VerticalFlexBox>

      <HorizontalFlexBox gap={160}>
        <p>hola</p>
        <h2>Muchacho</h2>
        <h3>Brothers</h3>
      </HorizontalFlexBox>

      <DropdownTextBox
        width={600}
        heading={"Insurance"}
        text={"Life insurance"}
      />

      <GoalField label="Label" />

      <ProgressBar progress={60} />

      <StyledButtonComponent to={routes.Careers}>
        Button Text here!!
      </StyledButtonComponent>

      <TextBox
        heading="This is a heading"
        text="Text box content here, skibidi or whatever"
      />

      <PartitionedProgressBar progress={68} snappy />
    </Main>
  );
}
