import { useState } from "react";
import {
  StyledProduct,
  StyledProductsContainer,
  StyledProductContentContainer,
  StyledText,
  StyledHeader,
} from "../HomePage.styled";
import mortgageImage from "../../../assets/mortgage.jpg";
import savingsImage from "../../../assets/savings.jpg";
import carImage from "../../../assets/car.jpg";

enum ProductEnum {
  Mortgage,
  Savings,
  CarFinance,
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<ProductEnum>(
    ProductEnum.Mortgage
  );

  const productHeadings = ["Mortgages", "Savings", "Car finance"];
  const productText = [
    "Taking out a mortgage with Lloyds means partnering with a trusted lender that offers competitive rates, flexible repayment options, and expert support every step of the way. Whether you're a first-time buyer or looking to remortgage, Lloyds makes the process simple and transparent, helping you turn your dream home into a reality with confidence and ease.",
    "Whether you're planning for the future or building a rainy day fund, saving with Lloyds helps you grow your money with confidence. With a range of accounts designed to suit your goals, competitive interest rates, and easy access when you need it, Lloyds makes saving simple, secure, and rewarding.",
    "Ready for your next car? Lloyds makes financing straightforward with flexible options that put you in the driver's seat. From low-interest rates to tailored repayment plans, we help you get on the road faster—without the stress. Explore financing that fits your lifestyle, budget, and journey ahead.",
  ];

  return (
    <>
      <StyledProductsContainer>
        <StyledProduct
          src={mortgageImage}
          onClick={() => setSelectedProduct(ProductEnum.Mortgage)}
        />
        <StyledProduct
          src={savingsImage}
          onClick={() => setSelectedProduct(ProductEnum.Savings)}
        />
        <StyledProduct
          src={carImage}
          onClick={() => setSelectedProduct(ProductEnum.CarFinance)}
        />
      </StyledProductsContainer>
      <StyledProductContentContainer>
        <StyledHeader>{productHeadings[selectedProduct]}</StyledHeader>
        <StyledText>{productText[selectedProduct]}</StyledText>
      </StyledProductContentContainer>
    </>
  );
}
