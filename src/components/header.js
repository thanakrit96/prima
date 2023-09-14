import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import Util from "../util/util";
const Logo = styled.div`
  width: 40%;
  img {
    width: 18%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 480px) {
      height: auto;
      width: 50px;
      margin-top: 10px;
      margin-bottom: 0;
    }

    @media (min-width: 1080px) {
    height: 83px;
    width: 70px;
  }
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  // background-image: linear-gradient(#f8f0e3, #eae0d0);
  // background: rgb(168,222,186);
  background: linear-gradient(90deg,rgba(177,197,184,1) 0%,rgb(108 166 161) 49%,rgb(91 140 136) 100%);
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
  li {
    margin-right: 4px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }

  @media (min-width: 1080px) {
    // height: 130px;
  }
`;

const Header = styled.header`
  width: 100%;
  opacity: 1;
  height: 120px;
  position: fixed;
  z-index: 1;
`;

const IconContent = styled.div`
  display: flex;
  width: 0 auto;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  img {
    width: 60%;
    height: 60%;
    margin: 10px 10px;
  }

  @media (max-width: 480px) {
    margin: 0;
  }

  @media (min-width: 1080px) {
    width: 70px;
    height: 70px;
  }
`;

const TextLang = styled.div`
  cursor: pointer;
  font-size: 1.5vw;
  margin-left: 10px;
  @media (max-width: 480px) {
    font-size: 2.3vw;
  }

  @media (min-width: 1080px) {
    font-size: 1.2vw;
  }
`;

const TextLangForZh = styled.div`
  cursor: pointer;
  margin-top: 3px;
  font-size: 1vw;
  margin-left: 10px;
  @media (max-width: 480px) {
    font-size: 2vw;
  }

  @media (min-width: 1080px) {
    font-size: 1vw;
  }
`;

const TextContent = styled.div`
  justify-content: center;
  display: flex;
  justify-items: center;
  color:#FFFF;
`;

const LeftContent = styled.div`
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 1;
  margin-top: 20px;
  width: 30%;
  display:flex;
  align-items: center;
  gap:1em;
`;

const RightContent = styled.div`
  width: 30%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0;
`;

const ButtonReservation = styled.button`
  background-color: #cba772; /* yellow */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2vw;
  text-transform: uppercase;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transform: scale(0.8);
  width: 6em;
  @media (max-width: 360px) {
    font-size: 0.5vw;
    padding: 15px 15px;
  }
  @media (max-width: 1080px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
  :hover {
    background: #FFFF;
    color:#cba772;
    transition:0.6s;
  }
`;

const headerComponents = ({ data, icon, titleBtn}) => {
  return (
    <Header>
      <Container>
        <Nav>
          <LeftContent>
            <TextContent>
              <TextLang>
                <Link to="/">TH</Link>
              </TextLang>
              <TextLang>
                <Link to="/en">/ENG</Link>
              </TextLang>
              <TextLangForZh>
                <Link to="/zh">/CN</Link>
              </TextLangForZh>
            </TextContent>
            <IconContent>
              {icon &&
                icon.map((items, index) => {
                  return (
                    <Icon key={index}>
                      <a href={items.link} target="_blank">
                        <img src={items.icon.url} alt="" />
                      </a>
                    </Icon>
                  );
                })}
            </IconContent>
          </LeftContent>
          <Logo>
            <img src={data ? data.url : ""} alt="" />
          </Logo>
          <RightContent>
            <a href={icon && icon[3].link} target="_blank">
              <ButtonReservation>{titleBtn}</ButtonReservation>
            </a>
          </RightContent>
        </Nav>
      </Container>
    </Header>
  );
};

export default headerComponents;
