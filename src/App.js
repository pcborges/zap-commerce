import React from "react";
import GlobalStyles from "./styles/global";
import Header from "./pages/layout/Header";
import SubHeader from "./pages/layout/SubHeader";
import Main from "./pages/layout/Main";

function App() {
  return (
    <>
      <Header />
      <SubHeader />
      <Main />
      <GlobalStyles />
    </>
  );
}

export default App;
