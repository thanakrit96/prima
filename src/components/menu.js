import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
    padding-top: 20px;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 1080px) {
        flex-flow: column nowrap;
        background-color: #E1AD63;
        position: absolute;
        z-index: 999;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding: 3.5rem;

        a {
            color: #fff;
        }
    }
`;

const MenuText = styled.li`
    text-transform: uppercase;
    padding: 10px;

    a:hover {
        border-bottom: 5px solid #2D4A48;
    }
`;

const menuComponents = ({ data }) => {
    return (
        <Menu>
            <MenuText><a href="#">home</a></MenuText>
            <MenuText><a href="#">services</a></MenuText>
            <MenuText><a href="#">about us</a></MenuText>
            <MenuText><a href="#">program</a></MenuText>
            <MenuText><a href="#">atmosphere</a></MenuText>
            <MenuText><a href="#">knowledge</a></MenuText>
            <MenuText><a href="#">contact us</a></MenuText>
        </Menu>
    );
  };
  
  export default menuComponents;