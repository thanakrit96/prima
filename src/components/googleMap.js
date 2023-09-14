import React from "react";
import styled from "styled-components";

const ImageMap = styled.div`
  width: 100%;
  padding-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    box-shadow: 5px 5px 5px #ccc;
    @media (max-width: 480px) {
      height: 50%;
    }
  }
`;

const mapComponents = (data) => {

  return (
    <div>
      <ImageMap>
        <a href={data.url} target="_blank">
          <img src={data ? data.data.url : ""} alt="" />
        </a>
      </ImageMap>
    </div>
  );
};

export default mapComponents;
