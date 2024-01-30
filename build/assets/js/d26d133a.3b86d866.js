"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[4197],{9613:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(r),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,l(l({ref:e},c),{},{components:r})):n.createElement(d,l({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6371:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(8063),a=(r(9496),r(9613));const o={title:"Wallet Setup",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},l=void 0,i={unversionedId:"quick-start/wallet-setup",id:"quick-start/wallet-setup",title:"Wallet Setup",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/quick-start/2-wallet-setup.md",sourceDirName:"quick-start",slug:"/quick-start/wallet-setup",permalink:"/docs/quick-start/wallet-setup",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/quick-start/2-wallet-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Wallet Setup",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"StartSidebar",previous:{title:"Welcome to Morph!",permalink:"/docs/quick-start/welcome-to-morph"},next:{title:"Faucet",permalink:"/docs/quick-start/faucet"}},p={},s=[{value:"Wallet",id:"wallet",level:2},{value:"MetaMask",id:"metamask",level:3},{value:"Manual network configuration",id:"manual-network-configuration",level:3},{value:"Network Configuration",id:"network-configuration",level:4}],c={toc:s},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,"To interact with dApps on Morph, you need a compatible wallet. Below are some example wallets and configuration tips."),(0,a.kt)("h3",{id:"metamask"},"MetaMask"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installation: MetaMask can be installed from their ",(0,a.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"official website"),"."),(0,a.kt)("li",{parentName:"ul"},'Importing Configurations: To set up MetaMask for Morph Testnet, click the "add to wallet" buttons on the Morph Testnet homepage. This will automatically import the chain ID and RPC URLs for the Morph Testnet.'),(0,a.kt)("li",{parentName:"ul"},'Using Ethereum Sepolia Testnet: Morph Testnet utilizes the Ethereum Sepolia testnet as its underlying L1, which is already configured in MetaMask by default. To access it, enable "Show/hide test networks" in the MetaMask network selection dropdown.')),(0,a.kt)("h3",{id:"manual-network-configuration"},"Manual network configuration"),(0,a.kt)("p",null,"Currently, the Add to wallet links may not be compatible with all wallets yet. If you are having issues using them, you may need to manually add the Sepolia Testnet and Morph by inserting the configuration details from the table below:"),(0,a.kt)("h4",{id:"network-configuration"},"Network Configuration"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use any of the following 3 rpc for connections:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"https://rpc-testnet.morphl2.io\n\nhttps://rpc1-testnet.morphl2.io\n\nhttps://rpc2-testnet.morphl2.io\n"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"RPC Url(s)"),(0,a.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Block explorer"),(0,a.kt)("th",{parentName:"tr",align:null},"Symbol"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Morph Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://rpc-testnet.morphl2.io"},"https://rpc-testnet.morphl2.io")),(0,a.kt)("td",{parentName:"tr",align:null},"2710"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://explorer-testnet.morphl2.io"},"https://explorer-testnet.morphl2.io")),(0,a.kt)("td",{parentName:"tr",align:null},"ETH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum Sepolia"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eth-sepolia-public.unifra.io"},"https://eth-sepolia-public.unifra.io")),(0,a.kt)("td",{parentName:"tr",align:null},"11155111"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://sepolia.etherscan.io"},"https://sepolia.etherscan.io")),(0,a.kt)("td",{parentName:"tr",align:null},"ETH")))),(0,a.kt)("p",null,"You can also visit ",(0,a.kt)("a",{parentName:"p",href:"https://chainlist.org/?chain=11155111&search=morph&testnets=true"},"chainlist")," to add Morph testnet and sepolia"))}m.isMDXComponent=!0}}]);