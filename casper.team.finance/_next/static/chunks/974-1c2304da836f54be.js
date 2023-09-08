(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{41467:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(52322),l=s(2841),n=s(39097),c=s.n(n);s(2784);function o(){return(0,a.jsxs)("div",{className:"bg-waves overflow-hidden rounded-xl shadow-lg lg:grid lg:grid-cols-2 lg:gap-4",children:[(0,a.jsx)("div",{className:"px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20",children:(0,a.jsxs)("div",{className:"space-y-5 lg:space-y-8 lg:self-center",children:[(0,a.jsxs)("h2",{className:"text-3xl font-extrabold text-white sm:text-4xl",children:["Create a Custom ",(0,a.jsx)("br",{})," Token Lockup Now"]}),(0,a.jsx)("p",{className:"text-xl leading-6 text-neutral-50",children:"Lock your tokens or liquidity tokens in a few simple steps with Team Finance. Our process is easy, fast and secure."}),(0,a.jsxs)("div",{className:"flex flex-col space-y-3 sm:block sm:space-x-3 sm:space-y-0",children:[(0,a.jsx)(c(),{href:"/lockups",children:(0,a.jsx)(l.zx,{className:"w-full font-semibold sm:w-auto",variant:"secondary",children:"Create Your Lock"})}),(0,a.jsx)(c(),{href:"/about",children:(0,a.jsx)(l.zx,{className:"w-full font-semibold sm:w-auto",variant:"outline",children:"Learn More"})})]})]})}),(0,a.jsx)("div",{className:"aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6",children:(0,a.jsx)("img",{className:"translate-x-6 translate-y-6 transform object-cover object-left-top sm:translate-x-16 lg:translate-y-20",src:"/images/custom-lockup.webp",alt:"App screenshot"})})]})}},51695:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var a=s(52322),l=s(66216),n=s(14457),c=s(2841),o=s(10189),r=s(7642),i=s.n(r),d=s(96577),m=s.n(d),x=s(2784),p=s(77245);const h={src:"/icons/wizard/casper.svg",text:"CSPR"};function f(){const e=h;return(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-600 sm:pl-6",children:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(m(),{src:e.src,alt:"token-icon",width:10,height:12}),(0,a.jsx)("span",{className:"mt-0.5",children:(0,a.jsx)("p",{children:e.text})})]})})}function u(e){let{tokenName:t,tokenSymbol:s}=e;return(0,a.jsx)("td",{className:"py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:(0,a.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,a.jsx)(m(),{src:"/icons/wizard/casper.svg",width:40,height:40,alt:"Logo"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-base font-semibold text-black",children:s}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"break-word text-xs",children:t})})]})]})})}function j(e){let{tokensLocked:t,tokenTotalSupply:s,tokenDecimals:l}=e;const n=Math.trunc(t/s*100).toFixed(2);return(0,a.jsx)("td",{className:"whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-600 sm:pl-2",children:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(m(),{src:"/assets/lock@3x.png",width:10,height:12,alt:"Lock Icon"}),(0,a.jsx)("span",{className:"mt-0.5",children:(0,a.jsx)("p",{children:"".concat(Math.trunc(t/10**l).toFixed(2)," (").concat(n,"%)")})})]})})}const k=["NAME","BLOCKCHAIN","TOKENS LOCKED","NEXT UNLOCK","ACTION"];function y(e){let{lockData:t}=e;var s,r;const[d]=(0,x.useState)(!1),[h,y]=(0,x.useState)(null),[N]=(0,x.useState)(t);return(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsx)("div",{className:"inline-block min-w-full align-middle",children:(0,a.jsxs)("div",{className:"overflow-hidden rounded-xl border border-gray-200",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4",children:[(0,a.jsx)("div",{className:"space-x-5 text-sm",children:(0,a.jsx)("button",{type:"button",className:"uppercase",onClick:()=>y(null),children:"Tokens"})}),(0,a.jsx)("div",{className:"w-1/3",children:(0,a.jsx)(c.II,{className:"w-full",type:"text",name:"search",placeholder:"Search...",onChange:e=>(e=>{if(e){const t=N.filter((t=>t.tokenInfo.name.toLowerCase().includes(e.toLowerCase())||t.tokenInfo.symbol.toLowerCase().includes(e.toLowerCase())));y(t)}else y(null)})(e.target.value)})})]}),(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:k?(0,a.jsx)("tr",{children:k.map((e=>(0,a.jsx)("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold uppercase text-gray-900 sm:pl-6",children:e},e)))}):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"py-6 pl-4 pr-3 text-left text-sm font-semibold uppercase text-gray-900 sm:pl-6"})})}),(0,a.jsxs)("tbody",{className:"divide-y divide-gray-200 bg-white",children:[d&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{className:"py-32 text-center",colSpan:null===(s=k)||void 0===s?void 0:s.length,children:(0,a.jsx)("div",{className:"flex h-64 items-center justify-center",children:(0,a.jsx)(p.sOR,{className:"mr-2 h-24 w-24 animate-spin text-blue-700 hover:text-neutral-700","aria-hidden":"true"})})})}),!d&&N&&!h&&N.map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)(u,{tokenName:e.tokenInfo.name,tokenSymbol:e.tokenInfo.symbol}),(0,a.jsx)(f,{}),(0,a.jsx)(j,{tokensLocked:i()(e.claimInfo.totalLocked),tokenTotalSupply:i()(e.tokenInfo.totalSupply),tokenDecimals:i()(e.tokenInfo.decimals)}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:i()(e.claimInfo.nextUnlock)>Date.now()?(0,o.ab)(Math.floor(Date.parse(e.lockTimestamp)/1e3),i()(e.claimInfo.nextUnlock)/1e3).timeLeftString:e.claimInfo.totalLocked===e.claimInfo.claimedToDate?"Claimed":"Claimable"}),(0,a.jsx)("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:(0,a.jsx)(c.EX,{href:l.yz?"".concat(n.ue,"/contract/").concat(e.tokenAddress):"/view-coin/".concat(e.tokenAddress,"?tokenAddress=").concat(e.tokenAddress,"&name=").concat(e.tokenInfo.name,"&symbol=").concat(e.tokenInfo.symbol,"&decimals=").concat(e.tokenInfo.decimals),className:"text-blue-600 hover:text-blue-800",children:"View"})})]},e.id))),!d&&N&&h&&h.map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)(u,{tokenName:e.tokenInfo.name,tokenSymbol:e.tokenInfo.symbol}),(0,a.jsx)(f,{}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:"0%"}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(m(),{src:"/logos/coingecko.svg",width:23,height:23,alt:"Coingecko Logo"}),(0,a.jsx)("span",{className:"mt-0.5",children:"1"})]})}),(0,a.jsx)(j,{tokensLocked:i()(e.claimInfo.totalLocked),tokenTotalSupply:i()(e.tokenInfo.totalSupply),tokenDecimals:i()(e.tokenInfo.decimals)}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:"$USD Value"}),(0,a.jsx)("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6",children:i()(e.claimInfo.nextUnlock)>Date.now()?(0,o.ab)(Math.floor(Date.parse(e.lockTimestamp)/1e3),i()(e.claimInfo.nextUnlock)/1e3).timeLeftString:e.claimInfo.totalLocked===e.claimInfo.claimedToDate?"Claimed":"Claimable"}),(0,a.jsx)("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:(0,a.jsx)(c.EX,{href:l.yz?"".concat(n.ue,"/contract/").concat(e.tokenAddress):"/view-coin/".concat(e.tokenAddress,"?tokenAddress=").concat(e.tokenAddress,"&name=").concat(e.tokenInfo.name,"&symbol=").concat(e.tokenInfo.symbol,"&decimals=").concat(e.tokenInfo.decimals),className:"text-blue-600 hover:text-blue-800",children:"View"})})]},e.id))),!d&&!N&&(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{className:"py-32 text-center",colSpan:null===(r=k)||void 0===r?void 0:r.length,children:[(0,a.jsx)("h3",{className:"font-medium text-gray-900",children:"No locks"}),(0,a.jsx)("p",{className:"mb-2 text-sm text-gray-500",children:"Connect wallet to proceed."})]})})]})]})]})})})}},97729:function(e,t,s){e.exports=s(30501)}}]);