import React from "react";
import styled from "styled-components";

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

const Border = styled.div`
  border: 2px solid #e1ad63;
  width: 100%;
`;

const Partner = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  img {
    width: 80%;
    height: 0 auto;
    margin: 0 10px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: auto;
  }
`;
const partnerComponents = ({ data, title }) => {
  return (
    <div className="container mx-auto">
      <Title>{title}</Title>
      <Border />
      <Partner>
        {data.map((items) => (
          <div>
            <img src={items.image.url} alt="" />
          </div>
        ))}
      </Partner>
    </div>
  );
};

export default partnerComponents;
