import styled from "styled-components";

export const VerticalFlexBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
`;
