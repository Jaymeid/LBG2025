import {useState}  from "react";
import {
  StyledFlexBox,
  StyledHeader,
  StyledRotateContainer,
  StyledText,
  StyledTextBox,
} from "./DropdownTextBox.styled";
import { AiFillCaretDown } from "react-icons/ai";

interface DropdownTextBoxProps {
  width: number;
  expandedHeight?: number;
  heading: string;
  text: string;
}

export default function DropdownTextBox({
  width,
  expandedHeight = 2000,
  heading,
  text,
}: DropdownTextBoxProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledTextBox
      isActive={isActive}
      width={width}
      expandedHeight={expandedHeight}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <StyledFlexBox>
        <StyledHeader>{heading}</StyledHeader>
        <StyledRotateContainer isActive={isActive}>
          <AiFillCaretDown color="black" />
        </StyledRotateContainer>
      </StyledFlexBox>
      <StyledText>{text}</StyledText>
    </StyledTextBox>
  );
}
