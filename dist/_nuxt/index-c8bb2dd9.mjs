import{_ as h}from"./Hero-ffb158f4.mjs";import{_ as d,d as f,o as c,c as l,e as n,t as i,n as g,p as k,b as x,a as r,f as v,w as b,h as C,i as y}from"./entry-af2702d2.mjs";const S=f({props:{content:null},setup(t,{expose:o}){o();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function w(t,o,e,a,_,s){return c(),l("section",null,[n("div",{class:g(["container",e.content.align])},[n("h2",null,i(e.content.title),1),n("p",null,i(e.content.text),1)],2)])}var j=d(S,[["render",w],["__scopeId","data-v-e80f9c14"]]);const E={},I=t=>(k("data-v-f822157a"),t=t(),x(),t),L={class:"curve"},P=I(()=>n("svg",{width:"1440",height:"166",viewBox:"0 0 1440 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M-0.5 19.7066L119.5 13.8044C239.5 7.9022 479.5 -4.74531 719.5 2.00003C959.5 7.9022 1199.5 32.3541 1319.5 44.1584L1439.5 55.9628V165.575H1319.5C1199.5 165.575 959.5 165.575 719.5 165.575C479.5 165.575 239.5 165.575 119.5 165.575H-0.5V19.7066Z",fill:"#CE9983"})],-1)),$=[P];function V(t,o){return c(),l("div",L,$)}var q=d(E,[["render",V],["__scopeId","data-v-f822157a"]]);const A=f({props:{content:null},setup(t,{expose:o}){o();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),B={class:"obj-fit image"},N=["src","alt"],D={class:"text"};function H(t,o,e,a,_,s){var u;const m=q,p=C;return c(),l("section",{class:g(e.content.background)},[r(m),n("div",{class:g(["container text-image",e.content.imagePos])},[n("div",B,[(u=e.content)!=null&&u.image?(c(),l("img",{key:0,src:e.content.image.url,alt:e.content.image.alt},null,8,N)):v("",!0)]),n("div",D,[n("h2",null,i(e.content.title),1),n("p",null,i(e.content.text),1),r(p,{to:`${e.content.link.url}`,class:"btn btn--pri"},{default:b(()=>[y(i(e.content.link.title),1)]),_:1},8,["to"])])],2)],2)}var O=d(A,[["render",H],["__scopeId","data-v-6a8aa36d"]]);const M=f({setup(t,{expose:o}){o();const s={heroContent:{title:"A healer is someone who holds space for you while you awaken your inner healer.",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium egestas porta consectetur arcu, ipsum at.",linkMore:{title:"L\xE6s mere",url:"/behandlinger"},linkBook:{title:"Book tid",url:"/book-tid"},imagePos:"right",image:{url:"/media/images/krystal.jpg",alt:"Syg nok alt tekst bro"}},paraContent:{align:"center",title:"Hvad kan enhedsterapi g\xF8re for dig?",text:"At hj\xE6lpe det enkelte menneske, patient eller klient til at hj\xE6lpe sig selv i mange forskellige former for problemstillinger. Princippet er at styrke personlige evner, ressourcer og muligheder uanset funktionsniveauet, samt at arbejde ud fra den enkeltes kontekst med familie- og psykosocial baggrund. Ved samarbejde mellem behandler og klient at op f\xE6lles resonans og respons. Der er mange forskellige redskaber og nogle af dem er specielt effektive i forbindelse med stress, traumer, chok og fobier (j\xE6vnf.  Slavinski)."},textImgContent:{background:"terra",title:"Enhedsterapeut Lisbeth Jessen",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt ante imperdiet vel pellentesque nec sed. Amet in placerat netus faucibus. Etiam diam eget at diam, at ridiculus sem magna. Commodo, lacus, quisque tellus, orci nisi, feugiat. Dictum non sed placerat donec semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt ante imperdiet vel pellentesque nec sed. Amet in placerat netus faucibus. Etiam diam eget at diam, at ridiculus sem magna. Commodo, lacus, quisque tellus, orci nisi, feugiat. Dictum non sed placerat donec semper.",link:{title:"L\xE6s mere",url:"/klinikken"},imagePos:"right",image:{url:"/media/images/krystal.jpg",alt:"Syg nok alt tekst bro"}}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function T(t,o,e,a,_,s){const m=h,p=j,u=O;return c(),l("article",null,[r(m,{content:a.heroContent}),r(p,{content:a.paraContent}),r(u,{content:a.textImgContent})])}var J=d(M,[["render",T]]);export{J as default};