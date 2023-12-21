import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./comopnents/Header/Header";

import styled from "styled-components";
const AppContainer = styled.div`
  background-color: rgba(12, 12, 30, 0.95); // 네이비 색상에 투명도 80%
  min-height: 100vh; /* 전체 높이를 화면에 맞춤 */
`;

function App() {
  return (
    <>
      <AppContainer>
        <GlobalStyle /> {/* GlobalStyle 적용 */}
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 추가적인 라우트는 여기에 */}
          </Routes>
        </Router>
      </AppContainer>
    </>
  );
}

export default App;
