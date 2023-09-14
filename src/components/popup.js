import React from "react";
import styled from "styled-components";

const PopupBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Box = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  height: auto;
  margin-top: calc(100vh - 85vh - 20px);
  /* background: #fff; */
  border-radius: 4px;
  padding: 20px;
  /* border: 1px solid #999; */
  overflow: auto;
  @media (max-width: 480px) {
    width: 100%;
    margin: auto;
    padding: 20px;
    margin-top: calc(100vh - 80vh - 20px);
  }

  img {
    width: 60%;
    margin: auto;

    @media (max-width: 1080px) {
      width: 70%;
      margin: auto;
    }

    @media (max-width: 480px) {
      width: 100%;
      margin: auto;
    }
  }
`;

const CloseIcon = styled.span`
  content: "x";
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;

  @media (max-width: 480px) {
    margin-top: calc(100vh - 80vh - 33px);
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonBuy = styled.button`
  background-color: #2d4a48; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  font-size: 1.5vw;
`;

const Popup = (props) => {
  return (
    <PopupBox onClick={props.handleClose}>
      <Box>
        <img src={props.content} alt="" />
        {props.isOpenButton && (
          <Button>
            <a href={props.line[3].link} target="_blank">
              <ButtonBuy>{props.titleBtn}</ButtonBuy>
            </a>
          </Button>
        )}
      </Box>
    </PopupBox>
  );
};

export default Popup;
