import styled, { css } from "styled-components";

export const StyledDropDownContainer = styled.div<{
  isActive: boolean;
  expandedHeight: number;
  width: number;
}>`
  position: absolute;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  max-height: ${({ isActive, expandedHeight }) =>
    isActive ? `${expandedHeight}px` : "50px"};
  transition: max-height 0.4s ease-in-out;
  width: ${({ width }) => `${width}px`};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  left: 0;
  transform: translateX(25%);
`;

export const StyledDropDownHeader = styled.div`
  position: relative
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  width: 1000px;
  flex-direction: row;
`;

export const StyledDropDownTitle = styled.h3`
  margin: 0;
  font-size: 42px;
  color: #333;
`;

export const StyledRotateContainer = styled.div<{ isActive: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  display: flex;
  align-items: center;
  width: 10px;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `}
`;

export const StyledDropDownContent = styled.div`
  padding: 16px;
  background-color: white;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  background-color: white;
  padding: 16px;
  border-radius: 16px;
  cursor: pointer;
`;
