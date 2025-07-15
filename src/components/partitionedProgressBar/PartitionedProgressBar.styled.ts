import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  height: 24px;
  background-color: #eee;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
`;

export const Fill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => `${Math.min(progress, 100)}%`};
  background-color: ${({ color }) => color || "#4caf50"};
  transition: width 0.3s ease;
`;

export const Partitions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;

  & > div {
    flex: 1;
    border-left: 5px solid black;
  }

  & > div:first-child {
    border-left: none;
  }
`;
