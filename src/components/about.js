import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5.5vw;
  margin-top: 20px;
  color: #e1ad63;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  width: 100%;
  text-indent: 40px;
  text-align: start;
  margin-top: 20px;
  font-size: 1.5vw;
  padding: 0 5%;
  @media (max-width: 1080px) {
    font-size: 2.5vw;
  }

  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 5% 10%;
  p {
    text-align: center;
    padding: 20px 40px;
  }
  @media (max-width: 700px) {
    padding: 0 10px;
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
  border: 2px solid #e1ad63;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const SubTitleInContent = styled.div`
  width: 50%;
  font-size: 2vw;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  text-align: center;
  text-decoration-color: #e1ad63;
  padding: 0 10%;
  font-weight: bold;
  @media (max-width: 1080px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const TitleInContent = styled.div`
  width: 100%;
  text-align: center;
  font-size: 5.5vw;
  margin-top: 20px;
  color: #e1ad63;
  margin-bottom: 10px;
  text-transform: uppercase;
  /* @media (max-width: 480px) {
    font-size: 3.5vw;
  } */
`;

const aboutComponents = ({ titleAbout, subTitle, data }) => {
  return (
    <div className="container mx-auto"style={{borderRadius:"12px",boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.1)",backgroundColor:"#FFFF"}}>
      <Title>{titleAbout}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {data.map((items, i) => (
          <div>
            <Fade bottom>
              <TitleInContent>{items.title}</TitleInContent>
              <SubTitleInContent>{items.subtitle}</SubTitleInContent>
              {(items.title || items.subtitle) && <Border />}
              <Content key={i}>
                <img src={items.image.url} alt="" />
                <TextDescription
                  dangerouslySetInnerHTML={{
                    __html: items.description,
                  }}
                />
              </Content>
            </Fade>
          </div>
      ))}
    </div>
  );
};

export default aboutComponents;
