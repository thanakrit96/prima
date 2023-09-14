import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5vw;
  color: #e1ad63;
  text-transform: uppercase;
  margin-top: 30px;
  p {
    font-size: 24px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 10%;
  @media (max-width: 700px) {
      padding: 10px 10px;
    }

`;

const TextDescription = styled.div`
  width: 100%;
  font-size: 1.5vw;
  padding: 0 5%;
  text-indent: 40px;
  text-align: start;
  margin-top: 10px;
  @media (max-width: 1080px) {
    padding: 0;
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const Border = styled.div`
  border: 1px solid #e1ad63;
  width: 90%;
  margin: auto;
`;

const knowLedgeComponents = ({ data, title }) => {
  return (
    <div className="container mx-auto" style={{border:"solid red "}}>
      <Title>
        {title}
        <Border/>
      </Title>
      {data.map((items, index) => {
        return (
          
          <Content key={index}>
            <img src={items.image ? items.image.url : ""} alt="" />
            {items.description && <TextDescription
                  dangerouslySetInnerHTML={{
                    __html: items.description,
                  }}
                />}
          </Content>
        );
      })}
    </div>
  );
};

export default knowLedgeComponents;
