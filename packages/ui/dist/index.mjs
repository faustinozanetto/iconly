"use client";
var Le=Object.defineProperty,Be=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var pe=(e,o,t)=>o in e?Le(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))ce.call(o,t)&&pe(e,t,o[t]);if(E)for(var t of E(o))me.call(o,t)&&pe(e,t,o[t]);return e},p=(e,o)=>Be(e,Me(o));var s=(e,o)=>{var t={};for(var n in e)ce.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&E)for(var n of E(e))o.indexOf(n)<0&&me.call(e,n)&&(t[n]=e[n]);return t};import*as de from"react";import{Slot as Ge}from"@radix-ui/react-slot";import{cva as We}from"class-variance-authority";import{clsx as Ee}from"clsx";import{twMerge as Fe}from"tailwind-merge";var i=(...e)=>Fe(Ee(e));import{jsx as ze}from"react/jsx-runtime";var He=We("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),S=de.forwardRef((d,r)=>{var f=d,{className:e,variant:o,size:t,asChild:n=!1}=f,l=s(f,["className","variant","size","asChild"]);return ze(n?Ge:"button",a({className:i(He({variant:o,size:t,className:e})),ref:r},l))});S.displayName="Button";import*as fe from"react";import*as _ from"@radix-ui/react-separator";import{jsx as Ae}from"react/jsx-runtime";var De=fe.forwardRef((r,l)=>{var d=r,{className:e,orientation:o="horizontal",decorative:t=!0}=d,n=s(d,["className","orientation","decorative"]);return Ae(_.Root,a({ref:l,decorative:t,orientation:o,className:i("shrink-0 bg-border",o==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e)},n))});De.displayName=_.Root.displayName;import{jsx as Oe}from"react/jsx-runtime";function tr(t){var n=t,{className:e}=n,o=s(n,["className"]);return Oe("div",a({className:i("animate-pulse rounded-md bg-primary/10",e)},o))}import Ue from"react";import{cva as $e}from"class-variance-authority";var c=$e("",{variants:{size:{sm:"h-4 w-4",base:"h-5 w-5",lg:"h-6 w-6"}},defaultVariants:{size:"base"}});import{jsx as ue,jsxs as Qe}from"react/jsx-runtime";var B=Ue.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Qe("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[ue("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),ue("polyline",{points:"6 9 12 15 18 9"})]}))});B.displayName="ChevronDownIcon";import _e from"react";import{jsx as F,jsxs as Ze}from"react/jsx-runtime";var qe=_e.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Ze("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[F("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),F("path",{d:"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2"}),F("path",{d:"M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1"}),F("rect",{x:"9",y:"3",width:"6",height:"4",rx:"2"})]}))});qe.displayName="CopyIcon";import Je from"react";import{jsx as q,jsxs as Xe}from"react/jsx-runtime";var Ke=Je.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Xe("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[q("circle",{r:"10",cy:"12",cx:"12"}),q("line",{y2:"12",x2:"12",y1:"8",x1:"12"}),q("line",{y2:"16",x2:"12.01",y1:"16",x1:"12"})]}))});Ke.displayName="DangerIcon";import Ye from"react";import{jsx as w,jsxs as eo}from"react/jsx-runtime";var je=Ye.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return eo("svg",p(a({ref:n,className:i(c({size:o}),"animate-spin",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[w("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),w("line",{x1:"12",y1:"6",x2:"12",y2:"3"}),w("line",{x1:"16.25",y1:"7.75",x2:"18.4",y2:"5.6"}),w("line",{x1:"18",y1:"12",x2:"21",y2:"12"}),w("line",{x1:"16.25",y1:"16.25",x2:"18.4",y2:"18.4"}),w("line",{x1:"12",y1:"18",x2:"12",y2:"21"}),w("line",{x1:"7.75",y1:"16.25",x2:"5.6",y2:"18.4"}),w("line",{x1:"6",y1:"12",x2:"3",y2:"12"}),w("line",{x1:"7.75",y1:"7.75",x2:"5.6",y2:"5.6"})]}))});je.displayName="LoadingIcon";import oo from"react";import{jsx as h,jsxs as ro}from"react/jsx-runtime";var to=oo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return ro("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[h("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),h("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),h("line",{x1:"7",y1:"17",x2:"7",y2:"17.01"}),h("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),h("line",{x1:"7",y1:"7",x2:"7",y2:"7.01"}),h("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),h("line",{x1:"17",y1:"7",x2:"17",y2:"7.01"}),h("line",{x1:"14",y1:"14",x2:"17",y2:"14"}),h("line",{x1:"20",y1:"14",x2:"20",y2:"14.01"}),h("line",{x1:"14",y1:"14",x2:"14",y2:"17"}),h("line",{x1:"14",y1:"20",x2:"17",y2:"20"}),h("line",{x1:"17",y1:"17",x2:"20",y2:"17"}),h("line",{x1:"20",y1:"17",x2:"20",y2:"20"})]}))});to.displayName="QRCodeIcon";import no from"react";import{jsx as C,jsxs as so}from"react/jsx-runtime";var ao=no.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return so("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[C("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),C("circle",{cx:"6",cy:"12",r:"3"}),C("circle",{cx:"18",cy:"6",r:"3"}),C("circle",{cx:"18",cy:"18",r:"3"}),C("line",{x1:"8.7",y1:"10.7",x2:"15.3",y2:"7.3"}),C("line",{x1:"8.7",y1:"13.3",x2:"15.3",y2:"16.7"})]}))});ao.displayName="ShareIcon";import io from"react";import{jsx as ve,jsxs as lo}from"react/jsx-runtime";var Z=io.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return lo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[ve("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),ve("polyline",{points:"22 4 12 14.01 9 11.01"})]}))});Z.displayName="SuccessIcon";import po from"react";import{jsx as I,jsxs as mo}from"react/jsx-runtime";var co=po.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return mo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[I("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),I("path",{d:"M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"}),I("path",{d:"M6.343 17.657l-1.414 1.414"}),I("path",{d:"M6.343 6.343l-1.414 -1.414"}),I("path",{d:"M17.657 6.343l1.414 -1.414"}),I("path",{d:"M17.657 17.657l1.414 1.414"}),I("path",{d:"M4 12h-2"}),I("path",{d:"M12 4v-2"}),I("path",{d:"M20 12h2"}),I("path",{d:"M12 20v2"})]}))});co.displayName="SunIcon";import fo from"react";import{jsx as he,jsxs as vo}from"react/jsx-runtime";var uo=fo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return vo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[he("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),he("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"})]}))});uo.displayName="MoonIcon";import ho from"react";import{jsx as xe}from"react/jsx-runtime";var xo=ho.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return xe("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:xe("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}))});xo.displayName="CloseIcon";import yo from"react";import{jsx as ye,jsxs as Io}from"react/jsx-runtime";var go=yo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Io("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[ye("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),ye("polyline",{points:"15 6 9 12 15 18"})]}))});go.displayName="ChevronLeftIcon";import wo from"react";import{jsx as ge,jsxs as Ro}from"react/jsx-runtime";var Po=wo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Ro("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[ge("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),ge("polyline",{points:"9 6 15 12 9 18"})]}))});Po.displayName="ChevronRightIcon";import ko from"react";import{jsx as b,jsxs as So}from"react/jsx-runtime";var bo=ko.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return So("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[b("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),b("rect",{x:"4",y:"5",width:"16",height:"16",rx:"2"}),b("line",{x1:"16",y1:"3",x2:"16",y2:"7"}),b("line",{x1:"8",y1:"3",x2:"8",y2:"7"}),b("line",{x1:"4",y1:"11",x2:"20",y2:"11"}),b("line",{x1:"11",y1:"15",x2:"12",y2:"15"}),b("line",{x1:"12",y1:"15",x2:"12",y2:"18"})]}))});bo.displayName="CalendarIcon";import Co from"react";import{jsx as V,jsxs as Vo}from"react/jsx-runtime";var J=Co.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Vo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[V("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),V("line",{x1:"4",y1:"7",x2:"20",y2:"7"}),V("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),V("line",{x1:"14",y1:"11",x2:"14",y2:"17"}),V("path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"}),V("path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"})]}))});J.displayName="TrashIcon";import No from"react";import{jsx as K,jsxs as Lo}from"react/jsx-runtime";var To=No.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Lo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[K("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),K("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),K("path",{d:"M7 12h14l-3 -3m0 6l3 -3"})]}))});To.displayName="LogoutIcon";import Bo from"react";import{jsx as X,jsxs as Eo}from"react/jsx-runtime";var Mo=Bo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Eo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[X("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),X("circle",{cx:"12",cy:"7",r:"4"}),X("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"})]}))});Mo.displayName="UserIcon";import Fo from"react";import{jsx as G,jsxs as Wo}from"react/jsx-runtime";var Go=Fo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Wo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[G("path",{fill:"none",d:"M0 0h24v24H0z",stroke:"none"}),G("path",{d:"M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"}),G("line",{y2:"9",x2:"16",y1:"9",x1:"8"}),G("line",{y2:"13",x2:"14",y1:"13",x1:"8"})]}))});Go.displayName="InfoIcon";import Ho from"react";import{jsx as W,jsxs as Do}from"react/jsx-runtime";var zo=Ho.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Do("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[W("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),W("path",{d:"M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"}),W("line",{x1:"13",y1:"8",x2:"15",y2:"8"}),W("line",{x1:"13",y1:"12",x2:"15",y2:"12"})]}))});zo.displayName="BookIcon";import Ao from"react";import{jsx as H,jsxs as $o}from"react/jsx-runtime";var Oo=Ao.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return $o("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[H("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),H("path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}),H("path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}),H("path",{d:"M16 5l3 3"})]}))});Oo.displayName="EditIcon";import Uo from"react";import{jsx as Y,jsxs as _o}from"react/jsx-runtime";var Qo=Uo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return _o("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[Y("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Y("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Y("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}))});Qo.displayName="PlusIcon";import qo from"react";import{jsx as z,jsxs as Jo}from"react/jsx-runtime";var Zo=qo.forwardRef((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Jo("svg",p(a({ref:n,className:i(c({size:o}),"stroke-neutral-900 dark:stroke-neutral-50",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t),{children:[z("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),z("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}),z("polyline",{points:"7 11 12 16 17 11"}),z("line",{x1:"12",y1:"4",x2:"12",y2:"16"})]}))});Zo.displayName="DownloadIcon";import{forwardRef as Ko}from"react";import{jsx as D,jsxs as Xo}from"react/jsx-runtime";var j=Ko((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return Xo("svg",p(a({className:i(c({size:o}),"stroke-current",e),fill:"none",ref:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),{children:[D("path",{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}),D("circle",{cx:"12",cy:"12",r:"9"}),D("path",{d:"M12 9v4"}),D("path",{d:"M12 16v.01"})]}))});j.displayName="ExclamationIcon";import{forwardRef as Yo}from"react";import{jsx as Ie,jsxs as jo}from"react/jsx-runtime";var ee=Yo((l,n)=>{var r=l,{className:e,size:o}=r,t=s(r,["className","size"]);return jo("svg",p(a({className:i(c({size:o}),"stroke-current",e),fill:"none",ref:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t),{children:[Ie("path",{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}),Ie("path",{d:"M5 12l5 5l10 -10"})]}))});ee.displayName="CheckIcon";import*as v from"react";import{Slot as rt}from"@radix-ui/react-slot";import{Controller as nt,FormProvider as at,useFormContext as st}from"react-hook-form";import*as we from"react";import*as oe from"@radix-ui/react-label";import{cva as et}from"class-variance-authority";import{jsx as tt}from"react/jsx-runtime";var ot=et("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),te=we.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);return tt(oe.Root,a({ref:t,className:i(ot(),e)},o))});te.displayName=oe.Root.displayName;import{jsx as k}from"react/jsx-runtime";var gs=at,Pe=v.createContext({}),Is=o=>{var e=s(o,[]);return k(Pe.Provider,{value:{name:e.name},children:k(nt,a({},e))})},A=()=>{let e=v.useContext(Pe),o=v.useContext(Re),{getFieldState:t,formState:n}=st(),l=t(e.name,n);if(!e)throw new Error("useFormField should be used within <FormField>");let{id:r}=o;return a({id:r,name:e.name,formItemId:`${r}-form-item`,formDescriptionId:`${r}-form-item-description`,formMessageId:`${r}-form-item-message`},l)},Re=v.createContext({}),it=v.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);let r=v.useId();return k(Re.Provider,{value:{id:r},children:k("div",a({ref:t,className:i("space-y-2",e)},o))})});it.displayName="FormItem";var lt=v.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);let{error:r,formItemId:d}=A();return k(te,a({ref:t,className:i(r&&"text-destructive",e),htmlFor:d},o))});lt.displayName="FormLabel";var pt=v.forwardRef((t,o)=>{var e=s(t,[]);let{error:n,formItemId:l,formDescriptionId:r,formMessageId:d}=A();return k(rt,a({ref:o,id:l,"aria-describedby":n?`${r} ${d}`:`${r}`,"aria-invalid":!!n},e))});pt.displayName="FormControl";var ct=v.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);let{formDescriptionId:r}=A();return k("p",a({ref:t,id:r,className:i("text-sm text-muted-foreground",e)},o))});ct.displayName="FormDescription";var mt=v.forwardRef((l,n)=>{var r=l,{className:e,children:o}=r,t=s(r,["className","children"]);let{error:d,formMessageId:f}=A(),u=d?String(d==null?void 0:d.message):o;return u?k("p",p(a({ref:n,id:f,className:i("text-sm font-medium text-destructive",e)},t),{children:u})):null});mt.displayName="FormMessage";import*as N from"react";import*as m from"@radix-ui/react-select";import{jsx as y,jsxs as ke}from"react/jsx-runtime";var Cs=m.Root,Vs=m.Group,Ns=m.Value,dt=N.forwardRef((l,n)=>{var r=l,{className:e,children:o}=r,t=s(r,["className","children"]);return ke(m.Trigger,p(a({ref:n,className:i("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e)},t),{children:[o,y(m.Icon,{asChild:!0,children:y(B,{className:"h-4 w-4 opacity-50"})})]}))});dt.displayName=m.Trigger.displayName;var ft=N.forwardRef((r,l)=>{var d=r,{className:e,children:o,position:t="popper"}=d,n=s(d,["className","children","position"]);return y(m.Portal,{children:y(m.Content,p(a({ref:l,className:i("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t},n),{children:y(m.Viewport,{className:i("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:o})}))})});ft.displayName=m.Content.displayName;var ut=N.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);return y(m.Label,a({ref:t,className:i("py-1.5 pl-8 pr-2 text-sm font-semibold",e)},o))});ut.displayName=m.Label.displayName;var vt=N.forwardRef((l,n)=>{var r=l,{className:e,children:o}=r,t=s(r,["className","children"]);return ke(m.Item,p(a({ref:n,className:i("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e)},t),{children:[y("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:y(m.ItemIndicator,{children:y(Z,{className:"h-4 w-4"})})}),y(m.ItemText,{children:o})]}))});vt.displayName=m.Item.displayName;var ht=N.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);return y(m.Separator,a({ref:t,className:i("-mx-1 my-1 h-px bg-muted",e)},o))});ht.displayName=m.Separator.displayName;import*as be from"react";import{jsx as xt}from"react/jsx-runtime";var M=be.forwardRef((l,n)=>{var r=l,{className:e,type:o}=r,t=s(r,["className","type"]);return xt("input",a({type:o,className:i("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n},t))});M.displayName="Input";import{AnimatePresence as Rt}from"framer-motion";import{cva as kt}from"class-variance-authority";import{useContext as gt}from"react";import{createContext as yt}from"react";var O=yt({});var $=()=>{let e=gt(O);if(!e)throw new Error("Tried to use ThemeContext with no context avaiable!");return e};import{clsx as It}from"clsx";import{motion as wt}from"framer-motion";import{jsx as P,jsxs as Se}from"react/jsx-runtime";var Pt=e=>{let{toast:o}=e,t=()=>{switch(o.variant){case"info":return Se("svg",{className:"h-5 w-5 stroke-current",fill:"none",height:"50px",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"50px",xmlns:"http://www.w3.org/2000/svg",children:[P("path",{d:"M0 0h24v24H0z",fill:"none",stroke:"none"}),P("path",{d:"M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"}),P("line",{x1:"8",x2:"16",y1:"9",y2:"9"}),P("line",{x1:"8",x2:"14",y1:"13",y2:"13"})]});case"success":return P(ee,{});case"error":return P(j,{})}};return P(wt.li,{animate:{height:"auto",opacity:1,transition:{type:"spring",bounce:.3}},className:"m-2 flex flex-col items-center",exit:{height:0,opacity:0},initial:{height:0,opacity:0},transition:{duration:.6,type:"spring",bounce:0},children:Se("div",{className:It("flex items-center overflow-hidden rounded-lg p-4 text-background backdrop-blur-md border",o.variant==="success"&&"bg-success/85",o.variant==="error"&&"bg-destructive/85",o.variant==="info"&&"bg-informative/85"),children:[P("div",{className:"mr-2 flex-shrink-0",children:t()}),P("p",{className:"text-sm font-medium md:text-base",children:o.content})]})})},Ce=Pt;import{jsx as U}from"react/jsx-runtime";var bt=kt("pointer-events-none fixed z-[999] flex flex-col w-full",{variants:{position:{"top-left":"top-0 left-0","top-right":"top-0 right-0","bottom-left":"bottom-0 left-0","bottom-right":"bottom-0 right-0","top-center":"top-0 left-1/2 -translate-x-1/2","bottom-center":"bottom-0 left-1/2 -translate-x-1/2"}},defaultVariants:{position:"bottom-center"}}),Ys=e=>{let{position:o}=e,{state:t}=$();return U("div",{className:i(bt({position:o})),children:U("ul",{children:U(Rt,{initial:!1,children:t.toasts.map(n=>U(Ce,{toast:n},n.id))})})})};import{useReducer as St}from"react";var Ve=(e,o)=>{switch(o.type){case 0:return p(a({},e),{toasts:[...e.toasts,o.payload.toast]});case 1:{let t=e.toasts.filter(n=>n.id!==o.payload.toast);return p(a({},e),{toasts:t})}default:throw new Error("The action you requested does not exists!")}};import{jsx as Ct}from"react/jsx-runtime";var ii=e=>{let{children:o}=e,[t,n]=St(Ve,{toasts:[]});return Ct(O.Provider,{value:{state:t,dispatch:n},children:o})};import*as Ne from"react";import*as R from"@radix-ui/react-slider";import{jsx as re,jsxs as Vt}from"react/jsx-runtime";var ne=Ne.forwardRef((n,t)=>{var l=n,{className:e}=l,o=s(l,["className"]);return Vt(R.Root,p(a({ref:t,className:i("relative flex w-full touch-none select-none items-center",e)},o),{children:[re(R.Track,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:re(R.Range,{className:"absolute h-full bg-primary"})}),re(R.Thumb,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}))});ne.displayName=R.Root.displayName;import Tt,{useEffect as Lt,useState as Bt}from"react";import{useState as Nt}from"react";import{jsx as T,jsxs as ae}from"react/jsx-runtime";var L=e=>{let{id:o,label:t,disabled:n,onInputReseted:l,children:r,reseteable:d=!0,initiallyCollapsed:f=!1}=e,[u,x]=Nt(f);return ae("div",{className:"space-y-2",children:[ae("div",{className:"flex items-center justify-between",children:[T("label",{htmlFor:o,className:"block font-semibold text-sm",children:T("span",{children:t})}),ae("div",{className:"flex items-center space-x-1",children:[d?T(S,{size:"icon",variant:"ghost","aria-label":"Reset Input",disabled:n,onClick:l,children:T(J,{})}):null,T(S,{size:"icon","aria-label":"Collapse Input",onClick:()=>{x(Q=>!Q)},children:T(B,{className:i(u&&"rotate-180","transition-transform")})})]})]}),!u&&r]})};import{jsx as se,jsxs as Et}from"react/jsx-runtime";var Mt=Tt.forwardRef((e,o)=>{let u=e,{id:t="default-id",label:n,onValueChange:l}=u,r=s(u,["id","label","onValueChange"]),[d,f]=Bt(Number(r.placeholder)||0);return Lt(()=>{l(Number(d))},[d]),se(L,{id:t,label:n,disabled:r.disabled||!1,onInputReseted:()=>{f(Number(r.placeholder)||0)},children:Et("div",{className:"flex items-center justify-between",children:[se(ne,a({id:t,ref:o,value:[d],onValueChange:x=>f(x[0])},r)),se(M,{id:`manual-${t}`,type:"text",inputMode:"numeric",value:d,className:"ml-4 h-9 max-w-[50px] rounded-lg font-semibold text-center",onChange:x=>f(Number.parseInt(x.target.value))})]})})});Mt.displayName="Range Input";import Ft,{useEffect as Gt,useState as Wt}from"react";import{jsx as ie,jsxs as zt}from"react/jsx-runtime";var Ht=Ft.forwardRef((e,o)=>{let u=e,{id:t="default-id",label:n,onValueChange:l}=u,r=s(u,["id","label","onValueChange"]),[d,f]=Wt(r.placeholder||"");return Gt(()=>{l(d)},[d]),ie(L,{id:t,label:n,disabled:r.disabled||!1,onInputReseted:()=>{f(r.placeholder||"")},children:zt("div",{className:"flex items-center justify-between gap-2",children:[ie("input",{id:t,ref:o,type:"color",value:d,onChange:x=>f(x.target.value),className:"color-input h-12 w-11 shrink-0 cursor-pointer appearance-none border-none"}),ie(M,{id:`manual-${t}`,type:"text",inputMode:"numeric",value:d,className:"h-10 w-full",onChange:x=>f(x.target.value)})]})})});Ht.displayName="Range Input";import{useEffect as Te,useState as Dt}from"react";import{jsx as le}from"react/jsx-runtime";var zi=e=>{let{id:o,label:t,options:n,defaultSelected:l,onValueChange:r,optionRender:d}=e,[f,u]=Dt(l||n[0]),x=g=>{u(g)};return Te(()=>{r(f)},[f]),Te(()=>{l&&u(l)},[l]),le(L,{id:o,label:t,disabled:!1,reseteable:!1,children:le("div",{className:"grid multi-button-wrapper gap-2",children:n.map(g=>{let Q=g===f;return le(S,{size:"sm",className:"w-full","aria-label":`Option ${g}`,variant:Q?"default":"outline",onClick:()=>x(g),children:d(g)},g==null?void 0:g.toString())})})})};var $i=()=>{let{dispatch:e}=$();return{toast:(t,n=3e3)=>{let l=Math.random().toString(12).substring(2,10);e({type:0,payload:{toast:p(a({},t),{id:l})}}),setTimeout(()=>{e({type:1,payload:{toast:l}})},n)}}};export{zo as BookIcon,S as Button,bo as CalendarIcon,ee as CheckIcon,B as ChevronDownIcon,go as ChevronLeftIcon,Po as ChevronRightIcon,xo as CloseIcon,Ht as ColorInput,qe as CopyIcon,Ke as DangerIcon,Zo as DownloadIcon,Oo as EditIcon,j as ExclamationIcon,gs as Form,pt as FormControl,ct as FormDescription,Is as FormField,it as FormItem,lt as FormLabel,mt as FormMessage,Go as InfoIcon,M as Input,te as Label,je as LoadingIcon,To as LogoutIcon,uo as MoonIcon,zi as MultiButtonInput,Qo as PlusIcon,to as QRCodeIcon,Mt as RangeInput,Cs as Select,ft as SelectContent,Vs as SelectGroup,vt as SelectItem,ut as SelectLabel,ht as SelectSeparator,dt as SelectTrigger,Ns as SelectValue,De as Separator,ao as ShareIcon,tr as Skeleton,ne as Slider,Z as SuccessIcon,co as SunIcon,Ys as ToastsContainer,ii as ToastsProvider,J as TrashIcon,Mo as UserIcon,He as buttonVariants,i as cn,bt as toastContainerVariants,A as useFormField,$i as useToast};
//# sourceMappingURL=index.mjs.map