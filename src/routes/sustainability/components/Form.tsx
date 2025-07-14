import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  Label,
  FormWrapper,
  StyledFormHeader,
  StyledSustainabilityImage,
} from "../Sustainability.styled";
import form from "../../../assets/form.jpg";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormWrapper>
      <div>
        <StyledFormHeader>Want more information?</StyledFormHeader>
        <StyledSustainabilityImage src={form} />
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
          type="phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
}
