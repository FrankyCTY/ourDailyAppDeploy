const rootStyles = {
  red: `#ff3860`,
  red_dark: `#ff1443`,
  red_light: `#ff5c7c`,
  blue: `#498afb`,
  blue_dark: `#2674fa`,
  blue_light: `#6ca0fc`,
  orange: `#fa8142`,
  orange_dark: `#f96a1f`,
  orange_light: `#fb9865`,
  green: `#09c372`,
  green_dark: `#07a15e`,
  green_light: `#0be586`,
  purple: `#9166cc`,
  purple_dark: `#7d4bc3`,
  purple_light: `#a481d5`,
  yellow: `#ffdd57`,
  yellow_dark: `#ffd633`,
  yellow_light: `#ffe47a`,
  pink: `#ff4088`,
  pink_dark: `#ff1c72`,
  pink_light: `#ff649e`,
  gray0: `#f8f8f8`,
  gray1: `#dbe1e8`,
  gray2: `#b2becd`,
  gray3: `#6c7983`,
  gray4: `#454e56`,
  gray5: `#2a2e35`,
  gray6: `#12181b`,
  // ========================= New colors =========================
  black_0: `#303030`,
  black_m1: `#5E5E5E`,

  white_m1: "white",
  white_0: `#F8F8F8`,
  white_p1: `#f8f9fc`,
  white_p2: `#ced4da`,

  blue_m1: `#6CA0FC`,
  blue_m2: `#0059A6`,
  blue_p2: `#849DC5`,
  blue_p1: `#5678af`,
  blue_facebook: `#35569A`,

  green_0: `#49C246`,
  red_0: `#EB7474`,

  gray_m2: `#848484`,
  gray_m1: `#B3B3B3`,
  gray_0: `#CECECE`,
  gray_p1: `#E5E5E5`,


  header_clr: `#6ca0fc`,
};

export const darkTheme = {
  body: rootStyles.black_0,
  secondary_bg: rootStyles.black_m1,

  wrapper_border: rootStyles.white_p2,
  general_text: rootStyles.white_0,
  attract_color: rootStyles.blue_m2,
  header: `rgba(0, 0, 0, 0)`,
  mainPage: {
    spinner_mainPageAccessAppWrapper: rootStyles.blue_light,
  },
  shopNav: {
    toggler_bg: rootStyles.blue_p2,
    toggler_bg_hover: rootStyles.blue_p1,
    shopNavText_Hover: rootStyles.gray2,
    menuWrapper_bg: rootStyles.blue_p2,
  },
  appStoreCard: {
    cardBg: rootStyles.black_m1,
    cardText: rootStyles.white_0,
    cardStartBtn_bg: rootStyles.blue_m2,
    // cardLoadingContent_primary: rootStyles.gray1,
    cardLoadingContent_primary: rootStyles.gray_m2,
    // cardLoadingContent_secondary: `#d1d8e1`,
    cardLoadingContent_secondary: rootStyles.black_m1,
    // cardLoadingContent_secondary: rootStyles.black_m1,
  },
  wishListCard: {
    cardBg: rootStyles.black_m1,
    cardText: rootStyles.white_0,
    cardBtn_bg: rootStyles.blue_p2,
  },
  cartPage: {
    cartItemPriceText: rootStyles.red_dark,
    cartItemBtns: rootStyles.blue_dark,
    cartItemBtns_Hover: rootStyles.blue_light,
    cartWishlistBorder: `1px solid rgba(128, 128, 128, 0.13)`,
  },
  NavigationMenu: {
    NavigationMenuBg: `rgba(0, 0, 0, 0.8)`,
    Text_Hover: rootStyles.gray_m2,
  },
  RouteBlock: {
    currentRouteText: rootStyles.gray_0,
    prevRouteText: rootStyles.gray_m1,
  },
  appDetailPage: {
    preloader_primary: rootStyles.gray_m2,
    preloader_secondary: rootStyles.gray6,
    btn_font_clr: "white",
    heartIcon: "white",
    heartIcon_active: "red",
    text: rootStyles.white_0,
    addToCartBtn_bg: rootStyles.blue_m2,
    addToWishListBtn_bg: rootStyles.pink_light,
  },
  commentsConverterPage: {
    title: rootStyles.blue,
    btnExample: rootStyles.blue,
  },
  pigGamePage: {
    panel_bg: "white",
    targetInput_border: rootStyles.header_clr,
    activePanel_bg: rootStyles.gray0,
    dot_color: `#eb4d4d`,
    current_container: `#eb4d4d`,
    totalScore: `#eb4d4d`,
    preloader_bg: rootStyles.header_clr,
    playerLogInBtn_primary: `#eb4d4d`,
    PlayerLogInBtn_secondary: "white",
  },
  SignUpPage: {
    SignUpTitle: rootStyles.white_0,
    OrSepereateLine: rootStyles.white_0,
    genderRadiusBtn_hover: rootStyles.blue_m2,
  },
  AuthPage: {
    ToSignUpPageBtn: rootStyles.white_0,
    ToLogInPageBtn: rootStyles.white_0,
  },
  LogInForm: {
    logInBtn_bg: rootStyles.blue_m2,
    logInBtn_text: rootStyles.white_0,
    toCreateAccountLink: rootStyles.white_0,
  },
  SignUpForm: {
    SignUpButton_bg: `rgba(0, 0, 0, 0)`,
    SignUpButton_border: rootStyles.white_0,
    SignUpButton_text: rootStyles.white_0,
  },
  FormInput: {
    text: rootStyles.white_0,
    placeHolder: rootStyles.white_0,
    svg: rootStyles.white_0,
    forgotPassBtn_text: rootStyles.white_0,
    alert_bg: rootStyles.red_0,
    alert_border: "red",
  },
  OauthBtns: {
    googleBtn_bg: "white",
    facebookBtn_bg: rootStyles.blue_facebook,
    appleBtn_bg: "black",
    googleBtn_text: "black",
    facebookBtn_text: "white",
    appleBtn_text: "white",
  },
  SocialContactPair: {
    svg: rootStyles.white_0,
    text: rootStyles.white_0,
  },
  Notification: {
    floatContainer_bg: rootStyles.black_m1,
    errorText: rootStyles.white_0,
    errorIcon: rootStyles.orange_dark,
    successIcon: rootStyles.blue_m1,
  },
  Formik: {
    text_color: rootStyles.gray_m1,
    label_color: rootStyles.white_0,
  },
  ToolBar: {
    bg: rootStyles.black_m1,
    icon_color: rootStyles.gray_m1,
  },
  SideMenu: {
    hover_item_bg: rootStyles.gray_m2,
  },
  WholePageLoader: {
    // bg: "rgba(48, 48, 48, 0.8)",
    bg: `rgba(0, 0, 0, 0.8)`,
    color: rootStyles.white_0,
  }
};

export const lightTheme = {
  body: rootStyles.white_p1,
  secondary_bg: rootStyles.white_m1,

  wrapper_border: rootStyles.black_m1,
  general_text: rootStyles.black_0,
  attract_color: rootStyles.blue_m2,
  header: `rgba(0, 0, 0, 0)`,
  mainPage: {
    spinner_mainPageAccessAppWrapper: rootStyles.blue_light,
  },
  shopNav: {
    toggler_bg: rootStyles.blue_p2,
    toggler_bg_hover: rootStyles.blue_p1,
    shopNavText_Hover: rootStyles.gray2,
    menuWrapper_bg: rootStyles.blue_p2,
  },
  appStoreCard: {
    cardBg: rootStyles.white_m1,
    cardText: rootStyles.black_m1,
    cardStartBtn_bg: rootStyles.blue_m2,
    // cardLoadingContent_primary: rootStyles.gray1,
    cardLoadingContent_primary: rootStyles.gray_m2,
    // cardLoadingContent_secondary: `#d1d8e1`,
    cardLoadingContent_secondary: rootStyles.white_m1,
    // cardLoadingContent_secondary: rootStyles.black_m1,
  },
  wishListCard: {
    cardBg: rootStyles.white_m1,
    cardText: rootStyles.black_m1,
    cardBtn_bg: rootStyles.blue_p2,
  },
  cartPage: {
    cartItemPriceText: rootStyles.red_dark,
    cartItemBtns: rootStyles.blue_dark,
    cartItemBtns_Hover: rootStyles.blue_light,
    cartWishlistBorder: `1px solid rgba(128, 128, 128, 0.13)`,
  },
  NavigationMenu: {
    NavigationMenuBg: `rgba(255, 255, 255, 0.8)`,
    Text_Hover: rootStyles.gray_m2,
  },
  RouteBlock: {
    currentRouteText: rootStyles.black_0,
    prevRouteText: rootStyles.black_m1,
  },
  appDetailPage: {
    preloader_primary: rootStyles.gray_m2,
    preloader_secondary: rootStyles.gray6,
    btn_font_clr: "white",
    heartIcon: "white",
    heartIcon_active: "red",
    text: rootStyles.black_m1,
    addToCartBtn_bg: rootStyles.blue_m2,
    addToWishListBtn_bg: rootStyles.pink_light,
  },
  commentsConverterPage: {
    title: rootStyles.blue,
    btnExample: rootStyles.blue,
  },
  pigGamePage: {
    panel_bg: "white",
    targetInput_border: rootStyles.header_clr,
    activePanel_bg: rootStyles.gray0,
    dot_color: `#eb4d4d`,
    current_container: `#eb4d4d`,
    totalScore: `#eb4d4d`,
    preloader_bg: rootStyles.header_clr,
    playerLogInBtn_primary: `#eb4d4d`,
    PlayerLogInBtn_secondary: "white",
  },
  SignUpPage: {
    SignUpTitle: rootStyles.black_m1,
    OrSepereateLine: rootStyles.black_m1,
    genderRadiusBtn_hover: rootStyles.blue_m2,
  },
  AuthPage: {
    ToSignUpPageBtn: rootStyles.white_0,
    ToLogInPageBtn: rootStyles.white_0,
  },
  LogInForm: {
    logInBtn_bg: rootStyles.blue_m2,
    logInBtn_text: rootStyles.white_0,
    toCreateAccountLink: rootStyles.white_0,
  },
  SignUpForm: {
    SignUpButton_bg: `rgba(0, 0, 0, 0)`,
    SignUpButton_border: rootStyles.white_0,
    SignUpButton_text: rootStyles.white_0,
  },
  FormInput: {
    text: rootStyles.white_0,
    placeHolder: rootStyles.white_0,
    svg: rootStyles.white_0,
    forgotPassBtn_text: rootStyles.white_0,
    alert_bg: rootStyles.red_0,
    alert_border: "red",
  },
  OauthBtns: {
    googleBtn_bg: "white",
    facebookBtn_bg: rootStyles.blue_facebook,
    appleBtn_bg: "black",
    googleBtn_text: "black",
    facebookBtn_text: "white",
    appleBtn_text: "white",
  },
  SocialContactPair: {
    svg: rootStyles.white_0,
    text: rootStyles.white_0,
  },
  Notification: {
    floatContainer_bg: rootStyles.white_m1,
    errorText: rootStyles.black_m1,
    errorIcon: rootStyles.orange_dark,
    successIcon: rootStyles.blue_m1,
  },
  // black_0   white_p2
  // black_m1  white_0
  Formik: {
    text_color: rootStyles.gray_m1,
    label_color: rootStyles.black_m1,
  },
  ToolBar: {
    bg: rootStyles.white_0,
    icon_color: rootStyles.gray_m1,
  },
  SideMenu: {
    hover_item_bg: rootStyles.gray_m2,
  },
  WholePageLoader: {
    bg: `rgba(255, 255, 255, 0.8)`,
    color: rootStyles.black_m1,
  }
};
