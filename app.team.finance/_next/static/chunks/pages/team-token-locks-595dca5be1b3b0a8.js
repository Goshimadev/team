(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{31922:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team-token-locks",function(){return n(41438)}])},60205:function(e,t,n){"use strict";var a=n(72579),o=n.n(a),i=n(19034),l=n.n(i),r=n(2784);t.Z=e=>{let{data:t,showCompletedLocks:n,filter:a}=e,[i,d]=(0,r.useState)();return(0,r.useEffect)(()=>{try{var e,i,r,s,c,u,v;let m=Date.now()/1e3,k=t;a&&(a.tokenName&&(k=null==t?void 0:t.filter(e=>{var t,n;return a.tokenName.toLowerCase()===(null===(n=e.token)||void 0===n?void 0:null===(t=n.tokenName)||void 0===t?void 0:t.toLowerCase())})),a.startPeriodStart&&a.startPeriodEnd&&(k=null===(e=k)||void 0===e?void 0:e.filter(e=>{let t=o()(e.event,"createdAt"),n=l()(t).unix();return a.startPeriodStart===a.startPeriodEnd?a.startPeriodStart<=n&&a.startPeriodStart+86400>n:a.startPeriodStart<=n&&a.startPeriodEnd>=n})),a.startPeriodStart&&!a.startPeriodEnd&&(k=null===(i=k)||void 0===i?void 0:i.filter(e=>{let t=o()(e.event,"createdAt"),n=l()(t).unix();return a.startPeriodStart<=n})),a.endPeriodStart&&a.endPeriodEnd&&(k=null===(r=k)||void 0===r?void 0:r.filter(e=>{var t,n,o,i;return a.startPeriodStart===a.startPeriodEnd?a.endPeriodStart<=(null===(o=e.event)||void 0===o?void 0:o.unlockTime)&&a.endPeriodStart+86400>(null===(i=e.event)||void 0===i?void 0:i.unlockTime):a.endPeriodStart<=(null===(t=e.event)||void 0===t?void 0:t.unlockTime)&&a.endPeriodEnd>=(null===(n=e.event)||void 0===n?void 0:n.unlockTime)})),a.endPeriodStart&&!a.endPeriodEnd&&(k=null===(s=k)||void 0===s?void 0:s.filter(e=>{var t;return a.endPeriodStart<=(null===(t=e.event)||void 0===t?void 0:t.unlockTime)})),"All"!==a.status&&(k="Unlocked"===a.status?null===(c=k)||void 0===c?void 0:c.filter(e=>{var t;return m>(null===(t=e.event)||void 0===t?void 0:t.unlockTime)}):null===(u=k)||void 0===u?void 0:u.filter(e=>{var t;return m<(null===(t=e.event)||void 0===t?void 0:t.unlockTime)}))),n&&(k=null===(v=k)||void 0===v?void 0:v.filter(e=>m<e.event.unlockTime)),d(k)}catch(e){console.error(e)}},[t,n,a]),{filteredLocks:i}}},41438:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(52322),o=n(92642),i=n(58379),l=n(8560),r=n(53482),d=n(12266),s=n(72375),c=n(72070),u=n(64019),v=n(60740),m=n(60205),k=n(33018),h=n(32867),f=n(76635),p=n.n(f),x=n(19034),S=n.n(x),T=n(97729),j=n.n(T),N=n(55351),P=n(2784),w=n(77245),y=n(44304);let b={chainId:"",account:""};function g(e,t){if("setAccount"===t.type)return{...e,chainId:t.payload.chainId,account:t.payload.account};throw Error()}function E(){let[e,t]=(0,P.useState)(),[n,x]=(0,P.useState)(!0),[T,E]=(0,P.useState)(!1),[I,_]=(0,P.useState)(!1),[C,A]=(0,P.useState)(!1),[Z,D]=(0,P.useState)(),[L,O]=(0,P.useReducer)(g,b),[F,M]=(0,P.useState)(),[Y,U]=(0,P.useState)(),{address:B}=(0,y.mA)(),{chain:X}=(0,y.LN)(),{data:z}=(0,y.F6)({address:B,chainId:1}),[H,W]=(0,P.useState)(""),[q,R]=(0,P.useState)("-"),{filteredLocks:$}=(0,m.Z)({data:F,showCompletedLocks:C,filter:Z}),[G,J]=(0,P.useState)(!1);(0,P.useEffect)(()=>{(()=>{if(z){W(z);return}if(B){W("".concat(null==B?void 0:B.substring(0,6),"...").concat(null==B?void 0:B.substring(B.length-4,B.length)));return}x(!1),W("")})()},[z,B]);let K=(0,P.useCallback)(async()=>{x(!0);try{var e,t;let n=await (0,h.r$)(B,!1),a=(0,f.get)(n,"data.data",[]),o=(0,f.get)(n,"data.stats",[]),i=(0,h.A3)(a);U(o);let l=i.filter(e=>S().unix(Number(e.event.unlockTime))>S()());R((null==l?void 0:l.length)>0?S().unix(null===(t=p().orderBy(l,"event.unlockTime","asc")[0])||void 0===t?void 0:null===(e=t.event)||void 0===e?void 0:e.unlockTime).format("MMM D, YYYY"):"-"),M(i)}catch(e){console.error(e),M([]),o.Tb(e)}finally{x(!1)}},[B]);(0,P.useEffect)(()=>{(null==X?void 0:X.id)&&B?((L.chainId!==(0,h.i6)(X.id)||L.account!==B)&&K(),O({type:v.aO.SET_ACCOUNT,payload:{chainId:(0,h.i6)(X.id),account:B}})):(O({type:v.aO.SET_ACCOUNT,payload:{chainId:"",account:""}}),M([]))},[B,X,L.chainId,L.account,K]);let Q=e=>{let t=F.map(t=>t.event.lockDepositId===e.event.lockDepositId?e:t);M(t)},V=e=>{let t=F.filter(t=>t.event.lockDepositId!==e.event.lockDepositId);M(t)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.PB,{title:"Team Finance App - Team Token Locks",titleTemplate:"%s"}),(0,a.jsx)(j(),{children:(0,a.jsx)("link",{rel:"canonical",href:"https://app.team.finance/team-token-locks"})}),(0,a.jsxs)(l.Z,{title:"Team token locks",className:"space-y-3",hasItems:(null==F?void 0:F.length)>0,walletConnected:!!L.account,isLoading:n,children:[(0,a.jsx)("div",{className:"max-w-xl",children:(0,a.jsxs)(k.ZT,{variant:"paragraph",children:["\uD83D\uDC4B Welcome to your team token locks info hub, ",H,". If you have any questions, feel free to contact us in ",(0,a.jsx)(i.Z,{})," ","or"," ",(0,a.jsx)(k.EX,{className:"underline",href:h.UY.telegram,children:(0,a.jsx)("span",{children:"Telegram"})}),"."]})}),(0,a.jsx)(c.Z,{data:[{name:"Number of active locks",value:null==F?void 0:F.filter(e=>!1===e.event.isWithdrawn).length},{name:"Number of locks",value:null==F?void 0:F.length},{name:"Next unlock date",value:q}]}),(0,a.jsxs)("div",{className:"rounded-md border border-gray-200 bg-white p-4",children:[(0,a.jsx)(k.ZT,{className:"mb-3",variant:"title-4",children:"My team token locks total"}),(0,a.jsx)(r.Z,{activeIndex:e,setActiveIndex:t,data:Y})]}),(0,a.jsx)(u.Z,{title:"My team token locks",rows:10,switchComp:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(k.rs,{checked:C,onChange:()=>A(e=>!e)}),(0,a.jsx)("span",{className:"text-sm",children:"Hide completed locks"})]}),filter:(0,a.jsxs)(k.zx,{className:"relative h-11 w-11 !p-0",variant:"secondary",icon:!1,"data-testid":"filters-button",disabled:!F,onClick:()=>{_(!0)},children:[G&&(0,a.jsx)("div",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-blue-600"}),(0,a.jsx)(w.lOx,{className:"h-5 w-5 text-blue-600/60"})]}),header:(0,a.jsx)(k.ZP,{href:"/lockups/projectToken",variant:"primary",icon:(0,a.jsx)(w.poH,{className:"text-white-60",size:18}),onClick:()=>window.dataLayer.push({event:"db_create_team_token_lock"}),children:"Create team token lock"}),head:["Token","Amount","% of overall supply","Lockup period","Status","Actions"],children:null==$?void 0:$.map((e,t)=>{var n,o;return(0,a.jsx)(d.Z,{item:e,chainId:null==X?void 0:null===(n=X.id)||void 0===n?void 0:n.toString(),index:t,updateLock:Q,deleteLock:V},(null===(o=e.event)||void 0===o?void 0:o.lockDepositId)||t)})})]}),(0,a.jsx)(s.kE,{open:T,setOpen:E}),(0,a.jsx)(s.sZ,{open:I,setOpen:_,locks:F,setFilter:D,setFilterActive:J})]})}}},function(e){e.O(0,[424,131,713,789,195,149,185,814,686,423,59,41,887,560,565,922,607,774,888,179],function(){return e(e.s=31922)}),_N_E=e.O()}]);