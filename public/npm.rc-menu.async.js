"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[153],{95480:function(Or,an,p){p.d(an,{iz:function(){return vt},ck:function(){return He},BW:function(){return ct},Wd:function(){return Be},ZP:function(){return rr},Xl:function(){return ye}});var F=p(87462),R=p(4942),w=p(1413),Ce=p(74902),L=p(97685),B=p(91),on=p(93967),se=p.n(on),xe=p(39983),Ve=p(21770),St=p(91881),Rt=p(80334),n=p(62435),ln=p(61254),Zt=n.createContext(null);function xt(r,e){return r===void 0?null:"".concat(r,"-").concat(e)}function Pt(r){var e=n.useContext(Zt);return xt(e,r)}var un=p(56982),sn=["children","locked"],Q=n.createContext(null);function cn(r,e){var a=(0,w.Z)({},r);return Object.keys(e).forEach(function(t){var i=e[t];i!==void 0&&(a[t]=i)}),a}function Pe(r){var e=r.children,a=r.locked,t=(0,B.Z)(r,sn),i=n.useContext(Q),o=(0,un.Z)(function(){return cn(i,t)},[i,t],function(l,u){return!a&&(l[0]!==u[0]||!(0,St.Z)(l[1],u[1],!0))});return n.createElement(Q.Provider,{value:o},e)}var vn=[],Et=n.createContext(null);function Ue(){return n.useContext(Et)}var Kt=n.createContext(vn);function ye(r){var e=n.useContext(Kt);return n.useMemo(function(){return r!==void 0?[].concat((0,Ce.Z)(e),[r]):e},[e,r])}var Nt=n.createContext(null),dn=n.createContext({}),tt=dn,fn=p(88603),ie=p(15105),Ee=p(75164),nt=ie.Z.LEFT,rt=ie.Z.RIGHT,at=ie.Z.UP,ze=ie.Z.DOWN,Ge=ie.Z.ENTER,wt=ie.Z.ESC,Ke=ie.Z.HOME,Ne=ie.Z.END,Dt=[at,ze,nt,rt];function mn(r,e,a,t){var i,o="prev",l="next",u="children",c="parent";if(r==="inline"&&t===Ge)return{inlineTrigger:!0};var s=(0,R.Z)((0,R.Z)({},at,o),ze,l),E=(0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)({},nt,a?l:o),rt,a?o:l),ze,u),Ge,u),v=(0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)({},at,o),ze,l),Ge,u),wt,c),nt,a?u:c),rt,a?c:u),h={inline:s,horizontal:E,vertical:v,inlineSub:s,horizontalSub:v,verticalSub:v},Z=(i=h["".concat(r).concat(e?"":"Sub")])===null||i===void 0?void 0:i[t];switch(Z){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case c:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function pn(r){for(var e=r;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function hn(r,e){for(var a=r||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function it(r,e){var a=(0,fn.tS)(r,!0);return a.filter(function(t){return e.has(t)})}function Ot(r,e,a){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var i=it(r,e),o=i.length,l=i.findIndex(function(u){return a===u});return t<0?l===-1?l=o-1:l-=1:t>0&&(l+=1),l=(l+o)%o,i[l]}var ot=function(e,a){var t=new Set,i=new Map,o=new Map;return e.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(xt(a,l),"']"));u&&(t.add(u),o.set(u,l),i.set(l,u))}),{elements:t,key2element:i,element2key:o}};function gn(r,e,a,t,i,o,l,u,c,s){var E=n.useRef(),v=n.useRef();v.current=e;var h=function(){Ee.Z.cancel(E.current)};return n.useEffect(function(){return function(){h()}},[]),function(Z){var C=Z.which;if([].concat(Dt,[Ge,wt,Ke,Ne]).includes(C)){var N=o(),M=ot(N,t),y=M,K=y.elements,d=y.key2element,m=y.element2key,S=d.get(e),f=hn(S,K),b=m.get(f),k=mn(r,l(b,!0).length===1,a,C);if(!k&&C!==Ke&&C!==Ne)return;(Dt.includes(C)||[Ke,Ne].includes(C))&&Z.preventDefault();var x=function(z){if(z){var _=z,G=z.querySelector("a");G!=null&&G.getAttribute("href")&&(_=G);var te=m.get(z);u(te),h(),E.current=(0,Ee.Z)(function(){v.current===te&&_.focus()})}};if([Ke,Ne].includes(C)||k.sibling||!f){var V;!f||r==="inline"?V=i.current:V=pn(f);var O,A=it(V,K);C===Ke?O=A[0]:C===Ne?O=A[A.length-1]:O=Ot(V,K,f,k.offset),x(O)}else if(k.inlineTrigger)c(b);else if(k.offset>0)c(b,!0),h(),E.current=(0,Ee.Z)(function(){M=ot(N,t);var ee=f.getAttribute("aria-controls"),z=document.getElementById(ee),_=Ot(z,M.elements);x(_)},5);else if(k.offset<0){var U=l(b,!0),j=U[U.length-2],q=d.get(j);c(j,!1),x(q)}}s==null||s(Z)}}function Cn(r){Promise.resolve().then(r)}var lt="__RC_UTIL_PATH_SPLIT__",At=function(e){return e.join(lt)},yn=function(e){return e.split(lt)},ut="rc-menu-more";function bn(){var r=n.useState({}),e=(0,L.Z)(r,2),a=e[1],t=(0,n.useRef)(new Map),i=(0,n.useRef)(new Map),o=n.useState([]),l=(0,L.Z)(o,2),u=l[0],c=l[1],s=(0,n.useRef)(0),E=(0,n.useRef)(!1),v=function(){E.current||a({})},h=(0,n.useCallback)(function(d,m){var S=At(m);i.current.set(S,d),t.current.set(d,S),s.current+=1;var f=s.current;Cn(function(){f===s.current&&v()})},[]),Z=(0,n.useCallback)(function(d,m){var S=At(m);i.current.delete(S),t.current.delete(d)},[]),C=(0,n.useCallback)(function(d){c(d)},[]),N=(0,n.useCallback)(function(d,m){var S=t.current.get(d)||"",f=yn(S);return m&&u.includes(f[0])&&f.unshift(ut),f},[u]),M=(0,n.useCallback)(function(d,m){return d.some(function(S){var f=N(S,!0);return f.includes(m)})},[N]),y=function(){var m=(0,Ce.Z)(t.current.keys());return u.length&&m.push(ut),m},K=(0,n.useCallback)(function(d){var m="".concat(t.current.get(d)).concat(lt),S=new Set;return(0,Ce.Z)(i.current.keys()).forEach(function(f){f.startsWith(m)&&S.add(i.current.get(f))}),S},[]);return n.useEffect(function(){return function(){E.current=!0}},[]),{registerPath:h,unregisterPath:Z,refreshOverflowKeys:C,isSubPathKey:M,getKeyPath:N,getKeys:y,getSubPathKeys:K}}function we(r){var e=n.useRef(r);e.current=r;var a=n.useCallback(function(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(t=e.current)===null||t===void 0?void 0:t.call.apply(t,[e].concat(o))},[]);return r?a:void 0}var In=Math.random().toFixed(5).toString().slice(2),Lt=0;function Mn(r){var e=(0,Ve.Z)(r,{value:r}),a=(0,L.Z)(e,2),t=a[0],i=a[1];return n.useEffect(function(){Lt+=1;var o="".concat(In,"-").concat(Lt);i("rc-menu-uuid-".concat(o))},[]),t}var Sn=p(15671),Rn=p(43144),Zn=p(32531),xn=p(29388),$t=p(98423),Pn=p(42550);function kt(r,e,a,t){var i=n.useContext(Q),o=i.activeKey,l=i.onActive,u=i.onInactive,c={active:o===r};return e||(c.onMouseEnter=function(s){a==null||a({key:r,domEvent:s}),l(r)},c.onMouseLeave=function(s){t==null||t({key:r,domEvent:s}),u(r)}),c}function Tt(r){var e=n.useContext(Q),a=e.mode,t=e.rtl,i=e.inlineIndent;if(a!=="inline")return null;var o=r;return t?{paddingRight:o*i}:{paddingLeft:o*i}}function Ft(r){var e=r.icon,a=r.props,t=r.children,i;return e===null||e===!1?null:(typeof e=="function"?i=n.createElement(e,(0,w.Z)({},a)):typeof e!="boolean"&&(i=e),i||t||null)}var En=["item"];function We(r){var e=r.item,a=(0,B.Z)(r,En);return Object.defineProperty(a,"item",{get:function(){return(0,Rt.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}var Kn=["title","attribute","elementRef"],Nn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],wn=["active"],Dn=function(r){(0,Zn.Z)(a,r);var e=(0,xn.Z)(a);function a(){return(0,Sn.Z)(this,a),e.apply(this,arguments)}return(0,Rn.Z)(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,c=(0,B.Z)(i,Kn),s=(0,$t.Z)(c,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,Rt.ZP)(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(xe.Z.Item,(0,F.Z)({},l,{title:typeof o=="string"?o:void 0},s,{ref:u}))}}]),a}(n.Component),On=n.forwardRef(function(r,e){var a=r.style,t=r.className,i=r.eventKey,o=r.warnKey,l=r.disabled,u=r.itemIcon,c=r.children,s=r.role,E=r.onMouseEnter,v=r.onMouseLeave,h=r.onClick,Z=r.onKeyDown,C=r.onFocus,N=(0,B.Z)(r,Nn),M=Pt(i),y=n.useContext(Q),K=y.prefixCls,d=y.onItemClick,m=y.disabled,S=y.overflowDisabled,f=y.itemIcon,b=y.selectedKeys,k=y.onActive,x=n.useContext(tt),V=x._internalRenderMenuItem,O="".concat(K,"-item"),A=n.useRef(),U=n.useRef(),j=m||l,q=(0,Pn.x1)(e,U),ee=ye(i),z=function($){return{key:i,keyPath:(0,Ce.Z)(ee).reverse(),item:A.current,domEvent:$}},_=u||f,G=kt(i,j,E,v),te=G.active,ce=(0,B.Z)(G,wn),oe=b.includes(i),ve=Tt(ee.length),de=function($){if(!j){var ne=z($);h==null||h(We(ne)),d(ne)}},T=function($){if(Z==null||Z($),$.which===ie.Z.ENTER){var ne=z($);h==null||h(We(ne)),d(ne)}},Y=function($){k(i),C==null||C($)},Ie={};r.role==="option"&&(Ie["aria-selected"]=oe);var fe=n.createElement(Dn,(0,F.Z)({ref:A,elementRef:q,role:s===null?"none":s||"menuitem",tabIndex:l?null:-1,"data-menu-id":S&&M?null:M},N,ce,Ie,{component:"li","aria-disabled":l,style:(0,w.Z)((0,w.Z)({},ve),a),className:se()(O,(0,R.Z)((0,R.Z)((0,R.Z)({},"".concat(O,"-active"),te),"".concat(O,"-selected"),oe),"".concat(O,"-disabled"),j),t),onClick:de,onKeyDown:T,onFocus:Y}),c,n.createElement(Ft,{props:(0,w.Z)((0,w.Z)({},r),{},{isSelected:oe}),icon:_}));return V&&(fe=V(fe,r,{selected:oe})),fe});function An(r,e){var a=r.eventKey,t=Ue(),i=ye(a);return n.useEffect(function(){if(t)return t.registerPath(a,i),function(){t.unregisterPath(a,i)}},[i]),t?null:n.createElement(On,(0,F.Z)({},r,{ref:e}))}var He=n.forwardRef(An),Ln=["className","children"],$n=function(e,a){var t=e.className,i=e.children,o=(0,B.Z)(e,Ln),l=n.useContext(Q),u=l.prefixCls,c=l.mode,s=l.rtl;return n.createElement("ul",(0,F.Z)({className:se()(u,s&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(c==="inline"?"inline":"vertical"),t),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},Vt=n.forwardRef($n);Vt.displayName="SubMenuList";var Ut=Vt,kn=p(50344);function st(r,e){return(0,kn.Z)(r).map(function(a,t){if(n.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,c=u==null;c&&(u="tmp_key-".concat([].concat((0,Ce.Z)(e),[t]).join("-")));var s={key:u,eventKey:u};return n.cloneElement(a,s)}return a})}var Tn=p(40228),D={adjustX:1,adjustY:1},Fn={topLeft:{points:["bl","tl"],overflow:D},topRight:{points:["br","tr"],overflow:D},bottomLeft:{points:["tl","bl"],overflow:D},bottomRight:{points:["tr","br"],overflow:D},leftTop:{points:["tr","tl"],overflow:D},leftBottom:{points:["br","bl"],overflow:D},rightTop:{points:["tl","tr"],overflow:D},rightBottom:{points:["bl","br"],overflow:D}},Vn={topLeft:{points:["bl","tl"],overflow:D},topRight:{points:["br","tr"],overflow:D},bottomLeft:{points:["tl","bl"],overflow:D},bottomRight:{points:["tr","br"],overflow:D},rightTop:{points:["tr","tl"],overflow:D},rightBottom:{points:["br","bl"],overflow:D},leftTop:{points:["tl","tr"],overflow:D},leftBottom:{points:["bl","br"],overflow:D}},Ar=null;function zt(r,e,a){if(e)return e;if(a)return a[r]||a.other}var Un={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function zn(r){var e=r.prefixCls,a=r.visible,t=r.children,i=r.popup,o=r.popupStyle,l=r.popupClassName,u=r.popupOffset,c=r.disabled,s=r.mode,E=r.onVisibleChange,v=n.useContext(Q),h=v.getPopupContainer,Z=v.rtl,C=v.subMenuOpenDelay,N=v.subMenuCloseDelay,M=v.builtinPlacements,y=v.triggerSubMenuAction,K=v.forceSubMenuRender,d=v.rootClassName,m=v.motion,S=v.defaultMotions,f=n.useState(!1),b=(0,L.Z)(f,2),k=b[0],x=b[1],V=Z?(0,w.Z)((0,w.Z)({},Vn),M):(0,w.Z)((0,w.Z)({},Fn),M),O=Un[s],A=zt(s,m,S),U=n.useRef(A);s!=="inline"&&(U.current=A);var j=(0,w.Z)((0,w.Z)({},U.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),q=n.useRef();return n.useEffect(function(){return q.current=(0,Ee.Z)(function(){x(a)}),function(){Ee.Z.cancel(q.current)}},[a]),n.createElement(Tn.Z,{prefixCls:e,popupClassName:se()("".concat(e,"-popup"),(0,R.Z)({},"".concat(e,"-rtl"),Z),l,d),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:h,builtinPlacements:V,popupPlacement:O,popupVisible:k,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:c?[]:[y],mouseEnterDelay:C,mouseLeaveDelay:N,onPopupVisibleChange:E,forceRender:K,popupMotion:j,fresh:!0},t)}var Gn=p(82225);function Wn(r){var e=r.id,a=r.open,t=r.keyPath,i=r.children,o="inline",l=n.useContext(Q),u=l.prefixCls,c=l.forceSubMenuRender,s=l.motion,E=l.defaultMotions,v=l.mode,h=n.useRef(!1);h.current=v===o;var Z=n.useState(!h.current),C=(0,L.Z)(Z,2),N=C[0],M=C[1],y=h.current?a:!1;n.useEffect(function(){h.current&&M(!1)},[v]);var K=(0,w.Z)({},zt(o,s,E));t.length>1&&(K.motionAppear=!1);var d=K.onVisibleChanged;return K.onVisibleChanged=function(m){return!h.current&&!m&&M(!0),d==null?void 0:d(m)},N?null:n.createElement(Pe,{mode:o,locked:!h.current},n.createElement(Gn.ZP,(0,F.Z)({visible:y},K,{forceRender:c,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(m){var S=m.className,f=m.style;return n.createElement(Ut,{id:e,className:S,style:f},i)}))}var Hn=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Bn=["active"],jn=function(e){var a=e.style,t=e.className,i=e.title,o=e.eventKey,l=e.warnKey,u=e.disabled,c=e.internalPopupClose,s=e.children,E=e.itemIcon,v=e.expandIcon,h=e.popupClassName,Z=e.popupOffset,C=e.popupStyle,N=e.onClick,M=e.onMouseEnter,y=e.onMouseLeave,K=e.onTitleClick,d=e.onTitleMouseEnter,m=e.onTitleMouseLeave,S=(0,B.Z)(e,Hn),f=Pt(o),b=n.useContext(Q),k=b.prefixCls,x=b.mode,V=b.openKeys,O=b.disabled,A=b.overflowDisabled,U=b.activeKey,j=b.selectedKeys,q=b.itemIcon,ee=b.expandIcon,z=b.onItemClick,_=b.onOpenChange,G=b.onActive,te=n.useContext(tt),ce=te._internalRenderSubMenuItem,oe=n.useContext(Nt),ve=oe.isSubPathKey,de=ye(),T="".concat(k,"-submenu"),Y=O||u,Ie=n.useRef(),fe=n.useRef(),me=E!=null?E:q,$=v!=null?v:ee,ne=V.includes(o),le=!A&&ne,je=ve(j,o),Me=kt(o,Y,d,m),pe=Me.active,ft=(0,B.Z)(Me,Bn),Gt=n.useState(!1),mt=(0,L.Z)(Gt,2),Oe=mt[0],Ye=mt[1],Xe=function(J){Y||Ye(J)},re=function(J){Xe(!0),M==null||M({key:o,domEvent:J})},pt=function(J){Xe(!1),y==null||y({key:o,domEvent:J})},Ae=n.useMemo(function(){return pe||(x!=="inline"?Oe||ve([U],o):!1)},[x,pe,U,Oe,o,ve]),Je=Tt(de.length),ht=function(J){Y||(K==null||K({key:o,domEvent:J}),x==="inline"&&_(o,!ne))},Se=we(function(ae){N==null||N(We(ae)),z(ae)}),Le=function(J){x!=="inline"&&_(o,J)},$e=function(){G(o)},ke=f&&"".concat(f,"-popup"),Re=n.createElement("div",(0,F.Z)({role:"menuitem",style:Je,className:"".concat(T,"-title"),tabIndex:Y?null:-1,ref:Ie,title:typeof i=="string"?i:null,"data-menu-id":A&&f?null:f,"aria-expanded":le,"aria-haspopup":!0,"aria-controls":ke,"aria-disabled":Y,onClick:ht,onFocus:$e},ft),i,n.createElement(Ft,{icon:x!=="horizontal"?$:void 0,props:(0,w.Z)((0,w.Z)({},e),{},{isOpen:le,isSubMenu:!0})},n.createElement("i",{className:"".concat(T,"-arrow")}))),X=n.useRef(x);if(x!=="inline"&&de.length>1?X.current="vertical":X.current=x,!A){var Ze=X.current;Re=n.createElement(zn,{mode:Ze,prefixCls:T,visible:!c&&le&&x!=="inline",popupClassName:h,popupOffset:Z,popupStyle:C,popup:n.createElement(Pe,{mode:Ze==="horizontal"?"vertical":Ze},n.createElement(Ut,{id:ke,ref:fe},s)),disabled:Y,onVisibleChange:Le},Re)}var he=n.createElement(xe.Z.Item,(0,F.Z)({role:"none"},S,{component:"li",style:a,className:se()(T,"".concat(T,"-").concat(x),t,(0,R.Z)((0,R.Z)((0,R.Z)((0,R.Z)({},"".concat(T,"-open"),le),"".concat(T,"-active"),Ae),"".concat(T,"-selected"),je),"".concat(T,"-disabled"),Y)),onMouseEnter:re,onMouseLeave:pt}),Re,!A&&n.createElement(Wn,{id:ke,open:le,keyPath:de},s));return ce&&(he=ce(he,e,{selected:je,active:Ae,open:le,disabled:Y})),n.createElement(Pe,{onItemClick:Se,mode:x==="horizontal"?"vertical":x,itemIcon:me,expandIcon:$},he)};function Be(r){var e=r.eventKey,a=r.children,t=ye(e),i=st(a,t),o=Ue();n.useEffect(function(){if(o)return o.registerPath(e,t),function(){o.unregisterPath(e,t)}},[t]);var l;return o?l=i:l=n.createElement(jn,r,i),n.createElement(Kt.Provider,{value:t},l)}var Yn=p(71002),Xn=["className","title","eventKey","children"],Jn=["children"],Qn=function(e){var a=e.className,t=e.title,i=e.eventKey,o=e.children,l=(0,B.Z)(e,Xn),u=n.useContext(Q),c=u.prefixCls,s="".concat(c,"-item-group");return n.createElement("li",(0,F.Z)({role:"presentation"},l,{onClick:function(v){return v.stopPropagation()},className:se()(s,a)}),n.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof t=="string"?t:void 0},t),n.createElement("ul",{role:"group",className:"".concat(s,"-list")},o))};function ct(r){var e=r.children,a=(0,B.Z)(r,Jn),t=ye(a.eventKey),i=st(e,t),o=Ue();return o?i:n.createElement(Qn,(0,$t.Z)(a,["warnKey"]),i)}function vt(r){var e=r.className,a=r.style,t=n.useContext(Q),i=t.prefixCls,o=Ue();return o?null:n.createElement("li",{role:"separator",className:se()("".concat(i,"-item-divider"),e),style:a})}var qn=["label","children","key","type"];function dt(r){return(r||[]).map(function(e,a){if(e&&(0,Yn.Z)(e)==="object"){var t=e,i=t.label,o=t.children,l=t.key,u=t.type,c=(0,B.Z)(t,qn),s=l!=null?l:"tmp-".concat(a);return o||u==="group"?u==="group"?n.createElement(ct,(0,F.Z)({key:s},c,{title:i}),dt(o)):n.createElement(Be,(0,F.Z)({key:s},c,{title:i}),dt(o)):u==="divider"?n.createElement(vt,(0,F.Z)({key:s},c)):n.createElement(He,(0,F.Z)({key:s},c),i)}return null}).filter(function(e){return e})}function _n(r,e,a){var t=r;return e&&(t=dt(e)),st(t,a)}var er=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],be=[],tr=n.forwardRef(function(r,e){var a,t=r,i=t.prefixCls,o=i===void 0?"rc-menu":i,l=t.rootClassName,u=t.style,c=t.className,s=t.tabIndex,E=s===void 0?0:s,v=t.items,h=t.children,Z=t.direction,C=t.id,N=t.mode,M=N===void 0?"vertical":N,y=t.inlineCollapsed,K=t.disabled,d=t.disabledOverflow,m=t.subMenuOpenDelay,S=m===void 0?.1:m,f=t.subMenuCloseDelay,b=f===void 0?.1:f,k=t.forceSubMenuRender,x=t.defaultOpenKeys,V=t.openKeys,O=t.activeKey,A=t.defaultActiveFirst,U=t.selectable,j=U===void 0?!0:U,q=t.multiple,ee=q===void 0?!1:q,z=t.defaultSelectedKeys,_=t.selectedKeys,G=t.onSelect,te=t.onDeselect,ce=t.inlineIndent,oe=ce===void 0?24:ce,ve=t.motion,de=t.defaultMotions,T=t.triggerSubMenuAction,Y=T===void 0?"hover":T,Ie=t.builtinPlacements,fe=t.itemIcon,me=t.expandIcon,$=t.overflowedIndicator,ne=$===void 0?"...":$,le=t.overflowedIndicatorPopupClassName,je=t.getPopupContainer,Me=t.onClick,pe=t.onOpenChange,ft=t.onKeyDown,Gt=t.openAnimation,mt=t.openTransitionName,Oe=t._internalRenderMenuItem,Ye=t._internalRenderSubMenuItem,Xe=(0,B.Z)(t,er),re=n.useMemo(function(){return _n(h,v,be)},[h,v]),pt=n.useState(!1),Ae=(0,L.Z)(pt,2),Je=Ae[0],ht=Ae[1],Se=n.useRef(),Le=Mn(C),$e=Z==="rtl",ke=(0,Ve.Z)(x,{value:V,postState:function(g){return g||be}}),Re=(0,L.Z)(ke,2),X=Re[0],Ze=Re[1],he=function(g){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function W(){Ze(g),pe==null||pe(g)}I?(0,ln.flushSync)(W):W()},ae=n.useState(X),J=(0,L.Z)(ae,2),ar=J[0],ir=J[1],gt=n.useRef(!1),or=n.useMemo(function(){return(M==="inline"||M==="vertical")&&y?["vertical",y]:[M,!1]},[M,y]),Wt=(0,L.Z)(or,2),Qe=Wt[0],Ct=Wt[1],Ht=Qe==="inline",lr=n.useState(Qe),Bt=(0,L.Z)(lr,2),ue=Bt[0],ur=Bt[1],sr=n.useState(Ct),jt=(0,L.Z)(sr,2),cr=jt[0],vr=jt[1];n.useEffect(function(){ur(Qe),vr(Ct),gt.current&&(Ht?Ze(ar):he(be))},[Qe,Ct]);var dr=n.useState(0),Yt=(0,L.Z)(dr,2),qe=Yt[0],fr=Yt[1],yt=qe>=re.length-1||ue!=="horizontal"||d;n.useEffect(function(){Ht&&ir(X)},[X]),n.useEffect(function(){return gt.current=!0,function(){gt.current=!1}},[]);var ge=bn(),Xt=ge.registerPath,Jt=ge.unregisterPath,mr=ge.refreshOverflowKeys,Qt=ge.isSubPathKey,pr=ge.getKeyPath,qt=ge.getKeys,hr=ge.getSubPathKeys,gr=n.useMemo(function(){return{registerPath:Xt,unregisterPath:Jt}},[Xt,Jt]),Cr=n.useMemo(function(){return{isSubPathKey:Qt}},[Qt]);n.useEffect(function(){mr(yt?be:re.slice(qe+1).map(function(P){return P.key}))},[qe,yt]);var yr=(0,Ve.Z)(O||A&&((a=re[0])===null||a===void 0?void 0:a.key),{value:O}),_t=(0,L.Z)(yr,2),Te=_t[0],bt=_t[1],br=we(function(P){bt(P)}),Ir=we(function(){bt(void 0)});(0,n.useImperativeHandle)(e,function(){return{list:Se.current,focus:function(g){var I,W=qt(),H=ot(W,Le),et=H.elements,It=H.key2element,wr=H.element2key,nn=it(Se.current,et),rn=Te!=null?Te:nn[0]?wr.get(nn[0]):(I=re.find(function(Dr){return!Dr.props.disabled}))===null||I===void 0?void 0:I.key,Fe=It.get(rn);if(rn&&Fe){var Mt;Fe==null||(Mt=Fe.focus)===null||Mt===void 0||Mt.call(Fe,g)}}}});var Mr=(0,Ve.Z)(z||[],{value:_,postState:function(g){return Array.isArray(g)?g:g==null?be:[g]}}),en=(0,L.Z)(Mr,2),_e=en[0],Sr=en[1],Rr=function(g){if(j){var I=g.key,W=_e.includes(I),H;ee?W?H=_e.filter(function(It){return It!==I}):H=[].concat((0,Ce.Z)(_e),[I]):H=[I],Sr(H);var et=(0,w.Z)((0,w.Z)({},g),{},{selectedKeys:H});W?te==null||te(et):G==null||G(et)}!ee&&X.length&&ue!=="inline"&&he(be)},Zr=we(function(P){Me==null||Me(We(P)),Rr(P)}),tn=we(function(P,g){var I=X.filter(function(H){return H!==P});if(g)I.push(P);else if(ue!=="inline"){var W=hr(P);I=I.filter(function(H){return!W.has(H)})}(0,St.Z)(X,I,!0)||he(I,!0)}),xr=function(g,I){var W=I!=null?I:!X.includes(g);tn(g,W)},Pr=gn(ue,Te,$e,Le,Se,qt,pr,bt,xr,ft);n.useEffect(function(){ht(!0)},[]);var Er=n.useMemo(function(){return{_internalRenderMenuItem:Oe,_internalRenderSubMenuItem:Ye}},[Oe,Ye]),Kr=ue!=="horizontal"||d?re:re.map(function(P,g){return n.createElement(Pe,{key:P.key,overflowDisabled:g>qe},P)}),Nr=n.createElement(xe.Z,(0,F.Z)({id:C,ref:Se,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:He,className:se()(o,"".concat(o,"-root"),"".concat(o,"-").concat(ue),c,(0,R.Z)((0,R.Z)({},"".concat(o,"-inline-collapsed"),cr),"".concat(o,"-rtl"),$e),l),dir:Z,style:u,role:"menu",tabIndex:E,data:Kr,renderRawItem:function(g){return g},renderRawRest:function(g){var I=g.length,W=I?re.slice(-I):null;return n.createElement(Be,{eventKey:ut,title:ne,disabled:yt,internalPopupClose:I===0,popupClassName:le},W)},maxCount:ue!=="horizontal"||d?xe.Z.INVALIDATE:xe.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(g){fr(g)},onKeyDown:Pr},Xe));return n.createElement(tt.Provider,{value:Er},n.createElement(Zt.Provider,{value:Le},n.createElement(Pe,{prefixCls:o,rootClassName:l,mode:ue,openKeys:X,rtl:$e,disabled:K,motion:Je?ve:null,defaultMotions:Je?de:null,activeKey:Te,onActive:br,onInactive:Ir,selectedKeys:_e,inlineIndent:oe,subMenuOpenDelay:S,subMenuCloseDelay:b,forceSubMenuRender:k,builtinPlacements:Ie,triggerSubMenuAction:Y,getPopupContainer:je,itemIcon:fe,expandIcon:me,onItemClick:Zr,onOpenChange:tn},n.createElement(Nt.Provider,{value:Cr},Nr),n.createElement("div",{style:{display:"none"},"aria-hidden":!0},n.createElement(Et.Provider,{value:gr},re)))))}),nr=tr,De=nr;De.Item=He,De.SubMenu=Be,De.ItemGroup=ct,De.Divider=vt;var rr=De}}]);
