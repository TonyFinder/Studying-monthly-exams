(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],[,,,function(e,t,a){e.exports={main:"SetDisplay_main__3tG7u",fieldSeparate:"SetDisplay_fieldSeparate__1moIX",number:"SetDisplay_number__3QokI",inputCorrection:"SetDisplay_inputCorrection__3XtCW",redBackground:"SetDisplay_redBackground__2P_ZN"}},function(e,t,a){e.exports={back:"Counter_back__2PEdL",middle:"Counter_middle__Y--sg",counterField:"Counter_counterField__He1Tx",buttonsField:"Counter_buttonsField__r3dks",twoCounters:"Counter_twoCounters__2NAD_"}},function(e,t,a){e.exports={back:"Counter_back__TZ0Hn",middle:"Counter_middle__3A_Mf",counterField:"Counter_counterField__KsYDd",buttonsField:"Counter_buttonsField__1wvWv"}},function(e,t,a){e.exports={number:"CounterDisplay_number__31qiD",redNumber:"CounterDisplay_redNumber__3rcL2",setMessage:"CounterDisplay_setMessage__3Ehw9",setMessageRed:"CounterDisplay_setMessageRed__2_O9N"}},,function(e,t,a){e.exports={appComponent:"Monday_appComponent__kopOg",textDecoration:"Monday_textDecoration__1-r8w"}},function(e,t,a){e.exports={number:"CounterDisplay_number__1kZ43",redNumber:"CounterDisplay_redNumber__J_RKe"}},function(e,t,a){e.exports={appComponent:"Tuesday_appComponent__I-Zh8",textDecoration:"Tuesday_textDecoration__1nP9Z"}},,function(e,t,a){e.exports={button:"Button_button__389iw"}},function(e,t,a){e.exports={button:"Button_button__ap28o"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(11),s=a.n(r),i=(a(18),a(8)),o=a.n(i),l=a(2),u=a(12),d=a.n(u),b=a(0),m=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:d.a.button,children:e.title})},j=a(5),O=a.n(j),_=a(9),x=a.n(_),g=function(e){var t=5===e.counterNumber?x.a.redNumber:x.a.number;return Object(b.jsx)("div",{className:t,children:e.counterNumber})},f=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!0),d=Object(l.a)(u,2),j=d[0],_=d[1];Object(n.useEffect)((function(){var e=localStorage.getItem("increment");if(e){var t=JSON.parse(e);if(0===t)return;5===t?(x(),c(t)):(f(),c(t))}}),[]);var x=function(){o(!0),_(!1)},f=function(){o(!1),_(!1)};return Object(b.jsx)("div",{className:O.a.back,children:Object(b.jsxs)("div",{className:O.a.middle,children:[Object(b.jsx)("div",{className:O.a.counterField,children:Object(b.jsx)(g,{counterNumber:a})}),Object(b.jsxs)("div",{className:O.a.buttonsField,children:[Object(b.jsx)(m,{disable:i,title:"inc",callback:function(){a>=5?o(!0):(a++,c(a),5===a&&x(),1===a&&_(!1),localStorage.setItem("increment",JSON.stringify(a)))}}),Object(b.jsx)(m,{disable:j,title:"reset",callback:function(){c(0),o(!1),_(!0),localStorage.setItem("increment",JSON.stringify(0))}})]})]})})},p=function(){return Object(b.jsxs)("div",{className:o.a.appComponent,children:[Object(b.jsx)("h3",{className:o.a.textDecoration,children:"Monday Exam"}),Object(b.jsx)(f,{})]})},S=a(10),N=a.n(S),v=a(13),h=a.n(v),C=function(e){return Object(b.jsx)("button",{disabled:e.disable,onClick:function(){e.callback()},className:h.a.button,children:e.title})},y=a(6),I=a.n(y),k=function(e){return Object(b.jsx)("div",{children:e.error?Object(b.jsx)("div",{className:I.a.setMessageRed,children:"Incorrect value!"}):e.setMessage?Object(b.jsx)("div",{className:e.counterNumber===e.max?I.a.redNumber:I.a.number,children:e.counterNumber}):Object(b.jsx)("div",{className:I.a.setMessage,children:"enter values and press 'set'"})})},D=a(4),F=a.n(D),J=a(3),M=a.n(J),T=function(e){return Object(b.jsxs)("div",{className:M.a.main,children:[Object(b.jsxs)("div",{className:M.a.fieldSeparate,children:[Object(b.jsx)("span",{className:M.a.number,children:"max value:"}),Object(b.jsx)("input",{className:e.max<0||e.max<e.start||e.start===e.max?"".concat(M.a.inputCorrection," ").concat(M.a.redBackground):M.a.inputCorrection,type:"number",value:e.max,onChange:function(t){e.onChangeMax(+t.currentTarget.value)}})]}),Object(b.jsxs)("div",{className:M.a.fieldSeparate,children:[Object(b.jsx)("label",{className:M.a.number,children:"start value:"}),Object(b.jsx)("input",{className:e.start<0||e.max<e.start||e.start===e.max?"".concat(M.a.inputCorrection," ").concat(M.a.redBackground):M.a.inputCorrection,type:"number",value:e.start,onChange:function(t){e.onChangeStart(+t.currentTarget.value)}})]})]})},V=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(5),d=Object(l.a)(u,2),m=d[0],j=d[1],O=Object(n.useState)(!1),_=Object(l.a)(O,2),x=_[0],g=_[1],f=Object(n.useState)(!0),p=Object(l.a)(f,2),S=p[0],N=p[1],v=Object(n.useState)(!0),h=Object(l.a)(v,2),y=h[0],I=h[1],D=Object(n.useState)(!1),J=Object(l.a)(D,2),M=J[0],V=J[1],w=function(){g(!1),N(!0)},B=function(){g(!0),N(!0)},E=function(){B(),I(!0)},P=function(){var e=localStorage.getItem("incrementTuesday"),t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");e!==a&&e!==t&&(g(!1),N(!1)),e===a&&(g(!0),N(!1)),e===t&&w()};Object(n.useEffect)((function(){var e=localStorage.getItem("incrementTuesday"),t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");e?c(JSON.parse(e)):localStorage.setItem("incrementTuesday",JSON.stringify(0)),t?o(JSON.parse(t)):localStorage.setItem("startValue",JSON.stringify(0)),a?j(JSON.parse(a)):localStorage.setItem("maxValue",JSON.stringify(5)),P()}),[]);return Object(b.jsxs)("div",{className:F.a.twoCounters,children:[Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(T,{start:i,max:m,onChangeMax:function(e){j(e);var t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");return t===i.toString()&&a===e.toString()?(P(),I(!0),void V(!1)):e<=0||e<=i||i<0||e===i?(V(!0),void E()):(I(!1),B(),void V(!1))},onChangeStart:function(e){o(e);var t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");return t===e.toString()&&a===m.toString()?(P(),I(!0),void V(!1)):m<=0||m<=e||e<0||m===e?(V(!0),void E()):(I(!1),B(),void V(!1))}})}),Object(b.jsx)("div",{className:F.a.buttonsField,children:Object(b.jsx)(C,{disable:y,title:"set",callback:function(){localStorage.setItem("maxValue",JSON.stringify(m)),localStorage.setItem("startValue",JSON.stringify(i)),localStorage.setItem("incrementTuesday",JSON.stringify(i)),c(i),I(!0),w()}})})]})}),Object(b.jsx)("div",{className:F.a.back,children:Object(b.jsxs)("div",{className:F.a.middle,children:[Object(b.jsx)("div",{className:F.a.counterField,children:Object(b.jsx)(k,{counterNumber:a,max:m,setMessage:y,error:M})}),Object(b.jsxs)("div",{className:F.a.buttonsField,children:[Object(b.jsx)(C,{disable:x,title:"inc",callback:function(){++a>=i&&N(!1),a>=m?(g(!0),c(a)):c(a),localStorage.setItem("incrementTuesday",JSON.stringify(a))}}),Object(b.jsx)(C,{disable:S,title:"reset",callback:function(){c(i),w(),localStorage.setItem("incrementTuesday",JSON.stringify(i))}})]})]})})]})},w=function(){return Object(b.jsxs)("div",{className:N.a.appComponent,children:[Object(b.jsx)("h3",{className:N.a.textDecoration,children:"Tuesday Exam (first version)"}),Object(b.jsx)(V,{})]})};var B=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(w,{})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),E()}],[[20,1,2]]]);
//# sourceMappingURL=main.3fe2c49d.chunk.js.map