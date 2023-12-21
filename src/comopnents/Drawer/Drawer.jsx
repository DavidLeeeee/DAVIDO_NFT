import React from "react";
import styled from "styled-components";

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px; // Drawer의 너비
  height: 100%;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const DrawerItem = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

function Drawer({ isOpen, toggleDrawer }) {
  return (
    <DrawerContainer isOpen={isOpen}>
      <DrawerItem onClick={toggleDrawer}>요소1</DrawerItem>
      <DrawerItem onClick={toggleDrawer}>요소2</DrawerItem>
      <DrawerItem onClick={toggleDrawer}>요소3</DrawerItem>
    </DrawerContainer>
  );
}

export default Drawer;
