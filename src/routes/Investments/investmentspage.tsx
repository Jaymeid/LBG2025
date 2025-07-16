import TextBox from "../../components/textBox/TextBox";
import BigDropDown from "../../components/bigDropDown/BigDropDown";
import ProgressBar from "../../components/progressBar/ProgressBar";
import StyledButtonComponent from "../../components/styledButton/StyledButton";
import investmentPicture from "../../assets/istockphoto-1397011551-612x612.jpg"
export default function InvestmentsPage() {
    return (
        <>
        <h1>Investments page</h1>
        <img src={investmentPicture}/>
        </>
    )
}