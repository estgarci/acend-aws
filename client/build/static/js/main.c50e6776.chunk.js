(this.webpackJsonpacend=this.webpackJsonpacend||[]).push([[0],{348:function(e,t){},387:function(e,t,n){},605:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(32),r=n.n(c),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,632)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},o=(n(332),n(333),n(334),n(386),n(387),n(21)),l=n(22),u=n(39),j=n(40),d=n(86),b=n(45),h=n(85),f=(n(388),n(19)),O=n(81),m=(n(393),n(312)),x=n(313),p=n.n(x),g=n(5),v="COUNTRIES_LOADING",N="ADD_COUNTRIES",y="COUNTRIES_FAILED",w="AIRPORTS_LOADING",S="ADD_AIRPORTS",C="AIRPORTS_FAILED",E="FLIGHTS_LOADING",I="ADD_FLIGHTS",k="FLIGHTS_FAILED",D="SINGUP_REQUEST",L="SINGUP_SUCCESS",T="SINGUP_FAILED",_="LOGIN_REQUEST",M="LOGIN_SUCCESS",F="LOGIN_FAILURE",P="LOGOUT_REQUEST",A="LOGOUT_SUCCESS",R="FAVORITES_LOADING",G="FAVORITES_FAILED",U="ADD_FAVORITES",z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,airports:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:null,airports:t.payload});case w:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,errMess:null,airports:[]});case C:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,countries:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:null,countries:t.payload});case v:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,errMess:null,countries:[]});case y:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,errMess:null,flights:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:null,flights:t.payload});case E:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,errMess:null,flights:[]});case k:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,favorites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:null,favorites:t.payload.flights});case R:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,errMess:null,favorites:[]});case G:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,errMess:t.payload,favorites:[]});default:return e}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,isAuthenticated:!1,errMess:null,user:{favorites:[]},favorites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case M:return Object(g.a)(Object(g.a)({},e),{},{user:t.user,isLoading:!1,isAuthenticated:!0,errMess:""});case F:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});case P:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,isAuthenticated:!0});case A:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,isAuthenticated:!1,user:{favorites:[]}});case D:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!0,isAuthenticated:!1});case L:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1});case T:return Object(g.a)(Object(g.a)({},e),{},{isLoading:!1,isAuthenticated:!1,errMess:t.message});default:return e}},X=n(53),Y=n(25),$=n(11),Q=n(314),W=n(610),q=n(611),K=n(615),Z=n(34),ee=n(101),te=n(628),ne=n(626),ae=n(2);function se(e){var t=Object(a.useState)(1),n=Object($.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(0),i=Object($.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(0),j=Object($.a)(u,2),d=j[0],b=j[1],h=function(t,n,a){t>a&&(n(--t),e.setTravelers(s+o+d-1))},f=function(t,n,a){t<=a&&e.travelers<a&&(n(++t),e.setTravelers(s+o+d+1))};return Object(ae.jsxs)("div",{id:"travelers-modal",className:"text-center",children:[Object(ae.jsx)("h5",{className:"",children:"Travelers"}),Object(ae.jsx)("hr",{style:{width:"90%"}}),Object(ae.jsxs)("div",{className:"text-left",children:[Object(ae.jsxs)(W.a,{className:"text-right align-text-bottom",children:[Object(ae.jsx)(q.a,{xs:4,className:"text-left my-auto pr-0 align-text-bottom pr-4",children:"Adults"}),Object(ae.jsxs)(q.a,{xs:8,className:"d-flex justify-content-end pl-0",children:[Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){h(s,c,1)},children:Object(ae.jsx)(Z.a,{icon:"minus"})}),Object(ae.jsx)("div",{className:"btn btn-sm",children:s}),Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){return f(s,c,6)},children:Object(ae.jsx)(Z.a,{icon:"plus"})})]})]}),Object(ae.jsxs)(W.a,{className:"text-right",children:[Object(ae.jsx)(q.a,{xs:4,className:"text-left my-auto",children:"Children"}),Object(ae.jsxs)(q.a,{xs:8,className:"d-flex justify-content-end",children:[Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){return h(o,l,0)},children:Object(ae.jsx)(Z.a,{icon:"minus"})}),Object(ae.jsx)("div",{className:"btn btn-sm",children:o}),Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){return f(o,l,6)},children:Object(ae.jsx)(Z.a,{icon:"plus"})})]})]}),Object(ae.jsxs)(W.a,{className:"text-right",children:[Object(ae.jsx)(q.a,{xs:4,className:"text-left my-auto",children:"Infants"}),Object(ae.jsxs)(q.a,{xs:8,className:"d-flex justify-content-end pl-0",children:[Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){return h(d,b,0)},children:Object(ae.jsx)(Z.a,{icon:"minus"})}),Object(ae.jsx)("div",{className:"btn btn-sm",children:d}),Object(ae.jsx)(Q.a,{className:"select-button",onClick:function(){return f(d,b,6)},children:Object(ae.jsx)(Z.a,{icon:"plus"})})]})]}),Object(ae.jsx)(W.a,{className:"text-center pb-0",children:Object(ae.jsx)(q.a,{children:Object(ae.jsx)(Q.a,{size:"small",color:"primary",className:"w-100",onClick:e.handleClick,children:"Done"})})})]})]})}var ce=function(e){var t=Object(a.useState)(1),n=Object($.a)(t,2),s=n[0],c=n[1],r=function(){"travelers"!==e.visibleModal?e.setVisibleModal("travelers"):e.setVisibleModal(null),c(s)},i={damping:15,stiffness:300},o=Object(te.a)(0,i),l=Object(te.a)(.5,i);return Object(ae.jsx)(ee.a,{interactive:!0,visible:"travelers"===e.visibleModal,animation:!0,onMount:function(){o.set(.97),l.set(1)},role:"tooltip",onHide:function(e){var t=e.unmount,n=l.onChange((function(e){e<=.5&&(n(),t())}));l.set(.5),o.set(0)},render:function(e){return Object(ae.jsx)(ne.a.div,Object(g.a)(Object(g.a)({style:{scale:l,opacity:o}},e),{},{children:Object(ae.jsx)(se,{handleClick:r,setTravelers:c,travelers:s})}))},children:Object(ae.jsxs)("button",{onClick:r,className:"btn btn-sm btn-link text-left text-sm-right dropdown-toggle travelers-button",children:[s,"\xa0",1===s?"Traveler ":"Travelers"]})})};function re(e){var t=Object(a.useState)("Economy"),n=Object($.a)(t,2),s=n[0],c=n[1],r=function(t){c(t),e.setFlightClass(t)},i="type-button flightType-input pb-2 pt-2 mb-1 focused d-flex w-100 ";return Object(ae.jsxs)("div",{id:"flightClassModal",className:"text-center",children:[Object(ae.jsx)(W.a,{children:Object(ae.jsxs)(q.a,{children:[Object(ae.jsx)("h5",{children:"Flight Class"}),Object(ae.jsx)("hr",{style:{width:"90%"}}),Object(ae.jsx)(Q.a,{active:!0,color:"white",className:"Economy"===s?i+"selected":i,onClick:function(){return r("Economy")},children:"Economy"}),Object(ae.jsx)(Q.a,{color:"white",className:"Business"===s?i+"selected":i,onClick:function(){return r("Business")},children:"Business"}),Object(ae.jsx)(Q.a,{active:!0,color:"white",className:"Premium"===s?i+"selected-premium":i,onClick:function(){return r("Premium")},children:"Premium"})]})}),Object(ae.jsx)(W.a,{className:"mt-2",children:Object(ae.jsx)(q.a,{children:Object(ae.jsx)(Q.a,{size:"small",color:"primary",className:"w-100",onClick:e.handleClick,children:"Done"})})})]})}var ie=function(e){var t=Object(a.useState)("Economy"),n=Object($.a)(t,2),s=n[0],c=n[1],r=function(){"flightClass"!==e.visibleModal?e.setVisibleModal("flightClass"):e.setVisibleModal(null),c(s)},i={damping:15,stiffness:300},o=Object(te.a)(0,i),l=Object(te.a)(.5,i);return Object(ae.jsx)(ee.a,{interactive:!0,visible:"flightClass"===e.visibleModal&&!0,animation:!0,onMount:function(){o.set(.965),l.set(1)},onHide:function(e){var t=e.unmount,n=l.onChange((function(e){e<=.5&&(n(),t())}));l.set(.5),o.set(0)},arrow:!0,hideOnClick:!0,trigger:"click",render:function(e){return Object(ae.jsxs)(ne.a.div,Object(g.a)(Object(g.a)({style:{scale:l,opacity:o}},e),{},{children:[Object(ae.jsx)("div",{id:"arrow","data-popper-arrow":!0}),Object(ae.jsx)(re,{handleClick:r,setFlightClass:c})]}))},children:Object(ae.jsx)("button",{onClick:r,className:"btn btn-sm text-left text-sm-right btn-link dropdown-toggle travelers-button pr-0",children:s})})},oe=function(){return Object(ae.jsx)("div",{className:"m-0 p-0 text-center h3",children:Object(ae.jsx)("i",{className:"fa fa-spinner fa-pulse fa text-primary"})})};function le(e){var t=e.airports,n=e.onSuggestHandler,a=e.suggestions,s=new RegExp("d","gi");if(a.length)return Object(ae.jsx)("div",{id:"flightSuggestionModal",className:"mr-1 ml-1 bg-white text-center",children:a.map((function(e,t){e.name=e.name.replace("Airport","").replace("International","Int.");var a=e.iata_code?e.iata_code+" - ":"",c=e.name+" - "||!1,r=e.iso_region.match(s)?e.iso_region.substr(e.iso_region.indexOf("-")+1):e.iso_country,i="".concat(a," ").concat(c," ").concat(r);return c.length>30&&(i=a+c.slice(0,30)+"."+r),Object(ae.jsx)("div",{className:"suggestion",onClick:function(){return n(e.iata_code+" - "+e.name,e)},children:i},t)}))});var c=document.getElementById("airport"),r=document.activeElement===c;return t.isLoading&&r?Object(ae.jsx)("div",{id:"flightSuggestionModal",className:"bg-white",children:Object(ae.jsx)(oe,{})}):Object(ae.jsx)("div",{className:"container"})}var ue=function(e){var t=Object(a.useState)(""),n=Object($.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(""),i=Object($.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(!1),j=Object($.a)(u,2),d=j[0],b=j[1],h=function(t,n){c(t),e.setFlightSearchInfo((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(Y.a)({},e.direction,n))})),l([])},f={damping:15,stiffness:300},O=Object(te.a)(0,f),m=Object(te.a)(.5,f),x=function(t){var n=[];t.length>0?n=function(t){var n=new RegExp("".concat(t),"gi"),a=e.countries.countries.filter((function(e){return e.englishShortName.match(n)}));if(a.length)return e.airports.airports.filter((function(e){return e.iso_country===a[0].alpha2Code}));var s=e.airports.airports.filter((function(e){return e.municipality.match(n)||e.iata_code.match(n)||e.name.match(n)}));return!!s.length&&s}(t):b(!1),n&&n.length>3?l(n.slice(0,3)):l(n),c(t),d||b(!0)};return Object(a.useEffect)((function(){x(s)}),[e.airports.airports]),Object(ae.jsx)(ee.a,{interactive:!0,visible:d,animation:!0,onMount:function(){O.set(.97),m.set(1)},placement:"bottom",role:"tooltip",onHide:function(e){var t=e.unmount,n=m.onChange((function(e){e<=.5&&(n(),t())}));m.set(.5),O.set(0)},render:function(t){return Object(ae.jsx)(ne.a.div,Object(g.a)(Object(g.a)({style:{scale:m,opacity:O}},t),{},{children:Object(ae.jsx)(le,{airports:e.airports,suggestions:o,onSuggestHandler:h})}))},children:Object(ae.jsx)("input",{type:"text",id:"airport",name:"airport",className:"b-0",placeholder:"Airport, Country or city",onChange:function(e){x(e.target.value)},value:s})})},je=n(191),de="http://3.133.254.105/",be=function(){return{type:v}},he=function(e){return{type:y,payload:e}},fe=function(e){return{type:N,payload:e}},Oe=function(){return{type:w}},me=function(e){return{type:C,payload:e}},xe=function(e){return{type:S,payload:e}},pe=function(){return{type:E}},ge=function(e){return{type:k,payload:e}},ve=function(e){return{type:I,payload:e}},Ne=function(e){return{type:M,user:e}},ye=function(e){return{type:F,message:e}},we=function(e){return function(t){return t(function(e){return{type:_,creds:e}}()),fetch(de+"api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){if(console.log("response"),!e.success){var n=new Error("Error "+e.status);throw n.response=e,n}localStorage.setItem("user",JSON.stringify(e.user)),t(Ie()),t(Ne(e.user))})).catch((function(e){return t(ye(e.message))}))}},Se=function(){return function(e){return e({type:P}),fetch(de+"api/users/logout",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(t){if(!t){var n=new Error("Error ".concat(t.status,": ").concat(t.statusText));throw n.response=t,n}localStorage.clear(),e((window.location.replace("/"),{type:A}))}),(function(e){throw e}))}},Ce=function(e){return{type:G,payload:e}},Ee=function(e){return{type:U,payload:e}},Ie=function(){return function(e){return e({type:R}),fetch(de+"api/favorites",{credentials:"include"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(t){e(Ee(t))})).catch((function(t){return e(Ce(t.message))}))}},ke=Object(a.createContext)(),De=function(e){var t=e.children,n=Object(f.useSelector)((function(e){return e.auth})),s=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):(window.localStorage.setItem(e,JSON.stringify(t)),t)}catch(a){return t}})),s=Object($.a)(n,2),c=s[0],r=s[1];return[c,function(t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(n){}r(t)}]}("user",null),c=Object($.a)(s,2),r=c[0],i=(c[1],Object(a.useMemo)((function(){return{user:r,auth:n}}),[r,n]));return Object(ae.jsx)(ke.Provider,{value:i,children:t})},Le=function(){return Object(a.useContext)(ke)},Te=n(627),_e=n(612),Me=n(613),Fe=n(614),Pe=function(e){var t=e.show,n=e.handleClose,a=function(){return n()};return Object(ae.jsx)("div",{children:Object(ae.jsxs)(Te.a,{isOpen:t,toggle:a,className:"bg-white",children:[Object(ae.jsx)(_e.a,{toggle:a,children:"Please sign in"}),Object(ae.jsx)(Me.a,{className:"ml-3 ",children:"Please create an account and sing in to favorite a flight!"}),Object(ae.jsx)(Fe.a,{children:Object(ae.jsx)(Q.a,{color:"primary",onClick:a,children:"Okay"})})]})})};var Ae=function(e){var t=e.flight,n=e.isFavorite,s=Object(f.useSelector)((function(e){return e.favorites.favorites})),c=Object(a.useState)(!!n||s.some((function(e){return t.fa_flight_id==e.fa_flight_id}))),r=Object($.a)(c,2),i=r[0],o=r[1],l=Object(f.useDispatch)(),u=Object(a.useState)(!1),j=Object($.a)(u,2),d=j[0],b=j[1],h=Le().auth,O=function(e){var t=e.getHours(),n=t>=12?"pm":"am";return(t=t%12||12)+":"+(Math.floor(e.getMinutes()/10)+"0")+" "+n},m=O(new Date(t.scheduled_off)),x=O(new Date(t.scheduled_in));return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("div",{className:"container p-3 mb-2 bg-white justify-content-center ",children:Object(ae.jsxs)(W.a,{xs:12,children:[Object(ae.jsxs)(q.a,{xs:12,sm:4,className:"align-self-center",children:[Object(ae.jsxs)(W.a,{className:"justify-content-center h5",children:[t.origin.code.substring(1),"\xa0",Object(ae.jsx)("svg",{className:"DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1",focusable:"false",viewBox:"0 0 1000 1000",children:Object(ae.jsx)("path",{d:"M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"})}),"\xa0",t.destination.code.substring(1)]}),Object(ae.jsx)(W.a,{xs:12,className:"justify-content-center",children:Object(ae.jsx)("small",{children:Object(ae.jsx)(Q.a,{size:"sm",color:"link",children:"Details"})})})]}),Object(ae.jsxs)(q.a,{sm:4,className:"align-self-center",children:[Object(ae.jsxs)(W.a,{className:"justify-content-center h4",children:[m,"\xa0\xa0",Object(ae.jsx)("svg",{className:"DateRangePickerInput_arrow_svg DateRangePickerInput_arrow_svg_1",focusable:"false",viewBox:"0 0 1000 1000",children:Object(ae.jsx)("path",{d:"M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"})}),"\xa0\xa0",x]}),Object(ae.jsxs)(W.a,{xs:12,className:"justify-content-center",children:["Operatred by ",t.operator," "]})]}),Object(ae.jsx)(q.a,{sm:4,className:"align-self-center text-center",children:Object(ae.jsx)(Q.a,{outline:!0,color:"primary",onClick:function(){h.user.username?i?(l(function(e){return function(t){return fetch(de+"api/favorites/"+e,{method:"DELETE",credentials:"include"}).then((function(e){if(console.log(e),e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){t(Ee(e))})).catch((function(e){return t(Ce(e.message))}))}}(t.fa_flight_id)),o(!1)):(l(function(e){return function(t){return fetch(de+"api/favorites",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){if(e.ok)return e;localStorage.clear();var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){t(Ee(e))})).catch((function(e){return t(Ce(e.message))}))}}(t)),o(!0)):b(!0)},children:i?Object(ae.jsx)("i",{className:"fa fa-heart"}):Object(ae.jsx)("i",{className:"fa fa-heart-o"})})})]})}),Object(ae.jsx)(Pe,{show:d,handleClose:function(){return b(!1)}})]})};var Re=function(){var e=Object(f.useSelector)((function(e){return e.flights})),t=e.flights.map((function(e){return Object(ae.jsx)(Ae,{flight:e},e.fa_flight_id)}));return e.isLoading?Object(ae.jsx)("div",{className:"container main-box mt-4",children:Object(ae.jsx)(oe,{className:""})}):e.errMess?Object(ae.jsx)("div",{className:"container main-box text-center mt-4",children:"No flights found, try a popular airport. For example: PHX and LAX"}):e.flights.length?Object(ae.jsx)("div",{className:"container main-box mt-4",children:t}):Object(ae.jsx)(ae.Fragment,{})},Ge=n(73);function Ue(e){var t=Object(a.useState)(null),n=Object($.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(window.innerWidth<577),i=Object($.a)(r,2),o=i[0],l=i[1],u=function(){l(window.innerWidth<577)};return Object(a.useEffect)((function(){return window.addEventListener("resize",u),function(){return window.removeEventListener("resize",u)}})),Object(ae.jsx)(ae.Fragment,{children:e.showReturn?Object(ae.jsx)(je.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:e.flightSearchInfo.startDate,endDate:e.flightSearchInfo.endDate,onDatesChange:function(t){var n=t.startDate,a=t.endDate;e.setFlightSearchInfo((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(Y.a)({},"startDate",n))})),e.setFlightSearchInfo((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(Y.a)({},"endDate",a))}))},focusedInput:s,block:!0,onFocusChange:function(e){c(e)},numberOfMonths:o?1:2,keepOpenOnDateSelect:!0,withPortal:!0,readOnly:!0,hideKeyboardShortcutsPanel:!0,renderCalendarInfo:function(){return Object(ae.jsx)(Q.a,{className:"ml-4 mt-3",outline:!0,children:"X"})},calendarInfoPosition:"top"}):Object(ae.jsx)(je.SingleDatePicker,{startDateId:"startDate",date:e.flightSearchInfo.startDate,onDateChange:function(t){return e.setFlightSearchInfo((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(Y.a)({},"startDate",t))}))},focused:s,onFocusChange:function(e){var t=e.focused;return c(t)},autoFocus:!0,withPortal:!0,numberOfMonths:o?1:2,readOnly:!0,hideKeyboardShortcutsPanel:!0,renderCalendarInfo:function(){return Object(ae.jsx)(Q.a,{className:"ml-4 mt-3",outline:!0,children:"X"})},calendarInfoPosition:"top"})})}var ze=function(e){var t=Object(a.useState)(null),n=Object($.a)(t,2),s=n[0],c=n[1],r=Object(f.useDispatch)(),i=Object(a.useState)({flightClass:"economy",roundTrip:!0,travelers:{adults:1,children:0,infants:0},origin:null,destination:null,startDate:null,endDate:null}),o=Object($.a)(i,2),l=o[0],u=o[1];return Object(ae.jsxs)(Ge.motion.div,{initial:{opacity:.2},animate:{opacity:1},exit:{opacity:.2},children:[Object(ae.jsxs)("div",{id:"flights-nav",className:"container-sm main-box ",children:[Object(ae.jsxs)(W.a,{id:"topRow",className:"mb-3",children:[Object(ae.jsx)(q.a,{xs:12,sm:6,className:"text-left text-nowrap",children:Object(ae.jsxs)(K.a,{className:"roundtripBtnGroup",children:[Object(ae.jsx)(Q.a,{size:"sm",outline:!0,color:"primary",className:"w115 text-left text-sm-center",onClick:function(){return u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(Y.a)({},"roundTrip",!0))}))},active:!0===l.roundTrip,children:"Round Trip"}),Object(ae.jsx)(Q.a,{size:"sm",outline:!0,color:"primary",className:"w115 text-left text-sm-center",onClick:function(){return u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(Y.a)({},"roundTrip",!1))}))},active:!1===l.roundTrip,children:"One Way"})]})}),Object(ae.jsxs)(q.a,{xs:12,sm:6,className:"text-left text-sm-right text-nowrap",children:[Object(ae.jsx)(ce,{setFlightSearchInfo:u,flightSearchInfo:l,setVisibleModal:c,visibleModal:s}),Object(ae.jsx)(ie,{setFlightSearchInfo:u,flightSearchInfo:l,setVisibleModal:c,visibleModal:s})]})]}),Object(ae.jsxs)(W.a,{className:"middleRow mb-2",children:[Object(ae.jsx)(q.a,{lg:4,children:Object(ae.jsxs)("div",{className:"flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg",children:[Object(ae.jsx)(W.a,{className:"text-left",children:Object(ae.jsxs)(q.a,{children:[Object(ae.jsx)(Z.a,{icon:"plane-departure"}),"\xa0\xa0\xa0Leaving from"]})}),Object(ae.jsx)(W.a,{children:Object(ae.jsx)(q.a,{className:"d-flex justify-content-center",children:Object(ae.jsx)(ue,{countries:e.countries,airports:e.airports,setFlightSearchInfo:u,flightSearchInfo:l,direction:"origin"})})})]})}),Object(ae.jsx)(q.a,{lg:4,children:Object(ae.jsxs)("div",{className:"flex-column form-group mb-2 pl-2 pr-2 d-flex justify-content-center search-input search-input-lg",children:[Object(ae.jsx)(W.a,{className:"text-left",children:Object(ae.jsxs)(q.a,{children:[Object(ae.jsx)(Z.a,{icon:"plane-arrival"}),"\xa0\xa0Going to"]})}),Object(ae.jsx)(W.a,{children:Object(ae.jsx)(q.a,{className:"d-flex justify-content-center",children:Object(ae.jsx)(ue,{countries:e.countries,airports:e.airports,setFlightSearchInfo:u,flightSearchInfo:l,direction:"destination"})})})]})}),Object(ae.jsx)(q.a,{lg:4,children:Object(ae.jsxs)("div",{className:" flex-column pl-2 pr-2 d-flex justify-content-center text-center search-input search-input-lg",children:[Object(ae.jsx)(W.a,{className:"text-left",children:Object(ae.jsxs)(q.a,{className:"",children:[Object(ae.jsx)(Z.a,{icon:"calendar-alt"}),"\xa0\xa0Travel date",l.roundTrip?"":"s"]})}),Object(ae.jsx)(W.a,{className:"d-flex ml-auto mr-auto",children:Object(ae.jsx)(Ue,{flightSearchInfo:l,setFlightSearchInfo:u,showReturn:l.roundTrip})})]})})]}),Object(ae.jsx)(W.a,{className:"search-control-row-group",children:Object(ae.jsx)(q.a,{xs:12,className:"d-flex search-control-col justify-content-center",children:Object(ae.jsx)(Q.a,{color:"primary",className:"search-control-btn-lg",size:"lg",onClick:function(e){var t;l.destination&&l.origin&&l.startDate&&r((t={origin:l.origin.ident,destination:l.destination.ident,departure:l.startDate,return:l.endDate},function(e){return e(pe()),fetch(de+"api/flights?origin=".concat(t.origin,"&destination=").concat(t.destination)).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ve(t))})).catch((function(t){return e(ge(t.message))}))}))},children:"Search Flights"})})})]}),Object(ae.jsx)(Re,{})]})},He=n(14);var Ve=function(e){var t=e.children;return Le().auth.user.username?t:Object(ae.jsx)(He.a,{to:"/"})},Be=n(616),Je=n(617),Xe=n(618),Ye=n(619),$e=n(620),Qe=n(629),We=n(630),qe=n(631),Ke=n(621),Ze=n(622),et=n(623),tt=n(624),nt=n(625),at=n(316),st=n.n(at);var ct=function(){Object(He.g)();var e=Object(f.useDispatch)(),t=Le().auth,n=Object(a.useState)(!1),s=Object($.a)(n,2),c=s[0],r=s[1],i=Object(a.useState)(""),o=Object($.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(""),d=Object($.a)(j,2),b=d[0],h=d[1],O=function(){r(!c)};return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Be.a,{id:"main-nav",className:"main-nav container-fluid p-0 ",light:!0,expand:"md",children:Object(ae.jsxs)(Je.a,{className:"px-3 p-sm-0",children:[Object(ae.jsx)(X.b,{id:"main-logo",className:"nav-item logo",to:"/",children:"Acend"}),Object(ae.jsx)(Xe.a,{navbar:!0,className:"",children:t.user.username?Object(ae.jsxs)(Qe.a,{className:"",children:[Object(ae.jsx)(We.a,{className:"",nav:!0,caret:!0,children:t.user.firstname.charAt(0).toUpperCase()+t.user.firstname.substr(1)}),Object(ae.jsxs)(qe.a,{className:"text-center",right:!0,children:[Object(ae.jsx)(X.b,{to:"/mytrips",children:Object(ae.jsx)(Ke.a,{id:"",className:"mytrips-button",children:"My trips"})}),Object(ae.jsx)(Ke.a,{id:"singout-button",className:"",onClick:function(t){return function(t){t.preventDefault(),e(Se())}(t)},children:"Sing out"})]})]}):Object(ae.jsx)(Ye.a,{className:"",children:Object(ae.jsxs)($e.a,{href:"#",onClick:O,children:[Object(ae.jsx)(Z.a,{className:"mr-2",icon:"sign-in-alt"}),"Sign in"]})})})]})}),Object(ae.jsx)(Te.a,{size:"sm",isOpen:c,toggle:O,children:Object(ae.jsx)(Me.a,{className:"main-nav-modal",children:Object(ae.jsxs)(q.a,{xs:"12",className:"",children:[Object(ae.jsxs)("h1",{className:"",children:["Sign in with ",Object(ae.jsx)("span",{className:"logo",children:"Acend"})]}),Object(ae.jsx)(W.a,{className:"justify-content-center",children:Object(ae.jsxs)(Ze.a,{className:"text-left",onSubmit:function(t){return function(t){t.preventDefault(),O(),e(we({username:l,password:b}))}(t)},children:[Object(ae.jsxs)(et.a,{children:[Object(ae.jsx)(tt.a,{htmlFor:"username",children:"Email"}),Object(ae.jsx)(nt.a,{className:"form-input",type:"email",id:"username",name:"username",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(ae.jsxs)(et.a,{className:"",children:[Object(ae.jsx)(tt.a,{htmlFor:"password",className:"d-inline-block",children:"Password"}),Object(ae.jsx)("span",{className:"d-inline-block float-right",children:Object(ae.jsx)("a",{href:"#",children:Object(ae.jsx)("small",{children:"Forgot password?"})})}),Object(ae.jsx)(nt.a,{className:"form-input d-block",type:"password",id:"password",name:"password",value:b,onChange:function(e){return h(e.target.value)}})]}),Object(ae.jsxs)(et.a,{className:"d-flex justify-content-between",children:[Object(ae.jsx)(Q.a,{type:"submit",className:"",value:"submit",color:"primary",children:"Sign in"}),Object(ae.jsx)(X.b,{to:"/signup",onClick:O,children:"Sign up"})]})]})}),Object(ae.jsx)("h1",{children:"Or"}),Object(ae.jsx)(W.a,{className:"justify-content-center",children:Object(ae.jsx)(st.a,{type:"light",onClick:function(){window.open(de+"api/users/google","_self")}})})]})})})]})},rt=n(318),it=n(194),ot=n.n(it),lt=n(104),ut=n(61),jt=n(324),dt=["label","type"],bt=function(e){var t=e.label,n=e.type,a=Object(jt.a)(e,dt),s=Object(lt.d)(a),c=Object($.a)(s,2),r=c[0],i=c[1];return Object(ae.jsxs)("div",{className:"form-group",children:[Object(ae.jsx)(tt.a,{for:r.name,children:t}),Object(ae.jsx)(nt.a,Object(g.a)(Object(g.a)(Object(g.a)({},r),a),{},{autoComplete:"new-password",type:n,invalid:i.touched&&i.error&&i.value,valid:i.touched&&!i.error&&i.value})),i.value?Object(ae.jsx)(lt.a,{component:"div",className:"error",name:r.name}):Object(ae.jsx)(ae.Fragment,{})]})},ht=function(){return Object(ae.jsxs)(Ge.motion.div,{className:"container-xlg text-center",initial:{opacity:.2},animate:{opacity:1},exit:{opacity:.2},children:[Object(ae.jsx)(Z.a,{className:"h1",size:"lg",icon:"thumbs-up",color:"green"}),Object(ae.jsx)("div",{className:"h1",children:"All singed up!"}),Object(ae.jsxs)("div",{children:["You may now sing in to ",Object(ae.jsx)("span",{className:"logo",children:"Acend"})," and save your trips"]})]})},ft=function(e){var t,n=ut.a().shape((t={firstName:ut.c(),lastName:ut.c()},Object(Y.a)(t,"lastName",ut.c()),Object(Y.a)(t,"email",ut.c().email("Email must be valid")),Object(Y.a)(t,"password",ut.c().matches(/^([A-Za-z0-9.!@#$\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,"Password can only contain Latin letters, numbers or special characters").min(8,"Password must be a minimum of 8 characters").matches(/^(?=.*?[A-Za-z]).+$/,"Password must have at least one letter").matches(/^(?=.*?[0-9]).+$/,"Password must have at least one number").max(30,"Password must be less than 30 characters").required("Enter a password")),Object(Y.a)(t,"confirmPass",ut.c().required("You must confirm your password").oneOf([ut.b("password")],"Passwords must match")),t));return Object(ae.jsx)(Ge.motion.div,{className:" text-center sign-up-box",initial:{opacity:.2},animate:{opacity:1},exit:{opacity:.2},children:Object(ae.jsx)(lt.c,{initialValues:{firstname:"",lastname:"",email:"",password:"",confirmPass:""},validationSchema:n,status:{validationSubmission:!1},onSubmit:function(){var e=Object(rt.a)(ot.a.mark((function e(t,n){var a;return ot.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=t,fetch(de+"api/users/singup",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;if(409===e.status)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).catch((function(e){return e}));case 2:(a=e.sent).success?n.setStatus(!0):"UserExistsError"==a.err.name&&(alert("User already exists, try a different email"),n.resetForm({values:Object(g.a)(Object(g.a)({},t),{},{email:"",password:"",confirmPass:""})}));case 4:case"end":return e.stop()}var s}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){return e.status?Object(ae.jsx)(ht,{}):Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsxs)("div",{className:"h2",children:["Sign up for ",Object(ae.jsx)("span",{className:"logo",children:"Acend"})]}),Object(ae.jsx)("small",{children:"Become a member and enjoy our rewards!"}),Object(ae.jsxs)(lt.b,{className:"text-left mt-4 mx-4",onSubmit:e.handleSubmit,children:[Object(ae.jsx)(bt,{label:"First Name",name:"firstname",type:"text"}),Object(ae.jsx)(bt,{label:"Last Name",name:"lastname",type:"text"}),Object(ae.jsx)(bt,{label:"Email",name:"email",type:"text"}),Object(ae.jsx)(bt,{label:"Password",name:"password",type:"password"}),Object(ae.jsx)(bt,{label:"Confirm password",name:"confirmPass",type:"password"}),Object(ae.jsx)(Q.a,{disabled:!e.dirty||e.isSubmitting||!e.isValid,type:"submit",className:"w-100 mt-2",value:"submit",color:"primary",children:"Sign up"})]})]})}})})};var Ot=function(){var e=Object(f.useSelector)((function(e){return e.favorites})),t=e.favorites.map((function(e){return Object(ae.jsx)(Ae,{flight:e,isFavorite:!0},e.fa_flight_id)}));return e.isLoading?Object(ae.jsx)("div",{className:"container main-box",children:Object(ae.jsx)(oe,{})}):e.errMess?Object(ae.jsx)("div",{className:"container text-center main-box",children:Object(ae.jsx)("h4",{className:"text-primary",children:"You havent saved any flights "})}):e.favorites.length>0?Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsxs)("div",{className:"container text-center main-box",children:[Object(ae.jsx)("h1",{children:"Your saved flights"}),t]})}):Object(ae.jsx)("div",{className:"container main-box text-center",children:Object(ae.jsx)("h1",{children:"No flights favorited"})})};var mt=function(e){return Object(ae.jsx)(ae.Fragment,{children:Object(ae.jsx)("footer",{className:"footer",children:Object(ae.jsxs)("div",{className:"container main-box mt-0",children:[Object(ae.jsx)("div",{className:"row"}),Object(ae.jsxs)("div",{className:"row",children:[Object(ae.jsxs)("div",{className:"col-4 text-center text-nowrap",children:[Object(ae.jsx)("h5",{children:"Contact"}),Object(ae.jsx)(Z.a,{icon:["fab","linkedin"]}),Object(ae.jsxs)("a",{href:"https://linkedin/estgarci/acend-aws",children:[" ","LinkedIn"]})]}),Object(ae.jsxs)("div",{className:"col-4 text-center text-nowrap",children:[Object(ae.jsx)("h5",{children:"Source code"}),Object(ae.jsx)(Z.a,{icon:["fab","github"]}),Object(ae.jsxs)("a",{href:"https://github.com/estgarci/acend-aws",children:[" ","GitHub"]})]}),Object(ae.jsxs)("div",{className:"col-4 text-center text-nowrap",children:[Object(ae.jsx)("h5",{children:"API used"}),Object(ae.jsx)(Z.a,{icon:["fab","fulcrum"]}),Object(ae.jsxs)("a",{className:"",href:"https://www.github.com/",children:[" ","Flight Aware"]})]})]})]})})})};var xt=function(){var e=Object(He.f)(),t=Object(He.g)(),n=Object(f.useSelector)((function(e){return e.airports})),s=Object(f.useSelector)((function(e){return e.flights})),c=Object(f.useSelector)((function(e){return e.countries})),r=Object(f.useSelector)((function(e){return e.auth})),i=Object(f.useDispatch)();return Object(a.useEffect)((function(){i((function(e){return e(be()),fetch(de+"api/countries").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(fe(t))})).catch((function(t){return e(he(t.message))}))})),i((function(e){return e(Oe()),fetch(de+"api/airports").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return e.iata_code&&e.municipality&&e.name}))})).then((function(t){return e(xe(t))})).catch((function(t){return e(me(t.message))}))})),i((function(e){return fetch(de+"api/users/oauth/login/success",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(t){if(!t.success){localStorage.clear();var n=new Error("Error "+t.status);throw n.response=t,n}localStorage.setItem("user",JSON.stringify(t.user)),e(Ie()),e(Ne(t.user))})).catch((function(t){return e(ye(t.message))}))}))}),[]),Object(ae.jsxs)(De,{children:[Object(ae.jsx)("div",{className:"content-background position-absolute"}),Object(ae.jsx)(ct,{}),Object(ae.jsx)("div",{className:"main-view",children:Object(ae.jsx)(Ge.AnimatePresence,{children:Object(ae.jsxs)(He.d,{location:e,children:[Object(ae.jsx)(He.b,{path:"/",element:Object(ae.jsx)(ze,{flights:s,airports:n,countries:c,auth:r}),exact:!0}),Object(ae.jsx)(He.b,{path:"/signup",element:Object(ae.jsx)(ft,{navigate:t})}),Object(ae.jsx)(He.b,{path:"/signup/success",element:Object(ae.jsx)(ht,{})}),Object(ae.jsx)(He.b,{path:"/mytrips",element:Object(ae.jsx)(Ve,{children:Object(ae.jsx)(Ot,{})})})]},e.path)})}),Object(ae.jsx)(mt,{className:"bg-white mt-5"})]})};d.b.add(h.c,b.l,b.g,b.f,b.a,b.b,b.j,b.h,b.e,h.a,b.d,b.i,b.k,b.c,h.b,h.d);var pt=Object(O.createStore)(Object(O.combineReducers)({auth:J,countries:H,airports:z,flights:V,favorites:B}),Object(O.applyMiddleware)(m.a,p.a)),gt=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(ae.jsx)(f.Provider,{store:pt,children:Object(ae.jsx)(X.a,{children:Object(ae.jsx)(xt,{})})})}}]),n}(a.Component),vt=gt;r.a.render(Object(ae.jsx)(s.a.StrictMode,{children:Object(ae.jsx)(vt,{})}),document.getElementById("root")),i()}},[[605,1,2]]]);
//# sourceMappingURL=main.c50e6776.chunk.js.map