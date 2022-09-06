(function(){"use strict";var e={944:function(e,t,n){var i=n(963),s=n(252);const r={class:"Expground"},a={class:"front"},o={class:"page"},c=(0,s._)("div",{class:"page_left"},null,-1),d={class:"page_right"},l=(0,s._)("div",{class:"fontby"},[(0,s._)("a",{href:"https://velvetyne.fr/fonts/degheest/"},"FT88 by Ange Degheest+")],-1);function h(e,t,n,h,u,f){const p=(0,s.up)("BackGround"),m=(0,s.up)("router-view"),g=(0,s.up)("HomeView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(p),(0,s._)("div",r,[(0,s.Wm)(m)]),(0,s.wy)((0,s._)("div",a,[(0,s._)("div",o,[c,(0,s._)("div",d,[(0,s.Wm)(g)])]),l],512),[[i.F8,u.isShow]])],64)}const u={class:"background"};function f(e,t,n,i,r,a){return(0,s.wg)(),(0,s.iD)("div",u)}var p=n(477),m=n(157),g=n(711),v={name:"BackGround",data(){return{}},methods:{init(){const e=document.querySelector(".background");this.renderer=new p.CP7({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,e.appendChild(this.renderer.domElement),this.scene=new p.xsS;const t=e.clientWidth/e.clientHeight;this.camera=new p.cPb(75,t,.1,1e3),this.camera.position.set(0,0,100),this.scene.add(this.camera),this.light=new p.PMe(16777215,1,0),this.light.position.set(0,0,100),this.light.target.position.set(0,0,0),this.light.angle=p.M8C.degToRad(20),this.scene.add(this.light.target),this.scene.add(this.light);const n=new p.xo$(5,64,64),i=new p.Wid({color:"#ffffff",roughness:.5,metalness:.3}),s=new p.Tme,r=new p.Kj0(n,i);r.position.set(-50,0,0),s.add(r),r.castShadow=!0,r.receiveShadow=!0,r.visible=!1,s.name="smallPivot",this.scene.add(s);const a=new m.J;a.load("data/fonts/Millimetre-Extrablack_Regular.json",(e=>{const t=new g.M("WEB\nGraphic\nExp",{font:e,size:30,height:1});t.center();const n=new p.Wid({color:16777215});this.mesh=new p.Kj0(t,n),this.mesh.position.set(-15,0,0),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh)})),this.resize()},animate(e){e*=.001,requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera),this.resize();const t=this.scene.getObjectByName("smallPivot");if(t){t.rotation.z=p.M8C.degToRad(40*e);const n=t.children[0];n.getWorldPosition(this.light.target.position)}},resize(){const e=document.querySelector(".background"),t=e.clientWidth,n=e.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}},mounted(){this.init(),this.animate()}},w=n(744);const _=(0,w.Z)(v,[["render",f]]);var b=_;const x=e=>((0,s.dD)("data-v-138833f3"),e=e(),(0,s.Cn)(),e),y={class:"list_box"},S={class:"list"},E=x((()=>(0,s._)("h2",null,[(0,s._)("span",{class:"outline"},"Scene"),(0,s._)("span",{class:"fill"},"Scene")],-1))),C=x((()=>(0,s._)("div",{class:"idx"},"01",-1))),k=[E,C],j={class:"list"},P=x((()=>(0,s._)("a",{href:"",class:"list_wrap"},[(0,s._)("h2",null,[(0,s._)("span",{class:"outline"},"Animation"),(0,s._)("span",{class:"fill"},"Animation")]),(0,s._)("div",{class:"idx"},"02")],-1))),W={class:"list"},T=x((()=>(0,s._)("a",{href:"",class:"list_wrap"},[(0,s._)("h2",null,[(0,s._)("span",{class:"outline"},"Create"),(0,s._)("span",{class:"fill"},"Create")]),(0,s._)("div",{class:"idx"},"03")],-1))),O={class:"list"},M=x((()=>(0,s._)("a",{href:"",class:"list_wrap"},[(0,s._)("h2",null,[(0,s._)("span",{class:"outline"},"Sheep"),(0,s._)("span",{class:"fill"},"Sheep")]),(0,s._)("div",{class:"idx"},"04")],-1))),A=x((()=>(0,s._)("div",{class:"control_bar"},[(0,s._)("a",{href:"#"},"INDEX ➟")],-1)));function z(e,t,n,i,r,a){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",y,[(0,s._)("div",S,[(0,s.Wm)(o,{to:"/Exp/01"},{default:(0,s.w5)((()=>[(0,s._)("a",{href:"",onClick:t[0]||(t[0]=(...t)=>e.routerClick&&e.routerClick(...t)),class:"list_wrap"},k)])),_:1})]),(0,s._)("div",j,[(0,s.Wm)(o,{to:"/Exp/02"},{default:(0,s.w5)((()=>[P])),_:1})]),(0,s._)("div",W,[(0,s.Wm)(o,{to:"/Exp/03"},{default:(0,s.w5)((()=>[T])),_:1})]),(0,s._)("div",O,[(0,s.Wm)(o,{to:"/Exp/04"},{default:(0,s.w5)((()=>[M])),_:1})])]),A],64)}var H={name:"HomeView",methods:{}};const D=(0,w.Z)(H,[["render",z],["__scopeId","data-v-138833f3"]]);var N=D,V={name:"App",components:{BackGround:b,HomeView:N},data(){return{isShow:!0,isIndex:!1}},methods:{indexClick(){}}};const B=(0,w.Z)(V,[["render",h]]);var R=B,F=n(201);const q={class:"ExpView01"};function K(e,t,n,i,r,a){return(0,s.wg)(),(0,s.iD)("div",q)}var I=n(365),L={name:"ExpView01",data(){return{}},methods:{main(){this.canvas=document.querySelector(".ExpView01"),this.renderer=new p.CP7({antialias:!0}),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.canvas.appendChild(this.renderer.domElement),this.scene=new p.xsS;const e=75,t=this.canvas.clientWidth,n=this.canvas.clientHeight,i=.01,s=1e3;this.camera=new p.cPb(e,t/n,i,s),this.camera.position.set(0,5,10),this.scene.add(this.camera),this.control=new I.z(this.camera,this.renderer.domElement);const r=new p._12(10,10),a=new p.Wid({color:"#ffffff",roughness:.5,metalness:.3,side:p.ehD}),o=new p.Kj0(r,a);o.rotation.x=p.M8C.degToRad(-90),o.receiveShadow=!0,this.scene.add(o);const c=new p.xo$(1,64,64,0,Math.PI),d=new p.Wid({color:"#e68405",roughness:.1,metalness:.2}),l=new p.Kj0(c,d);l.rotation.x=p.M8C.degToRad(-90),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l);const h=new p.XvJ(.4,.1,64,64),u=new p.Wid({color:"#ff9999",roughness:.5,metalness:.8});for(let w=0;w<8;w++){const e=new p.Tme,t=new p.Kj0(h,u);e.rotation.y=p.M8C.degToRad(45*w),t.position.set(3.5,.5,0),e.add(t),t.castShadow=!0,t.receiveShadow=!0,this.scene.add(e)}const f=new p.xo$(.3,64,64),m=new p.Wid({color:"#ffffff",roughness:.5,metalness:.3}),g=new p.Tme,v=new p.Kj0(f,m);v.position.set(3.5,.5,0),g.add(v),v.castShadow=!0,v.receiveShadow=!0,g.name="smallPivot",this.scene.add(g),this.light=new p.Ox3({color:16777215,intensity:.5}),this.light.position.set(0,5,0),this.light.target.position.set(0,0,0),this.scene.add(this.light),this.scene.add(this.light.target),this.light.castShadow=!0,this.light.shadow.mapSize.width=this.light.shadow.mapSize.height=2048,this.light.shadow.camera.scale.set(1.3,1.3,1.3)},render(e){e*=.001,this.renderer.render(this.scene,this.camera),this.control.update(),requestAnimationFrame(this.render),this.reSize();const t=this.scene.getObjectByName("smallPivot");if(t){t.rotation.y=p.M8C.degToRad(50*e);const n=t.children[0];n.getWorldPosition(this.light.target.position)}},reSize(){const e=this.canvas;this.renderer.setSize(e.clientWidth,e.clientHeight),this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix()}},mounted(){this.main(),this.render()}};const G=(0,w.Z)(L,[["render",K],["__scopeId","data-v-10ebb3e1"]]);var Z=G;const $=[{path:"/Exp/01",name:"ExpView01",component:Z},{path:"/Exp/02",name:"ExpView02",component:()=>n.e(430).then(n.bind(n,430))},{path:"/Exp/03",name:"ExpView03",component:()=>n.e(161).then(n.bind(n,161))},{path:"/Exp/04",name:"ExpView04",component:()=>n.e(174).then(n.bind(n,174))}],J=(0,F.p7)({history:(0,F.r5)(),routes:$});var X=J,Y=n(907),U=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(R).use(U).use(X).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,r){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],s=e[l][1],r=e[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(o=!1,r<a&&(a=r));if(o){e.splice(l--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,s,r]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{161:"c672f01c",174:"d48236dd",430:"7e053cfe"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{161:"cabdaef7",174:"a7b5d4f7",430:"97c11a17"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-three-exp:";n.l=function(i,s,r,a){if(e[i])e[i].push(s);else{var o,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var h=d[l];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+r){o=h;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+r),o.src=i),e[i]=[s];var u=function(t,n){o.onerror=o.onload=null,clearTimeout(f);var s=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(r){if(s.onerror=s.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,s.parentNode.removeChild(s),i(c)}};return s.onerror=s.onload=r,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var s=n[i],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){s=a[i],r=s.getAttribute("data-href");if(r===e||r===t)return s}},i=function(i){return new Promise((function(s,r){var a=n.miniCssF(i),o=n.p+a;if(t(a,o))return s();e(i,o,s,r)}))},s={143:0};n.f.miniCss=function(e,t){var n={161:1,174:1,430:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=i(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise((function(n,i){s=e[t]=[n,i]}));i.push(s[2]=r);var a=n.p+n.u(t),o=new Error,c=function(i){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,s[1](o)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,a=i[0],o=i[1],c=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var l=c(n)}for(t&&t(i);d<a.length;d++)r=a[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},i=self["webpackChunkvue_three_exp"]=self["webpackChunkvue_three_exp"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(944)}));i=n.O(i)})();
//# sourceMappingURL=app.efebca05.js.map