import React, { useState } from "react";
import styled from "styled-components";

const HomeBannerWrapper = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(12, 12, 30, 0.9); // 배경색은 원하는 대로 조정 가능
  padding: 0 16px;
  @media (max-width: 768px) {
    display: none; // 모바일 환경에서는 보이지 않음
  }
`;

const BannerItem = styled.div`
  font-family: "Roboto", sans-serif;
  width: 130px;
  margin-right: 16px;
  cursor: pointer;
  padding: 8px 8px;
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  &:hover {
    color: rgba(220, 220, 240, 1);
    //background-color: rgba(100, 100, 100, 0.2); // 호버 효과
  }
`;

const DropdownArrow = styled.span`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s ease-in-out; // 부드러운 변환 효과

  // BannerItem에 마우스를 올리면 회전
  ${BannerItem}:hover & {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%;
  width: 130px;
  border-radius: 10px;
  left: 0;
  background-color: rgba(18, 23, 23, 0.9);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  // 추가 스타일링...
`;

const DropdownItem = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 12px 16px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //두줄의 텍스트를 랩핑 후 중앙 정렬
  flex-wrap: wrap;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  //호버링 이펙트 주기
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03); // 약간 커지는 효과
    color: rgba(220, 220, 240, 1); // 색상 변경
  }
  //각 요소의 중간중간 선을 넣기 위한 position
  position: relative;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 0.5px;
    background-color: rgba(255, 255, 255, 0.1); // 투명도 적용
    border-radius: 1px; // 끝이 동그랗게
  }
`;

const dropdownMenus = [
  {
    name: "NFT Market",
    options: ["Explore", "New Releases", "Top Sellers"],
  },
  {
    name: "Trending",
    options: ["Today", "Weekly", "Monthly"],
  },
  {
    name: "Trade",
    options: ["Buy NFT", "Sell NFT", "Trade Rules"],
  },
  {
    name: "Auction",
    options: ["Current Auctions", "Past Auctions", "Auction Info"],
  },
  {
    name: "My Assets",
    options: ["My Collection", "Watchlist", "Transaction History"],
  },
];

function HomeBanner() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <HomeBannerWrapper>
      {dropdownMenus.map((menu, index) => (
        <BannerItem
          key={index}
          onMouseEnter={() => toggleDropdown(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {menu.name}
          <DropdownArrow>&#9660;</DropdownArrow>
          <DropdownMenu show={activeMenu === index}>
            {menu.options.map((option, idx) => (
              <DropdownItem key={idx}>{option}</DropdownItem>
            ))}
          </DropdownMenu>
        </BannerItem>
      ))}
    </HomeBannerWrapper>
  );
}

export default HomeBanner;
