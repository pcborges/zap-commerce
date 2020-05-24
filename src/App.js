import React from "react";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/theme";
import Header from "./pages/layout/Header";
import SubHeader from "./pages/layout/SubHeader";
import Main from "./pages/layout/Main";

function App() {
  return (
    <Container>
      <Header />
      <SubHeader />
      <Main />
      <GlobalStyles />
    </Container>
  );
}

export default App;
