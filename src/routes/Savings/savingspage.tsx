import React, { useState } from 'react';
import exampleImg from '../../assets/PiggyBank.png'
import savingspicture from '../../assets/Childrens savings.jpg'
import './Savings.css'; 
import { HorizontalFlexBox } from '../../components/horizontalFlexBox/HorizontalFlexBox.styled';
import { Main } from '../../components/styled/Main.styled';
import TextBox from '../../components/textBox/TextBox';
import { VerticalFlexBox } from '../../components/verticalFlexBox/VerticalFlexBox.styled';

const Savings: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [rate, setRate] = useState<number | ''>('');
  const [years, setYears] = useState<number | ''>('');
  const [result, setResult] = useState<string>('');

  const calculateInterest = () => {
    if (
      amount === '' ||
      rate === '' ||
      years === '' ||
      isNaN(+amount) ||
      isNaN(+rate) ||
      isNaN(+years)
    ) {
      setResult('Please enter valid numbers.');
      return;
    }

    const futureValue = +amount * Math.pow(1 + +rate / 100, +years);
    setResult(`Estimated savings after ${years} years: $${futureValue.toFixed(2)}`);
  };

  return (
    <div style={{paddingLeft: "5vw", paddingRight: "5vw"}}>
    <HorizontalFlexBox gap={50} style={{}}>
    <div className="savings-page">
      <h2 style={{color: "black"}}>Savings Account</h2>
      <p style={{color: "black"}}>Grow your savings with competitive interest rates and no monthly fees.</p>


      <div className="calculator" style={{width: 250}}>
        <label style={{color: "black"}}>
          Initial Deposit ($):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value === '' ? '' : +e.target.value)}
          />
        </label>

        <label style={{color: "black"}}>
          Annual Interest Rate (%):
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value === '' ? '' : +e.target.value)}
          />
        </label>

        <label style={{color: "black"}}>
          Years:
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value === '' ? '' : +e.target.value)}
          />
        </label>

        <button onClick={calculateInterest}>Calculate</button>

        {result && <div className="result">{result}</div>}
      </div>
      
      
    </div>
    <VerticalFlexBox gap={180}>
    <img src={exampleImg} style={{width: 200}}/>
        <img src={savingspicture} style={{width: 300, borderRadius: 25}}/>
    </VerticalFlexBox>
    <VerticalFlexBox gap={50} style={{marginTop: 20}}>
    <TextBox heading={'Benefits of Saving'} text={'Saving money provides a strong foundation for financial stability and future planning. It allows individuals to prepare for unexpected expenses, achieve personal goals such as buying a home or funding education, and reduce reliance on credit. With a savings account, your money grows through earned interest, all while remaining secure and easily accessible. Regular saving also builds financial discipline, giving you greater control and peace of mind over your long-term financial well-being.'} />
    <TextBox heading={"Children's account"} text={"Start your child’s savings journey with Lloyds Bank. Our Children’s Savings Account helps young savers learn the value of money while earning interest on their savings. It’s a simple, secure way to build healthy financial habits from an early age."} />

    </VerticalFlexBox>
    </HorizontalFlexBox>
    </div>
  );
};

export default Savings;
