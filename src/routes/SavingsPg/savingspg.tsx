import TextBox from "../../components/textBox/TextBox";
import { Main } from "../../components/styled/Main.styled";
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import plantImage from "../../assets/savings1.jpg";
import childImage from "../../assets/savings2.jpg";
import darthImage from "../../assets/Darth.jpg"; 

export default function savingspg() {
  return (
    <Main>
      <HorizontalFlexBox gap={40}>
        <TextBox 
          heading="What is a Savings Account?"
          text="A savings account is a deposit account held at a financial institution that provides a modest interest rate. It is designed to hold money that is not intended for daily expenses, allowing you to save for future needs while keeping your funds accessible."
        />
     
      <TextBox
        heading="Benefits of a Savings Account"
        text="Savings accounts offer several benefits, including earning interest on your deposits, easy access to your funds, and a safe place to store your money. They are ideal for building an emergency fund, saving for specific goals, or simply keeping your money secure."
      />
      
    <TextBox
       heading="Why Open a Savings Account?"
       text="A savings account offers a safe place to store your money while earning interest. It's an essential tool for managing your finances, providing liquidity, and helping you reach your financial goals. Furthermore, a savings account is always a smart choice."
       />
    </HorizontalFlexBox>
         <HorizontalFlexBox gap={200}>
        <img src={plantImage}  style={{width: "300px", height: "250px" }}/>
        <img src={darthImage}  style={{width: "300px", height: "250px" }}/>
        <img src={childImage}  style={{width: "300px", height: "250px" }}/>
      </HorizontalFlexBox>
      </Main>
  );
   
  }