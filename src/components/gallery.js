import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  // text-align: center;
  font-size: 5vw;
  color: darkgreen;
  text-transform: uppercase;
  padding: 10px 0;
  margin-top: 30px;
  p {
    font-size: 24px;
  }
`;

const Gallery = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;

  @media (max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
`;

const Pics = styled.div`
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  img {
    width: 100%;
    border-radius:12px;
  }
`;

const Border = styled.div`
  border: 1px solid #e1ad63;
  width: 90%;
  margin: auto;
`;

const galleryComponents = ({ data, title}) => {
  return (
    <div className="container mx-auto" style={{border:"solid yellow",boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1),",borderRadius:"12px",backgroundColor:"#FFFF"}}>
      <Title>ลูกค้าของเรา
        {/* {title} */}
        {/* <Border/> */}
      </Title>
      <Gallery>
        {data.map((items, index) => {
          return (
            <Pics key={index}>
              <img src={items.url} alt="" />
            </Pics>
          );
        })}
      </Gallery>
    </div>
  );
};

export default galleryComponents;
