(this["webpackJsonpcryptocurrency-tracker"]=this["webpackJsonpcryptocurrency-tracker"]||[]).push([[0],{224:function(e,t){},239:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(43),i=n.n(c),o=n(47),s=n(17),l=n(300),d=n(302),u=n(303),j=n(298),b=n(291),p=n(296),h=n(292),g=n(122),m=n(314),f=n(11),O=n(2),x=Object(a.createContext)();var v=function(e){var t=e.children,n=Object(a.useState)("INR"),r=Object(f.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)("\u20b9"),s=Object(f.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){d("USD"===c?"$":"\u20b9")}),[c]),Object(O.jsx)(x.Provider,{value:{currency:c,symbol:l,setCurrency:i},children:t})},y=function(){return Object(a.useContext)(x)},k=Object(h.a)({title:{flexGrow:1,color:"gold",fontFamily:"Montserrat",fontWeight:"800",cursor:"pointer"}});var C=function(){var e=k(),t=Object(s.f)(),n=y(),a=n.currency,r=n.setCurrency,c=Object(g.a)({palette:{primary:{main:"#fff"},mode:"dark"}});return Object(O.jsx)(m.a,{theme:c,children:Object(O.jsx)(l.a,{color:"transparent",position:"static",children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(j.a,{onClick:function(){return t("/")},className:e.title,variant:"h6",children:"Cryto Tracker"}),Object(O.jsxs)(b.a,{variant:"outlined",style:{width:100,height:40,marginRight:15},value:a,onChange:function(e){return r(e.target.value)},children:[Object(O.jsx)(p.a,{value:"INR",children:"INR"}),Object(O.jsx)(p.a,{value:"USD",children:"USD"})]})]})})})})},w=n(40),_=n(32),M=n.n(_),S=n(41),F=n.n(S),D=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},N=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},T=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},B=n(119),W=n.n(B),L=Object(h.a)({carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{textDecoration:"none",color:"white",display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase"}}),P=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};var R=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],c=L(),i=y(),s=i.currency,l=i.symbol;Object(a.useEffect)((function(){d()}),[s]);var d=function(){var e=Object(w.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(T(s));case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n);var u=n.map((function(e){var t,n=e.price_change_percentage_24h>=0;return Object(O.jsxs)(o.b,{className:c.carouselItem,to:"/coins/".concat(e.id),children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(O.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(O.jsxs)("span",{style:{color:n>0?"rgb(14,203,129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(O.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[l,P(null===e||void 0===e?void 0:e.current_price.toFixed(3))]})]})}));return Object(O.jsx)("div",{className:c.carousel,children:Object(O.jsx)(W.a,{mouseTracking:!0,autoPlayInterval:1e3,infinite:!0,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},autoPlay:!0,items:u})})},E=Object(h.a)({banner:{backgroundImage:"url(./banner.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat"},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:25,justifyContent:"space-around"},tagLine:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"}});var A=function(){var e=E();return Object(O.jsx)("div",{className:e.banner,children:Object(O.jsxs)(d.a,{style:{display:"flex"},className:e.bannerContent,children:[Object(O.jsxs)("div",{className:e.tagLine,children:[Object(O.jsx)(j.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Crypto Tracker"}),Object(O.jsx)(j.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the information regading your favourite cryptocurrency"})]}),Object(O.jsx)(R,{})]})})},z=n(293),H=n(306),U=n(307),G=n(308),J=n(309),Y=n(310),$=n(311),q=n(312),K=n(295),Q=Object(g.a)({palette:{primary:{main:"#fff"},mode:"dark"}}),V=Object(h.a)({row:{backgroundColor:"#16171a",cursor:"pointer",fontFamily:"Montserrat","&:hover":{backgroundColor:"#131111"}},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}});var X=function(){var e,t=Object(a.useState)([]),n=Object(f.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(f.a)(i,2),l=o[0],u=o[1],b=Object(a.useState)(""),p=Object(f.a)(b,2),h=p[0],g=p[1],x=Object(a.useState)(1),v=Object(f.a)(x,2),k=v[0],C=v[1],_=y(),S=_.currency,N=_.symbol,I=function(){return r.filter((function(e){return e.name.toLowerCase().includes(h)||e.symbol.toLowerCase().includes(h)}))},T=Object(s.f)(),B=function(){var e=Object(w.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,F.a.get(D(S));case 3:t=e.sent,n=t.data,c(n),u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){B()}),[S]),console.log(r);var W=V();return Object(O.jsx)(m.a,{theme:Q,children:Object(O.jsxs)(d.a,{style:{textAlign:"center"},children:[Object(O.jsx)(j.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(O.jsx)(z.a,{label:"Search for a cryptocurrency",variant:"outlined",style:{marginBottom:30,width:"100%"},onChange:function(e){return g(e.target.value)}}),Object(O.jsx)(H.a,{children:l?Object(O.jsx)(U.a,{style:{backgroundColor:"gold"}}):Object(O.jsxs)(G.a,{style:{marginBottom:"20px"},children:[Object(O.jsx)(J.a,{style:{backgroundColor:"#eebc1d"},children:Object(O.jsx)(Y.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(O.jsx)($.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(O.jsx)(q.a,{children:I().slice(10*(k-1),10*k).map((function(e){var t=e.price_change_percentage_24h>0;return Object(O.jsxs)(Y.a,{onClick:function(){return T("/coins/".concat(e.id))},className:W.row,children:[Object(O.jsxs)($.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(O.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(O.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(O.jsxs)($.a,{align:"right",children:[N," ",P(e.current_price)]}),Object(O.jsxs)($.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129":"red",fontWeight:"500"},children:[t&&"+"," ",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(O.jsxs)($.a,{align:"right",children:[N," ",P(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(O.jsx)(K.a,{style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:W.pagination},count:((null===(e=I())||void 0===e?void 0:e.length)/10).toFixed(0),onChange:function(e,t){C(t),window.scrollTo(0,450)}})]})})};var Z=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A,{}),Object(O.jsx)(X,{})]})},ee=n(3),te=n(313),ne=n(120);var ae=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(h.a)({selectbutton:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%"}})();return Object(O.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},re=(n(59),[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}]),ce=Object(g.a)({breakpoints:{values:{xs:440,sm:740,md:960,lg:1280,xl:1920}}}),ie=Object(h.a)({container:Object(ee.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},ce.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}),oe=Object(g.a)({palette:{primary:{main:"#fff"},mode:"dark"}});var se,le,de=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(f.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(1),s=Object(f.a)(o,2),l=s[0],d=s[1],u=Object(a.useState)(!1),j=Object(f.a)(u,2),b=j[0],p=j[1],h=y().currency,g=function(){var e=Object(w.a)(M.a.mark((function e(){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get(I(t.id,l,h));case 2:n=e.sent,a=n.data,p(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[h,l]);var x=ie();return console.log(typeof c),Object(O.jsx)(m.a,{theme:oe,children:Object(O.jsx)("div",{className:x.container,children:!c|!1===b?Object(O.jsx)(te.a,{style:{color:"gold"},thickness:1,size:250}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ne.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===l?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(l," Days ) in ").concat(h),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(O.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:re.map((function(e){return Object(O.jsx)(ae,{onClick:function(){d(e.value),p(!1)},selected:e.value===l,children:e.label},e.value)}))})]})})})},ue=n(121),je=n.n(ue),be=(n(239),Object(g.a)({breakpoints:{values:{xs:440,sm:740,md:960,lg:1280,xl:1920}}})),pe=Object(h.a)({container:Object(ee.a)({display:"flex"},be.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(se={width:"30%"},Object(ee.a)(se,be.breakpoints.down("md"),{width:"100%"}),Object(ee.a)(se,"display","flex"),Object(ee.a)(se,"flexDirection","column"),Object(ee.a)(se,"alignItems","center"),Object(ee.a)(se,"marginTop",25),Object(ee.a)(se,"borderRight","2px solid grey"),se),heading:{fontWeight:"bold",marginBottom:20},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(le={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(ee.a)(le,be.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(ee.a)(le,be.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(ee.a)(le,be.breakpoints.down("xs"),{alignItems:"start"}),le)});var he=function(){var e=Object(s.g)().id,t=Object(a.useState)(),n=Object(f.a)(t,2),r=n[0],c=n[1],i=y(),o=i.currency,l=i.symbol,d=function(){var t=Object(w.a)(M.a.mark((function t(){var n,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.a.get(N(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){d()}),[]);var u=pe();return r?Object(O.jsxs)("div",{className:u.container,children:[Object(O.jsxs)("div",{className:u.sidebar,children:[Object(O.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(O.jsx)(j.a,{variant:"h3",className:u.heading,style:{fontFamily:"Montserrat"},children:null===r||void 0===r?void 0:r.name}),Object(O.jsxs)(j.a,{variant:"subtitle1",className:u.description,style:{fontFamily:"Montserrat"},children:[je()(null===r||void 0===r?void 0:r.description.en.split(". ")[0]),"."]}),Object(O.jsxs)("div",{className:u.marketData,children:[Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(j.a,{variant:"h5",className:u.heading,style:{fontFamily:"Montserrat",fontWeight:"bold"},children:"Rank:"}),"\xa0 \xa0",Object(O.jsx)(j.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:null===r||void 0===r?void 0:r.market_cap_rank})]}),Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(j.a,{variant:"h5",className:u.heading,style:{fontFamily:"Montserrat",fontWeight:"bold"},children:"Current Price:"}),"\xa0 \xa0",Object(O.jsxs)(j.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[l," ",null===r||void 0===r?void 0:r.market_data.current_price[o.toLowerCase()].toLocaleString("en-US")]})]}),Object(O.jsxs)("span",{style:{display:"flex"},children:[Object(O.jsx)(j.a,{variant:"h5",className:u.heading,style:{fontFamily:"Montserrat",fontWeight:"bold"},children:"Market Cap:"}),"\xa0 \xa0",Object(O.jsxs)(j.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[null===r||void 0===r?void 0:r.market_data.market_cap[o.toLowerCase()].toLocaleString("en-US").slice(0,-6),"M"]})]})]})]}),Object(O.jsx)(de,{coin:r})]}):Object(O.jsx)(U.a,{style:{backgroundColor:"gold"}})},ge=(n(240),Object(h.a)({App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}));var me=function(){var e=ge();return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:e.App,children:[Object(O.jsx)(C,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",element:Object(O.jsx)(Z,{})}),Object(O.jsx)(s.a,{path:"/coins/:id",element:Object(O.jsx)(he,{})})]})]})})};n(241),n(242);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{children:Object(O.jsx)(me,{})})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.ee7dbf1b.chunk.js.map