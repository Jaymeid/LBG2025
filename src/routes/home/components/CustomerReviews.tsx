import {
  StyledCustomerReviewContainer,
  StyledText,
  StyledHeader,
  StyledCustomerReview,
} from "../HomePage.styled";

export default function CustomerReviews() {
  return (
    <StyledCustomerReviewContainer>
      <StyledCustomerReview>
        <StyledHeader>Cristiano Ronaldo</StyledHeader>
        <StyledText>
          "Very good service my friend suiiiiiiiiiii."
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Mike Tyson</StyledHeader>
        <StyledText>
          "I appreciate what lloyds for helping me with my mortgage."
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Sambasivam V</StyledHeader>
        <StyledText>
          "Lloyds helped me finance my first car with a plan I could actually
          afford. I applied online and got a decision the same day!"
        </StyledText>
      </StyledCustomerReview>
      <StyledCustomerReview>
        <StyledHeader>Joshita S</StyledHeader>
        <StyledText>
          "I love how simple it is to manage everything in the Lloyds app. I can
          check savings, make payments, even track my mortgage — all in one
          place."
        </StyledText>
      </StyledCustomerReview>
    </StyledCustomerReviewContainer>
  );
}
