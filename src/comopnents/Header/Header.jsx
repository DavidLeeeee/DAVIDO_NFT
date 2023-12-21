import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../styles/MainContainer";

const HeaderWrapper = styled.div`
  background-color: rgba(18, 23, 23, 1); // 시그니처 색상
  width: 100%;
  height: 50px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
  background-color: rgba(18, 23, 23, 1);
`;

const Logo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const NavItems = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

const ProfileIMG = styled.div`
  margin-right: 5px;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: white;
`;

const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    width: 26px;
    height: 22px;
    position: relative;
  }
  &:before,
  &:after,
  & div {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    top: 0;
  }
  & div {
    top: 50%;
    transform: translateY(-50%);
  }
  &:after {
    bottom: 0;
  }
`;

const Drawer = styled.div`
  z-index: 500;

  display: none;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 300px;
  height: 100%;
  padding: 16px;
  background-color: rgba(12, 12, 30, 0.95);
  transition: right 0.3s ease-in-out;
  @media (max-width: 768px) {
    display: block;
  }
`;

const DrawerItem = styled.div`
  padding: 12px 20px;
  color: white;
  font-size: 16px; // 글자 크기 키우기
  cursor: pointer;
  border-radius: 4px; // 둥근 모서리 추가
  transition: background-color 0.3s, color 0.3s; // 부드러운 색상 변화 효과

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); // 호버 시 배경색 변경
    color: #ddd; // 호버 시 글자 색상 변경
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  z-index: 499; // z-index는 Drawer보다 낮아야 함
`;

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <MainContainer>
          <HeaderContent>
            <Logo>nft</Logo>
            <HamburgerIcon onClick={toggleDrawer}>
              <div></div> {/* 햄버거 아이콘의 중간 선 */}
            </HamburgerIcon>
            <NavItems>
              <NavItem>NOTICE</NavItem>
              <NavItem>ABOUT</NavItem>
              <ProfileIMG />
              <NavItem>DAVID LEE</NavItem>
            </NavItems>
          </HeaderContent>
        </MainContainer>

        <Drawer isOpen={isDrawerOpen}>
          {/* Drawer 내용 */}
          <DrawerItem onClick={toggleDrawer}>Profile</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>NFT Market</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>Trending</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>Trade</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>Auction</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>My Assets</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>notice</DrawerItem>
          <DrawerItem onClick={toggleDrawer}>About</DrawerItem>
        </Drawer>
      </HeaderWrapper>
      <Overlay isOpen={isDrawerOpen} onClick={toggleDrawer} />
    </>
  );
}

export default Header;
