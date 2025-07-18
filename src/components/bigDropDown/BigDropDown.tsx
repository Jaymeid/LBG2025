import { useState } from "react";
import {
  StyledDropDownContainer,
  StyledDropDownTitle,
  StyledDropDownContent,
  StyledFlexBox,
  StyledRotateContainer,
} from "./BigDropDown.styled";
import { AiFillCaretDown } from "react-icons/ai";

interface BigDropDownProps {
  title: string;
  expandedHeight: number;
  children: React.ReactNode;
}

export default function BigDropDown({
  title,
  children,
  expandedHeight,
}: BigDropDownProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropDown = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", width: "90%" }}>
      <StyledFlexBox onClick={toggleDropDown}>
        <StyledDropDownTitle>{title}</StyledDropDownTitle>
        <StyledRotateContainer
          isActive={isActive}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <AiFillCaretDown color="black" />
        </StyledRotateContainer>
      </StyledFlexBox>
      {isActive && (
        <StyledDropDownContainer
          isActive={isActive}
          expandedHeight={expandedHeight}
          width={1000}
        >
          <StyledDropDownContent>
            <StyledFlexBox>{children}</StyledFlexBox>
          </StyledDropDownContent>
        </StyledDropDownContainer>
      )}
    </div>
  );
}
