import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/home/HomePage";
import * as routes from "./routes/manifest";
import Footer from "./components/footer/Footer";
import SustainabilityPage from "./routes/sustainability/SustainabilityPage";
import styled from "styled-components";
import CareersPage from "./routes/careers/CareersPage";

const AppLayout = styled.div`
  min-height: 100vh;

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Navbar />
        <Routes>
          <Route path={routes.Home} element={<HomePage />} />
          <Route
            path={routes.Sustainability}
            element={<SustainabilityPage />}
          />
          <Route path={routes.Careers} element={<CareersPage />} />
        </Routes>
        <Footer />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
