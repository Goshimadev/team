(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{90109:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lockups/liquidityToken",function(){return a(28723)}])},50607:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-header-liquidity-token.8ca19911.png",height:44,width:156,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUfHxshHhkfISMgPtcTX+QXVue2gdwjAAAABnRSTlMgFComc6tKMxa4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWZkYGBkYGRgZWZgYmJgYgQAAP8AGrqt9MsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},97470:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-header-white-liquidity-token.23d5b2bc.png",height:44,width:156,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEX///////////////////+Rd1MVAAAABXRSTlMfFCt0q8HvqbkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcGBAQAgDMMg0vn/zYITyZvN+gCvABRjt99wAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},28723:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ep}});var s,l,i,n,o=a(52322),r=a(31001),c=a(32867),d=a(2784),u=a(44304),h=a(50607),m=a(97470);(s=i||(i={})).HANDLE_ACCOUNT_DETAILS_CHANGED="handleAccountDetailsChanged",s.HANDLE_NEXT="handleNext",s.HANDLE_LAST_STEP="handleLastStep",s.HANDLE_START_OVER="handleStartOver",s.SET_ERROR_MSG="setErrorMsg",s.SET_OUTCOME="setOutcome",s.SET_APPROVED="setApproved",s.SET_TRANSACTION_HASH="setTransactionHash",s.SET_CHAIN_ID="setChainId",s.SET_ACCOUNT="setAccount",s.SET_REQUESTING_LOCK="setRequestingLock",s.SET_LOCK_DETAILS="setLockDetails",s.SET_LIQUIDITY_TOKEN_INFO="setLiquidityTokenInfo",s.RESET_LIQUIDITY_TOKEN_INFO="resetLiquidityTokenInfo",s.RESET_LOCK_DETAILS="resetLockDetails",s.SET_VISIBLE_MODAL_WAITING_CONFIRM="setVisibleModalWaitingConfirm",s.SET_SHOW_STEP_CONTAINER="setShowStepContainer",s.GO_TO_STEP="goToStep";var p=a(92642),x=a(46539),f=a(30476),y=a(11242),w=a(27662),k=a(25593),T=a(24407),g=a(33018),I=a(28879),S=a.n(I),N=a(57449),b=a.n(N),E=a(67338),_=a.n(E),A=a(10528),v=a(51906),j=a(30171),D=a(59656),C=a(58194),L=a(58105),O=a(57643),q=a(18650);function M(e){let{dispatch:t,state:a,index:s,step:l,event:n="db_liquidity_lock_details_added"}=e,[r,h]=(0,d.useState)(!1),[m,I]=(0,d.useState)(""),[N,b]=(0,d.useState)("-"),[E,_]=(0,d.useState)(A.O$.from(0)),[M,P]=(0,d.useState)(""),[U,R]=(0,d.useState)(new Date(Date.now()+2592e6)),[H,Y]=(0,d.useState)(A.O$.from(0)),[W,F]=(0,d.useState)(null),[K,G]=(0,d.useState)(A.O$.from(0)),[Q,V]=(0,d.useState)(""),[X,B]=(0,d.useState)((0,c.cH)(a.walletDetails.chainId,(0,T.g)(a.walletDetails.chainId).lockToken)),[Z,$]=(0,d.useState)(A.O$.from(0)),[z,J]=(0,d.useState)(v.d),[ee,et]=(0,d.useState)(!1),[ea,es]=(0,d.useState)(null),[el,ei]=(0,d.useState)(!1),{address:en}=(0,u.mA)(),{data:eo}=(0,u.mx)(),{width:er}=(0,O.iP)(),ec=(0,c.yZ)(a.walletDetails.chainId,(0,T.g)(a.walletDetails.chainId).lockToken),ed=()=>{window.dataLayer.push({event:n}),t({type:i.SET_LOCK_DETAILS,payload:{fee:K,feeInUsd:Q,totalAmount:m,date:U.getTime(),referralAddress:z,referralSupported:X}})},eu=(0,d.useCallback)(async()=>{h(!0);try{let e=(0,T.g)(a.walletDetails.chainId),t=(0,L.getAddress)(e.lockToken),s=(0,c.cH)(a.walletDetails.chainId,e.lockToken),l=new j.CH(a.liquidityTokenInfo.address,q.em,eo),i=new j.CH(t,s?k.A:w.c,eo),[n,o,r,d,u]=await Promise.all([l.balanceOf(en),i.getFeesInETH((0,c.tg)(a.walletDetails.chainId)),i.feesInUSD(),s?i.referralDiscount():A.O$.from(1e4),!!ec&&i.whitelistedWallets(en)]);ei(u),Y(n),b(D.formatUnits(n,a.liquidityTokenInfo.decimals)),_(o),G(o),P((0,c.xG)(Number(D.formatUnits(u?0:r,(0,c.pV)(a.walletDetails.chainId)?18:6)))),V((0,c.xG)(Number(D.formatUnits(u?0:r,(0,c.pV)(a.walletDetails.chainId)?18:6)))),B(s),$(d)}catch(e){console.error(e),t({type:i.SET_ERROR_MSG,payload:{errorMsg:"Couldn't fetch your wallet details. Please try again."}}),p.Tb(e)}finally{h(!1)}},[en,t,eo,ec,a.liquidityTokenInfo.address,a.liquidityTokenInfo.decimals,a.walletDetails.chainId]);function eh(e){try{if(Number(e)>0){let t=D.parseUnits(e,a.liquidityTokenInfo.decimals);H.lt(A.O$.from(t))?F("Your wallet balance is too low."):F(null)}else F("Invalid amount")}catch(e){console.error(e),F("Invalid amount")}I(e)}return(0,d.useEffect)(()=>{en&&eo&&a.activeStep===s&&eu()},[en,eo,eu,s,a.activeStep]),(0,o.jsx)("div",{children:a.activeStep===s?(0,o.jsxs)(f.Z,{step:l,errorMsg:a.errorMsg,children:[(0,o.jsx)("p",{className:"my-1 text-xs font-medium text-[#222222]",children:"Lock amount"}),(0,o.jsxs)("div",{className:"flex flex-col sm:max-w-[540px]",children:[(0,o.jsx)(g.II,{className:"w-full text-sm",type:"number",name:"amount",placeholder:"Enter amount",value:m,onChange:e=>eh(e.target.value),disabled:r,onKeyPress:e=>{("Slash"===e.code||"Minus"===e.code)&&e.preventDefault()},onPaste:e=>{let{clipboardData:t}=e,a=parseFloat(t.getData("text"));a<0&&e.preventDefault()},error:!!W}),!!W&&(0,o.jsx)("span",{className:"mt-1 text-xs font-medium text-red-600",children:W}),(0,o.jsxs)("div",{className:"mt-1.5 flex items-center",children:[(0,o.jsx)("span",{className:"text-sm font-medium text-[#222222]/60",children:"Your balance: "}),(0,o.jsx)("span",{className:"ml-1 break-all text-sm font-medium text-[#222222]",children:"".concat(N," ").concat(a.liquidityTokenInfo.symbol)}),(0,o.jsx)("button",{className:"ml-1 rounded-lg bg-[#4687C3]/10 px-2 py-1 text-[14px] font-semibold text-[#1F4AE9]",type:"button",onClick:()=>eh(N),children:"Max"})]}),(0,o.jsxs)("div",{className:"mt-2 w-full",children:[(0,o.jsx)("span",{className:"text-xs font-medium text-[#222222]",children:"Unlock Date"}),(0,o.jsx)(x.Z,{selected:U,setUnlockDate:R,showTimeSelect:er>420,dateFormat:"MMM dd, yyyy h:mm aa",timeFormat:"h:mm aa",disabled:r})]}),(0,o.jsxs)("div",{className:"my-4 flex justify-between px-0.5 font-medium",children:[(0,o.jsx)("span",{className:"text-[#222222]/60",children:"Service Fee"}),(0,o.jsxs)("span",{className:"text-base",children:["$",el?0:Q]})]}),X&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between px-0.5",children:[(0,o.jsx)("span",{children:"Do you have a valid Referral Address"}),(0,o.jsx)("input",{name:"referralAddressCheckbox",type:"checkbox",checked:ee,onChange:()=>{et(e=>!e),ee?(G(E),V(M),J(v.d)):(G(E.mul(Z).div(1e4)),V((0,c.xG)(Number(M)*(Number(Z)/1e4))))},className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"})]}),(0,o.jsx)("span",{className:"px-0.5 text-xs",children:"Receive a 10% discount!"})]}),(0,o.jsxs)("div",{className:"my-2",children:[ee&&(0,o.jsx)(g.II,{className:"flex w-full",type:"text",name:"referralAddress",placeholder:"Enter referrer’s wallet address here",disabled:!ee,onChange:e=>(function(e){if(""===e){es("If checkbox is ticked, you must enter a referral address");return}if(e&&!C.isAddress(e)){es("Please enter a valid address.");return}if(e.toLowerCase()===en.toLowerCase()){es("You may not use your own address as a referral address.");return}es(null),J(e)})(e.target.value)}),ee&&ea&&(0,o.jsx)("span",{className:"text-sm text-red-500",children:ea})]})]}),(0,o.jsx)(g.zx,{className:"mt-2 w-full sm:w-auto",disabled:!m||r||!!a.errorMsg||!!W||!U||!!ea&&ee||ee&&z===v.d,isLoading:r,onClick:()=>ed(),children:"Continue"})]}):(0,o.jsx)(y.Z,{activeStep:a.activeStep,index:s,step:l,goToStep:()=>t({type:i.GO_TO_STEP,payload:s}),children:(0,o.jsx)("p",{className:"text-sm sm:text-base",children:a.lockDetails.date?S()(U).format("MMM. DD, YYYY"):""})})})}S().extend(b()),S().extend(_());var P=a(35175),U=a(2327),R=a(33434),H=a(82455),Y=a(56780),W=a(90711),F=a(99268),K=a(60740);function G(e){let{dispatch:t,state:a,step:s,index:l,approveEvent:n="db_liquidity_lock_gave_permission",lockEventFailure:r="db_liquidity_lock_fail",lockEventSuccess:h="db_liquidity_lock_success"}=e,[m,x]=(0,d.useState)(!1),[f,I]=(0,d.useState)(!1),[N,b]=(0,d.useState)(!1),[E,_]=(0,d.useState)(!1),[v,j]=(0,d.useState)(""),{address:C}=(0,u.mA)(),{data:O}=(0,u.mx)(),[q,M]=(0,d.useState)(!1),[G,Q]=(0,d.useState)(!1),V=(0,d.useCallback)(async()=>{if(a.activeStep===l){x(!0),j("");try{let e=(0,T.g)(a.walletDetails.chainId),t=(0,L.getAddress)(e.lockToken),s=new H.ah(a.liquidityTokenInfo.address,O),l=await s.allowance(C,t),i=D.parseUnits(a.lockDetails.totalAmount,a.liquidityTokenInfo.decimals),o=l.gte(i);o&&window.dataLayer.push({event:n}),I(o)}catch(e){console.error(e),j("Couldn't fetch your wallet details. Please try again."),p.Tb(e)}finally{x(!1)}}},[a.activeStep,a.walletDetails.chainId,a.liquidityTokenInfo.address,a.liquidityTokenInfo.decimals,a.lockDetails.totalAmount,l,O,C,n]);async function X(){try{window.dataLayer.push({event:n}),b(!0),_(!1),Q(!0),j("");let e=(0,T.g)(a.walletDetails.chainId),t=new H.ah(a.liquidityTokenInfo.address,O),s=[e.lockToken,W.Bz],l=await (0,K.QH)(t,s,"approve"),i=await t.approve(...s,{gasLimit:l});await i.wait();let o=(0,L.getAddress)(e.lockToken),r=await t.allowance(C,o),c=D.parseUnits(a.lockDetails.totalAmount,a.liquidityTokenInfo.decimals),d=r.gte(c);I(d),d?window.dataLayer.push({event:"".concat(n,"-success")}):(r.isZero()?j("Couldn't approve your token. Please try again."):j("Couldn't approve your token. Allowance too small. Please try again."),_(!0),window.dataLayer.push({event:"".concat(n,"-failure")}))}catch(e){window.dataLayer.push({event:"".concat(n,"-failure")}),console.error(e),I(!1),_(!0),j("Couldn't approve your token. Please try again."),e.message.includes("user rejected transaction")||e.message.includes("transaction was replaced")||p.Tb(e)}finally{x(!1),b(!1)}}async function B(){j(""),M(!0),t({type:i.SET_REQUESTING_LOCK}),x(!0);try{let e=(0,T.g)(a.walletDetails.chainId),s=S()(a.lockDetails.date).unix();if(Date.now()/1e3>Number(s)){j("Date is in the past."),M(!1);return}let l=e.lockToken,n=await O.getFeeData(),{gasPrice:o}=n,r=D.parseUnits(a.lockDetails.totalAmount,a.liquidityTokenInfo.decimals);if(a.liquidityTokenInfo.totalSupply.lt(A.O$.from(r))){j("Your wallet balance is too low."),M(!1);return}let d=[a.liquidityTokenInfo.address,C,r,s,!1];a.lockDetails.referralSupported&&d.push(a.lockDetails.referralAddress);let u=a.lockDetails.referralSupported?k.A:w.c,m=new F.vU(u),p=m.encodeFunctionData("lockToken",d),x=await (0,K.oB)(O,C,l,A.O$.from(a.lockDetails.fee),p,"lockToken"),f={value:a.lockDetails.fee,gasPrice:o,data:p,from:C,gasLimit:x,to:l},y=await O.sendTransaction(f);M(!1),t({type:i.SET_TRANSACTION_HASH,payload:{transactionHash:y.hash}}),await y.wait();let g=new H.XP(l,O),I=await g.depositId();await (0,c.QE)(l,I,a.walletDetails.chainId,(0,c.GW)(a.walletDetails.chainId)),t({type:i.SET_OUTCOME,payload:{success:!0,errorMsg:null}}),window.dataLayer.push({event:h,chain:(0,c.C7)(a.walletDetails.chainId)})}catch(e){window.dataLayer.push({event:r}),console.error(e),e.message.includes("user rejected transaction")||e.message.includes("transaction was replaced")?j("Your lock creation failed. Please try again."):(p.Tb(e),t({type:i.SET_OUTCOME,payload:{success:!1,errorMsg:"Your liquidity lock creation failed."}})),M(!1)}finally{x(!1)}}return(0,d.useEffect)(()=>{O&&C&&V()},[O,C,V]),(0,o.jsxs)("div",{children:[q&&(0,o.jsx)(R.Z,{open:q,setOpen:()=>M(!1),amount:a.lockDetails.totalAmount,symbol:a.liquidityTokenInfo.symbol,feeAmount:D.formatEther(a.lockDetails.fee),feeCurrency:(0,c.tl)(a.walletDetails.chainId),isTestnet:(0,c.Jg)(a.walletDetails.chainId)}),G&&(0,o.jsx)(U.Z,{open:G,setOpen:()=>Q(!1),isApproving:N,approvalFailed:E,handleApprove:()=>X(),errorMsg:v}),a.activeStep===l?(0,o.jsxs)("div",{className:"overflow-hidden rounded-md bg-white",children:[v&&(0,o.jsx)(P.b,{children:v}),f&&(0,o.jsxs)("div",{className:"p-3 sm:p-6",children:[(0,o.jsx)("h1",{className:"text-lg font-semibold",children:"Create contract"}),(0,o.jsx)("p",{className:"mt-1 text-sm",children:"Please ensure the following details are correct:"}),(0,o.jsxs)("div",{className:"mt-3 justify-between space-y-4 rounded-lg bg-[#222222]/5 p-3 sm:hidden",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-xs text-[#222222]/60",children:"LP token"}),(0,o.jsxs)("div",{className:"inline-flex items-center gap-x-1.5 font-medium",children:[a.liquidityTokenInfo.token0.symbol," /"," ",a.liquidityTokenInfo.token1.symbol,(0,o.jsxs)("div",{className:"flex -space-x-2",children:[(0,o.jsx)(g.Oi,{src:(0,Y.XP)(a.liquidityTokenInfo.token0.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:a.walletDetails.chainId}),(0,o.jsx)(g.Oi,{src:(0,Y.XP)(a.liquidityTokenInfo.token1.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:a.walletDetails.chainId})]})]})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-xs text-[#222222]/60",children:"Lock amount"}),(0,o.jsx)("span",{className:"mt-2 text-base font-normal",children:a.lockDetails.totalAmount})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-xs text-[#222222]/60",children:"Service fee"}),(0,o.jsxs)("span",{className:"mt-2 text-base font-normal",children:["$",(0,c.Jg)(a.walletDetails.chainId)?"0":a.lockDetails.feeInUsd]})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-xs text-[#222222]/60",children:"Unlock date"}),(0,o.jsx)("span",{className:"mt-2 text-base font-normal",children:S()(a.lockDetails.date).format("MMM. DD, YYYY")})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-xs text-[#222222]/60",children:"Unlock time"}),(0,o.jsx)("span",{className:"mt-2 text-base font-normal",children:S()(a.lockDetails.date).format("hh:mm A z")})]})]}),(0,o.jsx)("div",{className:"my-4 hidden max-w-fit overflow-x-auto rounded-md bg-[#222222]/5 p-6 sm:block",children:(0,o.jsx)("div",{className:"inline-block min-w-full align-middle",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",className:"pr-3 text-left text-sm font-normal text-[#222222]/60",children:"LP token"}),(0,o.jsx)("th",{scope:"col",className:"px-3 text-left text-sm font-normal text-[#222222]/60",children:"Lock amount"}),(0,o.jsx)("th",{scope:"col",className:"px-3 text-left text-sm font-normal text-[#222222]/60",children:"Service fee"}),(0,o.jsx)("th",{scope:"col",className:"px-3 text-left text-sm font-normal text-[#222222]/60",children:"Unlock date"}),(0,o.jsx)("th",{scope:"col",className:"pl-3 text-left text-sm font-normal text-[#222222]/60",children:"Unlock time"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"relative flex items-center justify-center whitespace-nowrap pl-0 pr-3 pt-2 text-base font-normal text-[#222222] md:pr-6",children:(0,o.jsxs)("div",{className:"inline-flex items-center gap-x-1.5 font-medium",children:[a.liquidityTokenInfo.token0.symbol," /"," ",a.liquidityTokenInfo.token1.symbol,(0,o.jsxs)("div",{className:"flex -space-x-2",children:[(0,o.jsx)(g.Oi,{src:(0,Y.XP)(a.liquidityTokenInfo.token0.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:a.walletDetails.chainId}),(0,o.jsx)(g.Oi,{src:(0,Y.XP)(a.liquidityTokenInfo.token1.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:a.walletDetails.chainId})]})]})}),(0,o.jsx)("td",{className:"relative whitespace-nowrap px-3 pt-2 text-base font-normal text-[#222222] md:pr-6",children:a.lockDetails.totalAmount}),(0,o.jsxs)("td",{className:"relative whitespace-nowrap px-3 pt-2 text-base font-normal text-[#222222] md:pr-6",children:["$",(0,c.Jg)(a.walletDetails.chainId)?"0":a.lockDetails.feeInUsd]}),(0,o.jsx)("td",{className:"relative whitespace-nowrap px-3 pt-2 text-base font-normal text-[#222222] md:pr-6",children:S()(a.lockDetails.date).format("MMM. DD, YYYY")}),(0,o.jsx)("td",{className:"relative whitespace-nowrap px-3 pt-2 text-base font-normal text-[#222222] md:pr-6",children:S()(a.lockDetails.date).format("hh:mm A z")})]})})]})})}),(0,o.jsx)("div",{className:"mt-4",children:(0,o.jsx)(g.zx,{className:"w-full sm:w-auto",disabled:m,onClick:()=>B(),icon:!1,"data-testID":"confirm-button",children:"Confirm transaction"})})]}),!f&&(0,o.jsxs)("div",{className:"p-3 sm:p-6",children:[(0,o.jsx)("h1",{className:"text-lg font-semibold",children:"Create contract"}),(0,o.jsx)("p",{className:"mt-1 text-sm",children:"We need your authorisation before using the LP token. This only needs to be done once."}),(0,o.jsx)("div",{className:"mt-4",children:(0,o.jsx)(g.zx,{className:"w-full sm:w-auto",disabled:m||N,isLoading:N,onClick:()=>X(),icon:!1,children:"Give permission"})})]})]}):(0,o.jsx)(y.Z,{activeStep:a.activeStep,index:l,step:s,goToStep:()=>t({type:i.GO_TO_STEP,payload:l})})]})}S().extend(b()),S().extend(_());var Q=[{question:"How much does it cost? ",answer:"This depends on what chain you’re locking your tokens on. See our pricing page for more details."},{question:"Where will I be able to see my locked tokens?",answer:"You can see and withdraw your tokens inside our admin dashboard. Simply click ‘Launch app’ and connect your wallet to see this dashboard"},{question:"Who are Liquidity Locks for?",answer:"Using a liquidity lock is best practice for any serious crypto project looking to build a community and raise external funding. However, for new projects with teams that don’t have an existing track record in the industry, liquidity locks can be particularly effective in helping gain credibility and trust."},{question:"How long should I lock my liquidity for?",answer:"The longer the better. Locking liquidity for the long term helps signal that you are a serious project committed to building what you have promised."},{question:"How much of my liquidity should I lock?",answer:"If you intend to be the main liquidity provider for a liquidity pool, we recommend locking 80-100% of the total pool value."},{question:"Can I use locking services if I didn’t create my token with Team Finance’s token creator?",answer:"Yes. Our locking contracts are compatible with any token standard on the blockchain networks that we support."},{question:"What’s the difference between Team Token Locks & Liquidity Locks?",answer:"Team Token Locks are specifically for tokens allocated to project team members. With these locks, team members are unable to sell their tokens until the lock expires. They help prevent exit-scams. Liquidity Locks are for liquidity pool (LP) tokens. These are created when a project contributes tokens to a liquidity pool on a decentralised exchange. They help prevent rug pulls."}];(l=n||(n={}))[l.SELECT_WALLET=0]="SELECT_WALLET",l[l.SELECT_CHAIN=1]="SELECT_CHAIN",l[l.SELECT_TOKEN=2]="SELECT_TOKEN",l[l.CONFIGURE_LOCK=3]="CONFIGURE_LOCK",l[l.DEPLOY_CONTRACT=4]="DEPLOY_CONTRACT",l[l.OUTCOME=5]="OUTCOME";let V={activeStep:n.SELECT_WALLET,walletDetails:{chainId:"",account:"",errorMsg:""},liquidityTokenInfo:{address:"",decimals:18,name:"",symbol:"",token0:{id:"",name:"",symbol:""},token1:{id:"",name:"",symbol:""},totalSupply:A.O$.from(0)},lockDetails:{date:"",totalAmount:"",fee:"",feeInUsd:""},approved:!1,success:!1,transactionHash:"",errorMsg:"",requesting:!1,showWaitingConfirmModal:!1,showWaitingScreen:!1,showOutcomeScreen:!1,showStepContainer:!0};function X(e,t){switch(t.type){case"handleNext":return{...e,activeStep:e.activeStep+1,errorMsg:""};case"goToStep":return{...e,activeStep:t.payload};case"handleLastStep":return{...e,activeStep:n.OUTCOME,errorMsg:t.payload.errorMsg};case"handleStartOver":return{...V};case"handleAccountDetailsChanged":return{...V,walletDetails:{...e.walletDetails,chainId:"",errorMsg:t.payload.errorMsg},errorMsg:t.payload.errorMsg,activeStep:t.payload.activeStep,showStepContainer:!0};case"setErrorMsg":return{...e,errorMsg:t.payload.errorMsg};case"setChainId":if(t.payload.chainId!==e.walletDetails.chainId)return{...e,walletDetails:{...e.walletDetails,chainId:t.payload.chainId},liquidityTokenInfo:V.liquidityTokenInfo,lockDetails:V.lockDetails,activeStep:e.activeStep+1,errorMsg:""};return{...e,walletDetails:{...e.walletDetails,chainId:t.payload.chainId},activeStep:e.activeStep+1,errorMsg:""};case"setAccount":if(e.walletDetails.account!==t.payload.account)return{...e,walletDetails:{...V.walletDetails,account:t.payload.account},lockDetails:V.lockDetails};return{...e};case"setLiquidityTokenInfo":return{...e,liquidityTokenInfo:t.payload.liquidityTokenInfo,lockDetails:V.lockDetails,errorMsg:""};case"resetLiquidityTokenInfo":return{...e,liquidityTokenInfo:{...V.liquidityTokenInfo,errorMsg:t.payload.errorMsg},errorMsg:t.payload.errorMsg};case"setLockDetails":return{...e,lockDetails:{...e.lockDetails,fee:t.payload.fee,feeInUsd:t.payload.feeInUsd,totalAmount:t.payload.totalAmount,date:t.payload.date,referralAddress:t.payload.referralAddress,referralSupported:t.payload.referralSupported},activeStep:e.activeStep+1};case"resetLockDetails":return{...e,lockDetails:V.lockDetails,errorMsg:""};case"setApproved":return{...e,approved:!0};case"setRequestingLock":return{...e,showWaitingConfirmModal:!0,requesting:!0};case"setVisibleModalWaitingConfirm":return{...e,showWaitingConfirmModal:t.payload};case"setTransactionHash":return{...e,transactionHash:t.payload.transactionHash,showWaitingConfirmModal:!1,showWaitingScreen:!0,showStepContainer:!1,showOutcomeScreen:!1};case"setOutcome":return{...e,success:t.payload.success,errorMsg:t.payload.errorMsg,activeStep:e.activeStep!==n.OUTCOME?e.activeStep+1:e.activeStep,showWaitingConfirmModal:!1,showWaitingScreen:!1,showOutcomeScreen:!0,showStepContainer:!1,requesting:!1};case"setShowStepContainer":return{...e,showWaitingConfirmModal:!1,showWaitingScreen:!1,showOutcomeScreen:!1,showStepContainer:!0};default:throw Error()}}var B=a(33967);let Z={LIQUIDITY_TOKEN:0,NFT_TOKEN:1,PROJECT_TOKEN:2,NFT_LOCK:3,REWARD_TOKEN:4,REWARD_NFT:5};Z.LIQUIDITY_TOKEN,Z.NFT_TOKEN,Z.PROJECT_TOKEN,Z.NFT_LOCK;var $=a(81713),z=e=>{let{address:t,chainId:a,tokenType:s=Z.PROJECT_TOKEN}=e,[l,i]=(0,d.useState)([]),[n,o]=(0,d.useState)([]),[r,h]=(0,d.useState)([]),{data:m,isLoading:p}=(0,u.Dm)({contracts:n,allowFailure:!0,enabled:n.length>0});return(0,d.useEffect)(()=>{try{if(m&&0===m.length||r&&0===r.length||m.length!==r.length){i([]);return}let e=r.map((e,t)=>({...e,type:m[t]?Z.LIQUIDITY_TOKEN:Z.PROJECT_TOKEN})),t=e.filter(e=>e.type===s);i(t)}catch(e){console.error(e)}},[m,r,s]),(0,d.useEffect)(()=>{async function e(e){let t=[];e.forEach(e=>{t.push({address:e.token_address,abi:$.tI,functionName:"token0"})}),o(t)}async function s(){let e=await (0,c.zd)(t,a),s=[];return await e.data.forEach(async e=>{s.push({...e})}),{tokens:s}}let l=async()=>{try{let t=await s();h(t.tokens),await e(t.tokens)}catch(e){console.error(e)}};a&&t&&l()},[t,a]),{userTokens:l,isLoading:p}},J=a(72779),ee=a.n(J),et=a(72579),ea=a.n(et),es=a(16760),el=a.n(es),ei=a(84636),en=a.n(ei);function eo(e){var t,a;let{dispatch:s,state:l,step:n,index:r,collapsed:h,event:m="db_liquidity_lock_token_selected"}=e,[x,w]=(0,d.useState)(null),[k,T]=(0,d.useState)(!1),[I,S]=(0,d.useState)("-"),[N,b]=(0,d.useState)(""),[E,_]=(0,d.useState)([]),{address:A}=(0,u.mA)(),{data:v}=(0,u.mx)(),{userTokens:L,isLoading:O}=z({address:l.walletDetails.account,chainId:l.walletDetails.chainId,tokenType:Z.LIQUIDITY_TOKEN}),q=(0,c.X$)(l.walletDetails.chainId),M=(0,c.Vz)(l.walletDetails.chainId)||(0,c.t2)(l.walletDetails.chainId)||(0,c.it)(l.walletDetails.chainId)||(0,c.KF)(l.walletDetails.chainId)||(0,c.ci)(l.walletDetails.chainId)||(0,c.H2)(l.walletDetails.chainId)||(0,c.n9)(l.walletDetails.chainId)||(0,c.VC)(l.walletDetails.chainId);async function P(e){try{if(L){let t=E.find(t=>t.token_address.toLowerCase()===e.toLowerCase());w(t||null)}}catch(e){console.error(e)}if(b(e),!e){s({type:i.RESET_LIQUIDITY_TOKEN_INFO,payload:{errorMsg:"Token address is invalid."}});return}try{T(!0);let t=await (0,c.Fp)(e,v),a=await (0,c.Q3)(e,v),l=await (0,c.Yc)(e,v),n=await (0,c.db)(e,A,v);S(D.formatUnits(n,a));let o=[];if(!M)try{await Promise.all(el()(q,async e=>{if(null!==e){let t=await (0,c._z)(A.toLowerCase(),e),a=ea()(t,"data.as0",[]),s=ea()(t,"data.as1"),l=ea()(t,"data.asAddress",[]),i=en()([...a,...s,...l],"id");i.length>0&&(o=i)}}))}catch(e){console.error("Graph search failed")}let r=[];if(M||0===o.length){let s=new j.CH(e,$.tI,v),i=await s.token0(),o=await s.token1(),d=await (0,c.Fp)(i,v),u=await (0,c.Yc)(i,v),h=await (0,c.Fp)(o,v),m=await (0,c.Yc)(o,v);r.push({address:e,symbol:t,decimals:a,name:l,totalSupply:n,token0:{id:i,name:u,symbol:d},token1:{id:o,name:m,symbol:h}})}else r=await Promise.all(el()(o,async a=>{let s=ea()(a,"id"),[i,n]=await Promise.all([(0,c.Q3)(e,v),(0,c.W0)(e,v)]);return{...JSON.parse(JSON.stringify(a)),decimals:i,totalSupply:n,symbol:t,name:l,address:C.getAddress(s)}}));r.length>0?s({type:i.SET_LIQUIDITY_TOKEN_INFO,payload:{liquidityTokenInfo:r[0]}}):s({type:i.RESET_LIQUIDITY_TOKEN_INFO,payload:{errorMsg:"Token address is invalid."}})}catch(e){console.error(e),s({type:i.RESET_LIQUIDITY_TOKEN_INFO,payload:{errorMsg:"Token address is invalid."}}),p.Tb(e)}finally{T(!1)}}return(0,d.useEffect)(()=>{let e=async()=>{let e=[];await Promise.all(L.map(async t=>{try{let a=await (0,c.db)(t.token_address,A,v),s=D.formatUnits(a,t.decimals),l=new j.CH(t.token_address,$.tI,v),i=await l.token0(),n=await l.token1(),o=await (0,c.Fp)(i,v),r=await (0,c.Fp)(n,v),d={...t,balance:s,symbol0:o,symbol1:r};e.push(d)}catch(e){console.error(e)}})),_(e)};if(L&&A&&v)try{e()}catch(e){console.error(e)}},[A,v,L]),(0,d.useEffect)(()=>{l.walletDetails.errorMsg&&b("")},[l.walletDetails.errorMsg]),(0,o.jsx)("div",{children:l.activeStep===r?(0,o.jsx)(f.Z,{step:n,errorMsg:l.errorMsg,children:(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("p",{className:"my-1 text-xs font-medium text-neutral-600",children:"LP token address"}),(0,o.jsx)(g.II,{error:!!l.errorMsg,className:"w-full text-sm sm:w-96",type:"text",name:"search",placeholder:"Enter address...",onChange:e=>P(e.target.value),value:N,"data-testid":"token-address-input"}),l.errorMsg?(0,o.jsx)("p",{className:"my-1 text-xs font-medium text-red-600",children:"Invalid LP token address. Please insert a valid address."}):(0,o.jsx)("p",{className:"my-1 break-words text-xs text-neutral-600",children:"e.g. 0xd90a1ba0cbaaaabfdc6c814cdf1611306a26e1f8"}),!O&&E&&(0,o.jsxs)(B.E,{value:x,onChange:e=>{P(e.token_address)},children:[(0,o.jsx)(B.E.Label,{className:"sr-only",children:"User tokens"}),(0,o.jsx)("div",{className:ee()("mt-2 grid gap-2 text-center md:grid-cols-2",{"lg:grid-cols-2 xl:grid-cols-3":!h,"lg:grid-cols-3 xl:grid-cols-4":h}),children:E.map(e=>(0,o.jsx)(B.E.Option,{value:e,className:e=>{let{active:t,checked:a}=e;return ee()({"ring-2 ring-blue-300":t,"border border-blue-600":a},"flex cursor-pointer select-none rounded bg-[#4687C3]/10 p-3")},children:t=>{let{checked:a}=t;return(0,o.jsx)("div",{className:"inline-flex w-full items-center space-x-2 text-left sm:space-x-4",children:(0,o.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,o.jsx)(B.E.Label,{as:"h6",children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)(g.Oi,{src:(0,Y.XP)(e.token_address),chainId:l.walletDetails.chainId,className:"h-9 w-9"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"ml-2 text-sm sm:text-base",children:"".concat(e.symbol0," / ").concat(e.symbol1)}),(0,o.jsx)("p",{className:"ml-2 text-xs text-[#222222]/60",children:e.balance})]})]})}),(0,o.jsx)("span",{className:ee()({"border-blue-600":a,"border-gray-500":!a},"flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"),"aria-hidden":"true",children:(0,o.jsx)("div",{className:ee()({"border-white bg-blue-600":a,"border-transparent bg-transparent":!a},"h-3 w-3 rounded-full border-2")})})]})})}},e.token_address))})]}),l.liquidityTokenInfo.symbol&&(0,o.jsxs)("div",{className:"my-4 w-full divide-y divide-neutral-200 rounded-md sm:w-96",children:[(0,o.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,o.jsx)("span",{className:"text-base text-[#222222]/60",children:"Name"}),(0,o.jsx)("span",{className:"text-base font-medium text-[#222222]",children:l.liquidityTokenInfo.name})]}),(0,o.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,o.jsx)("span",{className:"text-base text-[#222222]/60",children:"LP token"}),(0,o.jsxs)("div",{className:"inline-flex items-center gap-x-1.5 font-medium",children:[(0,o.jsxs)("div",{className:"flex -space-x-2",children:[(0,o.jsx)(g.Oi,{src:(0,Y.XP)(l.liquidityTokenInfo.token0.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:l.walletDetails.chainId}),(0,o.jsx)(g.Oi,{src:(0,Y.XP)(l.liquidityTokenInfo.token1.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:l.walletDetails.chainId})]}),null===(t=l.liquidityTokenInfo.token0)||void 0===t?void 0:t.symbol," /"," ",null===(a=l.liquidityTokenInfo.token1)||void 0===a?void 0:a.symbol]})]}),(0,o.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,o.jsx)("span",{className:"text-base text-[#222222]/60",children:"Balance"}),(0,o.jsx)("span",{className:"text-base font-medium text-[#222222]",children:I})]})]}),(0,o.jsx)(g.zx,{className:"mt-4 w-full sm:w-fit",disabled:!!l.errorMsg||!l.liquidityTokenInfo.address||k,isLoading:k,onClick:()=>{window.dataLayer.push({event:m}),s({type:i.HANDLE_NEXT})},"data-testid":"continue-button",children:"Continue"})]})}):(0,o.jsx)(y.Z,{activeStep:l.activeStep,index:r,step:n,goToStep:()=>s({type:i.GO_TO_STEP,payload:r}),children:(0,o.jsx)("div",{children:l.liquidityTokenInfo.symbol&&(0,o.jsxs)("div",{className:"flex items-center gap-x-1.5",children:[(0,o.jsxs)("div",{className:"flex -space-x-2",children:[(0,o.jsx)(g.Oi,{src:(0,Y.XP)(l.liquidityTokenInfo.token0.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:l.walletDetails.chainId}),(0,o.jsx)(g.Oi,{src:(0,Y.XP)(l.liquidityTokenInfo.token1.id),alt:"logo2",className:"h-5 w-5 rounded-full border border-white object-contain",chainId:l.walletDetails.chainId})]}),(0,o.jsxs)("p",{className:"text-sm sm:text-base",children:[l.liquidityTokenInfo.token0.symbol," /"," ",l.liquidityTokenInfo.token1.symbol]})]})})})})}var er=a(65186),ec=[{title:"Connect wallet",description:"Make sure to connect only the wallet that contains the liquidity provider (LP) tokens you would like to lock.",renderLogo:()=>(0,o.jsx)(er.DLc,{className:"h-4 w-4"})},{title:"Select blockchain",description:"Choose the blockchain that the liquidity provider (LP) token you are locking is built on.",renderLogo:()=>(0,o.jsx)(er.pNz,{className:"h-4 w-4"})},{title:"Select LP token",description:"Enter the LP token address or select from the list below.",renderLogo:()=>(0,o.jsx)(er.$l_,{className:"h-4 w-4"})},{title:"Add lock details",description:"Set the amount and time period you would like to lock your LP token for.",renderLogo:()=>(0,o.jsx)(er.kVv,{className:"h-4 w-4"})},{title:"Create contract",description:"We need your authorisation before using the LP token. This only needs to be done once.",renderLogo:()=>(0,o.jsx)(er.D6S,{className:"h-4 w-4"})}];function ed(){let{address:e}=(0,u.mA)(),{chain:t}=(0,u.LN)(),[a,s]=(0,d.useReducer)(X,V),[l,p]=(0,d.useState)(!1),[x,f]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{a.walletDetails.account&&a.activeStep>n.SELECT_WALLET&&e!==a.walletDetails.account&&s({type:i.HANDLE_ACCOUNT_DETAILS_CHANGED,payload:{errorMsg:"Wallet changed. Please select the correct wallet and continue.",activeStep:n.SELECT_WALLET}})},[e,a.walletDetails.account,s,a.activeStep]),(0,d.useEffect)(()=>{a.activeStep>n.SELECT_CHAIN&&(0,c.i6)(null==t?void 0:t.id)!==a.walletDetails.chainId&&s({type:i.HANDLE_ACCOUNT_DETAILS_CHANGED,payload:{errorMsg:"Blockchain changed. Please select the correct blockchain and continue.",activeStep:n.SELECT_CHAIN}})},[t,a.walletDetails.chainId,s,a.activeStep]),(0,d.useEffect)(()=>{(!a.walletDetails.account&&e||a.activeStep===n.SELECT_WALLET)&&s({type:i.SET_ACCOUNT,payload:{account:e}})},[e,a.walletDetails.account,a.activeStep,s]),(0,o.jsxs)("div",{children:[a.showWaitingScreen&&(0,o.jsx)(r.QD,{logoHeader:m.Z,subText:"Token: ".concat(a.liquidityTokenInfo.symbol),faqData:Q}),a.showOutcomeScreen&&(0,o.jsx)(r.sv,{href:"/",claimHref:"/liquidity-locks",logoHeader:m.Z,chainId:a.walletDetails.chainId,txHash:a.transactionHash,tokenDetailsPageRef:"https://www.team.finance/view-coin/".concat(a.liquidityTokenInfo.address,"?name=").concat(a.liquidityTokenInfo.name,"&symbol=").concat(a.liquidityTokenInfo.symbol,"&chainid=").concat(a.walletDetails.chainId),success:a.success,errorMsg:a.errorMsg,startOver:()=>{window.dataLayer.push({event:"db_liquidity_lock_try_again"}),s({type:i.HANDLE_START_OVER,payload:null})},title:"Your liquidity token lock was deployed successfully!",subTitle:"Let your investors and community know that their tokens are in safe hands. We've prepared a media kit for you to tell them the good news on your website and social media!",buttonText:"Visit liquidity token locks page",eventSuccess:"db_liquidity_lock_visit_page",eventsCertification:"db_liquidity_lock",secureText:"Lock"}),a.showStepContainer&&(0,o.jsxs)(r.o3,{href:"/",logoHeader:h.Z,collapsed:l,setCollapsed:p,collapsedMobile:x,setCollapsedMobile:f,title:"Create liquidity lock",faqData:Q,children:[(0,o.jsx)(r.Rg,{state:a,stepDescriptions:ec,goToStep:e=>{s({type:i.GO_TO_STEP,payload:e})}}),(0,o.jsxs)("div",{className:"mt-4 flex flex-col gap-1",children:[(0,o.jsx)(r.Rk,{step:ec[n.SELECT_WALLET],index:n.SELECT_WALLET,activeStep:a.activeStep,errorMsg:a.errorMsg,event:"db_liquidity_lock_wallet_connected",goToStep:()=>s({type:i.GO_TO_STEP,payload:n.SELECT_WALLET}),handleNext:()=>s({type:i.HANDLE_NEXT,payload:null})}),(0,o.jsx)(r.jP,{step:ec[n.SELECT_CHAIN],index:n.SELECT_CHAIN,collapsed:l,activeStep:a.activeStep,errorMsg:a.errorMsg,chainId:a.walletDetails.chainId,setChainId:e=>{s({type:i.SET_CHAIN_ID,payload:{chainId:e}}),window.dataLayer.push({event:"db_liquidity_lock_chain_selected",chain:(0,c.C7)(e)})},goToStep:()=>s({type:i.GO_TO_STEP,payload:n.SELECT_CHAIN})}),(0,o.jsx)(eo,{dispatch:s,state:a,step:ec[n.SELECT_TOKEN],index:n.SELECT_TOKEN,collapsed:l,event:"db_liquidity_lock_token_selected"}),(0,o.jsx)(M,{dispatch:s,state:a,step:ec[n.CONFIGURE_LOCK],index:n.CONFIGURE_LOCK,event:"db_liquidity_lock_details_added"}),(0,o.jsx)(G,{dispatch:s,state:a,step:ec[n.DEPLOY_CONTRACT],index:n.DEPLOY_CONTRACT,approveEvent:"db_liquidity_lock_gave_permission",lockEventFailure:"db_liquidity_lock_fail",lockEventSuccess:"db_liquidity_lock_success"})]})]})]})}var eu=a(97729),eh=a.n(eu),em=a(55351);function ep(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(em.PB,{title:"Team Finance App - Create Non-Uniswap V3 LP Token Locks",titleTemplate:"%s"}),(0,o.jsx)(eh(),{children:(0,o.jsx)("link",{rel:"canonical",href:"https://app.team.finance/lockups/liquidityToken"})}),(0,o.jsx)(ed,{})]})}}},function(e){e.O(0,[424,131,713,195,149,185,642,686,286,887,565,1,38,774,888,179],function(){return e(e.s=90109)}),_N_E=e.O()}]);