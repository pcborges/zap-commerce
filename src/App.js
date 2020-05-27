import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/theme";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Routes from "./routes";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <Container>
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
          <GlobalStyles />
        </Container>
      </Router>
    </GlobalState>
  );
}

export default App;
