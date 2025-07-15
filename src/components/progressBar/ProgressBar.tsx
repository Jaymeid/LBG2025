import {
  StyledProgressDiv,
  ProgressFill,
  WhiteFill,
} from "./ProgressBar.styled";

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <StyledProgressDiv>
      <ProgressFill />
      <WhiteFill progress={progress} />
    </StyledProgressDiv>
  );
}
