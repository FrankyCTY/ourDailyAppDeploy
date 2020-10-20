import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body {
  min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.body};
    text-rendering: optimizeLegibility;
  }

body::-webkit-scrollbar {
    width: 1em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px;
  outline: 0;
}
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // * {
  //   background: #000 !important;
  //   color: #0f0 !important;
  //   outline: solid #f00 1px !important;
  // }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .link {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  
  .text-focal {
    color: var(--gray6);
  }
  
  .text-underline {
    border-bottom: 2px solid var(--cyan);
  }
  
  :root {
    --red: #ff3860;
    --red-dark: #ff1443;
    --red-light: #ff5c7c;
    --blue: #498afb;
    --blue-dark: #2674fa;
    --blue-light: #6ca0fc;
    --orange: #fa8142;
    --orange-dark: #f96a1f;
    --orange-light: #fb9865;
    --green: #09c372;
    --green-dark: #07a15e;
    --green-light: #0be586;
    --purple: #9166cc;
    --purple-dark: #7d4bc3;
    --purple-light: #a481d5;
    --yellow: #ffdd57;
    --yellow-dark: #ffd633;
    --yellow-light: #ffe47a;
    --pink: #ff4088;
    --pink-dark: #ff1c72;
    --pink-light: #ff649e;
    --gray0: #f8f8f8;
    --gray1: #dbe1e8;
    --gray2: #b2becd;
    --gray3: #6c7983;
    --gray4: #454e56;
    --gray5: #2a2e35;
    --gray6: #12181b;
    --nav-height: 4em;
    --font-body: "sofia-pro", sans-serif;
    --font-head: "sofia-pro", sans-serif;
    --font-code: "attribute-mono", monospace;
    --font-size: 20px;
    --max-width-bp: 768px;
    --orange-pink: linear-gradient(
      to bottom right,
      var(--orange-light),
      var(--orange-dark) 85%
    );
    --green-grad: linear-gradient(
      to bottom right,
      var(--green-light),
      var(--green-dark) 85%
    );
    --pink-grad: linear-gradient(
      to bottom right,
      rgba(246, 187, 187, 1),
      rgba(249, 219, 217, 1)
    );
    --background: var(--gray6);
    --text-color: var(--gray2);
    --h-color: #fff;
    --nav-shadow: 4px 0 10px -3px #010101;
    --clr-nav: var(--blue-light);
    --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.38);
    --toc-shadow: rgba(0, 0, 0, 0.7) 0px 10px 20px 0px;
  
    --tag-bg: var(--gray4);
    --float-nav-bg: var(--blue-light);
    --mainpage-bg: rgb(250, 250, 250);
    --code-bg: #22262f;
    --card-bg: var(--gray5);
    --overlay-bg: rgba(0, 0, 0, 0.9);
    --h-border: 2px dashed var(--nav-bg);
    --nav-border: 2px dashed var(--text-color);
    --card-radius: 0.25em;
  
    /* commentsConverter-page */
    --ccp-h1-clr: var(--blue);
  
    /* shopNav */
    --toggle-shopnav-clr: var(--blue-light);
  
    transition: all 0.3s ease;
  }

  
  /* ========================== General style ========================== */
a {
  text-decoration: none !important;
  &:hover {
    color: white !important;
  }
}




  /* ========================== Pages ========================== */
.gs-page {
  background: ${(props) => props.theme.body};
  width: 100%;

  overflow: hidden;
}

.gs-PageContentContainer {
  margin: 50px auto;
}



.gridCenterContent {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 1300px) 1fr;
}

.relative {
  position: relative;
}

.overflowHidden {
  overflow: hidden;
}

/* ================ Scroll bar ================ */

/* ================ animations ================ */

@-webkit-keyframes parabola {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
  23% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    opacity: 0;
  }
}

@keyframes parabola {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1;
  }
  23% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    opacity: 0;
  }
}

.animation-parabola-wrapper {
  --size: 100px;
  height: var(--size);
  width: var(--size);
  background: rgba($color: #000000, $alpha: 0);
  // background: rgba($color: blue, $alpha: 1);
  position: fixed;
  z-index: 5;
  right: 14%;
  bottom: 5%;
  pointer-events: none;

  @media screen and (min-width: 850px) {
    right: 2.5%;
  }

  .addedApp {
    position: absolute;
    bottom: 50%;
    left: 0;
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-size: cover;
  }

  animation: parabola 0.9s linear forwards;
}
  `;

export default GlobalStyle;
