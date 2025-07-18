import BigDropDown from "../../components/bigDropDown/BigDropDown";
import TextBox from "../../components/textBox/TextBox";
import creditImage from "../../assets/Lloyds-card.jpg";
import plansImage from "../../assets/Plans.png";
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import { useState } from "react";
import { FormWrapper, StyledFormHeader, StyledSustainabilityImage, FormContainer, Label, InputField, SubmitButton } from "../sustainability/Sustainability.styled";
import { VerticalFlexBox } from "../../components/verticalFlexBox/VerticalFlexBox.styled";


export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <VerticalFlexBox gap={50}>
    <HorizontalFlexBox gap={200} style={{backgroundColor: "white", padding: "20px", borderRadius: "25px"}}>
      <TextBox
        heading="Lloyd's Credit Card (Representative £5.8% APR variable)"
        text=""
      />
      <img src={creditImage} style={{ width: "300px", height: "250px" }} />
    </HorizontalFlexBox>
  

    <HorizontalFlexBox gap={200} style={{backgroundColor: "white", padding: "20px", borderRadius: "25px"}}>
      <TextBox
        heading="Credit Plans"
        text=""
      />
      <img src={plansImage} style={{ width: "1100px", height: "300px" }} />
    </HorizontalFlexBox>
    <BigDropDown title={"Ways to apply"} expandedHeight={2000}>
        <h1 style={{fontSize: 24}}> Apply today</h1>
        <p>Got your eye on applying today? Scroll down and submit your details, and we'll be in touch within the day. You can choose to provide your email, or phone or both.</p>
        <h1 style={{fontSize: 24}}>Apply later</h1>
        <p>It's easy to apply for the Argos Card. If you're not sure yet if we are the right fit for you, make sure to bookmark this page and come back when you have made up your mind.</p>
    </BigDropDown>

    <FormWrapper>
      <div>
        <StyledFormHeader>Apply Now</StyledFormHeader>
      </div>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <InputField
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Label htmlFor="email">Email Address</Label>
        <InputField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label htmlFor="phone">Phone Number</Label>

        <InputField
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
        {submitted && (
            <div style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
              Thank you for submitting your details! An email will be sent to your submitted address explaining the next steps for your application. 
            </div>
          )}
      </FormContainer>
      </FormWrapper>
    
  </VerticalFlexBox>
  );
}