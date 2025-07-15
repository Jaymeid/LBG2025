import { ButtonStyles } from "./StyledButton.styled";
import { Link } from "react-router-dom";

interface StyledButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function StyledButtonComponent({
  to,
  children,
}: StyledButtonProps) {
  // This is styled button component - this is a useless comment
  return (
    <Link to={to}>
      <ButtonStyles>{children}</ButtonStyles>
    </Link>
  );
}
