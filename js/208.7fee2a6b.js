"use strict";(self["webpackChunkvue_three_exp"]=self["webpackChunkvue_three_exp"]||[]).push([[208],{208:function(t,i,s){s.r(i),s.d(i,{default:function(){return w}});var e=s(252);const o=t=>((0,e.dD)("data-v-1a06cbad"),t=t(),(0,e.Cn)(),t),h=o((()=>(0,e._)("div",{class:"ExpView04"},null,-1))),n=o((()=>(0,e._)("a",{href:"#",class:"toggle"},null,-1)));function a(t,i,s,o,a,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[h,n],64)}var r=s(477);class d{constructor(){this.group=new r.ZAu,this.group.position.y=.4,this.woolMaterial=new r.Wid({color:16777215,roughness:1,flatShading:!0}),this.skinMaterial=new r.Wid({color:15573117,roughness:1,flatShading:!0}),this.deepMaterial=new r.Wid({color:4932947,roughness:1,flatShading:!0}),this.vertical=0,this.drawBody(),this.drawHead(),this.drawLegs(),this.group.traverse((t=>{t.castShadow=!0,t.receiveShadow=!0}))}drawBody(){const t=new r.cJO(1.7,0),i=new r.Kj0(t,this.woolMaterial);this.group.add(i)}drawHead(){const t=new r.ZAu;t.position.set(0,.65,1.6),t.rotation.x=this.rad(-20),this.group.add(t);const i=new r.DvJ(.7,.6,.7),s=new r.Kj0(i,this.skinMaterial);s.position.y=-.15,t.add(s);const e=new r.fHI(.5,.15,.4,4,1),o=new r.Kj0(e,this.skinMaterial);o.position.y=-.65,o.rotation.y=this.rad(45),t.add(o);const h=new r.DvJ(.84,.46,.9),n=new r.Kj0(h,this.woolMaterial);n.position.set(0,.12,.07),n.rotation.x=this.rad(20),t.add(n);const a=new r.fHI(.08,.1,.06,6),d=new r.Kj0(a,this.deepMaterial);d.position.set(.35,-.48,.33),d.rotation.set(this.rad(130.8),0,this.rad(-45)),t.add(d);const l=d.clone();l.position.x=-d.position.x,l.rotation.z=-d.rotation.z,t.add(l);const g=new r.DvJ(.12,.5,.3);g.translate(0,-.25,0),this.rightear=new r.Kj0(g,this.skinMaterial),this.rightear.position.set(.35,-.12,-.07),this.rightear.rotation.set(this.rad(20),0,this.rad(50)),t.add(this.rightear),this.leftear=this.rightear.clone(),this.leftear.position.x=-this.rightear.position.x,this.leftear.rotation.z=-this.rightear.rotation.z,t.add(this.leftear)}drawLegs(){const t=new r.fHI(.3,.15,1,4);t.translate(0,-.5,0),this.frontRightLeg=new r.Kj0(t,this.deepMaterial),this.frontRightLeg.position.set(.7,-.8,.5),this.frontRightLeg.rotation.x=this.rad(12),this.group.add(this.frontRightLeg),this.frontLeftLeg=this.frontRightLeg.clone(),this.frontLeftLeg.position.x=-this.frontRightLeg.position.x,this.frontLeftLeg.rotation.z=-this.frontRightLeg.rotation.z,this.group.add(this.frontLeftLeg),this.backRightLeg=this.frontRightLeg.clone(),this.backRightLeg.position.z=-this.frontRightLeg.position.z,this.backRightLeg.rotation.x=-this.frontRightLeg.rotation.x,this.group.add(this.backRightLeg),this.backLeftLeg=this.frontLeftLeg.clone(),this.backLeftLeg.position.z=-this.frontLeftLeg.position.z,this.backLeftLeg.rotation.x=-this.frontLeftLeg.rotation.x,this.group.add(this.backLeftLeg)}rad(t){return t*(Math.PI/180)}jump(t){this.vertical+=t,this.group.position.y=Math.sin(this.vertical)+1;const i=Math.sin(this.vertical)*Math.PI/6+.3;this.frontRightLeg.rotation.z=i,this.frontLeftLeg.rotation.z=-i,this.backRightLeg.rotation.z=i,this.backLeftLeg.rotation.z=-i;const s=Math.sin(this.vertical)*Math.PI/3+1.5;this.rightear.rotation.z=s,this.leftear.rotation.z=-s}jumpOnclick(){if(this.mouseDown)this.jump(.05);else{if(this.group.position.y<=.4)return;this.jump(.08)}}}class l{constructor(){this.group=new r.ZAu,this.group.position.y=-2,this.group.scale.set(1,1,1),this.material=new r.Wid({color:11386608,roughness:1,flatShading:!0}),this.vertical=0,this.drawCloud(),this.group.traverse((t=>{t.castShadow=!0,t.receiveShadow=!0}))}drawCloud(){const t=new r.cJO(1,0);this.topCloud=new r.Kj0(t,this.material),this.group.add(this.topCloud),this.leftCloud=this.topCloud.clone(),this.leftCloud.position.set(-1.2,-.3,0),this.leftCloud.scale.set(.8,.8,.8),this.group.add(this.leftCloud),this.rightCloud=this.leftCloud.clone(),this.rightCloud.position.x=-this.leftCloud.position.x,this.group.add(this.rightCloud),this.frontCloud=this.leftCloud.clone(),this.frontCloud.position.set(0,-.4,.9),this.frontCloud.scale.set(.8,.8,.8),this.group.add(this.frontCloud),this.backCloud=this.frontCloud.clone(),this.backCloud.position.z=-this.frontCloud.position.z,this.group.add(this.backCloud)}upDown(){this.vertical+=.1,this.topCloud.position.y=.12*-Math.cos(this.vertical),this.leftCloud.position.y=.1*-Math.cos(this.vertical),this.rightCloud.position.y=.1*-Math.cos(this.vertical),this.frontCloud.position.y=.1*-Math.cos(this.vertical),this.backCloud.position.y=.1*-Math.cos(this.vertical)}}class g{constructor(){this.group=new r.ZAu,this.daySky=new r.ZAu,this.nightSky=new r.ZAu,this.group.add(this.daySky),this.group.add(this.nightSky),this.colors={day:[16777215,16373471,12709357,13025015],night:[6145973,16253054,16761699,13478653,14538750]},this.drawSky("day"),this.drawSky("night"),this.drawNight()}drawSky(t){for(let i=0;i<30;i++){const i=new r.cJO(.4,0),s=new r.Wid({color:this.colors[t][Math.floor(Math.random()*this.colors[t].length)],roughness:1,flatShading:!0}),e=new r.Kj0(i,s);e.position.set(30*(Math.random()-.5),30*(Math.random()-.5),30*(Math.random()-.5)),"day"===t?this.daySky.add(e):this.nightSky.add(e)}}drawNight(){const t=new r.xo$(.1,5,5),i=new r.Wid({color:16076206,roughness:1,flatShading:!0});for(let s=0;s<3;s++){const s=new r.cek(16078457,2,35),e=new r.Kj0(t,i);s.add(e),s.position.set(6*(Math.random()-2),6*(Math.random()-2),6*(Math.random()-2)),s.updateMatrix(),s.matrixAutoUpdate=!1,this.nightSky.add(s)}}showNight(t){t?(this.daySky.position.set(100,100,100),this.nightSky.position.set(0,0,0)):(this.daySky.position.set(0,0,0),this.nightSky.position.set(100,100,100))}skyMovement(){this.group.rotation.x+=.001,this.group.rotation.y+=.003}}var c={name:"ExpView04",data(){return{}},methods:{init(){this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new r.xsS,this.camera=new r.cPb(75,this.width/this.height,.1,1e3),this.camera.lookAt(this.scene.position),this.camera.position.set(0,.7,8),this.renderer=new r.CP7({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r.ntZ,this.lights(),this.addSheep(),this.addCloud(),this.addSky(),this.world=document.querySelector(".ExpView04"),this.world.appendChild(this.renderer.domElement),document.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),window.addEventListener("resize",this.onResize),this.night=!1,this.toggleBtn=document.querySelector(".toggle"),this.toggleBtn.addEventListener("click",this.nightDayToggle)},lights(){const t=new r.vmT(16777215,8487297,.9);this.scene.add(t);const i=new r.Ox3(16766872,.8);i.position.set(9.5,8,8.5),i.castShadow=!0,this.scene.add(i);const s=new r.Ox3(13225727,.5);s.position.set(-16,5,8),s.castShadow=!0,this.scene.add(s)},addSheep(){this.sheep=new d,this.scene.add(this.sheep.group)},addCloud(){this.cloud=new l,this.scene.add(this.cloud.group)},addSky(){this.sky=new g,this.sky.showNight(this.night),this.scene.add(this.sky.group)},onMouseDown(t){t.preventDefault(),this.sheep.mouseDown=!0},onMouseUp(t){t.preventDefault(),this.sheep.mouseDown=!1},onResize(){const t=window.innerWidth,i=window.innerHeight;this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i)},animate(){requestAnimationFrame(this.animate),this.render()},render(){this.sheep.jumpOnclick(),this.sheep.group.position.y>.4&&this.cloud.upDown(),this.sky.skyMovement(),this.renderer.render(this.scene,this.camera)},nightDayToggle(t){t.preventDefault(),this.night=!this.night,this.toggleBtn.classList.toggle("toggle-night"),this.world.classList.toggle("ExpView04-night"),this.sky.showNight(this.night)}},mounted(){this.init(),this.animate()}},u=s(744);const p=(0,u.Z)(c,[["render",a],["__scopeId","data-v-1a06cbad"]]);var w=p}}]);
//# sourceMappingURL=208.7fee2a6b.js.map