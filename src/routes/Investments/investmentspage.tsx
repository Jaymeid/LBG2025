import TextBox from "../../components/textBox/TextBox";
import ProgressBar from "../../components/progressBar/ProgressBar";
import StyledButtonComponent from "../../components/styledButton/StyledButton";
import investmentPicture from "../../assets/istockphoto-1397011551-612x612.jpg"
import pieChartpicture from "../../assets/llods.png"
import pieChartpic from "../../assets/budget-pie-chart-lloyds.png"
import { HorizontalFlexBox } from "../../components/horizontalFlexBox/HorizontalFlexBox.styled";
import * as routes from "../manifest";

export default function InvestmentsPage() {
    return (
        <>
        <h1> 
            <div style={{ marginTop: 30, marginLeft: 100, fontSize: 50, fontWeight: 'bold'}}>
            Investments page
            </div>
            </h1>
        <HorizontalFlexBox gap={100} style={{marginLeft: 100, marginRight: 100}}>
             <TextBox
                   heading="Investing with LLoyds"
                   text="Start investing with Lloyds Bank and grow your money with expert guidance. Choose from a range of funds and ready-made portfolios designed to match your goals and risk level"
                 />  
        <img src={investmentPicture} style={ {width: 350, height: 350} }/>
                 </HorizontalFlexBox>
                 <HorizontalFlexBox gap={300} style={{marginTop: 50, marginLeft: 100, marginRight: 100 }}>
                  <TextBox
                   heading="Investing from mobile"
                   text="Invest easily from your mobile with Lloyds Bank. Track your portfolio, explore investment options, and manage your stocks and funds anytime, anywhere — all from the Lloyds Bank app. Whether you're just starting or growing your investments, it’s simple, secure, and designed around you. Download the Lloyds app and sign to get started."
                 />
                  <TextBox
                   heading="Investing from website"
                   text="Invest online with confidence through the Lloyds Bank website. Explore a wide range of investment options, from ready-made portfolios to individual funds and shares. Get tools, insights, and guidance to help you make informed decisions — all in one secure, easy-to-use place. Sign in to get started, an expert will help you set up/access your account. Ultimate privacy with a full trust policy."
                 />
                 </HorizontalFlexBox>
                 <HorizontalFlexBox gap={480} style={{marginTop: 50, justifyContent: "center"}}>

                    <StyledButtonComponent to="https://www.fca.org.uk/investsmart" >
                Guide to Investing              
                    </StyledButtonComponent>
                    <StyledButtonComponent to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    Ask an expert
                    </StyledButtonComponent>

                 </HorizontalFlexBox>
                 <div style={{ marginTop: 30, marginLeft: 100, fontSize: 30, fontWeight: 'bold' }}>
  Why Invest with Lloyds
</div>
                 <HorizontalFlexBox gap={100} style={{marginLeft:100, marginTop: 50}}>
                    <img src={pieChartpic} style={ {width: 250, height: 200} }/>
                    <img src={pieChartpicture} style={ {width: 200, height: 200} }/>
                    your money before investing with lloyds
                    <div style={{rotate: "270deg", height: 20, width: 200}}>
                        <ProgressBar progress={20} />
                    </div>
                   your money after
                    <div style={{rotate: "270deg", height: 20, width: 200}}>
                        <ProgressBar progress={100} />
                    </div>
                 </HorizontalFlexBox>
                 <div style={{marginTop: 30, marginLeft: 100}}>
                 <StyledButtonComponent to={routes.Home} >
                    Back to home
                    </StyledButtonComponent>
                    </div>
        </>
    )
}