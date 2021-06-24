(this["webpackJsonpweather-mate"]=this["webpackJsonpweather-mate"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(13),s=c.n(a),i=(c(49),c(50),c(36)),j=c(37),d=c.n(j),l=c(1);var h=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(l.jsxs)(i.a.Brand,{href:"/weather-mate",children:[Object(l.jsx)(d.a,{className:"logo"}),"Weather Pal"]})})})},o=c(35),b=c.n(o),u=c(22),x=c(39),O=c(21),m=c(17),p=c(41),f=c(19),y=c(40);var v=function(e){var t=e.data;console.log(t);var c="http://openweathermap.org/img/wn/"+"".concat(404!==t.cod?t.weather[0].icon:null)+".png";return Object(l.jsx)("div",{className:"displayweather",children:404!==t.cod?Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("div",{className:"maincard",children:Object(l.jsx)(f.a,{className:"weatherCard",style:{width:"70%"},children:Object(l.jsxs)(f.a.Body,{children:[Object(l.jsxs)(f.a.Title,{children:[t.name,", ",t.sys.country]}),Object(l.jsx)(f.a.Img,{class:"weatherIcon",variant:"top",src:c}),Object(l.jsxs)(f.a.Text,{children:[t.weather[0].main," || ",Math.floor(t.main.temp-273.15),"\xb0c"]}),Object(l.jsxs)(y.a,{className:"details-table",striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"High / Low"}),Object(l.jsxs)("td",{children:[Math.floor(t.main.temp_max-273.15),"\xb0c /"," ",Math.floor(t.main.temp_min-273.15),"\xb0c"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Feels like"}),Object(l.jsxs)("td",{children:[Math.floor(t.main.feels_like-273.15),"\xb0c"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Wind direction"}),Object(l.jsxs)("td",{children:[t.wind.deg,"\xb0 deg"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Wind speed"}),Object(l.jsxs)("td",{children:[t.wind.speed," km/h"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Sunrise"}),Object(l.jsx)("td",{children:new Date(1e3*t.sys.sunrise).toLocaleTimeString()})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Sunset"}),Object(l.jsx)("td",{children:new Date(1e3*t.sys.sunset).toLocaleTimeString()})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Humidity"}),Object(l.jsxs)("td",{children:[t.main.humidity,"%"]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Pressure"}),Object(l.jsxs)("td",{children:[t.main.pressure," hPa"]})]})]})]})})})}):Object(l.jsx)("div",{className:"maincard",children:Object(l.jsx)("h2",{children:t.message})})})};var g=function(){var e="ba14759b54990c5f13cc72144855167f",t=Object(n.useState)({city:"",country:""}),c=Object(O.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)([]),i=Object(O.a)(s,2),j=i[0],d=i[1];function h(){return(h=Object(x.a)(b.a.mark((function t(c){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),""!==r.city){t.next=5;break}alert("Add values"),t.next=9;break;case 5:return t.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r.city,",").concat(r.country,"&appid=").concat(e)).then((function(e){return e.json()})).then((function(e){return e}));case 7:n=t.sent,d({data:n});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var o=function(e){var t=e.target.name,c=e.target.value;"city"===t?a(Object(u.a)(Object(u.a)({},r),{},{city:c})):"country"===t&&a(Object(u.a)(Object(u.a)({},r),{},{country:c}))};return Object(l.jsxs)("div",{className:"Weather",children:[Object(l.jsx)("br",{}),Object(l.jsxs)(m.a,{className:"inputForm",children:[Object(l.jsxs)(m.a.Group,{children:[Object(l.jsx)(m.a.Label,{}),Object(l.jsx)(m.a.Control,{type:"text",name:"city",placeholder:"city",onChange:function(e){return o(e)}}),Object(l.jsx)(m.a.Control,{type:"text",name:"country",placeholder:"country",onChange:function(e){return o(e)}}),Object(l.jsx)(m.a.Text,{className:"text-muted"})]}),Object(l.jsx)(p.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){return h.apply(this,arguments)}(e)},children:"Submit"})]}),void 0!==j.data?Object(l.jsx)("div",{children:Object(l.jsx)(v,{data:j.data})}):null]})},w=c(18),k=c(42),N=c.n(k),C=c(43),S=c.n(C);var T=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)(w.a,{className:"justify-content-center",activeKey:"/home",children:[Object(l.jsx)(w.a.Item,{children:Object(l.jsx)(w.a.Link,{href:"https://github.com/mervynlevis",children:Object(l.jsx)(N.a,{})})}),Object(l.jsx)(w.a.Item,{children:Object(l.jsx)(w.a.Link,{eventKey:"https://www.linkedin.com/in/mervyn-levis/",children:Object(l.jsx)(S.a,{})})})]}),Object(l.jsxs)("p",{children:[" ","Photo by"," ",Object(l.jsx)("a",{href:"https://unsplash.com/@peterng1618?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Peter Nguyen"})," ","on"," ",Object(l.jsx)("a",{href:"https://unsplash.com/s/photos/blue?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})};var _=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(g,{}),Object(l.jsx)(T,{})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(59);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),L()}},[[61,1,2]]]);
//# sourceMappingURL=main.bf5ea7e7.chunk.js.map