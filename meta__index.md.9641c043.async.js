(self.webpackChunkasync_modal_render=self.webpackChunkasync_modal_render||[]).push([[783],{93438:function(e,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return A}});var l={};n.r(l),n.d(l,{AsyncModalRenderCancelError:function(){return b.v},AsyncModalRenderContext:function(){return s.vT},AsyncModalRenderProvider:function(){return s.Ov},asyncModalRender:function(){return f.b},useAsyncModalRender:function(){return u.V},useAsyncModalRenderContext:function(){return s.jV},withAsyncModalPropsMapper:function(){return I}});var c=n(90228),r=n.n(c),o=n(87999),a=n.n(o),i=n(75271),d=n.t(i,2),f=n(71270),s=n(39853),u=n(85031),C=n(26068),_=n.n(C),y=n(48305),R=n.n(y),E=n(67825),O=n.n(E),M=n(52676),v=["onOk","onCancel"];function I(x,m){return function(h){var P=h.onOk,S=h.onCancel,k=O()(h,v),p=k,L=R()(m,2),F=L[0],W=L[1];return p[F]=P,p[W]=S,(0,M.jsx)(x,_()({},p))}}var b=n(33358),g=n(51109),A={"src-demo-basic":{component:i.memo(i.lazy(function(){return n.e(433).then(n.bind(n,43117))})),asset:{type:"BLOCK",id:"src-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(7371).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.6"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":g,react:d,"async-modal-render":l,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":g},renderOpts:{compile:function(){var x=a()(r()().mark(function h(){var P,S=arguments;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(915).then(n.bind(n,54915));case 2:return p.abrupt("return",(P=p.sent).default.apply(P,S));case 3:case"end":return p.stop()}},h)}));function m(){return x.apply(this,arguments)}return m}()}},"src-demo-useasyncmodal":{component:i.memo(i.lazy(function(){return n.e(433).then(n.bind(n,72187))})),asset:{type:"BLOCK",id:"src-demo-useasyncmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(56294).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.6"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":g,react:d,"async-modal-render":l,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":g},renderOpts:{compile:function(){var x=a()(r()().mark(function h(){var P,S=arguments;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(915).then(n.bind(n,54915));case 2:return p.abrupt("return",(P=p.sent).default.apply(P,S));case 3:case"end":return p.stop()}},h)}));function m(){return x.apply(this,arguments)}return m}()}},"src-demo-context":{component:i.memo(i.lazy(function(){return n.e(433).then(n.bind(n,18664))})),asset:{type:"BLOCK",id:"src-demo-context",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(89433).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.6"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":g,react:d,"async-modal-render":l,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":g},renderOpts:{compile:function(){var x=a()(r()().mark(function h(){var P,S=arguments;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(915).then(n.bind(n,54915));case 2:return p.abrupt("return",(P=p.sent).default.apply(P,S));case 3:case"end":return p.stop()}},h)}));function m(){return x.apply(this,arguments)}return m}()}},"src-demo-persistent":{component:i.memo(i.lazy(function(){return n.e(433).then(n.bind(n,96927))})),asset:{type:"BLOCK",id:"src-demo-persistent",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(2161).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.6"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":g,react:d,"async-modal-render":l,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":g},renderOpts:{compile:function(){var x=a()(r()().mark(function h(){var P,S=arguments;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(915).then(n.bind(n,54915));case 2:return p.abrupt("return",(P=p.sent).default.apply(P,S));case 3:case"end":return p.stop()}},h)}));function m(){return x.apply(this,arguments)}return m}()}}}},39853:function(e,t,n){"use strict";n.d(t,{Ov:function(){return a},jV:function(){return i},vT:function(){return o}});var l=n(75271),c=n(85031),r=n(52676),o=l.createContext({render:function(){throw Error("AsyncModalContext must be used within createRoot.")},renderFactory:function(){throw Error("AsyncModalContext must be used within createRoot.")},destroy:function(){throw Error("AsyncModalContext must be used within createRoot.")}});function a(d){var f=d.children,s=(0,c.V)(),u=s.render,C=s.renderFactory,_=s.holder,y=s.destroy,R=(0,l.useMemo)(function(){return{render:u,renderFactory:C,destroy:y}},[u,C,y]);return(0,r.jsxs)(o.Provider,{value:R,children:[f,_]})}function i(){return(0,l.useContext)(o)}},71270:function(e,t,n){"use strict";n.d(t,{b:function(){return f}});var l=n(48305),c=n.n(l),r=n(30967);function o(){if(typeof r.createRoot=="function")return r.createRoot;try{var s=n(38751);if(s&&typeof s.createRoot=="function")return s.createRoot}catch(u){}return null}var a=o();function i(s,u){if(a){var C=u.__reactCompatRoot,_;return C?_=C:(_=a(u),u.__reactCompatRoot=_),_.render(s),function(){u.__reactCompatRoot===_&&(_.unmount(),delete u.__reactCompatRoot)}}else{var y=r.render;if(typeof y=="function")return y(s,u),function(){r.unmountComponentAtNode(u)};throw new Error("\u5F53\u524D React \u7248\u672C\u4E0D\u652F\u6301 render \u6216 createRoot\uFF0C\u8BF7\u68C0\u67E5\u4F9D\u8D56\u3002")}}var d=n(31841);function f(s,u,C){var _=(0,d.j)(s,u!=null?u:{},{onClose:function(){return I()}}),y=c()(_,2),R=y[0],E=y[1],O=function(){},M=C;M||(M=document.createElement("div"),document.body.appendChild(M),O=function(){return M.remove()});var v=i(R,M),I=function(){v(),O()};return E}},51109:function(e,t,n){"use strict";n.r(t);var l=n(26068),c=n.n(l),r=n(75271),o=n(52676),a=function(d){var f=d.open,s=f===void 0?!0:f,u=d.title,C=u===void 0?"\u63D0\u793A":u,_=d.children,y=d.okText,R=y===void 0?"\u786E\u5B9A":y,E=d.cancelText,O=E===void 0?"\u53D6\u6D88":E,M=d.width,v=M===void 0?520:M,I=d.footer,b=d.closable,g=b===void 0?!0:b,A=d.maskClosable,x=A===void 0?!0:A,m=d.onOk,h=d.onCancel;if(!s)return null;var P=function(T){x&&T.target===T.currentTarget&&(h==null||h())},S=function(){m==null||m()},k=function(){h==null||h()},p={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1e3,height:"100%",backgroundColor:"rgba(0, 0, 0, 0.45)",display:"flex",alignItems:"center",justifyContent:"center"},L={position:"relative",width:typeof v=="number"?"".concat(v,"px"):v,maxWidth:"calc(100vw - 32px)",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",pointerEvents:"auto",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column"},F={position:"absolute",top:"17px",right:"17px",zIndex:10,padding:0,color:"rgba(0, 0, 0, 0.45)",fontWeight:700,lineHeight:1,textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color 0.3s",fontSize:"16px",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center"},W={padding:"16px 24px",color:"rgba(0, 0, 0, 0.88)",background:"transparent",borderRadius:"8px 8px 0 0",fontSize:"16px",fontWeight:600,lineHeight:1.5,wordWrap:"break-word"},w={padding:"20px 24px",fontSize:"14px",lineHeight:1.5714285714285714,color:"rgba(0, 0, 0, 0.88)",flex:1,overflowY:"auto"},B={padding:"10px 16px",textAlign:"right",background:"transparent",borderTop:"1px solid rgba(5, 5, 5, 0.06)",borderRadius:"0 0 8px 8px"},K={lineHeight:1.5714285714285714,position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",userSelect:"none",touchAction:"manipulation",height:"32px",padding:"4px 15px",fontSize:"14px",borderRadius:"6px",outline:"none",border:"1px solid #d9d9d9",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.88)"},$=c()(c()({},K),{},{color:"#fff",backgroundColor:"#1677ff",borderColor:"#1677ff",boxShadow:"0 2px 0 rgba(5, 145, 255, 0.1)"}),z=function(){return I===null?null:I!==void 0?(0,o.jsx)("div",{style:B,children:I}):(0,o.jsxs)("div",{style:B,children:[(0,o.jsx)("button",{style:K,onClick:k,onMouseEnter:function(j){j.currentTarget.style.color="#4096ff",j.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(j){j.currentTarget.style.color="rgba(0, 0, 0, 0.88)",j.currentTarget.style.borderColor="#d9d9d9"},children:O}),(0,o.jsx)("button",{style:c()(c()({},$),{},{marginLeft:"8px"}),onClick:S,onMouseEnter:function(j){j.currentTarget.style.backgroundColor="#4096ff",j.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(j){j.currentTarget.style.backgroundColor="#1677ff",j.currentTarget.style.borderColor="#1677ff"},children:R})]})};return(0,o.jsx)("div",{style:p,onClick:P,children:(0,o.jsxs)("div",{style:L,onClick:function(T){return T.stopPropagation()},children:[g&&(0,o.jsx)("button",{style:F,onClick:k,onMouseEnter:function(T){T.currentTarget.style.color="rgba(0, 0, 0, 0.88)"},onMouseLeave:function(T){T.currentTarget.style.color="rgba(0, 0, 0, 0.45)"},children:(0,o.jsx)("span",{style:{fontSize:"14px"},children:"\u2715"})}),C&&(0,o.jsx)("div",{style:W,children:C}),(0,o.jsx)("div",{style:w,children:_}),z()]})})};t.default=a},85031:function(e,t,n){"use strict";n.d(t,{V:function(){return _}});var l=n(82092),c=n.n(l),r=n(48305),o=n.n(r),a=n(75271),i=n(15558),d=n.n(i),f=n(52676),s=a.memo(a.forwardRef(function(y,R){var E=u(),O=o()(E,3),M=O[0],v=O[1],I=O[2];return a.useImperativeHandle(R,function(){return{patchElement:v,removeElement:I}},[v,I]),(0,f.jsx)(f.Fragment,{children:M.map(function(b){return b.element})})})),u=function(){var R=a.useState([]),E=o()(R,2),O=E[0],M=E[1],v=a.useCallback(function(b,g,A){return M(function(x){if(g!==void 0){var m=x.findIndex(function(P){return P.key===g});if(m>-1){var h=d()(x);return h[m]={key:g,element:b,openField:A},h}}return[].concat(d()(x),[{key:g,element:b,openField:A}])}),function(){M(function(x){return x.filter(function(m){return m.element!==b})})}},[]),I=a.useCallback(function(b){var g=b.persistent,A=b.visibility;M(function(x){return x.filter(function(m){if(m.key===void 0||g!==void 0&&m.key!==g)return!0;if(A){var h=m.element.props[m.openField||"open"];if(A==="visible"&&!h||A==="hidden"&&h)return!0}return!1})})},[]);return[O,v,I]},C=n(31841);function _(){var y=a.useRef(null),R=(0,a.useMemo)(function(){return(0,f.jsx)(s,{ref:y},"component-holder")},[]),E=(0,a.useCallback)(function(v,I,b){var g=b!=null?b:{},A=g.persistent,x=g.openField,m=I!=null?I:{};A&&x&&(m[x]=!0);var h=(0,C.j)(v,m,{onClose:function(){if(A&&x){var F=a.cloneElement(S,c()({},x,!1));y.current.patchElement(F,A,x)}else p()}}),P=o()(h,2),S=P[0],k=P[1],p=y.current.patchElement(S,A,x);return k},[]),O=(0,a.useCallback)(function(v,I,b){return function(){return E(v,I,b)}},[E]),M=(0,a.useCallback)(function(v){y.current.removeElement(v)},[]);return{render:E,holder:R,renderFactory:O,destroy:M}}},33358:function(e,t,n){"use strict";n.d(t,{v:function(){return C}});var l=n(17069),c=n.n(l),r=n(25298),o=n.n(r),a=n(21742),i=n.n(a),d=n(83136),f=n.n(d),s=n(53318),u=n.n(s),C=function(_){i()(R,_);var y=f()(R);function R(){return o()(this,R),y.call(this,"User cancel")}return c()(R)}(u()(Error))},31841:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var l=n(26068),c=n.n(l),r=n(75271),o=n(33358),a=1;function i(d,f,s){var u=null,C=new Promise(function(_,y){var R=function(M){var v;s.onClose(),_(M),f==null||(v=f.onOk)===null||v===void 0||v.call(f,M)},E=function(M){var v,I=M===void 0?new o.v:M;s.onClose(),y(I),f==null||(v=f.onCancel)===null||v===void 0||v.call(f,I)};u=(0,r.createElement)(d,c()(c()({},f),{},{key:a++,onOk:R,onCancel:E}))});return[u,C]}},59370:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return l}});const l=[{value:"\u4EE5 Promise \u7684\u65B9\u5F0F\u4F7F\u7528\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B80\u5316\u5F39\u7A97\u7684\u5F02\u6B65\u4EA4\u4E92\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"asyncModalRender",paraId:1,tocIndex:2},{value:" \u51FD\u6570\u76F4\u63A5\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6\u5230\u6307\u5B9A\u5BB9\u5668\u3002",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"useAsyncModalRender",paraId:2,tocIndex:3},{value:" Hook \u5728\u7EC4\u4EF6\u5185\u7BA1\u7406\u5F39\u7A97\u3002",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:4},{value:"AsyncModalRenderProvider",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"useAsyncModalRenderContext",paraId:3,tocIndex:4},{value:" \u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u5F39\u7A97\u6E32\u67D3\u80FD\u529B\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"persistent",paraId:4,tocIndex:5},{value:" \u914D\u7F6E\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5F39\u7A97\u72B6\u6001\u7684\u6301\u4E45\u5316\u3002\u5173\u95ED\u5F39\u7A97\u65F6\u4E0D\u4F1A\u9500\u6BC1\u7EC4\u4EF6\uFF0C\u800C\u662F\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"openField",paraId:4,tocIndex:5},{value:" \u6307\u5B9A\u63A7\u5236\u9690\u85CF\u3001\u663E\u793A\u7684\u5B57\u6BB5\u3002",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u7684\u56DE\u8C03\u51FD\u6570\u662F ",paraId:5,tocIndex:6},{value:"onOk",paraId:5,tocIndex:6},{value:"\u3001",paraId:5,tocIndex:6},{value:"onCancel",paraId:5,tocIndex:6},{value:"\uFF0C\u8FD9\u53EF\u80FD\u4E0E\u73B0\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\u7684\u56DE\u8C03\u4E0D\u4E00\u81F4\u3002\u8FD9\u6709\u4E24\u79CD\u5904\u7406\u65B9\u5F0F\uFF1A",paraId:5,tocIndex:6},{value:"\u5B9A\u4E49 ",paraId:6,tocIndex:6},{value:"props",paraId:6,tocIndex:6},{value:" \u7B26\u5408 ",paraId:6,tocIndex:6},{value:"AsyncModalProps",paraId:6,tocIndex:6},{value:" \u7C7B\u578B\u7684\u5F39\u7A97\uFF0C\u5E76\u5728\u5185\u90E8\u8C03\u7528\u73B0\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\u3002\u76F8\u5BF9\u4E8E\u505A\u4E00\u5C42 ",paraId:6,tocIndex:6},{value:"props",paraId:6,tocIndex:6},{value:" \u952E\u540D\u7684\u8F6C\u6362",paraId:6,tocIndex:6},{value:"\u4F7F\u7528\u5185\u7F6E\u7684\u9AD8\u9636\u51FD\u6570 ",paraId:6,tocIndex:6},{value:"withAsyncModalPropsMapper",paraId:6,tocIndex:6},{value:"\uFF0C\u4E5F\u662F\u505A\u4E86\u4E00\u5C42 ",paraId:6,tocIndex:6},{value:"props",paraId:6,tocIndex:6},{value:" \u952E\u540D\u7684\u8F6C\u6362",paraId:6,tocIndex:6},{value:"\u4E0B\u9762\u662F ",paraId:7,tocIndex:6},{value:"withAsyncModalPropsMapper",paraId:7,tocIndex:6},{value:" \u7684\u4F7F\u7528\uFF1A",paraId:7,tocIndex:6},{value:`import { withAsyncModalPropsMapper, ComputeAsyncModalProps } from 'async-modal-render'

interface BusinessModalProps {
  onClose: VoidFunction;
  onFinished: (num: number) => void;
  text: string;
  num?: number;
}
function BusinessModal(_: BusinessModalProps) {
  return <div />;
}

interface StandardModalProps {
  onCancel: VoidFunction;
  onOk: (num: number) => void;
  text: string;
  num?: number;
}

function StandardModal(_: StandardModalProps) {
  return <div />;
}

async function go() {
  const props: ComputeAsyncModalProps<StandardModalProps> = {
    text: 'string',
    num: 1,
    onOk: (_: number) => void 0,
    onCancel: (_?: unknown) => void 0,
  };

  // \u7C7B\u578B\u6B63\u786E
  const result: number = await asyncModalRender(StandardModal, props);
  console.log('result:', result);

  // \u7C7B\u578B\u6B63\u786E, \u4F7F\u7528 withAsyncModalPropsMapper\uFF0C\u5C06 onFinished \u6620\u5C04\u4E3A onOk, onClose \u6620\u5C04\u4E3A onCancel\uFF0C\u5185\u90E8\u4F1A\u81EA\u52A8\u5904\u7406 \u7C7B\u578B\u6620\u5C04\u3002
  const Comp = withAsyncModalPropsMapper(BusinessModal, ['onFinished', 'onClose']);
  const data: number = await asyncModalRender(Comp, props);
  console.log('data:', data);
}
`,paraId:8,tocIndex:6},{value:"\u8BE6\u7EC6 API \u6587\u6863\u8BF7\u53C2\u8003 ",paraId:9,tocIndex:7},{value:"API",paraId:10,tocIndex:7},{value:"\u3002",paraId:9,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u7EC4\u4EF6\u5FC5\u987B\u7EE7\u627F ",paraId:11,tocIndex:8},{value:"AsyncModalProps",paraId:11,tocIndex:8},{value:" \u63A5\u53E3",paraId:11,tocIndex:8},{value:"\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u5728\u9002\u5F53\u7684\u65F6\u673A\u8C03\u7528 ",paraId:11,tocIndex:8},{value:"onOk",paraId:11,tocIndex:8},{value:" \u6216 ",paraId:11,tocIndex:8},{value:"onCancel",paraId:11,tocIndex:8},{value:" \u65B9\u6CD5",paraId:11,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:11,tocIndex:8},{value:"useAsyncModalRender",paraId:11,tocIndex:8},{value:" \u65F6\uFF0C\u5FC5\u987B\u5C06 ",paraId:11,tocIndex:8},{value:"holder",paraId:11,tocIndex:8},{value:" \u5143\u7D20\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:11,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:11,tocIndex:8},{value:"useAsyncModalRenderContext",paraId:11,tocIndex:8},{value:" \u65F6\uFF0C\u5FC5\u987B\u786E\u4FDD\u7EC4\u4EF6\u5728 ",paraId:11,tocIndex:8},{value:"AsyncModalRenderProvider",paraId:11,tocIndex:8},{value:" \u5185\u90E8",paraId:11,tocIndex:8},{value:"\u53EA\u5141\u8BB8\u4ECE\u516C\u5F00\u7684\u6A21\u5757\u58F0\u660E\u4E2D\u5BFC\u5165\uFF0C\u4F8B\u5982\uFF1A",paraId:11,tocIndex:8},{value:"import { asyncModalRender } from 'async-modal-render'",paraId:11,tocIndex:8}]},16939:function(e,t){"use strict";t.Z=`import React from 'react';
import { AsyncModalProps } from 'async-modal-render';

export interface ModalProps extends AsyncModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open = true,
  title = '\u63D0\u793A',
  children,
  okText = '\u786E\u5B9A',
  cancelText = '\u53D6\u6D88',
  width = 520,
  footer,
  closable = true,
  maskClosable = true,
  onOk,
  onCancel,
}) => {
  if (!open) {
    return null;
  }
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel?.();
    }
  };

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // \u906E\u7F69\u5C42\u6837\u5F0F
  const maskStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // \u5F39\u7A97\u5BB9\u5668\u6837\u5F0F
  const modalStyle: React.CSSProperties = {
    position: 'relative',
    width: typeof width === 'number' ? \`\${width}px\` : width,
    maxWidth: 'calc(100vw - 32px)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    pointerEvents: 'auto',
    maxHeight: 'calc(100vh - 32px)',
    display: 'flex',
    flexDirection: 'column',
  };

  // \u5173\u95ED\u6309\u94AE\u6837\u5F0F
  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '17px',
    right: '17px',
    zIndex: 10,
    padding: 0,
    color: 'rgba(0, 0, 0, 0.45)',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    background: 'transparent',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: 'color 0.3s',
    fontSize: '16px',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // \u6807\u9898\u6837\u5F0F
  const headerStyle: React.CSSProperties = {
    padding: '16px 24px',
    color: 'rgba(0, 0, 0, 0.88)',
    background: 'transparent',
    borderRadius: '8px 8px 0 0',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.5,
    wordWrap: 'break-word',
  };

  // \u5185\u5BB9\u6837\u5F0F
  const bodyStyle: React.CSSProperties = {
    padding: '20px 24px',
    fontSize: '14px',
    lineHeight: 1.5714285714285714,
    color: 'rgba(0, 0, 0, 0.88)',
    flex: 1,
    overflowY: 'auto',
  };

  // \u5E95\u90E8\u6309\u94AE\u533A\u6837\u5F0F
  const footerStyle: React.CSSProperties = {
    padding: '10px 16px',
    textAlign: 'right',
    background: 'transparent',
    borderTop: '1px solid rgba(5, 5, 5, 0.06)',
    borderRadius: '0 0 8px 8px',
  };

  // \u6309\u94AE\u6837\u5F0F
  const buttonStyle: React.CSSProperties = {
    lineHeight: 1.5714285714285714,
    position: 'relative',
    display: 'inline-block',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
    userSelect: 'none',
    touchAction: 'manipulation',
    height: '32px',
    padding: '4px 15px',
    fontSize: '14px',
    borderRadius: '6px',
    outline: 'none',
    border: '1px solid #d9d9d9',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.88)',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    color: '#fff',
    backgroundColor: '#1677ff',
    borderColor: '#1677ff',
    boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
  };

  const renderFooter = () => {
    if (footer === null) {
      return null;
    }

    if (footer !== undefined) {
      return <div style={footerStyle}>{footer}</div>;
    }

    return (
      <div style={footerStyle}>
        <button
          style={buttonStyle}
          onClick={handleCancel}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            e.currentTarget.style.borderColor = '#d9d9d9';
          }}
        >
          {cancelText}
        </button>
        <button
          style={{ ...primaryButtonStyle, marginLeft: '8px' }}
          onClick={handleOk}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1677ff';
            e.currentTarget.style.borderColor = '#1677ff';
          }}
        >
          {okText}
        </button>
      </div>
    );
  };

  return (
    <div style={maskStyle} onClick={handleMaskClick}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {closable && (
          <button
            style={closeStyle}
            onClick={handleCancel}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.45)';
            }}
          >
            <span style={{ fontSize: '14px' }}>\u2715</span>
          </button>
        )}
        {title && <div style={headerStyle}>{title}</div>}
        <div style={bodyStyle}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default Modal;
`},7371:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
import { asyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

export default () => {
  const [result, setResult] = useState<string>('');

  const handleClick = async () => {
    try {
      const res = await asyncModalRender(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 asyncModalRender \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
    </div>
  );
};
`},89433:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
import { AsyncModalRenderProvider, useAsyncModalRenderContext, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

const ChildComponent = () => {
  const [result, setResult] = useState<string>('');
  const { render } = useAsyncModalRenderContext();

  const handleClick = async () => {
    try {
      const res = await render(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 AsyncModalRenderProvider \u548C useAsyncModalRenderContext \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
    </div>
  );
};

export default () => {
  return (
    <AsyncModalRenderProvider>
      <ChildComponent />
    </AsyncModalRenderProvider>
  );
};
`},2161:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
import { useAsyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface PersistentModalProps extends AsyncModalProps {
  open?: boolean;
}

const PersistentModal: React.FC<PersistentModalProps> = ({ open, onOk, onCancel }) => {
  const [count, setCount] = useState(0);

  return (
    <Modal 
      title="\u6301\u4E45\u5316\u5F39\u7A97" 
      open={open} 
      onOk={() => onOk?.()} 
      onCancel={() => onCancel?.()}
    >
      <p>\u8FD9\u4E2A\u5F39\u7A97\u7684\u72B6\u6001\u662F\u6301\u4E45\u5316\u7684\u3002</p>
      <p>\u5185\u90E8\u72B6\u6001 Count: {count}</p>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setCount(c => c + 1)} style={{ marginRight: 8 }}>\u589E\u52A0 (+)</button>
        <button onClick={() => setCount(c => c - 1)}>\u51CF\u5C11 (-)</button>
      </div>
      <p>\u5373\u4F7F\u5173\u95ED\u540E\u518D\u6253\u5F00\uFF0C\u5185\u90E8\u72B6\u6001\u4E5F\u4F1A\u88AB\u4FDD\u7559\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u6CA1\u6709\u88AB\u9500\u6BC1\u3002</p>
    </Modal>
  );
};

export default () => {
  const { render, holder, destroy } = useAsyncModalRender();

  const handleOpen = async () => {
    await render(PersistentModal, 
      {}, 
      { 
        persistent: 'my-unique-modal', // \u6307\u5B9A\u4E00\u4E2A\u56FA\u5B9A\u7684 key \u5B9E\u73B0\u6301\u4E45\u5316
        openField: 'open'             // \u6307\u5B9A\u63A7\u5236\u663E\u793A\u7684 prop \u5B57\u6BB5\u540D
      }
    );
  };

  const handleDestroy = () => {
    // \u9500\u6BC1\u6307\u5B9A\u7684\u6301\u4E45\u5316\u5F39\u7A97\uFF0C\u8FD9\u5C06\u6E05\u9664\u5176\u5185\u90E8\u72B6\u6001
    destroy({ persistent: 'my-unique-modal' });
  };

  return (
    <div>
      <button onClick={handleOpen} style={{ marginRight: 8 }}>\u6253\u5F00\u6301\u4E45\u5316\u5F39\u7A97</button>
      <button onClick={handleDestroy}>\u9500\u6BC1\u6301\u4E45\u5316\u5F39\u7A97 (\u91CD\u7F6E\u72B6\u6001)</button>
      {holder}
    </div>
  );
};
`},56294:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
import { useAsyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

export default () => {
  const [result, setResult] = useState<string>('');
  const { render, holder } = useAsyncModalRender();

  const handleClick = async () => {
    try {
      const res = await render(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 useAsyncModalRender \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
      {holder}
    </div>
  );
};
`},38498:function(e,t,n){var l=n(78770);function c(r){if(Array.isArray(r))return l(r)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},62657:function(e){function t(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},44279:function(e,t,n){var l=n(80038),c=n(68919);function r(o,a,i){return c()?(e.exports=r=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=r=function(f,s,u){var C=[null];C.push.apply(C,s);var _=Function.bind.apply(f,C),y=new _;return u&&l(y,u.prototype),y},e.exports.__esModule=!0,e.exports.default=e.exports),r.apply(null,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},83136:function(e,t,n){var l=n(38836),c=n(68919),r=n(75254);function o(a){var i=c();return function(){var f=l(a),s;if(i){var u=l(this).constructor;s=Reflect.construct(f,arguments,u)}else s=f.apply(this,arguments);return r(this,s)}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},38836:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},21742:function(e,t,n){var l=n(80038);function c(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),o&&l(r,o)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},18724:function(e){function t(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch(l){return typeof n=="function"}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},68919:function(e){function t(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},20698:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},91162:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},67825:function(e,t,n){var l=n(64382);function c(r,o){if(r==null)return{};var a=l(r,o),i,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)i=f[d],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(a[i]=r[i])}return a}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},64382:function(e){function t(n,l){if(n==null)return{};var c={},r=Object.keys(n),o,a;for(a=0;a<r.length;a++)o=r[a],!(l.indexOf(o)>=0)&&(c[o]=n[o]);return c}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},75254:function(e,t,n){var l=n(31759).default,c=n(62657);function r(o,a){if(a&&(l(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},80038:function(e){function t(n,l){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,l)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},15558:function(e,t,n){var l=n(38498),c=n(20698),r=n(31479),o=n(91162);function a(i){return l(i)||c(i)||r(i)||o()}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},53318:function(e,t,n){var l=n(38836),c=n(80038),r=n(18724),o=n(44279);function a(i){var d=typeof Map=="function"?new Map:void 0;return e.exports=a=function(s){if(s===null||!r(s))return s;if(typeof s!="function")throw new TypeError("Super expression must either be null or a function");if(typeof d!="undefined"){if(d.has(s))return d.get(s);d.set(s,u)}function u(){return o(s,arguments,l(this).constructor)}return u.prototype=Object.create(s.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),c(u,s)},e.exports.__esModule=!0,e.exports.default=e.exports,a(i)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
