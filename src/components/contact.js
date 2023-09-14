import React from "react";
import styled from "styled-components";
import logo from "~/images/icon_logo.png";
const LogoPrima = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const Text = styled.div`
  text-align: center;
  p {
    font-size: 20px;
  }
`;

const Icon = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
`;

const IconContent = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  padding: 0 20%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 2vw;
  text-transform: uppercase;
  text-decoration-color: #e1ad63;
  padding: 0 10%;
  font-weight: bold;
  @media (max-width: 1080px) {
    font-size: 4vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1.5vw;
  text-transform: uppercase;
  padding: 0 11%;
  @media (max-width: 1080px) {
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const Border = styled.div`
  border: 2px solid #e1ad63;
  width: 100%;
`;
const contactComponents = ({ icon, contact }) => {
  return (
    <div className="container mx-auto" style={{border:"solid 10px green"}}>
      <LogoPrima>
        <img src={logo} alt="" />
      </LogoPrima>
      {/* <Text
        dangerouslySetInnerHTML={{
          __html: contact[0].description,
        }}
      /> */}
      <IconContent>
        {icon.map((items, index) => {
          return (
            <Icon key={index}>
              <a href={items.link} target="_blank">
                <img src={items.icon.url} alt="" />
              </a>
            </Icon>
          );
        })}
      </IconContent>
      {contact.map((items) => (
        <div>
          <Title>{items.title}</Title>
          <Border />
          <TextDescription
            dangerouslySetInnerHTML={{
              __html: items.description,
            }}
          />
        </div>
      ))}
    </div>
    
  );
};

export default contactComponents;
