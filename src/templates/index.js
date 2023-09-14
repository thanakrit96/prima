import React, { useEffect, useState } from "react";
import Layout from "~/components/layout";
import { graphql } from "gatsby";
import BannerComponent from "~/components/banner";
import ServicesComponents from "../components/services";
import AboutComponents from "../components/about";
import ProgramComponents from "../components/program";
import GalleyComponents from "../components/gallery";
import KnowLedge from "../components/knowLedge";
import ContactComponents from "../components/contact";
import MapComponents from "../components/googleMap";
import Fade from "react-reveal/Fade";
import * as Scroll from "react-scroll";
import Popup from "../components/popup";
import Partner from "../components/partner";
import { Helmet } from 'react-helmet';
import dinoFavicon from "../images/icon_logo.png"

let Element = Scroll.Element;
const scroller = Scroll.scroller;

const IndexPage = ({ data }) => {
  const _data = data.datoCmsPrima;
  const bannerList = _data.banner;
  const logo = _data.logo;
  const iconService = _data.service;
  const bannerAboutUs = _data.imageaboutus;
  const imageatmosphere = _data.imageatmosphere;
  const content = _data.content;
  const icon = _data.social;
  const program = _data.program;
  const textContact = _data.contact;
  const imageVaccine = _data.imagepopup;
  const partner = _data.partner;
  const titleAboutCLinic = _data.titleaboutclinic;
  const subTitleAboutCLinic = _data.subtitleaboutclinic;
  const aboutClinic = _data.aboutclinic;
  const map = _data.imagemap;
  const mapUrl = _data.mapurl;
  const titleReview = _data.titleimageandatmosphere;
  const titleKnowledge = _data.titleknowledge;
  const titleProgram = _data.titleprogram;
  const titleService = _data.titleservice;
  const titleReservation = _data.titlebtnreservation;
  const titleBtnBuy = _data.titlebtnbuy;
  const titleDetail = _data.titledetail;
  const titlePartner = _data.titlepartner;
  const [detailPopup, setPopup] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopupVaccine, setPopupVaccine] = useState(true);
  const [getSection, setSection] = useState("");
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const togglePopupVaccine = () => {
    setPopupVaccine(!isOpenPopupVaccine);
  };

  useEffect(() => {
    onClickMenu(getSection);
  }, [getSection]);

  const onClickMenu = (element, offset = 0) => {
    scroller.scrollTo(`${element}`, {
      duration: 10,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -140,
    });
  };

  return (
    <Layout logo={logo} icon={icon} titleBtn={titleReservation}>
      {isOpenPopupVaccine && (
        <Popup
          content={`${imageVaccine.url}`}
          isOpenButton={false}
          handleClose={togglePopupVaccine}
        />
      )}
      <Helmet>
        <title>Prima lounge</title>
        <link rel="icon" type="image/png" href={dinoFavicon} />
      </Helmet>
      <Fade bottom>
      <BannerComponent bannerList={bannerList} style={{ width: '100%', maxWidth: '100%' }} />
      </Fade>
      <Fade bottom>
        <Element name="service">
          <ServicesComponents data={iconService} selectSection={setSection} title={titleService} />
        </Element>
      </Fade>
      <Element name="aboutUs">
        <AboutComponents
          titleAbout={titleAboutCLinic}
          subTitle={subTitleAboutCLinic}
          data={aboutClinic}
        />
      </Element>
      <Fade bottom>
        <BannerComponent bannerList={bannerAboutUs} />
      </Fade>
      <Fade bottom>
        <Element name="treatmentProgram">
          <ProgramComponents
            data={program}
            setPopup={setPopup}
            togglePopup={togglePopup}
            line={icon}
            title={titleProgram}
            titleBtnBuy={titleBtnBuy}
            titleDetail={titleDetail}
          />
        </Element>
      </Fade>
      <Fade bottom>
        <Element name="knowledge">
          <KnowLedge data={content} title={titleKnowledge}/>
        </Element>
      </Fade>
      <Fade bottom>
        <Element name="review">
          <GalleyComponents data={imageatmosphere} title={titleReview}/>
        </Element>
      </Fade>
      <Fade bottom>
        <ContactComponents icon={icon} contact={textContact} />      
      </Fade>
      <Fade bottom>
        <Partner data={partner} title={titlePartner}/>
      </Fade>
      <Fade bottom>
        <MapComponents data={map} url={mapUrl} />
      </Fade>
      {isOpen && (
        <Popup
          content={`${detailPopup}`}
          isOpenButton={true}
          line={icon}
          handleClose={togglePopup}
          titleBtn={titleBtnBuy}
        />
      )}
    </Layout>
  );
};

export const query = graphql`
  query Index($locale: String!) {
    datoCmsPrima(locale: { eq: $locale }) {
      logo {
        url
      }
      imagepopup {
        url
      }
      banner {
        url
      }
      imageaboutus {
        url
      }
      imageatmosphere {
        url
      }
      content {
        description
        image {
          url
        }
      }
      social {
        icon {
          url
        }
        link
      }
      contact {
        title
        description
      }
      service {
        image {
          url
        }
        title
        currenturl
      }
      program {
        image {
          url
        }
        imagedetail {
          url
        }
        price
        title
        description
      }
      partner {
        image {
          url
        }
        name
      }
      aboutclinic {
        title
        subtitle
        image {
          url
        }
        description
      }
      subtitleaboutclinic
      titleaboutclinic
      imagemap {
        url
      }
      mapurl
      titleimageandatmosphere
      titleknowledge
      titleprogram
      titleservice
      titlebtnreservation
      titlebtnbuy
      titledetail
      titlepartner
    }
  }
`;

export default IndexPage;
