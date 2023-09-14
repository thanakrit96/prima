import React from "react";
import PropTypes from "prop-types";
import PlayUrlContext from "~/context/play-url";
import GlobalStyle from "~/styles/js/global";
import HeaderComponents from "~/components/header";
import FooterComponents from "~/components/footer";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

const Layout = ({ children, logo, icon, titleBtn }) => {
  // const children1 = children.slice(3);
  return (
    <PlayUrlContext.Consumer>
      {() => (
         <div className="relative"
         style={{ backgroundColor:`#F5F5F5` }}
       >
          <GlobalStyle />
            <HeaderComponents data={logo} icon={icon} titleBtn={titleBtn}/>
          {/* <Container/> */}
          
          <main 
          // className="container mx-auto"
          >
            {children}
          </main>
          <FooterComponents/>
        </div>
      )}
    </PlayUrlContext.Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
