import {
  BarContainer,
  Fill,
  Partitions,
} from "./PartitionedProgressBar.styled";

interface PartitionedProgressBarProps {
  progress: number;
  snappy?: boolean;
}

export default function PartitionedProgressBar({
  progress,
  snappy,
}: PartitionedProgressBarProps) {
  if (snappy) {
    progress = Math.floor(progress / 10) * 10;
  }

  return (
    <BarContainer>
      <Fill progress={progress} />
      <Partitions>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} />
        ))}
      </Partitions>
    </BarContainer>
  );
}
