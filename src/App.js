import React from "react";
import { Router } from "react-router-dom";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/theme";
import Header from "./components/layout/Header";
import SubHeader from "./components/layout/SubHeader";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <SubHeader />
        <Main>
          <div> Patrick </div>
        </Main>
        <Footer />
        <GlobalStyles />
      </Container>
    </Router>
  );
}

export default App;
