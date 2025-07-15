import { StyledHeader, StyledText, StyledTextBox } from "./TextBox.styled";

interface TextBoxProps {
  heading: string;
  text: string;
}

export default function TextBox({ heading, text }: TextBoxProps) {
  return (
    <StyledTextBox>
      <StyledHeader>{heading}</StyledHeader>
      <StyledText>{text}</StyledText>
      <h1>This is now permanent text in the reusable component?</h1>
      <CoolText>Crazy ahh component that doesnt exist</CoolText>
    </StyledTextBox>
  );
}
