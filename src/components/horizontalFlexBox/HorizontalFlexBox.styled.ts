import { styled } from "styled-components";

export const HorizontalFlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;
