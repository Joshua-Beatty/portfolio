(()=>{function O(){}function Re(t,e){for(let n in e)t[n]=e[n];return t}function oe(t){return t()}function ye(){return Object.create(null)}function L(t){t.forEach(oe)}function we(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var J;function ae(t,e){return J||(J=document.createElement("a")),J.href=e,t===J.href}function $e(t){return Object.keys(t).length===0}function W(t,e,n,i){if(t){let s=ke(t,e,n,i);return t[0](s)}}function ke(t,e,n,i){return t[1]&&i?Re(n.ctx.slice(),t[1](i(e))):n.ctx}function V(t,e,n,i){if(t[2]&&i){let s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){let l=[],o=Math.max(e.dirty.length,s.length);for(let p=0;p<o;p+=1)l[p]=e.dirty[p]|s[p];return l}return e.dirty|s}return e.dirty}function X(t,e,n,i,s,l){if(s){let o=ke(e,n,i,l);t.p(o,s)}}function Y(t){if(t.ctx.length>32){let e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}var xe=!1;function Pe(){xe=!0}function Ie(){xe=!1}function w(t,e){t.appendChild(e)}function T(t,e,n){let i=Le(t);if(!i.getElementById(e)){let s=m("style");s.id=e,s.textContent=n,Ne(i,s)}}function Le(t){if(!t)return document;let e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ne(t,e){w(t.head||t,e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function Fe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function x(){return I(" ")}function Q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Be(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function N(t,e,n){t.classList[n?"add":"remove"](e)}var ce;function H(t){ce=t}var z=[];var be=[],U=[],ve=[],ze=Promise.resolve(),le=!1;function He(){le||(le=!0,ze.then(Ce))}function re(t){U.push(t)}var se=new Set,G=0;function Ce(){let t=ce;do{for(;G<z.length;){let e=z[G];G++,H(e),Je(e.$$)}for(H(null),z.length=0,G=0;be.length;)be.pop()();for(let e=0;e<U.length;e+=1){let n=U[e];se.has(n)||(se.add(n),n())}U.length=0}while(z.length);for(;ve.length;)ve.pop()();le=!1,se.clear(),H(t)}function Je(t){if(t.fragment!==null){t.update(),L(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}var K=new Set,Ge;function S(t,e){t&&t.i&&(K.delete(t),t.i(e))}function j(t,e,n,i){if(t&&t.o){if(K.has(t))return;K.add(t),Ge.c.push(()=>{K.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}var gt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function R(t){t&&t.c()}function q(t,e,n,i){let{fragment:s,on_mount:l,on_destroy:o,after_update:p}=t.$$;s&&s.m(e,n),i||re(()=>{let u=l.map(oe).filter(we);o?o.push(...u):L(u),t.$$.on_mount=[]}),p.forEach(re)}function D(t,e){let n=t.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(t,e){t.$$.dirty[0]===-1&&(z.push(t),He(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(t,e,n,i,s,l,o,p=[-1]){let u=ce;H(t);let _=t.$$={fragment:null,ctx:null,props:l,update:O,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ye(),dirty:p,skip_bound:!1,root:e.target||u.$$.root};o&&o(_.root);let h=!1;if(_.ctx=n?n(t,e.props||{},(c,r,...g)=>{let v=g.length?g[0]:r;return _.ctx&&s(_.ctx[c],_.ctx[c]=v)&&(!_.skip_bound&&_.bound[c]&&_.bound[c](v),h&&Ue(t,c)),r}):[],_.update(),h=!0,L(_.before_update),_.fragment=i?i(_.ctx):!1,e.target){if(e.hydrate){Pe();let c=Be(e.target);_.fragment&&_.fragment.l(c),c.forEach(f)}else _.fragment&&_.fragment.c();e.intro&&S(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),Ie(),Ce()}H(u)}var Ke;typeof HTMLElement=="function"&&(Ke=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(oe).filter(we);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=O}$on(t,e){let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var C=class{$destroy(){D(this,1),this.$destroy=O}$on(e,n){let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function We(t){T(t,"svelte-1jflsf8",".page.svelte-1jflsf8{position:absolute;width:100%;left:calc(100% * var(--offset));transition:all 300ms ease-in-out;height:100%;overflow-y:auto}")}function Ve(t){let e,n,i=t[3].default,s=W(i,t,t[2],null);return{c(){e=m("div"),s&&s.c(),a(e,"class","page svelte-1jflsf8"),a(e,"style",t[0])},m(l,o){d(l,e,o),s&&s.m(e,null),n=!0},p(l,[o]){s&&s.p&&(!n||o&4)&&X(s,i,l,l[2],n?V(i,l[2],o,null):Y(l[2]),null),(!n||o&1)&&a(e,"style",l[0])},i(l){n||(S(s,l),n=!0)},o(l){j(s,l),n=!1},d(l){l&&f(e),s&&s.d(l)}}}function Xe(t,e,n){let i,{$$slots:s={},$$scope:l}=e,{offset:o=0}=e;return t.$$set=p=>{"offset"in p&&n(1,o=p.offset),"$$scope"in p&&n(2,l=p.$$scope)},t.$$.update=()=>{if(t.$$.dirty&2){e:n(0,i=`--offset:${o};`)}},[i,o,l,s]}var ue=class extends C{constructor(e){super(),M(this,e,Xe,Ve,A,{offset:1},We)}},Z=ue;function Ye(t){T(t,"svelte-ykgykg",`.main.svelte-ykgykg{width:100%;display:grid;place-items:center;height:100%}.card.svelte-ykgykg{padding:1em;height:fit-content;width:30%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px}.mainTitle.svelte-ykgykg{font-family:'Saira Extra Condensed', sans-serif;font-size:6rem;line-height:5.5rem;text-transform:uppercase;margin:0.1em 0 0.1em 0}.mainSubitle.svelte-ykgykg{font-family:'Saira Extra Condensed', sans-serif;font-size:1.4em;font-weight:400;margin-top:-0.75em;color:#868e96\r
    }.blueText.svelte-ykgykg{color:#3891bd}.bio.svelte-ykgykg{position:relative}.mainPhoto.svelte-ykgykg{height:10rem;width:10rem;object-fit:cover;border-radius:40%;border-color:#60a7ca;border-style:solid;border-width:0.5rem;margin:auto;position:absolute;top:-5rem;right:1rem}@media all and (max-width: 750px){.card.svelte-ykgykg{min-width:80%;margin-top:10rem;padding-top:3rem;margin-bottom:2rem}.mainPhoto.svelte-ykgykg{top:-12rem;right:calc(50% - 5rem)}.main.svelte-ykgykg{height:fit-content}}@media all and (max-width: 400px){.card.svelte-ykgykg{margin-top:12rem}}`)}function Qe(t){let e;return{c(){e=m("div"),e.innerHTML=`<div class="card svelte-ykgykg"><div class="bio svelte-ykgykg"><h1 class="mainTitle svelte-ykgykg">Joshua <span class="blueText svelte-ykgykg">Beatty</span></h1> 
            <h2 class="mainSubitle svelte-ykgykg"><div>Salt Lake, UT 84115 \xB7 <a href="mailto:name@email.com">Joshuatb6@gmail.com</a></div></h2> 
            <p>I am the Senior Developer at Pearagon, a HubSpot Diamond Partner. I&#39;ve created many different apps, websites, games, and tools. I am also a HubSpot Community Champion and a top HubSpot developer. I am proficient in Javascript, C#, and Java. Currently I am studying computer science at the University Of Utah in addition to working at Pearagon.</p> 
            <img class="mainPhoto svelte-ykgykg" src="/img/me.jpeg" alt="Me Joshua Beatty"/></div></div>`,a(e,"class","main svelte-ykgykg")},m(n,i){d(n,e,i)},p:O,i:O,o:O,d(n){n&&f(e)}}}var fe=class extends C{constructor(e){super(),M(this,e,null,Qe,A,{},Ye)}},je=fe;function Ze(t){T(t,"svelte-10s4qkv",`.main.svelte-10s4qkv{height:100%;width:100%;display:grid;place-items:center\r
    }.card.svelte-10s4qkv{padding:1em;height:80%;width:50%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px}iframe.svelte-10s4qkv{height:93%\r
    }p.svelte-10s4qkv{margin:0.5em 0}@media all and (max-width: 750px){.card.svelte-10s4qkv{min-width:80%}}`)}function et(t){let e;return{c(){e=m("div"),e.innerHTML=`<div class="card svelte-10s4qkv"><iframe src="https://drive.google.com/file/d/168BeaxoY0yXAmOOLKiL3INCTnUpOkeKw/preview" title="Resume" loading="lazy" data-dashlane-frameid="40802189313" width="100%" height="500px" class="svelte-10s4qkv"></iframe> 
        <p class="svelte-10s4qkv"><a href="https://drive.google.com/file/d/168BeaxoY0yXAmOOLKiL3INCTnUpOkeKw/view?usp=sharing" target="_blank">Download my resume here</a></p></div>`,a(e,"class","main svelte-10s4qkv")},m(n,i){d(n,e,i)},p:O,i:O,o:O,d(n){n&&f(e)}}}var de=class extends C{constructor(e){super(),M(this,e,null,et,A,{},Ze)}},Oe=de;function tt(t){T(t,"svelte-12oshkd","a:link{color:#3891bd}a:visited{color:#3891bd}a:hover{color:#3891bd}a:active{color:#3891bd}")}var pe=class extends C{constructor(e){super(),M(this,e,null,null,A,{},tt)}},Ae=pe;function nt(t){T(t,"svelte-erenmy",".container.svelte-erenmy{display:grid;place-items:center;margin-top:2rem}.card.svelte-erenmy{padding:1em;height:fit-content;width:50%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px;display:table}.text.svelte-erenmy{width:55%;display:table-cell;vertical-align:top}img.svelte-erenmy{width:50%;object-fit:contain;height:100%;margin:1%}.imgContainer.svelte-erenmy{height:100%;width:45%;display:table-cell;vertical-align:middle}@media all and (max-width: 750px){.card.svelte-erenmy{min-width:80%}.imgContainer.svelte-erenmy{display:table-row}}")}function Te(t,e,n){let i=t.slice();return i[5]=e[n],i}function De(t){let e,n,i,s;return{c(){e=m("img"),a(e,"defer",""),ae(e.src,n=t[5].src)||a(e,"src",n),a(e,"alt",i=t[5].alt),a(e,"style",s=`width:${(100-2*t[0].length)/t[0].length}%`),a(e,"class","svelte-erenmy")},m(l,o){d(l,e,o)},p(l,o){o&1&&!ae(e.src,n=l[5].src)&&a(e,"src",n),o&1&&i!==(i=l[5].alt)&&a(e,"alt",i),o&1&&s!==(s=`width:${(100-2*l[0].length)/l[0].length}%`)&&a(e,"style",s)},d(l){l&&f(e)}}}function it(t){let e,n,i,s,l,o,p,u,_,h,c,r,g=t[4].default,v=W(g,t,t[3],null),P=t[0],$=[];for(let b=0;b<P.length;b+=1)$[b]=De(Te(t,P,b));return{c(){e=m("div"),n=m("div"),i=m("div"),s=m("h2"),l=I(t[1]),o=x(),p=m("p"),v&&v.c(),_=x(),h=m("div");for(let b=0;b<$.length;b+=1)$[b].c();a(i,"class","text svelte-erenmy"),a(i,"style",u=`width:${100-t[2]}%`),a(h,"class","imgContainer svelte-erenmy"),a(h,"style",c=`width:${t[2]}%`),a(n,"class","card svelte-erenmy"),a(e,"class","container svelte-erenmy")},m(b,E){d(b,e,E),w(e,n),w(n,i),w(i,s),w(s,l),w(i,o),w(i,p),v&&v.m(p,null),w(n,_),w(n,h);for(let k=0;k<$.length;k+=1)$[k].m(h,null);r=!0},p(b,[E]){if((!r||E&2)&&Se(l,b[1]),v&&v.p&&(!r||E&8)&&X(v,g,b,b[3],r?V(g,b[3],E,null):Y(b[3]),null),(!r||E&4&&u!==(u=`width:${100-b[2]}%`))&&a(i,"style",u),E&1){P=b[0];let k;for(k=0;k<P.length;k+=1){let B=Te(b,P,k);$[k]?$[k].p(B,E):($[k]=De(B),$[k].c(),$[k].m(h,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=P.length}(!r||E&4&&c!==(c=`width:${b[2]}%`))&&a(h,"style",c)},i(b){r||(S(v,b),r=!0)},o(b){j(v,b),r=!1},d(b){b&&f(e),v&&v.d(b),Fe($,b)}}}function st(t,e,n){let{$$slots:i={},$$scope:s}=e,{images:l}=e,{title:o}=e,{imageRatio:p=45}=e;return t.$$set=u=>{"images"in u&&n(0,l=u.images),"title"in u&&n(1,o=u.title),"imageRatio"in u&&n(2,p=u.imageRatio),"$$scope"in u&&n(3,s=u.$$scope)},[l,o,p,s,i]}var me=class extends C{constructor(e){super(),M(this,e,st,it,A,{images:0,title:1,imageRatio:2},nt)}},ee=me;function lt(t){T(t,"svelte-1ih0wcl",`.main.svelte-1ih0wcl{width:100%;display:grid;place-items:center\r
    }`)}function rt(t){let e,n,i,s,l,o,p,u,_,h,c;return{c(){e=I(`Prism calculator is a multi-function geometric calculator. Programmed in javascript using the Tabris framework,\r
        the app has a native feel on both Android and Ios. With well over 500 downloads across both platforms, this app\r
        has been a success. It utilizes javascript with node.js and the big decimal library for arbitrary precision. This\r
        was just a first step into using Tabris, making use of multiple input types as well as a status bar and multiple\r
        pages with variable recollection.`),n=m("br"),i=m("br"),s=x(),l=m("a"),l.textContent="Download On The Appstore",o=m("br"),p=x(),u=m("a"),u.textContent="Get It On Google Play",_=m("br"),h=x(),c=m("a"),c.textContent="View the source on GitHub",a(l,"href","https://apps.apple.com/us/app/prism-calculator/id1516939934?platform=iphone"),a(l,"target","_blank"),a(u,"href","https://play.google.com/store/apps/details?id=me.joshbeatty.PrismCalc"),a(u,"target","_blank"),a(c,"href","https://github.com/Joshua-Beatty/Rectangular-Prism-Calculator-Tabris"),a(c,"target","_blank")},m(r,g){d(r,e,g),d(r,n,g),d(r,i,g),d(r,s,g),d(r,l,g),d(r,o,g),d(r,p,g),d(r,u,g),d(r,_,g),d(r,h,g),d(r,c,g)},p:O,d(r){r&&f(e),r&&f(n),r&&f(i),r&&f(s),r&&f(l),r&&f(o),r&&f(p),r&&f(u),r&&f(_),r&&f(h),r&&f(c)}}}function ot(t){let e,n,i,s;return{c(){e=m("a"),e.textContent="Excalibur",n=I(` is a free open source 2D game engine written in TypeScript for the web written in TypeScript for making 2D games in HTML5 canvas.\r
        `),i=m("a"),i.textContent="FitScreenAndFill is a pull request",s=I(` I submitted and was merged in that adds two new types of display modes for the game world. FitScreenAndFill\r
        ensures that specific area of the screen will always be visible, and as zoomed in as possible, but will also allow the rest of the screen to still\r
        be visible and usable. This ensures a good game space with no black bars or letterboxing.`),a(e,"href","https://excaliburjs.com/"),a(e,"target","_blank"),a(i,"href","https://github.com/excaliburjs/Excalibur/pull/2272#issuecomment-1126034795"),a(i,"target","_blank")},m(l,o){d(l,e,o),d(l,n,o),d(l,i,o),d(l,s,o)},p:O,d(l){l&&f(e),l&&f(n),l&&f(i),l&&f(s)}}}function at(t){let e,n,i,s,l,o,p,u,_,h,c;return{c(){e=I(`Recolor is a simple Simon like memory game developed in Corona SDK. Corona is a cross-platform language build on top of Lua.\r
        Using this framework I was able to build a simple game that I have published to both the google play, and apple app store,\r
        to positive reception.`),n=m("br"),i=m("br"),s=x(),l=m("a"),l.textContent="Download On The Appstore",o=m("br"),p=x(),u=m("a"),u.textContent="Get It On Google Play",_=m("br"),h=x(),c=m("a"),c.textContent="View the source on GitHub",a(l,"href","https://apps.apple.com/us/app/recolor-the-memory-game/id1488708329?platform=iphone"),a(l,"target","_blank"),a(u,"href","https://play.google.com/store/apps/details?id=tk.joshbeatty.recolor"),a(u,"target","_blank"),a(c,"href","https://github.com/Joshua-Beatty/Recolor"),a(c,"target","_blank")},m(r,g){d(r,e,g),d(r,n,g),d(r,i,g),d(r,s,g),d(r,l,g),d(r,o,g),d(r,p,g),d(r,u,g),d(r,_,g),d(r,h,g),d(r,c,g)},p:O,d(r){r&&f(e),r&&f(n),r&&f(i),r&&f(s),r&&f(l),r&&f(o),r&&f(p),r&&f(u),r&&f(_),r&&f(h),r&&f(c)}}}function ct(t){let e,n,i,s,l,o,p,u,_;return n=new ee({props:{title:"Prism Calculator",images:[{src:"/img/prism2.webp",alt:"Screenshot of the rectangular prism calculator app"},{src:"/img/prism3.webp",alt:"Screenshot of the rectangular prism calculator app"}],$$slots:{default:[rt]},$$scope:{ctx:t}}}),s=new ee({props:{title:"Excalibur FitScreenAndFill",images:[{src:"/img/fitscreen.webp",alt:"Screenshot of the recolor app"}],$$slots:{default:[ot]},$$scope:{ctx:t}}}),o=new ee({props:{title:"Recolor",imageRatio:50,images:[{src:"/img/recolorTitle.webp",alt:"Screenshot of the recolor app"},{src:"/img/recolor.webp",alt:"Screenshot of the recolor app"},{src:"/img/recolorHard.webp",alt:"Screenshot of the recolor app"}],$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=m("div"),R(n.$$.fragment),i=x(),R(s.$$.fragment),l=x(),R(o.$$.fragment),p=x(),u=m("div"),Ee(u,"height","2rem"),a(e,"class","main svelte-1ih0wcl")},m(h,c){d(h,e,c),q(n,e,null),w(e,i),q(s,e,null),w(e,l),q(o,e,null),w(e,p),w(e,u),_=!0},p(h,[c]){let r={};c&1&&(r.$$scope={dirty:c,ctx:h}),n.$set(r);let g={};c&1&&(g.$$scope={dirty:c,ctx:h}),s.$set(g);let v={};c&1&&(v.$$scope={dirty:c,ctx:h}),o.$set(v)},i(h){_||(S(n.$$.fragment,h),S(s.$$.fragment,h),S(o.$$.fragment,h),_=!0)},o(h){j(n.$$.fragment,h),j(s.$$.fragment,h),j(o.$$.fragment,h),_=!1},d(h){h&&f(e),D(n),D(s),D(o)}}}var _e=class extends C{constructor(e){super(),M(this,e,null,ct,A,{},lt)}},Me=_e;function ut(t){T(t,"svelte-lwp6rb",'.container.svelte-lwp6rb.svelte-lwp6rb{top:max(3vh, 63px);position:relative;width:100%;overflow:hidden;height:calc(100% - max(3vh, 63px));background-image:url(/img/gridme.webp);background-position:-10px -10px;background-attachment:fixed}.sidebar.svelte-lwp6rb.svelte-lwp6rb{font-family:"Saira Extra Condensed", sans-serif;position:fixed;background-color:#3891bd;width:100vw;height:3vh;top:0;min-height:63px;justify-content:center;align-items:center;display:grid}.menu.svelte-lwp6rb.svelte-lwp6rb{list-style-type:none;padding:0;margin:0;color:#9cc8de;flex:1;display:flex;width:500px;justify-content:space-evenly;font-size:1.1em}.menu.svelte-lwp6rb>li.svelte-lwp6rb{transition:all 200ms ease;text-align:center;font-weight:700;letter-spacing:0.26rem;text-transform:uppercase;font-size:2.5rem}.menu.svelte-lwp6rb>li.svelte-lwp6rb:hover{color:#cde3ee;cursor:pointer}.menu.svelte-lwp6rb>li.svelte-lwp6rb:active{color:white;cursor:pointer}.menu.svelte-lwp6rb>li.selected.svelte-lwp6rb{color:white;cursor:pointer}:not(.menu) > p{color:#494e52;font-size:1.1em}@media all and (max-width: 750px){.menu.svelte-lwp6rb.svelte-lwp6rb{width:400px}.menu.svelte-lwp6rb>li.svelte-lwp6rb{font-size:2rem}}@media all and (max-width: 400px){.menu.svelte-lwp6rb.svelte-lwp6rb{width:100%}.menu.svelte-lwp6rb>li.svelte-lwp6rb{font-size:1.5rem}.sidebar.svelte-lwp6rb.svelte-lwp6rb{display:flex}}@media all and (max-width: 315px){.menu.svelte-lwp6rb>li.svelte-lwp6rb{font-size:1.25rem}}')}function ft(t){let e,n;return e=new je({}),{c(){R(e.$$.fragment)},m(i,s){q(e,i,s),n=!0},i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){D(e,i)}}}function dt(t){let e,n;return e=new Me({}),{c(){R(e.$$.fragment)},m(i,s){q(e,i,s),n=!0},i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){D(e,i)}}}function pt(t){let e,n;return e=new Oe({}),{c(){R(e.$$.fragment)},m(i,s){q(e,i,s),n=!0},i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){j(e.$$.fragment,i),n=!1},d(i){D(e,i)}}}function mt(t){let e,n,i,s,l,o,p,u,_,h,c,r,g,v,P,$,b,E,k,B,ge;return document.title=e=t[1],r=new Z({props:{offset:t[0],$$slots:{default:[ft]},$$scope:{ctx:t}}}),v=new Z({props:{offset:t[0]+1,$$slots:{default:[dt]},$$scope:{ctx:t}}}),$=new Z({props:{offset:t[0]+2,$$slots:{default:[pt]},$$scope:{ctx:t}}}),E=new Ae({}),{c(){n=x(),i=m("div"),s=m("ul"),l=m("li"),l.textContent="About",o=x(),p=m("li"),p.textContent="Projects",u=x(),_=m("li"),_.textContent="Resume",h=x(),c=m("div"),R(r.$$.fragment),g=x(),R(v.$$.fragment),P=x(),R($.$$.fragment),b=x(),R(E.$$.fragment),a(l,"class","svelte-lwp6rb"),N(l,"selected",t[0]==0),a(p,"class","svelte-lwp6rb"),N(p,"selected",t[0]==-1),a(_,"class","svelte-lwp6rb"),N(_,"selected",t[0]==-2),a(s,"class","menu svelte-lwp6rb"),a(i,"class","sidebar svelte-lwp6rb"),a(c,"class","container svelte-lwp6rb")},m(y,F){d(y,n,F),d(y,i,F),w(i,s),w(s,l),w(s,o),w(s,p),w(s,u),w(s,_),d(y,h,F),d(y,c,F),q(r,c,null),w(c,g),q(v,c,null),w(c,P),q($,c,null),d(y,b,F),q(E,y,F),k=!0,B||(ge=[Q(l,"click",t[2]),Q(p,"click",t[3]),Q(_,"click",t[4])],B=!0)},p(y,[F]){(!k||F&2)&&e!==(e=y[1])&&(document.title=e),F&1&&N(l,"selected",y[0]==0),F&1&&N(p,"selected",y[0]==-1),F&1&&N(_,"selected",y[0]==-2);let te={};F&1&&(te.offset=y[0]),F&64&&(te.$$scope={dirty:F,ctx:y}),r.$set(te);let ne={};F&1&&(ne.offset=y[0]+1),F&64&&(ne.$$scope={dirty:F,ctx:y}),v.$set(ne);let ie={};F&1&&(ie.offset=y[0]+2),F&64&&(ie.$$scope={dirty:F,ctx:y}),$.$set(ie)},i(y){k||(S(r.$$.fragment,y),S(v.$$.fragment,y),S($.$$.fragment,y),S(E.$$.fragment,y),k=!0)},o(y){j(r.$$.fragment,y),j(v.$$.fragment,y),j($.$$.fragment,y),j(E.$$.fragment,y),k=!1},d(y){y&&f(n),y&&f(i),y&&f(h),y&&f(c),D(r),D(v),D($),y&&f(b),D(E,y),B=!1,L(ge)}}}function _t(t,e,n){let i=0,s="Joshua Beatty";l(),window.addEventListener("hashchange",function(){l()});function l(){window.location.hash=="#/projects"?n(0,i=-1):window.location.hash=="#/resume"?n(0,i=-2):n(0,i=0)}let o=()=>{n(0,i=0),history.replaceState(null,null," ")},p=()=>{n(0,i=-1),window.location.hash="#/projects"},u=()=>{n(0,i=-2),window.location.hash="#/resume"};return t.$$.update=()=>{if(t.$$.dirty&1){e:i==-1?n(1,s="Projects - Joshua Beatty"):i==-2?n(1,s="Resume - Joshua Beatty"):n(1,s="Joshua Beatty")}},[i,s,o,p,u]}var he=class extends C{constructor(e){super(),M(this,e,_t,mt,A,{},ut)}},qe=he;var ht=new qe({target:document.body}),Bt=ht;})();
