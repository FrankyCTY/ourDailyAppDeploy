(this.webpackJsonpourdailyapp=this.webpackJsonpourdailyapp||[]).push([[7],{278:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(113),a=function(e){return{type:r.a.UPDATE_ROUTE_PATH,payload:e}}},279:function(e,t,n){"use strict";t.a=function(e,t){if(null!==document.querySelector(t)){console.log("srcInAnimationFunc: ",e);var n=document.createElement("div");n.classList.add("addedApp"),n.style.backgroundImage="url(".concat(e,".jpeg)");var r=document.createElement("div");r.classList.add("animation-parabola-wrapper"),r.append(n),document.querySelector(t).append(r),setTimeout((function(){r.outerHTML=""}),700)}}},284:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n(3);function c(){var e=Object(o.a)(["\n  ","\n"]);return c=function(){return e},e}function l(){var e=Object(o.a)(["\n  ","\n"]);return l=function(){return e},e}function u(){var e=Object(o.a)(["\n  ","\n"]);return u=function(){return e},e}function s(){var e=Object(o.a)(["\n  grid-area: btns;\n"]);return s=function(){return e},e}function d(){var e=Object(o.a)(["\n  grid-area: price;\n  color: ",";\n"]);return d=function(){return e},e}function p(){var e=Object(o.a)(["\n  ","\n  grid-area: info;\n  font-size: 0.8rem;\n  display: block;\n"]);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  ","\n  grid-area: info;\n"]);return f=function(){return e},e}function m(){var e=Object(o.a)(["\n  grid-area: img;\n  cursor: pointer;\n"]);return m=function(){return e},e}function h(){var e=Object(o.a)(['\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  grid-template-rows: 70px 1fr 1fr;\n  grid-template-areas:\n    "img info"\n    "img price"\n    "btns btns";\n\n  column-gap: 1rem;\n\n  padding: 0.5rem;\n']);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n  border: 0;\n  background: 0;\n  cursor: pointer;\n  color: ",";\n  font-size: 0.8rem;\n  margin-right: 1rem;\n\n  &:hover {\n    color: ",";\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(o.a)(["\n  font-weight: 700;\n  cursor: pointer;\n  color: ",";\n"]);return b=function(){return e},e}var v={},y=Object(i.c)(b(),(function(e){return e.theme.cartPage.cartItemTitleCreatorText})),C=Object(i.c)(g(),(function(e){return e.theme.cartPage.cartItemBtns}),(function(e){return e.theme.cartPage.cartItemBtns_Hover}));v.CartItemContainer=i.d.div(h()),v.ImgWrapper=i.d.div(m()),v.TitleText=i.d.span(f(),y),v.CreatorText=i.d.span(p(),y),v.PriceText=i.d.span(d(),(function(e){return e.theme.cartPage.cartItemPriceText})),v.ButtonsWrapper=i.d.div(s()),v.BtnRemove=i.d.button(u(),C),v.BtnToWishList=i.d.button(l(),C),v.BtnToCartList=i.d.button(c(),C);var O=v,S=n(30),P=n(157),E=n(18),k=n(112),w=n(279);t.a=Object(S.b)((function(e){return{wishListed:function(t){return Object(P.h)(t)(e)}}}))((function(e){var t=e.cartItem,n=e.itemType,r=e.animationAppendTo,o=e.wishListed,i=Object(S.c)(),c=Object(k.a)();return a.a.createElement(O.CartItemContainer,{className:"cart-item"},a.a.createElement(O.ImgWrapper,{className:"img-wrapper",onClick:function(){return c.push("/shop/".concat(t.route))}},a.a.createElement("img",{src:"".concat(t.imgSrc,".jpeg"),alt:"cart item",className:"img--item"})),a.a.createElement("div",{className:"title-and-creator"},a.a.createElement(O.TitleText,{className:"item-title",onClick:function(){return c.push("/shop/".concat(t.route))}},t.name),a.a.createElement(O.CreatorText,{className:"item-creator",onClick:function(){return c.push("/shop/".concat(t.route))}},"By ",t.creator)),a.a.createElement(O.PriceText,{className:"item-price"},"$",t.price),a.a.createElement(O.ButtonsWrapper,{className:"item-buttons-wrapper"},a.a.createElement(O.BtnRemove,{className:"btn--remove",onClick:function(){i("cart"===n?Object(E.r)(t._id,t.price):Object(E.t)(t._id))}},"Remove"),"cart"===n?a.a.createElement(O.BtnToWishList,{className:"btn--toWishList",onClick:function(){o(t._id)?i(Object(E.t)(t._id)):i(Object(E.e)(t))}},"Move to Wishlist"):a.a.createElement(O.BtnToCartList,{className:"btn--toCartList",onClick:function(){Object(w.a)(t.imgSrc,r),i(Object(E.b)(t))}},"Add to cart")))}))},294:function(e,t,n){},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(0)),i=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!1,s=!1,d=!1,p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return r({},e,n.props.hasOwnProperty(t)&&l({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(d)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!s&&!u){u=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,r=new Promise((function(n,r){t.onload=function(){s=!0,u=!1,n(),e.onScriptLoaded()},t.onerror=function(t){d=!0,u=!1,r(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){r.then((function(){return n?t({isCanceled:!0}):e()})),r.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){u||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return o.default.createElement("button",r({},l({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:r({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),o.default.createElement("span",{style:r({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return o.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},o.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?o.default.createElement(e,r({},l({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(o.default.Component);p.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},p.propTypes={desktopShowModal:i.default.bool,triggerEvent:i.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:i.default.string,style:i.default.object,textStyle:i.default.object,disabled:i.default.bool,ComponentClass:i.default.string,showLoadingDialog:i.default.func,hideLoadingDialog:i.default.func,onScriptError:i.default.func,onScriptTagCreated:i.default.func,reconfigureOnUpdate:i.default.bool,stripeKey:i.default.string.isRequired,token:i.default.func.isRequired,name:i.default.string,description:i.default.string,image:i.default.string,amount:i.default.number,locale:i.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:i.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:i.default.string,zipCode:i.default.bool,billingAddress:i.default.bool,shippingAddress:i.default.bool,email:i.default.string,allowRememberMe:i.default.bool,bitcoin:i.default.bool,alipay:i.default.oneOf(["auto",!0,!1]),alipayReusable:i.default.bool,opened:i.default.func,closed:i.default.func},p._isMounted=!1,t.default=p},309:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n(3);function c(){var e=Object(o.a)(["\n  width: 90%;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 800px) {\n    width: 75%;\n    flex-direction: row;\n  }\n"]);return c=function(){return e},e}function l(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return l=function(){return e},e}var u={};u.CartPageContainer=i.d.div(l()),u.ContentContainer=i.d.div(c());var s=u,d=n(278),p=n(30),f=n(157),m=n(40);function h(){var e=Object(o.a)(["\n  font-size: 1.1rem;\n  color: ",";\n"]);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n  margin-top: 1em;\n  font-size: 0.9rem;\n  color: ",";\n"]);return g=function(){return e},e}function b(){var e=Object(o.a)(["\n  ","\n"]);return b=function(){return e},e}function v(){var e=Object(o.a)(["\n  font-size: 6rem;\n"]);return v=function(){return e},e}function y(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n  padding: 0 1em;\n"]);return y=function(){return e},e}function C(){var e=Object(o.a)(["\n  ","\n"]);return C=function(){return e},e}function O(){var e=Object(o.a)(["\n  font-size: 1.1rem;\n  color: ",";\n"]);return O=function(){return e},e}function S(){var e=Object(o.a)(["\n  @media screen and (min-width: 800px) {\n    width: 70%;\n    margin-right: 2em;\n  }\n"]);return S=function(){return e},e}function P(){var e=Object(o.a)(["\n  border: ",";\n  margin-top: 1em;\n  margin-bottom: 1em;\n  color: ",";\n"]);return P=function(){return e},e}var E={},k=Object(i.c)(P(),(function(e){return e.theme.cartPage.cartWishlistBorder}),(function(e){return e.theme.cartPage.text}));E.CartPageItemsBoard=i.d.div(S()),E.NumOfAppInCartSpan=i.d.span(O(),(function(e){return e.theme.cartPage.text})),E.CartItemBlockWrapper=i.d.div(C(),k),E.EmptyCartItemsWrapper=i.d.div(y()),E.IconCart=i.d.i(v()),E.WishlistWrapper=i.d.div(b(),k),E.EmptyWishlistText=i.d.p(g(),(function(e){return e.theme.cartPage.text})),E.RecentlyWishlistedText=i.d.span(h(),(function(e){return e.theme.cartPage.text}));var w=E,D=n(284),x=function(e){var t=e.cartItems,n=e.wishlistItems,r=e.cartItemsQuantity;return a.a.createElement(w.CartPageItemsBoard,null,a.a.createElement(w.NumOfAppInCartSpan,null,r," ",1===r?"Application":"Applications"," in Cart"),a.a.createElement(w.CartItemBlockWrapper,null,0!==r&&null!==t&&t.map((function(e,t){return a.a.createElement(D.a,{id:e.id,cartItem:e,itemType:"cart",key:t})})),0===r&&a.a.createElement(w.EmptyCartItemsWrapper,null,a.a.createElement(w.IconCart,{className:"iconfont icon-cart"}),a.a.createElement("p",{className:"empty-cartItems-text"},"Your cart is empty. Keep shopping to find an application!"))),a.a.createElement(w.RecentlyWishlistedText,null,"Recently wishlisted"),0!==n.length&&a.a.createElement(w.WishlistWrapper,null,null!==n&&n.map((function(e,t){return a.a.createElement(D.a,{id:e.id,cartItem:e,itemType:"wishlist",key:t})}))),0===n.length&&a.a.createElement(w.EmptyWishlistText,null,"You haven't added any applications to your wishlist."))};function T(){var e=Object(o.a)(["\n  border: 0;\n  text-align: center;\n  background: var(--blue-light);\n\n  color: white;\n  font-weight: 700;\n  padding: 0.7em 0;\n  cursor: pointer;\n  margin-bottom: 0.5em;\n\n  &:hover {\n    background: var(--blue-dark);\n  }\n\n  &:disabled {\n    background: var(--gray2);\n  }\n\n  & ~ .StripeCheckout {\n    display: none !important;\n  }\n"]);return T=function(){return e},e}function j(){var e=Object(o.a)(["\n  padding-left: 0.1em;\n"]);return j=function(){return e},e}function N(){var e=Object(o.a)(["\n  font-size: 2rem;\n  font-weight: 700;\n  @media screen and (min-width: 800px) {\n    display: block;\n  }\n"]);return N=function(){return e},e}function L(){var e=Object(o.a)(["\n  margin-bottom: 1em;\n"]);return L=function(){return e},e}function A(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n"]);return A=function(){return e},e}function R(){var e=Object(o.a)(["\n  order: -1;\n  @media screen and (min-width: 800px) {\n    order: initial;\n    width: 30%;\n  }\n"]);return R=function(){return e},e}var M={};M.PaymentSection=i.d.div(R()),M.PaymentContainer=i.d.div(A(),(function(e){return e.theme.cartPage.text})),M.TotalPriceText=i.d.span(L()),M.DollarText=i.d.span(N()),M.PriceText=i.d.span(j()),M.BtnCheckout=i.d.button(T());var I=M,B=(n(294),n(295)),H=n.n(B),W=function(e){var t=e.price,n=100*t;return a.a.createElement(H.a,{label:"Pay Now",name:"Franky Venus Ltd",billingAddress:!0,shippingAddress:!0,image:"/images/assets/logo.png",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",currency:"NZD",alipay:!0,stripeKey:"pk_test_51H0werGFSNHgdavm3WCB176eqacPDJm12M2XNjxpMKVjqTvPCJDCXOMZ0mLDgwcp9NMafHSTtas4QZpTaCvW5wzF00OrRn9Ke3",token:function(e){console.log(e),alert("Payment Successful")}})},K=function(e){var t=e.cartItemsQuantity,n=e.totalPrice;return a.a.createElement(I.PaymentSection,{className:"right-side"},a.a.createElement(I.PaymentContainer,{className:"payment-info"},a.a.createElement(I.TotalPriceText,{className:"total-price-text"},"Total:"," ",a.a.createElement(I.DollarText,{className:"dollar-price-text"},"$",a.a.createElement(I.PriceText,{className:"price-text"},n))),a.a.createElement(I.BtnCheckout,{className:"btn--checkout",onClick:function(){var e=document.querySelector(".StripeCheckout");null!==e&&e.click()},disabled:0===t},"Checkout"),a.a.createElement(W,{price:n})),a.a.createElement("hr",null))},_=Object(m.b)({cartItems:f.b,cartItemsQuantity:f.c,totalPrice:f.d,wishlistItems:f.i});t.default=Object(p.b)(_,(function(e){return{updateRoutePath:function(t){return e(Object(d.a)(t))}}}))((function(e){var t=e.cartItems,n=e.cartItemsQuantity,o=e.totalPrice,i=e.wishlistItems,c=e.updateRoutePath;return Object(r.useEffect)((function(){return c({page:"cart",details:{}}),function(){c({page:"",details:{}})}}),[c]),a.a.createElement(s.CartPageContainer,null,a.a.createElement(s.ContentContainer,{className:"gs-PageContentContainer"},a.a.createElement(x,{cartItems:t,cartItemsQuantity:n,wishlistItems:i}),a.a.createElement(K,{cartItemsQuantity:n,totalPrice:o})))}))}}]);
//# sourceMappingURL=7.2124585f.chunk.js.map