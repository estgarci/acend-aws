(this.webpackJsonpacend=this.webpackJsonpacend||[]).push([[0],{283:function(e,t){},324:function(e,t,n){},464:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),c=n(21),a=n.n(c),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,487)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))},o=(n(267),n(268),n(269),n(323),n(324),n(77)),l=n(78),u=n(79),j=n(81),h=n(64),d=n(46),b=n(259),f=(n(325),n(45)),g=n(61),O=(n(330),n(253)),p=n(254),m=n.n(p),x=n(7),v="COUNTRIES_LOADING",N="ADD_COUNTRIES",y="COUNTRIES_FAILED",S="AIRPORTS_LOADING",k="ADD_AIRPORTS",w="AIRPORTS_FAILED",L="FLIGHTS_LOADING",I="ADD_FLIGHTS",C="FLIGHTS_FAILED",M="LOGIN_REQUEST",D="LOGIN_SUCCESS",E="GITHUB_LOGIN_REQUEST",T="GITHUB_LOGIN_SUCCESS",F="LOGIN_FAILURE",_="LOGOUT_REQUEST",U="LOGOUT_SUCCESS",R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,airports:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:null,airports:t.payload});case S:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,errMess:null,airports:[]});case w:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,countries:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:null,countries:t.payload});case v:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,errMess:null,countries:[]});case y:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,flights:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:null,flights:t.payload});case L:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,errMess:null,flights:[]});case C:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!!localStorage.getItem("token"),token:localStorage.getItem("token"),user:localStorage.getItem("creds")?JSON.parse(localStorage.getItem("creds")):null,errMess:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!1,user:t.creds});case D:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",token:t.token});case F:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case _:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case U:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!1,token:"",user:null});case E:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case T:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,isAuthenticated:!0,errMess:"",user:JSON.parse(t.profile)});default:return e}},z=n(144),B=n(25),H=n(26),J=n(469),V=n(470),Q=n(472),W=n(471),$=n(35),q=n(80),K=n(486),X=n(484),Y=n(3);function Z(e){var t=Object(s.useState)(1),n=Object(H.a)(t,2),r=n[0],c=n[1],a=Object(s.useState)(0),i=Object(H.a)(a,2),o=i[0],l=i[1],u=Object(s.useState)(0),j=Object(H.a)(u,2),h=j[0],d=j[1],b=function(t,n,s){t>s&&(n(--t),e.setTravelers(r+o+h-1))},f=function(t,n,s){t<=s&&e.travelers<s&&(n(++t),e.setTravelers(r+o+h+1))};return Object(Y.jsxs)("div",{id:"travelers-modal",className:"pb-3 pt-3 text-center",children:[Object(Y.jsx)("div",{id:"arrow","data-popper-arrow":!0}),Object(Y.jsx)("h5",{children:"Travelers"}),Object(Y.jsx)("hr",{style:{width:"90%"}}),Object(Y.jsxs)("div",{className:"pb-1 pr-3 pl-3 text-left",children:[Object(Y.jsxs)(J.a,{className:"pb-2 text-right align-text-bottom",children:[Object(Y.jsx)(V.a,{xs:4,className:"text-left my-auto pr-0 align-text-bottom pr-4",children:"Adults"}),Object(Y.jsxs)(V.a,{xs:8,className:"text-right pl-0",children:[Object(Y.jsx)("button",{className:"select-button",onClick:function(){b(r,c,1)},children:Object(Y.jsx)($.a,{icon:"minus"})}),Object(Y.jsx)("input",{type:"submit",className:"align-text-bottom",value:r}),Object(Y.jsx)("button",{className:"select-button",onClick:function(){return f(r,c,6)},children:Object(Y.jsx)($.a,{icon:"plus"})})]})]}),Object(Y.jsxs)(J.a,{className:"pb-2 pt-2 text-right",children:[Object(Y.jsx)(V.a,{xs:4,className:"text-left pr-4 my-auto",children:"Children"}),Object(Y.jsxs)(V.a,{xs:8,className:"text-right pl-0",children:[Object(Y.jsx)("button",{className:"select-button ",onClick:function(){return b(o,l,0)},children:Object(Y.jsx)($.a,{icon:"minus"})}),Object(Y.jsx)("input",{type:"submit",className:"align-text-bottom",value:o,placeholder:"0"}),Object(Y.jsx)("button",{className:"select-button",onClick:function(){return f(o,l,6)},children:Object(Y.jsx)($.a,{icon:"plus"})})]})]}),Object(Y.jsxs)(J.a,{className:"pb-3 pt-2 text-right",children:[Object(Y.jsx)(V.a,{xs:4,className:"text-left pr-0 my-auto",children:"Infants"}),Object(Y.jsxs)(V.a,{xs:8,className:"text-right pl-0",children:[Object(Y.jsx)("button",{className:"select-button",onClick:function(){return b(h,d,0)},children:Object(Y.jsx)($.a,{icon:"minus"})}),Object(Y.jsx)("input",{type:"submit",className:"align-text-bottom",value:h,placeholder:"0"}),Object(Y.jsx)("button",{className:"select-button",onClick:function(){return f(h,d,6)},children:Object(Y.jsx)($.a,{icon:"plus"})})]})]}),Object(Y.jsx)(W.a,{size:"small",color:"primary",className:"w-100",onClick:e.handleClick,children:"Done"})]})]})}var ee=function(e){var t=Object(s.useState)(1),n=Object(H.a)(t,2),r=n[0],c=n[1],a=function(){"travelers"!==e.visibleModal?e.setVisibleModal("travelers"):e.setVisibleModal(null),c(r)},i={damping:15,stiffness:300},o=Object(K.a)(0,i),l=Object(K.a)(.5,i);return Object(Y.jsx)(q.a,{interactive:!0,visible:"travelers"===e.visibleModal,animation:!0,onMount:function(){o.set(.97),l.set(1)},role:"tooltip",onHide:function(e){var t=e.unmount,n=l.onChange((function(e){e<=.5&&(n(),t())}));l.set(.5),o.set(0)},render:function(e){return Object(Y.jsx)(X.a.div,Object(x.a)(Object(x.a)({style:{scale:l,opacity:o}},e),{},{children:Object(Y.jsx)(Z,{handleClick:a,setTravelers:c,travelers:r})}))},children:Object(Y.jsxs)("button",{onClick:a,className:"btn btn-sm btn-link text-left text-sm-right dropdown-toggle travelers-button",children:[r,"\xa0",1===r?"Traveler ":"Travelers"]})})};function te(e){var t=Object(s.useState)("Economy"),n=Object(H.a)(t,2),r=n[0],c=n[1],a=function(t){c(t),e.setFlightClass(t)},i="type-button flightType-input pb-2 pt-2 mb-1 text-left focused d-flex w-100 ";return Object(Y.jsxs)("div",{id:"flightClassModal",className:"pb-3 pt-3 text-center",children:[Object(Y.jsx)("div",{id:"arrow","data-popper-arrow":""}),Object(Y.jsx)("h5",{children:"Flight Class"}),Object(Y.jsx)("hr",{style:{width:"90%"}}),Object(Y.jsx)(W.a,{active:!0,color:"white",className:"Economy"===r?i+"selected":i,onClick:function(){return a("Economy")},children:"Economy"}),Object(Y.jsx)(W.a,{color:"white",className:"Business"===r?i+"selected":i,onClick:function(){return a("Business")},children:"Business"}),Object(Y.jsx)(W.a,{active:!0,color:"white",className:"Premium"===r?i+"selected-premium":i,onClick:function(){return a("Premium")},children:"Premium"})]})}var ne=function(e){var t=Object(s.useState)("Economy"),n=Object(H.a)(t,2),r=n[0],c=n[1],a=function(){"flightClass"!==e.visibleModal?e.setVisibleModal("flightClass"):e.setVisibleModal(null),c(r)},i={damping:15,stiffness:300},o=Object(K.a)(0,i),l=Object(K.a)(.5,i);return Object(Y.jsx)(q.a,{interactive:!0,visible:"flightClass"===e.visibleModal,animation:!0,onMount:function(){o.set(.965),l.set(1)},onHide:function(e){var t=e.unmount,n=l.onChange((function(e){e<=.5&&(n(),t())}));l.set(.5),o.set(0)},render:function(e){return Object(Y.jsxs)(X.a.div,Object(x.a)(Object(x.a)({style:{scale:l,opacity:o}},e),{},{children:[Object(Y.jsx)("div",{id:"arrow","data-popper-arrow":!0}),Object(Y.jsx)(te,{handleClick:a,setFlightClass:c})]}))},children:Object(Y.jsx)("button",{onClick:a,className:"btn btn-sm text-left text-sm-right btn-link dropdown-toggle travelers-button pr-0",children:r})})},se=function(){return Object(Y.jsxs)("div",{className:"text-center",children:[Object(Y.jsx)("i",{className:"fa fa-spinner fa-pulse fa text-primary"}),Object(Y.jsx)("div",{children:"loading"})]})};function re(e){var t=e.airports,n=e.onSuggestHandler,s=e.suggestions,r=new RegExp("d","gi");return s.length?Object(Y.jsx)("div",{id:"flightSuggestionModal",className:"mr-1 ml-1 bg-white text-center",children:s.map((function(e,t){e.name=e.name.replace("Airport","").replace("International","Int.");var s=e.iata_code?e.iata_code+" - ":"",c=e.name+" - "||!1,a=e.iso_region.match(r)?e.iso_region.substr(e.iso_region.indexOf("-")+1):e.iso_country,i="".concat(s," ").concat(c," ").concat(a);return c.length>30&&(i=s+c.slice(0,30)+"."+a),Object(Y.jsx)("div",{className:"suggestion",onClick:function(){return n(e.iata_code+" - "+e.name,e)},children:i},t)}))}):t.isLoading?Object(Y.jsx)("div",{id:"flightSuggestionModal",className:"bg-white",children:Object(Y.jsx)(se,{})}):Object(Y.jsx)("div",{className:"container"})}var ce=function(e){var t=Object(s.useState)(""),n=Object(H.a)(t,2),r=n[0],c=n[1],a=Object(s.useState)(""),i=Object(H.a)(a,2),o=i[0],l=i[1],u=Object(s.useState)(!1),j=Object(H.a)(u,2),h=j[0],d=j[1],b=function(t,n){c(t),e.setFlightSearchInfo((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(B.a)({},e.direction,n))})),l([])},f={damping:15,stiffness:300},g=Object(K.a)(0,f),O=Object(K.a)(.5,f),p=function(t){var n=[];t.length>0?n=function(t){var n=new RegExp("".concat(t),"gi"),s=e.countries.countries.filter((function(e){return e.englishShortName.match(n)}));if(s.length)return e.airports.airports.filter((function(e){return e.iso_country===s[0].alpha2Code}));var r=e.airports.airports.filter((function(e){return e.municipality.match(n)||e.iata_code.match(n)||e.name.match(n)}));return!!r.length&&r}(t):d(!1),n&&n.length>3?l(n.slice(0,3)):l(n),c(t),h||d(!0)};return Object(s.useEffect)((function(){p(r)}),[e.airports.airports]),Object(Y.jsx)(q.a,{interactive:!0,visible:h,animation:!0,onMount:function(){g.set(.97),O.set(1)},placement:"bottom",role:"tooltip",onHide:function(e){var t=e.unmount,n=O.onChange((function(e){e<=.5&&(n(),t())}));O.set(.5),g.set(0)},render:function(t){return Object(Y.jsx)(X.a.div,Object(x.a)(Object(x.a)({style:{scale:O,opacity:g}},t),{},{children:Object(Y.jsx)(re,{airports:e.airports,suggestions:o,onSuggestHandler:b})}))},children:Object(Y.jsx)("input",{type:"text",id:"airport",name:"airport",className:"b-0",placeholder:"Airport, Country or city",onChange:function(e){p(e.target.value)},value:r})})},ae=n(150);function ie(e){var t=Object(s.useState)(null),n=Object(H.a)(t,2),r=n[0],c=n[1];return Object(Y.jsx)(Y.Fragment,{children:e.showReturn?Object(Y.jsx)(ae.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:e.flightSearchInfo.startDate,endDate:e.flightSearchInfo.endDate,onDatesChange:function(t){var n=t.startDate,s=t.endDate;e.setFlightSearchInfo((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(B.a)({},"startDate",n))})),e.setFlightSearchInfo((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(B.a)({},"endDate",s))}))},focusedInput:r,onFocusChange:function(e){c(e)},numberOfMonths:2,keepOpenOnDateSelect:!0}):Object(Y.jsx)(ae.SingleDatePicker,{startDateId:"startDate",date:e.flightSearchInfo.startDate,onDateChange:function(t){return e.setFlightSearchInfo((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(B.a)({},"startDate",t))}))},focused:r,onFocusChange:function(e){var t=e.focused;return c(t)},autoFocus:!0})})}var oe=function(e){var t=Object(s.useState)(null),n=Object(H.a)(t,2),r=n[0],c=n[1],a=Object(s.useState)({flightClass:"economy",roundTrip:!0,travelers:{adults:1,children:0,infants:0},origin:null,destination:null,startDate:null,endDate:null}),i=Object(H.a)(a,2),o=i[0],l=i[1];return Object(Y.jsxs)("div",{id:"flights-nav",className:"container-sm text-nowrap header-main ",children:[Object(Y.jsxs)(J.a,{id:"topRow",className:"mb-3",children:[Object(Y.jsx)(V.a,{xs:12,sm:6,className:"text-left",children:Object(Y.jsxs)(Q.a,{className:"roundtripBtnGroup",children:[Object(Y.jsx)(W.a,{size:"sm",outline:!0,color:"primary",className:"w115 text-left text-sm-center",onClick:function(){return l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(B.a)({},"roundTrip",!0))}))},active:!0===o.roundTrip,children:"Round Trip"}),Object(Y.jsx)(W.a,{size:"sm",outline:!0,color:"primary",className:"w115 text-left text-sm-center",onClick:function(){return l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(B.a)({},"roundTrip",!1))}))},active:!1===o.roundTrip,children:"One Way"})]})}),Object(Y.jsxs)(V.a,{xs:12,sm:6,className:"text-left text-sm-right",children:[Object(Y.jsx)(ee,{setFlightSearchInfo:l,flightSearchInfo:o,setVisibleModal:c,visibleModal:r}),Object(Y.jsx)(ne,{setFlightSearchInfo:l,flightSearchInfo:o,setVisibleModal:c,visibleModal:r})]})]}),Object(Y.jsxs)(J.a,{className:"middleRow mb-2",children:[Object(Y.jsx)(V.a,{lg:4,children:Object(Y.jsxs)("div",{className:"flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg",children:[Object(Y.jsx)(J.a,{className:"text-left",children:Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)($.a,{icon:"plane-departure"}),"\xa0\xa0\xa0Leaving from"]})}),Object(Y.jsx)(J.a,{children:Object(Y.jsx)(V.a,{className:"d-flex justify-content-center",children:Object(Y.jsx)(ce,{countries:e.countries,airports:e.airports,setFlightSearchInfo:l,flightSearchInfo:o,direction:"origin"})})})]})}),Object(Y.jsx)(V.a,{lg:4,children:Object(Y.jsxs)("div",{className:"flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg",children:[Object(Y.jsx)(J.a,{className:"text-left",children:Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)($.a,{icon:"plane-arrival"}),"\xa0\xa0Going to"]})}),Object(Y.jsx)(J.a,{children:Object(Y.jsx)(V.a,{className:"d-flex justify-content-center",children:Object(Y.jsx)(ce,{countries:e.countries,airports:e.airports,setFlightSearchInfo:l,flightSearchInfo:o,direction:"destination"})})})]})}),Object(Y.jsx)(V.a,{lg:4,children:Object(Y.jsxs)("div",{className:" flex-column pl-2 pr-2 d-flex justify-content-center text-center search-input search-input-lg",children:[Object(Y.jsx)(J.a,{className:"text-left",children:Object(Y.jsxs)(V.a,{className:"",children:[Object(Y.jsx)($.a,{icon:"calendar-alt"}),"\xa0\xa0Travel date",o.roundTrip?"":"s"]})}),Object(Y.jsx)(J.a,{children:Object(Y.jsx)(V.a,{children:Object(Y.jsx)(ie,{flightSearchInfo:o,setFlightSearchInfo:l,showReturn:o.roundTrip})})})]})})]}),Object(Y.jsx)(J.a,{className:"search-control-row-group",children:Object(Y.jsx)(V.a,{xs:12,className:"d-flex search-control-col justify-content-center",children:Object(Y.jsx)(W.a,{color:"primary",className:"search-control-btn-lg",size:"lg",onClick:function(t){console.log(o),o.destination&&o.origin&&o.startDate&&e.fetchFlights({origin:o.origin.ident,destination:o.destination.ident,departure:o.startDate,return:o.endDate})},children:"Search Flights"})})})]})},le=n(15),ue=n(256),je=n(151),he=n.n(je),de=n(473),be=n(474),fe=n(475),ge=n(476),Oe=n(477),pe=n(478),me=n(485),xe=n(479),ve=n(480),Ne=n(481),ye=n(482),Se=n(483),ke=n(257),we=n.n(ke),Le=n(258),Ie=n.n(Le),Ce=(n(439),"https://localhost:3443/");function Me(e){return Object(Y.jsx)(we.a,{appId:"353877233072604",size:"medium",fields:"name",scope:"public_profile",callback:function(t){t&&(console.log(t),e.facebookLoginUser(t),e.toggleModal())},textButton:"Sign in with Facebook",buttonStyle:{backgroundColor:"rgb(24, 119, 242)",borderRadius:"inherit",fontSize:"1rem",border:"0",left:"0"," opacity":"0"," position":"absolute"," top":"0",width:"100%",textTransform:"capitalize"},icon:"fa-facebook"})}function De(e){var t=function(){var t=Object(ue.a)(he.a.mark((function t(n){return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(e.githubLoginUser(n.code),console.log(n),e.toggleModal());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(Ie.a,{clientId:"2311bf273d646f269010",size:"medium",onSuccess:t,className:"github-login"})})}var Ee=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},s.toggleNav=s.toggleNav.bind(Object(le.a)(s)),s.toggleModal=s.toggleModal.bind(Object(le.a)(s)),s.handleLogin=s.handleLogin.bind(Object(le.a)(s)),s.handleLogout=s.handleLogout.bind(Object(le.a)(s)),s}return Object(l.a)(n,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),this.props.loginUser({username:this.username.value,password:this.password.value}),e.preventDefault()}},{key:"handleLogout",value:function(){this.props.logoutUser()}},{key:"render",value:function(){var e=this;return Object(Y.jsxs)(r.a.Fragment,{children:[Object(Y.jsx)(de.a,{className:"main-nav container-fluid pb-0 pt-0",light:!0,expand:"md",children:Object(Y.jsxs)("div",{className:"container p-0",children:[Object(Y.jsx)(be.a,{id:"title",href:"/",children:"Acend"}),Object(Y.jsx)(fe.a,{onClick:this.toggleNav}),Object(Y.jsx)(ge.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(Y.jsx)(Oe.a,{navbar:!0,className:"ml-auto justify-content-around",children:Object(Y.jsx)(pe.a,{className:"d-block p-2",children:this.props.auth.isAuthenticated?Object(Y.jsxs)("div",{children:[this.props.auth.user.name.split(" ")[0],Object(Y.jsx)(W.a,{outline:!0,onClick:this.handleLogout,children:Object(Y.jsx)("span",{className:"fa fa-sign-out fa-lg"})})]}):Object(Y.jsxs)(W.a,{size:"md",color:"outline-dark",onClick:this.toggleModal,children:[Object(Y.jsx)($.a,{className:"mr-2",icon:"sign-in-alt"}),"Log in"]})})})})]})}),Object(Y.jsx)(me.a,{size:"md",isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:Object(Y.jsx)(xe.a,{className:"",children:Object(Y.jsxs)(J.a,{className:"",children:[Object(Y.jsxs)(V.a,{xs:"6",className:"",children:[Object(Y.jsx)(Me,{facebookLoginUser:this.props.facebookLoginUser,toggleModal:this.toggleModal}),Object(Y.jsx)(De,{githubLoginUser:this.props.githubLoginUser,toggleModal:this.toggleModal})]}),Object(Y.jsx)(V.a,{xs:"6",className:"align-self-center",children:Object(Y.jsx)(J.a,{className:"justify-content-center",children:Object(Y.jsxs)(ve.a,{className:"",onSubmit:this.handleLogin,children:[Object(Y.jsxs)(Ne.a,{children:[Object(Y.jsx)(ye.a,{htmlFor:"username",children:"Username"}),Object(Y.jsx)(Se.a,{className:"",type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(Y.jsxs)(Ne.a,{children:[Object(Y.jsx)(ye.a,{htmlFor:"password",children:"Password"}),Object(Y.jsx)(Se.a,{className:"",type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(Y.jsx)(Ne.a,{check:!0,children:Object(Y.jsxs)(ye.a,{check:!0,children:[Object(Y.jsx)(Se.a,{className:"",type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(Y.jsx)(W.a,{className:"my-2 text-center",type:"submit",value:"submit",color:"primary",children:"Login"})]})})})]})})})]})}}]),n}(s.Component);function Te(e){var t=e.flight,n=function(e){var t=e.getHours(),n=t>=12?"pm":"am";return(t=t%12||12)+":"+(Math.floor(e.getMinutes()/10)+"0")+" "+n},s=n(new Date(t.scheduled_off)),r=n(new Date(t.scheduled_in));return Object(Y.jsx)("div",{className:"container p-3 m-2 bg-white justify-content-center ",children:Object(Y.jsxs)(J.a,{xs:12,children:[Object(Y.jsxs)(V.a,{xs:12,sm:4,className:"align-self-center",children:[Object(Y.jsxs)(J.a,{className:"justify-content-center h5",children:[t.origin.code.substring(1),"\xa0",Object(Y.jsx)("svg",{class:"DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1",focusable:"false",viewBox:"0 0 1000 1000",children:Object(Y.jsx)("path",{d:"M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"})}),"\xa0",t.destination.code.substring(1)]}),Object(Y.jsx)(J.a,{xs:12,className:"justify-content-center",children:Object(Y.jsx)("small",{children:Object(Y.jsx)(W.a,{size:"sm",color:"link",children:"Details"})})})]}),Object(Y.jsxs)(V.a,{sm:4,className:"align-self-center",children:[Object(Y.jsxs)(J.a,{className:"justify-content-center h4",children:[s,"\xa0\xa0",Object(Y.jsx)("svg",{class:"DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1",focusable:"false",viewBox:"0 0 1000 1000",children:Object(Y.jsx)("path",{d:"M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"})}),"\xa0\xa0",r]}),Object(Y.jsxs)(J.a,{xs:12,className:"justify-content-center",children:["Operatred by ",t.operator," "]})]}),Object(Y.jsxs)(V.a,{sm:4,className:"align-self-center text-center",children:[Object(Y.jsx)(J.a,{className:"justify-content-center h4",children:"$777"}),Object(Y.jsx)(W.a,{className:"bg-secondary",children:"Book flight"})]})]})})}var Fe=function(e){var t=e.flights.flights.map((function(e){return Object(Y.jsx)(Te,{flight:e})}));return e.flights.isLoading?Object(Y.jsx)("div",{className:"container",children:Object(Y.jsx)("div",{className:"row ",children:Object(Y.jsx)(se,{})})}):e.flights.errMess?Object(Y.jsx)("div",{className:"container",children:Object(Y.jsx)("div",{className:"row",children:Object(Y.jsx)("div",{className:"col header-main text-center",children:Object(Y.jsx)("h4",{className:"text-primary",children:"No flights found "})})})}):t.length?Object(Y.jsx)("div",{id:"flights-display",className:"container ",children:t}):Object(Y.jsx)(Y.Fragment,{})},_e=function(){return{type:v}},Ue=function(e){return{type:y,payload:e}},Re=function(e){return{type:N,payload:e}},Ae=function(){return{type:S}},Ge=function(e){return{type:w,payload:e}},Pe=function(e){return{type:k,payload:e}},ze=function(){return{type:L}},Be=function(e){return{type:C,payload:e}},He=function(e){return{type:I,payload:e}},Je=function(e){return{type:M,creds:e}},Ve=function(e){return{type:D,token:e.token}},Qe=function(e){return{type:F,message:e}},We=function(){return function(e){e({type:_}),localStorage.removeItem("token"),localStorage.removeItem("creds"),e({type:U})}},$e=function(e){return{type:E,code:e}},qe=function(e){return{type:T,profile:e}};var Ke=function(e){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(oe,{fetchFlights:e.fetchFlights,flights:e.flights.flights,airports:e.airports,countries:e.countries}),Object(Y.jsx)(Fe,{flights:e.flights})]})},Xe={fetchAirports:function(){return function(e){return e(Ae()),fetch(Ce+"api/airports").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return e.iata_code&&e.municipality&&e.name}))})).then((function(t){return e(Pe(t))})).catch((function(t){return e(Ge(t.message))}))}},fetchCountries:function(){return function(e){return e(_e()),fetch(Ce+"api/countries").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Re(t))})).catch((function(t){return e(Ue(t.message))}))}},fetchFlights:function(e){return function(e){return function(t){return t(ze()),fetch(Ce+"api/flights?origin=".concat(e.origin,"&destination=").concat(e.destination)).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t(He(e))})).catch((function(e){return t(Be(e.message))}))}}(e)},loginUser:function(e){return function(e){return function(t){return t(Je(e)),fetch(Ce+"users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(n){if(!n.success){var s=new Error("Error "+n.status);throw s.response=n,s}localStorage.setItem("token",n.token),localStorage.setItem("creds",JSON.stringify(e)),t(Ve(n))})).catch((function(e){return t(Qe(e.message))}))}}(e)},logoutUser:function(){return We()},facebookLoginUser:function(e){return t=e,function(e){return e(Je(t)),fetch(Ce+"users/facebook/token",{headers:{Authorization:"Bearer "+t.accessToken}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(n){if(!n.success){var s=new Error("Error "+n.status);throw s.response=n,s}localStorage.setItem("token",n.token),localStorage.setItem("creds",JSON.stringify(t)),e(Ve(n))})).catch((function(t){return e(Qe(t.message))}))};var t},githubLoginUser:function(e){return function(e){return function(t){return t($e(e)),fetch(Ce+"users/github/token?code=".concat(e)).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){if(!e.success){var n=new Error("Error "+e.status);throw n.response=e,n}console.log(e.profile),t(qe(e.profile)),localStorage.setItem("token",e.token),localStorage.setItem("creds",e.profile)})).catch((function(e){return t(Qe(e.message))}))}}(e)}},Ye=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchAirports(),this.props.fetchCountries()}},{key:"render",value:function(){return Object(Y.jsxs)("header",{className:"App-header",children:[Object(Y.jsx)(Ee,{githubLoginUser:this.props.githubLoginUser,facebookLoginUser:this.props.facebookLoginUser,auth:this.props.auth,loginUser:this.props.loginUser,logoutUser:this.props.logoutUser}),Object(Y.jsx)(Ke,{fetchFlights:this.props.fetchFlights,flights:this.props.flights,airports:this.props.airports,countries:this.props.countries})]})}}]),n}(s.Component),Ze=Object(f.connect)((function(e){return{airports:e.airports,countries:e.countries,flights:e.flights,auth:e.auth}}),Xe)(Ye);h.b.add(d.f,d.e,d.a,d.b,d.h,d.g,d.d,b.a,d.c);var et=Object(g.createStore)(Object(g.combineReducers)({auth:P,countries:A,airports:R,flights:G}),Object(g.applyMiddleware)(O.a,m.a)),tt=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(Y.jsx)(f.Provider,{store:et,children:Object(Y.jsx)(z.a,{children:Object(Y.jsx)(Ze,{})})})}}]),n}(s.Component),nt=tt;a.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(nt,{})}),document.getElementById("root")),i()}},[[464,1,2]]]);
//# sourceMappingURL=main.858a1da3.chunk.js.map