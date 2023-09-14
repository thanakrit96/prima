import { createGlobalStyle } from "styled-components";

import sunIcon from "~/images/sun.svg";
import moonIcon from "~/images/moon.svg";

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none !important;
  }

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background: #E8E8E0;
    color: #161616;
  }

  img {
    width: 100%;
  }

  header {
    top: 0;

    img {
      width: 36px;
      height: 36px;
    }

    > div {
      height: 60px;
      background: rgba(255, 255, 255, .45);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);

      a.nav-link {
        font-size: 16px;

        &:not(:first-child) {
          margin-left: 28px;
        }
      }
    }
  }

  .fade {
    animation-name: fade;
    animation-duration: 2.5s;
  }

  @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
  }

  .fadeIn {
    animation-name: fade;
    animation-duration: 0.5s;
  }

  .fadeOut {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s linear;
  }

  @keyframes fadeIn {
    from {opacity: .4}
    to {opacity: 1}
  }

  .react-toggle-track {
    &-check {
      background: url(${sunIcon}) no-repeat;
      background-size: 12px;
      width: 12px;
      height: 12px;
    }

    &-x {
      background: url(${moonIcon}) no-repeat;
      background-size: 12px;
      width: 12px;
      height: 12px;
    }
  }

  .swiper-pagination {
    width: 100px;
  }
`;

export default GlobalStyle;
