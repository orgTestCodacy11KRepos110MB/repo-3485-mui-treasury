(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1299:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(276),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(499),_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(182),_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(390),_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1245),_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(493),_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1560),_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1557),_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1526),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1420),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(75),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(498),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1266),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1267),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1276),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1268),_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1269),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(0);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var theme=Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.a)();__webpack_exports__.default=function InsetSidebarPosition(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("fixed"),position=_React$useState[0],setPosition=_React$useState[1],Wrapper="absolute"===position?_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_10__.a:"div";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.a,{theme:theme,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_11__.a,{scheme:{header:{config:{xs:{position:"sticky",height:56}}},rightInsetSidebar:{config:{xs:{position:position,top:"sticky"===position?64:0,width:256}}}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_12__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div",{children:"Header"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_13__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_14__.a,{disableGutters:!0,rightSidebar:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_15__.a,{sx:_extends({},"sticky"===position&&{marginTop:"80px"}),children:["fixed"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,children:"Fixed content but scrollable if long list, Try scolling the content."}),"sticky"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,children:"Controlled by `top` and provide margin to InsetSidebar-body"}),"absolute"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,children:"Some Settings"})]}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,width:"100%",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_6__.a,{children:"Inset Sidebar Position"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_7__.a,{value:position,onChange:function onChange(event){return setPosition(event.target.value)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.a,{control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__.a,{}),value:"fixed",label:"fixed"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.a,{control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__.a,{}),value:"sticky",label:"sticky"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.a,{control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_8__.a,{}),value:"absolute",label:"absolute"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),"fixed"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,bgcolor:"primary.main",color:"common.white",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:"`fixed`"})," is a great fit for displaying topics of the page that has long content because the sidebar will not move if user scroll on the content. Also the area of `fixed` inset sidebar cover to the edge of the screen."]}),"sticky"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,bgcolor:"primary.main",color:"common.white",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:"`sticky`"})," is similar to ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:"`fixed`"})," but for displaying things that will have initial space at the top on intial load and once user scroll on the content, it stick at the top (the area of sidebar stay inside the container). One example is displaying ads."]}),"absolute"===position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,bgcolor:"primary.main",color:"common.white",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:"`absolute`"})," is for app that want to display Footer at all times. A good example is Facebook Messenger."]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{maxWidth:700,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique senectus. Massa eget egestas purus viverra accumsan in. Consectetur adipiscing elit duis tristique. Egestas dui id ornare arcu odio ut sem nulla pharetra. Egestas erat imperdiet sed euismod nisi porta lorem. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Interdum posuere lorem ipsum dolor sit amet. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Habitant morbi tristique senectus et netus et malesuada fames. Ac felis donec et odio. Amet porttitor eget dolor morbi."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Donec pretium vulputate sapien nec sagittis aliquam. Viverra justo nec ultrices dui sapien eget mi proin. Sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Faucibus a pellentesque sit amet porttitor. Eget aliquet nibh praesent tristique. Mattis nunc sed blandit libero volutpat sed cras ornare. Rhoncus aenean vel elit scelerisque mauris. Blandit libero volutpat sed cras ornare arcu."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Sodales ut etiam sit amet. Sagittis vitae et leo duis. Lectus sit amet est placerat in. Nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Eget arcu dictum varius duis at consectetur lorem donec. Orci a scelerisque purus semper eget duis at tellus at. Pharetra diam sit amet nisl suscipit adipiscing. Amet volutpat consequat mauris nunc congue nisi. Pretium fusce id velit ut tortor. Vitae turpis massa sed elementum tempus egestas. Risus nullam eget felis eget. Sed id semper risus in hendrerit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere."})]})]})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_16__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__.a,{disableGutters:!0,sx:{backgroundColor:"grey.100"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_mui_treasury_layout__WEBPACK_IMPORTED_MODULE_17__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__.a,{p:2,pb:5,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:"Footer"})}),"absolute"!==position&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"})]})})})})]})})})}},1420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Fullscreen}));__webpack_require__(1);var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_FullscreenContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(504),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var FullscreenRoot=Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.a)("div",{name:"Fullscreen",slot:"Root"})({height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"}),Fullscreen=function Fullscreen(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FullscreenContext__WEBPACK_IMPORTED_MODULE_3__.a.Provider,{value:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FullscreenRoot,_extends({},props,{className:Object(clsx__WEBPACK_IMPORTED_MODULE_1__.a)("Fullscreen",props.className)}))})}}}]);