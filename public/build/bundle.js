(()=>{function j(){}function Me(e,t){for(let n in t)e[n]=t[n];return e}function le(e){return e()}function ye(){return Object.create(null)}function L(e){e.forEach(le)}function we(e){return typeof e=="function"}function O(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}var U;function ae(e,t){return U||(U=document.createElement("a")),U.href=t,e===U.href}function $e(e){return Object.keys(e).length===0}function W(e,t,n,i){if(e){let s=ke(e,t,n,i);return e[0](s)}}function ke(e,t,n,i){return e[1]&&i?Me(n.ctx.slice(),e[1](i(t))):n.ctx}function X(e,t,n,i){if(e[2]&&i){let s=e[2](i(n));if(t.dirty===void 0)return s;if(typeof s=="object"){let o=[],l=Math.max(t.dirty.length,s.length);for(let u=0;u<l;u+=1)o[u]=t.dirty[u]|s[u];return o}return t.dirty|s}return t.dirty}function Y(e,t,n,i,s,o){if(s){let l=ke(t,n,i,o);e.p(l,s)}}function V(e){if(e.ctx.length>32){let t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}var xe=!1;function Ie(){xe=!0}function Re(){xe=!1}function $(e,t){e.appendChild(t)}function A(e,t,n){let i=Pe(e);if(!i.getElementById(t)){let s=m("style");s.id=t,s.textContent=n,Le(i,s)}}function Pe(e){if(!e)return document;let t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Le(e,t){$(e.head||e,t)}function d(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function Fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function x(){return P(" ")}function Q(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ne(e){return Array.from(e.childNodes)}function Se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function N(e,t,n){e.classList[n?"add":"remove"](t)}var ce;function J(e){ce=e}var z=[];var ve=[],H=[],be=[],Be=Promise.resolve(),oe=!1;function ze(){oe||(oe=!0,Be.then(Ee))}function re(e){H.push(e)}var se=new Set,G=0;function Ee(){let e=ce;do{for(;G<z.length;){let t=z[G];G++,J(t),Je(t.$$)}for(J(null),z.length=0,G=0;ve.length;)ve.pop()();for(let t=0;t<H.length;t+=1){let n=H[t];se.has(n)||(se.add(n),n())}H.length=0}while(z.length);for(;be.length;)be.pop()();oe=!1,se.clear(),J(e)}function Je(e){if(e.fragment!==null){e.update(),L(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}var K=new Set,Ue;function F(e,t){e&&e.i&&(K.delete(e),e.i(t))}function C(e,t,n,i){if(e&&e.o){if(K.has(e))return;K.add(e),Ue.c.push(()=>{K.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}var _t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function M(e){e&&e.c()}function D(e,t,n,i){let{fragment:s,on_mount:o,on_destroy:l,after_update:u}=e.$$;s&&s.m(t,n),i||re(()=>{let a=o.map(le).filter(we);l?l.push(...a):L(a),e.$$.on_mount=[]}),u.forEach(re)}function T(e,t){let n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(z.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(e,t,n,i,s,o,l,u=[-1]){let a=ce;J(e);let r=e.$$={fragment:null,ctx:null,props:o,update:j,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ye(),dirty:u,skip_bound:!1,root:t.target||a.$$.root};l&&l(r.root);let p=!1;if(r.ctx=n?n(e,t.props||{},(g,y,...I)=>{let v=I.length?I[0]:y;return r.ctx&&s(r.ctx[g],r.ctx[g]=v)&&(!r.skip_bound&&r.bound[g]&&r.bound[g](v),p&&Ge(e,g)),y}):[],r.update(),p=!0,L(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){Ie();let g=Ne(t.target);r.fragment&&r.fragment.l(g),g.forEach(f)}else r.fragment&&r.fragment.c();t.intro&&F(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),Re(),Ee()}J(a)}var He;typeof HTMLElement=="function"&&(He=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(le).filter(we);for(let t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){T(this,1),this.$destroy=j}$on(e,t){let n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!$e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var E=class{$destroy(){T(this,1),this.$destroy=j}$on(t,n){let i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{let s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};function Ke(e){A(e,"svelte-1jflsf8",".page.svelte-1jflsf8{position:absolute;width:100%;left:calc(100% * var(--offset));transition:all 300ms ease-in-out;height:100%;overflow-y:auto}")}function We(e){let t,n,i=e[3].default,s=W(i,e,e[2],null);return{c(){t=m("div"),s&&s.c(),c(t,"class","page svelte-1jflsf8"),c(t,"style",e[0])},m(o,l){d(o,t,l),s&&s.m(t,null),n=!0},p(o,[l]){s&&s.p&&(!n||l&4)&&Y(s,i,o,o[2],n?X(i,o[2],l,null):V(o[2]),null),(!n||l&1)&&c(t,"style",o[0])},i(o){n||(F(s,o),n=!0)},o(o){C(s,o),n=!1},d(o){o&&f(t),s&&s.d(o)}}}function Xe(e,t,n){let i,{$$slots:s={},$$scope:o}=t,{offset:l=0}=t;return e.$$set=u=>{"offset"in u&&n(1,l=u.offset),"$$scope"in u&&n(2,o=u.$$scope)},e.$$.update=()=>{if(e.$$.dirty&2){e:n(0,i=`--offset:${l};`)}},[i,l,o,s]}var ue=class extends E{constructor(t){super(),q(this,t,Xe,We,O,{offset:1},Ke)}},Z=ue;function Ye(e){A(e,"svelte-ykgykg",`.main.svelte-ykgykg{width:100%;display:grid;place-items:center;height:100%}.card.svelte-ykgykg{padding:1em;height:fit-content;width:30%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px}.mainTitle.svelte-ykgykg{font-family:'Saira Extra Condensed', sans-serif;font-size:6rem;line-height:5.5rem;text-transform:uppercase;margin:0.1em 0 0.1em 0}.mainSubitle.svelte-ykgykg{font-family:'Saira Extra Condensed', sans-serif;font-size:1.4em;font-weight:400;margin-top:-0.75em;color:#868e96\r
    }.blueText.svelte-ykgykg{color:#3891bd}.bio.svelte-ykgykg{position:relative}.mainPhoto.svelte-ykgykg{height:10rem;width:10rem;object-fit:cover;border-radius:40%;border-color:#60a7ca;border-style:solid;border-width:0.5rem;margin:auto;position:absolute;top:-5rem;right:1rem}@media all and (max-width: 750px){.card.svelte-ykgykg{min-width:80%;margin-top:10rem;padding-top:3rem;margin-bottom:2rem}.mainPhoto.svelte-ykgykg{top:-12rem;right:calc(50% - 5rem)}.main.svelte-ykgykg{height:fit-content}}@media all and (max-width: 400px){.card.svelte-ykgykg{margin-top:12rem}}`)}function Ve(e){let t;return{c(){t=m("div"),t.innerHTML=`<div class="card svelte-ykgykg"><div class="bio svelte-ykgykg"><h1 class="mainTitle svelte-ykgykg">Joshua <span class="blueText svelte-ykgykg">Beatty</span></h1> 
            <h3 class="mainSubitle svelte-ykgykg"><div>Salt Lake, UT 84115 \xB7 <a href="mailto:name@email.com">Joshuatb6@gmail.com</a></div></h3> 
            <p>Hi! I&#39;m Josh Beatty and I am an incoming freshman at the University of Utah. Engineering wise, my current focus is on software development. In my free time, I spend a lot of time creating digitally. I&#39;ve created apps, websites, games, and tools. I am proficient in Python, C#, and Lua but have also worked in JavaScript and Java. I have also participated in many different clubs and extracurricular activities including Boy Scouts, Robotics, and the California Scholarship Federation. This fall I will be going to the University of Utah to major in computer science at their college of engineering.</p> 
            <img class="mainPhoto svelte-ykgykg" src="/img/me.jpeg" alt="Me Joshua Beatty"/></div></div>`,c(t,"class","main svelte-ykgykg")},m(n,i){d(n,t,i)},p:j,i:j,o:j,d(n){n&&f(t)}}}var fe=class extends E{constructor(t){super(),q(this,t,null,Ve,O,{},Ye)}},Ce=fe;function Qe(e){A(e,"svelte-10s4qkv",`.main.svelte-10s4qkv{height:100%;width:100%;display:grid;place-items:center\r
    }.card.svelte-10s4qkv{padding:1em;height:80%;width:50%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px}iframe.svelte-10s4qkv{height:93%\r
    }p.svelte-10s4qkv{margin:0.5em 0}@media all and (max-width: 750px){.card.svelte-10s4qkv{min-width:80%}}`)}function Ze(e){let t;return{c(){t=m("div"),t.innerHTML=`<div class="card svelte-10s4qkv"><iframe src="https://drive.google.com/file/d/168BeaxoY0yXAmOOLKiL3INCTnUpOkeKw/preview" title="Resume" data-dashlane-frameid="40802189313" width="100%" height="500px" class="svelte-10s4qkv"></iframe> 
        <p class="svelte-10s4qkv">Or download <a href="https://drive.google.com/file/d/168BeaxoY0yXAmOOLKiL3INCTnUpOkeKw/view?usp=sharing" target="_blank">here</a></p></div>`,c(t,"class","main svelte-10s4qkv")},m(n,i){d(n,t,i)},p:j,i:j,o:j,d(n){n&&f(t)}}}var de=class extends E{constructor(t){super(),q(this,t,null,Ze,O,{},Qe)}},je=de;function et(e){A(e,"svelte-12oshkd","a:link{color:#3891bd}a:visited{color:#3891bd}a:hover{color:#3891bd}a:active{color:#3891bd}")}var me=class extends E{constructor(t){super(),q(this,t,null,null,O,{},et)}},Oe=me;function tt(e){A(e,"svelte-erenmy",".container.svelte-erenmy{display:grid;place-items:center;margin-top:2rem}.card.svelte-erenmy{padding:1em;height:fit-content;width:50%;min-height:315px;min-width:675px;background-color:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;border-radius:15px;display:table}.text.svelte-erenmy{width:55%;display:table-cell;vertical-align:top}img.svelte-erenmy{width:50%;object-fit:contain;height:100%;margin:1%}.imgContainer.svelte-erenmy{height:100%;width:45%;display:table-cell;vertical-align:middle}@media all and (max-width: 750px){.card.svelte-erenmy{min-width:80%}.imgContainer.svelte-erenmy{display:table-row}}")}function Ae(e,t,n){let i=e.slice();return i[5]=t[n],i}function Te(e){let t,n,i,s;return{c(){t=m("img"),ae(t.src,n=e[5].src)||c(t,"src",n),c(t,"alt",i=e[5].alt),c(t,"style",s=`width:${(100-2*e[0].length)/e[0].length}%`),c(t,"class","svelte-erenmy")},m(o,l){d(o,t,l)},p(o,l){l&1&&!ae(t.src,n=o[5].src)&&c(t,"src",n),l&1&&i!==(i=o[5].alt)&&c(t,"alt",i),l&1&&s!==(s=`width:${(100-2*o[0].length)/o[0].length}%`)&&c(t,"style",s)},d(o){o&&f(t)}}}function nt(e){let t,n,i,s,o,l,u,a,r,p,g,y,I=e[4].default,v=W(I,e,e[3],null),R=e[0],b=[];for(let _=0;_<R.length;_+=1)b[_]=Te(Ae(e,R,_));return{c(){t=m("div"),n=m("div"),i=m("div"),s=m("h2"),o=P(e[1]),l=x(),u=m("p"),v&&v.c(),r=x(),p=m("div");for(let _=0;_<b.length;_+=1)b[_].c();c(i,"class","text svelte-erenmy"),c(i,"style",a=`width:${100-e[2]}%`),c(p,"class","imgContainer svelte-erenmy"),c(p,"style",g=`width:${e[2]}%`),c(n,"class","card svelte-erenmy"),c(t,"class","container svelte-erenmy")},m(_,S){d(_,t,S),$(t,n),$(n,i),$(i,s),$(s,o),$(i,l),$(i,u),v&&v.m(u,null),$(n,r),$(n,p);for(let w=0;w<b.length;w+=1)b[w].m(p,null);y=!0},p(_,[S]){if((!y||S&2)&&Se(o,_[1]),v&&v.p&&(!y||S&8)&&Y(v,I,_,_[3],y?X(I,_[3],S,null):V(_[3]),null),(!y||S&4&&a!==(a=`width:${100-_[2]}%`))&&c(i,"style",a),S&1){R=_[0];let w;for(w=0;w<R.length;w+=1){let B=Ae(_,R,w);b[w]?b[w].p(B,S):(b[w]=Te(B),b[w].c(),b[w].m(p,null))}for(;w<b.length;w+=1)b[w].d(1);b.length=R.length}(!y||S&4&&g!==(g=`width:${_[2]}%`))&&c(p,"style",g)},i(_){y||(F(v,_),y=!0)},o(_){C(v,_),y=!1},d(_){_&&f(t),v&&v.d(_),Fe(b,_)}}}function it(e,t,n){let{$$slots:i={},$$scope:s}=t,{images:o}=t,{title:l}=t,{imageRatio:u=45}=t;return e.$$set=a=>{"images"in a&&n(0,o=a.images),"title"in a&&n(1,l=a.title),"imageRatio"in a&&n(2,u=a.imageRatio),"$$scope"in a&&n(3,s=a.$$scope)},[o,l,u,s,i]}var pe=class extends E{constructor(t){super(),q(this,t,it,nt,O,{images:0,title:1,imageRatio:2},tt)}},ee=pe;function st(e){A(e,"svelte-2baq0b",`.main.svelte-2baq0b{height:100%;width:100%;display:grid;place-items:center\r
    }`)}function ot(e){let t,n,i,s,o,l,u,a;return{c(){t=P(`Prism calculator is a multi-function geometric calculator. Programmed in javascript using the Tabris framework, \r
        the app has a native feel on both Android and Ios. With well over 500 downloads across both platforms, this app \r
        has been a success. It utilizes javascript with node.js and the big decimal library for arbitrary precision. This \r
        was just a first step into using Tabris, making use of multiple inputs types as well as a status bar and multiple \r
        pages with variable recolection.`),n=m("br"),i=m("br"),s=x(),o=m("a"),o.textContent="Download On The Appstore",l=m("br"),u=x(),a=m("a"),a.textContent="Get It On Google Play",c(o,"href","https://apps.apple.com/us/app/prism-calculator/id1516939934?platform=iphone"),c(o,"target","_blank"),c(a,"href","https://play.google.com/store/apps/details?id=me.joshbeatty.PrismCalc"),c(a,"target","_blank")},m(r,p){d(r,t,p),d(r,n,p),d(r,i,p),d(r,s,p),d(r,o,p),d(r,l,p),d(r,u,p),d(r,a,p)},p:j,d(r){r&&f(t),r&&f(n),r&&f(i),r&&f(s),r&&f(o),r&&f(l),r&&f(u),r&&f(a)}}}function rt(e){let t,n,i,s;return{c(){t=m("a"),t.textContent="Excalibur",n=P(` is a free open source 2D game engine written in TypeScript for the web written in TypeScript for making 2D games in HTML5 canvas.\r
        `),i=m("a"),i.textContent="FitScreenAndFill is a pull request",s=P(` I submitted and was merged in that added two new types of display modes for the game world. FitScreenAndFill\r
        ensures that specific area of the screen will always be visible, and as zoomed in as possible, but will also allow the rest of the screen to still \r
        be visible and usable. This ensures a good palce space with no black bars or letterboxing.`),c(t,"href","https://excaliburjs.com/"),c(t,"target","_blank"),c(i,"href","https://github.com/excaliburjs/Excalibur/pull/2272#issuecomment-1126034795"),c(i,"target","_blank")},m(o,l){d(o,t,l),d(o,n,l),d(o,i,l),d(o,s,l)},p:j,d(o){o&&f(t),o&&f(n),o&&f(i),o&&f(s)}}}function lt(e){let t,n,i,s,o,l,u,a;return{c(){t=P(`Recolor is a simple Simon like memory game developed in Corona SDK. Corona is a cross-platform language build on top of Lua.\r
        Using this framework I was able to build a simple game that I have published to both the google play, and apple app store, \r
        to positive reception.`),n=m("br"),i=m("br"),s=x(),o=m("a"),o.textContent="Download On The Appstore",l=m("br"),u=x(),a=m("a"),a.textContent="Get It On Google Play",c(o,"href","https://apps.apple.com/us/app/recolor-the-memory-game/id1488708329?platform=iphone"),c(o,"target","_blank"),c(a,"href","https://play.google.com/store/apps/details?id=tk.joshbeatty.recolor"),c(a,"target","_blank")},m(r,p){d(r,t,p),d(r,n,p),d(r,i,p),d(r,s,p),d(r,o,p),d(r,l,p),d(r,u,p),d(r,a,p)},p:j,d(r){r&&f(t),r&&f(n),r&&f(i),r&&f(s),r&&f(o),r&&f(l),r&&f(u),r&&f(a)}}}function at(e){let t,n,i,s,o,l,u;return n=new ee({props:{title:"Prism Calculator",images:[{src:"/img/prism2.png",alt:"Screenshot of the rectangular prism calculator app"},{src:"/img/prism3.png",alt:"Screenshot of the rectangular prism calculator app"}],$$slots:{default:[ot]},$$scope:{ctx:e}}}),s=new ee({props:{title:"Excalibur FitScreenAndFill",images:[{src:"/img/carbon(3).png",alt:"Screenshot of the recolor app"}],$$slots:{default:[rt]},$$scope:{ctx:e}}}),l=new ee({props:{title:"Recolor",imageRatio:50,images:[{src:"/img/recolorTitle.png",alt:"Screenshot of the recolor app"},{src:"/img/recolor.png",alt:"Screenshot of the recolor app"},{src:"/img/recolorHard.png",alt:"Screenshot of the recolor app"}],$$slots:{default:[lt]},$$scope:{ctx:e}}}),{c(){t=m("div"),M(n.$$.fragment),i=x(),M(s.$$.fragment),o=x(),M(l.$$.fragment),c(t,"class","main svelte-2baq0b")},m(a,r){d(a,t,r),D(n,t,null),$(t,i),D(s,t,null),$(t,o),D(l,t,null),u=!0},p(a,[r]){let p={};r&1&&(p.$$scope={dirty:r,ctx:a}),n.$set(p);let g={};r&1&&(g.$$scope={dirty:r,ctx:a}),s.$set(g);let y={};r&1&&(y.$$scope={dirty:r,ctx:a}),l.$set(y)},i(a){u||(F(n.$$.fragment,a),F(s.$$.fragment,a),F(l.$$.fragment,a),u=!0)},o(a){C(n.$$.fragment,a),C(s.$$.fragment,a),C(l.$$.fragment,a),u=!1},d(a){a&&f(t),T(n),T(s),T(l)}}}var he=class extends E{constructor(t){super(),q(this,t,null,at,O,{},st)}},qe=he;function ct(e){A(e,"svelte-untvco",'.container.svelte-untvco.svelte-untvco{top:max(3vh, 63px);position:relative;width:100%;overflow:hidden;height:calc(100% - max(3vh, 63px));background-image:url(/img/gridme.png);background-position:-10px -10px;background-attachment:fixed}.sidebar.svelte-untvco.svelte-untvco{font-family:"Saira Extra Condensed", sans-serif;position:fixed;background-color:#3891bd;width:100vw;height:3vh;top:0;min-height:63px;justify-content:center;align-items:center;display:grid}.menu.svelte-untvco.svelte-untvco{list-style-type:none;padding:0;margin:0;color:#9cc8de;font-weight:600;flex:1;display:flex;width:500px;justify-content:space-evenly;font-size:1.1em}.menu.svelte-untvco>li.svelte-untvco{transition:all 200ms ease;text-align:center;font-weight:700;letter-spacing:0.26rem;text-transform:uppercase;font-size:2.5rem}.menu.svelte-untvco>li.svelte-untvco:hover{color:#cde3ee;cursor:pointer}.menu.svelte-untvco>li.svelte-untvco:active{color:white;cursor:pointer}.menu.svelte-untvco>li.selected.svelte-untvco{color:white;cursor:pointer}:not(.menu) > p{color:#494e52;font-size:1.1em}@media all and (max-width: 750px){.menu.svelte-untvco.svelte-untvco{width:400px}.menu.svelte-untvco>li.svelte-untvco{font-size:2rem}}@media all and (max-width: 400px){.menu.svelte-untvco.svelte-untvco{width:100%}.menu.svelte-untvco>li.svelte-untvco{font-size:1.5rem}.sidebar.svelte-untvco.svelte-untvco{display:flex}}@media all and (max-width: 315px){.menu.svelte-untvco>li.svelte-untvco{font-size:1.25rem}}')}function ut(e){let t,n;return t=new Ce({}),{c(){M(t.$$.fragment)},m(i,s){D(t,i,s),n=!0},i(i){n||(F(t.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),n=!1},d(i){T(t,i)}}}function ft(e){let t,n;return t=new qe({}),{c(){M(t.$$.fragment)},m(i,s){D(t,i,s),n=!0},i(i){n||(F(t.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),n=!1},d(i){T(t,i)}}}function dt(e){let t,n;return t=new je({}),{c(){M(t.$$.fragment)},m(i,s){D(t,i,s),n=!0},i(i){n||(F(t.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),n=!1},d(i){T(t,i)}}}function mt(e){let t,n,i,s,o,l,u,a,r,p,g,y,I,v,R,b,_,S,w,B,ge;return document.title=t=e[1],y=new Z({props:{offset:e[0],$$slots:{default:[ut]},$$scope:{ctx:e}}}),v=new Z({props:{offset:e[0]+1,$$slots:{default:[ft]},$$scope:{ctx:e}}}),b=new Z({props:{offset:e[0]+2,$$slots:{default:[dt]},$$scope:{ctx:e}}}),S=new Oe({}),{c(){n=x(),i=m("div"),s=m("ul"),o=m("li"),o.textContent="About",l=x(),u=m("li"),u.textContent="Projects",a=x(),r=m("li"),r.textContent="Resume",p=x(),g=m("div"),M(y.$$.fragment),I=x(),M(v.$$.fragment),R=x(),M(b.$$.fragment),_=x(),M(S.$$.fragment),c(o,"class","svelte-untvco"),N(o,"selected",e[0]==0),c(u,"class","svelte-untvco"),N(u,"selected",e[0]==-1),c(r,"class","svelte-untvco"),N(r,"selected",e[0]==-2),c(s,"class","menu svelte-untvco"),c(i,"class","sidebar svelte-untvco"),c(g,"class","container svelte-untvco")},m(h,k){d(h,n,k),d(h,i,k),$(i,s),$(s,o),$(s,l),$(s,u),$(s,a),$(s,r),d(h,p,k),d(h,g,k),D(y,g,null),$(g,I),D(v,g,null),$(g,R),D(b,g,null),d(h,_,k),D(S,h,k),w=!0,B||(ge=[Q(o,"click",e[2]),Q(u,"click",e[3]),Q(r,"click",e[4])],B=!0)},p(h,[k]){(!w||k&2)&&t!==(t=h[1])&&(document.title=t),k&1&&N(o,"selected",h[0]==0),k&1&&N(u,"selected",h[0]==-1),k&1&&N(r,"selected",h[0]==-2);let te={};k&1&&(te.offset=h[0]),k&32&&(te.$$scope={dirty:k,ctx:h}),y.$set(te);let ne={};k&1&&(ne.offset=h[0]+1),k&32&&(ne.$$scope={dirty:k,ctx:h}),v.$set(ne);let ie={};k&1&&(ie.offset=h[0]+2),k&32&&(ie.$$scope={dirty:k,ctx:h}),b.$set(ie)},i(h){w||(F(y.$$.fragment,h),F(v.$$.fragment,h),F(b.$$.fragment,h),F(S.$$.fragment,h),w=!0)},o(h){C(y.$$.fragment,h),C(v.$$.fragment,h),C(b.$$.fragment,h),C(S.$$.fragment,h),w=!1},d(h){h&&f(n),h&&f(i),h&&f(p),h&&f(g),T(y),T(v),T(b),h&&f(_),T(S,h),B=!1,L(ge)}}}function pt(e,t,n){let i=0,s="Joshua Beatty";window.location.hash=="#/projects"?i=-1:window.location.hash=="#/resume"&&(i=-2);let o=()=>{n(0,i=0),history.replaceState(null,null," ")},l=()=>{n(0,i=-1),window.location.hash="#/projects"},u=()=>{n(0,i=-2),window.location.hash="#/resume"};return e.$$.update=()=>{if(e.$$.dirty&1){e:i==-1?n(1,s="Projects - Joshua Beatty"):i==-2?n(1,s="Resume - Joshua Beatty"):n(1,s="Joshua Beatty")}},[i,s,o,l,u]}var _e=class extends E{constructor(t){super(),q(this,t,pt,mt,O,{},ct)}},De=_e;var ht=new De({target:document.body}),Nt=ht;})();