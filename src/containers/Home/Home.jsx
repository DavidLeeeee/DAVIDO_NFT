import React from "react";
import MainContainer from "../../styles/MainContainer";
import HomeBanner from "./HomeBanner";

function Home() {
  return (
    <MainContainer>
      <HomeBanner />
      <h1>홈 페이지</h1>
      {/* 홈페이지 컨텐츠 추가 */}
    </MainContainer>
  );
}

export default Home;
