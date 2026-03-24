(()=>{"use strict";var e,t,r,n,o,a,s={3486(e,t,r){var n=r(2615),o=r(8288),a=r(9628),s=r(9471),i=r(9914),l=r(5838),c=r(5316),d=r(1138),u=r(1378),p=r(2345),h=r(721),g=r(9361),m=r(8172),f=r(204);let v=function(e){let{videoRef:t,state:r}=e;return(0,f.A)(()=>{let e=t.current;if(!e)return;let n=()=>{console.log("onLoadStart"),r.loading=!1,r.waiting=!0,function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.muted=t;let r=e.play();r instanceof Promise?r.catch(t=>(console.error("startPlay: ",t),e.muted=!0,e.play().finally(()=>!1))):Promise.resolve(!0)}(e)},o=()=>{console.log("onLoadedMetadata"),r.duration=b(e.duration)},a=()=>{console.log("onLoadedData")},s=()=>{console.log("onProgress"),r.buffered=e.buffered},i=()=>{console.log("onCanPlay"),r.loading=!1},l=()=>{console.log("onCanPlayThrough"),r.waiting=!1},c=()=>{console.log("onPlay")},d=()=>{console.log("onPlaying"),r.paused=!1,r.ended=!1},u=()=>{console.log("onWaiting"),r.waiting=!0},p=()=>{console.log("onPause"),r.paused=!0},h=()=>{console.log("onEnded"),r.ended=!0},g=()=>{console.log("onError"),r.error=e.error},m=()=>{console.log("onStalled"),r.waiting=!0},f=()=>{console.log("onSuspend")},v=()=>{console.log("onDurationChange"),r.duration=b(e.duration)},x=()=>{console.log("onTimeUpdate"),r.currentTime=b(e.currentTime)},y=()=>{console.log("onSeeking"),r.seeking=!0},k=()=>{console.log("onSeeked"),r.seeking=!1},w=()=>{console.log("onVolumeChange"),r.volume=e.volume,r.muted=e.muted},j=()=>{console.log("onRateChange"),r.playbackRate=b(e.playbackRate)||1},C=()=>{console.log("onFullscreenChange"),r.fullscreen=document.fullscreenElement===e};return e.addEventListener("loadstart",n),e.addEventListener("loadedmetadata",o),e.addEventListener("loadeddata",a),e.addEventListener("progress",s),e.addEventListener("canplay",i),e.addEventListener("canplaythrough",l),e.addEventListener("play",c),e.addEventListener("playing",d),e.addEventListener("waiting",u),e.addEventListener("pause",p),e.addEventListener("ended",h),e.addEventListener("error",g),e.addEventListener("stalled",m),e.addEventListener("suspend",f),e.addEventListener("durationchange",v),e.addEventListener("timeupdate",x),e.addEventListener("seeking",y),e.addEventListener("seeked",k),e.addEventListener("volumechange",w),e.addEventListener("ratechange",j),document.addEventListener("fullscreenchange",C),()=>{e.removeEventListener("loadstart",n),e.removeEventListener("loadedmetadata",o),e.removeEventListener("loadeddata",a),e.removeEventListener("progress",s),e.removeEventListener("canplay",i),e.removeEventListener("canplaythrough",l),e.removeEventListener("play",c),e.removeEventListener("playing",d),e.removeEventListener("waiting",u),e.removeEventListener("pause",p),e.removeEventListener("ended",h),e.removeEventListener("error",g),e.removeEventListener("stalled",m),e.removeEventListener("suspend",f),e.removeEventListener("durationchange",v),e.removeEventListener("timeupdate",x),e.removeEventListener("seeking",y),e.removeEventListener("seeked",k),e.removeEventListener("volumechange",w),e.removeEventListener("ratechange",j),document.removeEventListener("fullscreenchange",C)}},[]),null};function b(e){let t=Number(e);return Number.isNaN(t)||!Number.isFinite(t)?0:t}var x=r(9288),y=r(9374),k=r(4199);function w(e){return{prevented:!1,loading:!!e,playing:!1,paused:!1,ended:!1,seeking:!1,waiting:!1,duration:0,currentTime:0,buffered:null,muted:!1,volume:1,playbackRate:1,pip:!1,fullscreen:!1,error:null,videoMuted:!1}}var j=r(6490),C=r(7575),S=r(5166);class E{load(e){return this.player=null,this.props=e,Promise.resolve(this.player)}clean(){return this.props=null,this.player=null,Promise.resolve()}constructor(){(0,C._)(this,"player",null),(0,C._)(this,"props",null)}}(0,C._)(E,"name","");let L=E;class A extends L{load(e){this.clean(),this.props=e;let{src:t,config:r,video:n}=this.props;if(!t||!n)return this.props=null,Promise.resolve(null);let o=new S.Ay(Object.assign({},r,{debug:!1}));return o.loadSource(t),o.attachMedia(n),o.on(S.Ay.Events.ERROR,(e,t)=>{}),this.player=o,Promise.resolve(o)}clean(){let e=this.player;if(this.player=null,this.props=null,e)try{e.destroy()}catch(e){}return Promise.resolve()}}(0,C._)(A,"name","hlsjs");var T=r(8191),M=r.n(T);class P extends L{load(e){this.clean(),this.props=e;let{src:t,config:r,video:n}=this.props;if(!t||!n)return this.props=null,Promise.resolve(null);let o=M().createPlayer({isLive:!0,type:"flv",url:t},r);return o?(o.attachMediaElement(n),o.load(),o.on(M().Events.ERROR,(e,t)=>{console.error(e,t)}),this.player=o,Promise.resolve(o)):Promise.resolve(null)}clean(){let e=this.player;if(this.player=null,this.props=null,e){try{e.pause()}catch(e){}try{e.unload()}catch(e){}try{e.detachMediaElement()}catch(e){}try{e.destroy()}catch(e){}}return Promise.resolve()}}(0,C._)(P,"name","mpegts");class z extends L{load(e){this.clean(),this.props=e;let{src:t,video:r}=this.props;return t&&r?(r.pause(),r.src=t,r.load(),Promise.resolve(r)):(this.props=null,Promise.resolve(null))}constructor(){super(),(0,C._)(this,"clean",()=>{var e;let t=null==(e=this.props)?void 0:e.video;return t&&(t.pause(),t.src=""),this.player=null,this.props=null,Promise.resolve()}),window.addEventListener("beforeunload",this.clean),window.addEventListener("pagehide",this.clean),window.addEventListener("unload",this.clean)}}(0,C._)(z,"name","native");class _{static isSupported(){return!!MediaStream&&!!RTCPeerConnection&&!!RTCSessionDescription&&!!RTCPeerConnection.prototype.addTransceiver}subscribe(){return this.url?(this.unsubscribe(),this.createRTCPeerConnection(),this.connectPeerConnection().catch(()=>{}),this.stream):null}unsubscribe(){this.pc&&this.closeRTCPeerConnection()}destroy(){this.unsubscribe(),this.url="",this.api="",this.stream=null,this.trackList=[]}createRTCPeerConnection(){let e=new RTCPeerConnection({iceTransportPolicy:"all",bundlePolicy:"max-bundle",rtcpMuxPolicy:"require",iceCandidatePoolSize:0,sdpSemantics:"unified-plan",tcpCandidatePolicy:"disable",IceTransportsType:"nohost"});return e.addTransceiver("audio",{direction:"recvonly"}),e.addTransceiver("video",{direction:"recvonly"}),e.ontrack=e=>{this.stream.addTrack(e.track),this.trackList.push(e.track)},this.pc=e,this.pc}connectPeerConnection(){let{pc:e}=this;return e?e.createOffer().then(t=>e.setLocalDescription(t).then(()=>t)).then(e=>this.getSessionInfo({sdp:e.sdp})).then(t=>e.setRemoteDescription(new RTCSessionDescription({type:"answer",sdp:t}))):Promise.reject(Error("RTCPeerConnection is not created"))}closeRTCPeerConnection(){if(this.trackList&&(this.trackList.forEach(e=>{try{this.stream.removeTrack(e)}catch(e){}try{e.stop()}catch(e){}}),this.trackList=[]),!this.pc)return;let{pc:e}=this;this.pc=null,e.ontrack=()=>{},e.onconnectionstatechange=()=>{};try{e.getSenders().forEach(t=>e.removeTrack(t))}catch(e){}try{e.close()}catch(e){}}getSessionInfo(e){let{sdp:t}=e;return this.sendRequest(this.api,{method:"POST",body:JSON.stringify({api:this.api,sdp:t,streamurl:this.url,clientip:null,tid:Number(Math.round(Date.now()*Math.random()*100)).toString(16).substr(0,7)})}).then(e=>e.sdp?e.sdp:Promise.reject(e))}sendRequest(e,t){return fetch(e,{mode:"cors",headers:{"Content-Type":"application/json"},method:"GET",...t}).then(e=>{if(200<=e.status&&300>e.status)return e;let t=Error(e.statusText);return Object.defineProperty(t,"response",{value:e}),Promise.reject(t)}).then(e=>e.text()).then(e=>{try{return e?JSON.parse(e):{}}catch(e){return Promise.reject(e)}})}constructor(e,t){(0,C._)(this,"api",""),(0,C._)(this,"url",""),(0,C._)(this,"stream",new MediaStream),(0,C._)(this,"trackList",[]),(0,C._)(this,"pc",null),this.api=function(e,t){if(t.api)return t.api;let n=t.protocol||r.g.location.protocol,o=t.host||function(e){try{return new URL(e).host}catch(e){return r.g.location.host}}(e),a=t.pathname||"/rtc/v1/play/";return`${n}//${o}${a}`}(e,t),this.url=e,this.stream=new MediaStream,this.trackList=[]}}class R extends L{load(e){this.clean(),this.props=e;let{src:t,config:r,video:n}=this.props;if(!t||!n)return this.props=null,Promise.resolve(null);let o=new _(t,r),a=o.subscribe();return n.pause(),n.srcObject=a,n.load(),this.player=o,Promise.resolve(o)}clean(){var e;let t=null==(e=this.props)?void 0:e.video,r=this.player;t&&(t.pause(),t.srcObject=null);try{r.destroy()}catch(e){}return this.player=null,this.props=null,Promise.resolve()}}(0,C._)(R,"name","srswebrtc");class N{static getInstance(){return N.instance||(N.instance=new N),N.instance}init(){this.kernels.clear(),[R,P,A,z].forEach(e=>this.kernels.set(e.name,e))}register(e){(e||[]).forEach(e=>{this.kernels.set(e.name,e)})}unregister(e){e?(e||[]).forEach(e=>{this.kernels.delete(e.name)}):this.init()}genKernel(e){if(!e)return null;let t=this.kernels.get(e);return t?new t:null}constructor(){(0,C._)(this,"kernels",new Map),this.init()}}(0,C._)(N,"instance",void 0);let O=function(e){let{kernel:t,src:r,config:n,videoRef:o}=e,a=(0,l.A)(()=>N.getInstance().genKernel(t),[t]);return(0,j.A)(()=>{if(a&&r)return a.load({src:r,config:n,video:o.current}),()=>{a.clean()}},[r,a],{wait:200}),null},F=(0,s.createContext)({});function D(e){var t;let r,{kernel:o,src:a,config:i,children:l}=e,c=(0,s.useRef)(null),d=(t=a,r=(0,x.A)(w()),(0,y.A)(()=>{(0,k.h)(r,w(t))},[t]),r);return v({videoRef:c,state:d}),!function(e){let{videoRef:t,enabled:r=!0}=e,n=(0,s.useRef)(null),o=(0,m.A)(e=>{if(!e||!(e instanceof HTMLElement))return!1;let t=e.tagName.toLowerCase();return"input"===t||"textarea"===t||e.isContentEditable}),a=(0,m.A)(e=>{if(!r||!t.current||o(e.target))return;let n=t.current,a=!1;switch(e.code){case"Space":e.preventDefault(),n.paused||n.ended?(n.ended&&(n.currentTime=0),n.play()):n.pause(),a=!0;break;case"ArrowLeft":e.preventDefault(),n.currentTime=Math.max(0,n.currentTime-5),a=!0;break;case"ArrowRight":e.preventDefault(),n.currentTime=Math.min(n.duration||n.currentTime,n.currentTime+5),a=!0;break;case"ArrowUp":e.preventDefault(),n.muted=!1,n.volume=Math.min(1,n.volume+.1),a=!0;break;case"ArrowDown":e.preventDefault(),n.volume=Math.max(0,n.volume-.1),n.muted=0===n.volume,a=!0;break;case"KeyM":e.preventDefault(),n.muted=!n.muted,a=!0;break;case"KeyF":e.preventDefault(),document.fullscreenElement?document.exitFullscreen():n.requestFullscreen(),a=!0}a&&e.stopPropagation()});(0,s.useEffect)(()=>{if(!r)return;let e=()=>{n.current=document.activeElement};return window.addEventListener("keydown",a,{capture:!0}),window.addEventListener("focusin",e),()=>{window.removeEventListener("keydown",a,{capture:!0}),window.removeEventListener("focusin",e)}},[r,a])}({videoRef:c,enabled:!0}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("video",{ref:c,controls:!1,autoPlay:!0,preload:"metadata",style:{display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",pointerEvents:"none"}}),(0,n.jsx)(O,{kernel:o,videoRef:c,src:a,config:i}),(0,n.jsx)(F.Provider,{value:{videoRef:c,state:d},children:l})]})}function I(e){let{children:t}=e,{state:r}=(0,s.useContext)(D.Context),[o,a]=(0,s.useState)(!1),i=r.loading||r.paused||r.ended||r.waiting||r.seeking,{run:l,cancel:c}=(0,h.A)(()=>a(!0),{wait:3e3});(0,g.A)(()=>{i?(c(),a(!1)):l()},[i]);let d=()=>{a(!1),l()};return(0,n.jsx)("div",{onMouseEnter:d,onMouseMove:d,onMouseLeave:l,onTouchStart:d,onTouchMove:d,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",color:"#fff",textShadow:"0 0 1px rgba(0, 0, 0, 0.5)",outline:"none",display:"block",opacity:+!o,transition:"opacity 300ms ease-in-out",willChange:"opacity",cursor:o?"none":"default",background:"transparent"},children:t})}D.Context=F;var $=r(9107);function X(e){let{children:t}=e;return(0,n.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,color:"#fff"},children:t})}function B(){let{videoRef:e,state:t}=(0,s.useContext)(D.Context),r=null==e?void 0:e.current;return t.paused||t.ended?(0,n.jsx)(X,{children:(0,n.jsx)("button",{type:"button",onClick:()=>{r&&(t.ended&&(r.currentTime=0),r.play())},style:{background:"transparent",border:"none",borderRadius:0,width:"auto",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#fff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.6)",transition:"transform 0.15s ease",padding:0},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.1)"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)"},children:(0,n.jsx)($.A,{style:{fontSize:72,marginLeft:8}})})}):null}var W=r(2618),q=r(7332),U=r(6347),G=r(4635),H=r(974),K=r(808);let Q=function(){let{token:e}=a.A.useToken();return(0,n.jsxs)(G.A,{size:e.sizeXXS,children:[(0,n.jsx)("div",{style:{borderRadius:"50%",width:e.sizeXXS,height:e.sizeXXS,background:e.colorError,boxShadow:`0 0 ${e.sizeXXS}px ${e.colorErrorHover}`}}),"直播"]})};var V=r(1582),J=r(6243),Y=r(366);let Z={trackStyle:{backgroundColor:"#fff"},handleStyle:{borderColor:"#fff",backgroundColor:"#fff"},activeDotStyle:{borderColor:"#fff"},railStyle:{backgroundColor:"rgba(255,255,255,0.3)"}},ee=(0,p.rU)(e=>{let{css:t}=e;return{sliderContainer:t`
    .ant-slider-handle::after {
      box-shadow: 0 0 0 2px #fff !important;
      background-color: #fff !important;
    }
  `}}),et=function(e){let{sliderWidth:t=100}=e,{videoRef:r,state:o}=(0,s.useContext)(D.Context),i=null==r?void 0:r.current,l=(0,m.A)(e=>{try{if(!i)return;let t=Math.min(1,Math.max(0,e/100));i.muted=0===t,i.volume=t}catch(e){console.error("设置音量失败",e)}}),c=(0,m.A)(()=>{try{if(!i)return;i.muted=!i.muted}catch(e){console.error("切换静音失败",e)}}),d=Math.round((o.muted?0:o.volume)*100),{token:u}=a.A.useToken(),{styles:p}=ee();return(0,n.jsxs)(G.A,{size:4,align:"center",style:{display:"flex"},children:[(0,n.jsx)(H.A,{title:o.muted?"取消静音":"静音",children:(0,n.jsx)(K.Ay,{type:"text",size:"large",icon:o.muted||0===d?(0,n.jsx)(V.A,{}):(0,n.jsx)(J.A,{}),onClick:c,style:{color:"#fff",fontSize:u.fontSizeXL}})}),(0,n.jsx)("div",{className:p.sliderContainer,style:{width:t},children:(0,n.jsx)(Y.A,{min:0,max:100,step:1,value:d,onChange:e=>l(Number(e)),...Z})})]})},er=function(e){let{actions:t=null}=e,{videoRef:r,state:o}=(0,s.useContext)(D.Context),i=null==r?void 0:r.current,l=(0,m.A)(()=>{try{if(!i)return;o.ended&&(i.currentTime=0),o.paused||o.ended?i.play():i.pause()}catch(e){console.error("切换播放状态失败",e)}}),c=(0,m.A)(async()=>{try{if(!i)return;document.fullscreenElement?await document.exitFullscreen():await i.requestFullscreen()}catch(e){console.error("切换全屏失败",e)}}),{token:d}=a.A.useToken(),{styles:u}=eo();return(0,n.jsxs)("div",{className:(0,p.cx)(u.playerBar,u.spaceBetween),children:[(0,n.jsxs)(G.A,{size:d.sizeSM,align:"center",children:[(0,n.jsx)(en,{title:o.paused||o.ended?"播放":"暂停",icon:o.paused||o.ended?(0,n.jsx)($.A,{}):(0,n.jsx)(W.A,{}),onClick:l}),(0,n.jsx)(et,{sliderWidth:100}),(0,n.jsx)(Q,{}),t]}),(0,n.jsx)(G.A,{size:0,align:"center",children:(0,n.jsx)(en,{title:o.fullscreen?"退出全屏":"全屏",icon:o.fullscreen?(0,n.jsx)(q.A,{}):(0,n.jsx)(U.A,{}),onClick:c})})]})};function en(e){let{title:t,icon:r,onClick:o}=e,{token:s}=a.A.useToken();return(0,n.jsx)(H.A,{title:t,children:(0,n.jsx)(K.Ay,{type:"text",size:"large",icon:r,onClick:o,style:{color:"#fff",fontSize:s.fontSizeXL}})})}let eo=(0,p.rU)(e=>{let{token:t}=e;return{playerBar:{position:"absolute",left:0,bottom:0,width:"100%",padding:`${t.paddingXS}px ${t.paddingSM}px`,background:"transparent",color:t.colorWhite,fontSize:t.fontSizeLG,boxSizing:"border-box",userSelect:"none"},spaceBetween:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}});function ea(e){let{children:t}=e;return(0,n.jsxs)(I,{children:[t,(0,n.jsx)(B,{}),(0,n.jsx)(er,{})]})}var es=r(8185),ei=r(155);function el(e){let t=Math.floor(e/1e3),r=Math.floor(t/60),n=Math.floor(r/60),o=t%60,a=r%60;return n>0?`${n}:${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${a}:${String(o).padStart(2,"0")}`}let ec={trackStyle:{backgroundColor:"#FF0000"},handleStyle:{borderColor:"#FF0000",backgroundColor:"#FF0000"},activeDotStyle:{borderColor:"#FF0000"},railStyle:{backgroundColor:"rgba(255,255,255,0.3)"}},ed=function(e){var t;let{actions:r=null,extra:o=null}=e,{videoRef:i,state:l}=(0,s.useContext)(D.Context),[c,d]=(0,s.useState)(null),u=null==i?void 0:i.current,p=Math.max(0,(c??l.currentTime)*1e3),h=Math.max(0,1e3*l.duration),g=Number.isFinite(l.duration)&&l.duration>0,f=(0,m.A)(()=>{try{if(!u)return;l.ended&&(u.currentTime=0),l.paused||l.ended?u.play():u.pause()}catch(e){console.error("切换播放状态失败",e)}}),v=(0,m.A)(e=>{try{if(!u||!g)return;u.currentTime=Math.min(l.duration,Math.max(0,e)),d(null)}catch(e){console.error("设置播放进度失败",e)}}),b=(0,m.A)(e=>{try{if(!u)return;u.playbackRate=e}catch(e){console.error("设置倍速失败",e)}}),x=(0,m.A)(async()=>{try{if(!u)return;document.fullscreenElement?await document.exitFullscreen():await u.requestFullscreen()}catch(e){console.error("切换全屏失败",e)}}),y=(0,s.useMemo)(()=>[.5,1,1.25,1.5,2].map(e=>({key:String(e),label:`${e}x`,onClick:()=>b(e)})),[b]),{token:k}=a.A.useToken(),{styles:w}=ep();return(0,n.jsxs)("div",{className:w.playerBar,children:[(0,n.jsx)("div",{className:w.progressRow,children:(0,n.jsx)("div",{className:w.progressContainer,children:(0,n.jsx)(Y.A,{min:0,max:Math.max(0,l.duration||0),step:.1,value:c??(g?l.currentTime:0),onChange:e=>d(Number(e)),onChangeComplete:e=>v(Number(e)),tooltip:{formatter:e=>null==e?"":el(1e3*Number(e)),open:!1},disabled:!g,...ec})})}),(0,n.jsxs)("div",{className:w.spaceBetween,children:[(0,n.jsxs)(G.A,{size:k.sizeSM,align:"center",children:[(0,n.jsx)(eu,{title:l.paused||l.ended?"播放":"暂停",icon:l.paused||l.ended?(0,n.jsx)($.A,{}):(0,n.jsx)(W.A,{}),onClick:f}),(0,n.jsx)(et,{sliderWidth:100}),(0,n.jsxs)(es.A.Text,{className:w.timeText,children:[el(p)," /"," ",h>0?el(h):"--:--"]}),r]}),(0,n.jsxs)(G.A,{size:0,align:"center",children:[(0,n.jsx)(ei.A,{menu:{items:y},placement:"topRight",trigger:["click"],children:(0,n.jsxs)(K.Ay,{type:"text",style:{color:"#fff",fontSize:k.fontSizeLG,fontWeight:"normal"},children:[null==(t=l.playbackRate)?void 0:t.toFixed(2).replace(/\.00$/,""),"x"]})}),(0,n.jsx)(eu,{title:l.fullscreen?"退出全屏":"全屏",icon:l.fullscreen?(0,n.jsx)(q.A,{}):(0,n.jsx)(U.A,{}),onClick:x}),o]})]})]})};function eu(e){let{title:t,icon:r,onClick:o}=e,{token:s}=a.A.useToken();return(0,n.jsx)(H.A,{title:t,children:(0,n.jsx)(K.Ay,{type:"text",size:"large",icon:r,onClick:o,style:{color:"#fff",fontSize:s.fontSizeXL}})})}let ep=(0,p.rU)(e=>{let{token:t,css:r}=e;return{playerBar:{position:"absolute",left:0,bottom:0,width:"100%",padding:`${t.paddingXS}px ${t.paddingSM}px`,background:"transparent",color:t.colorWhite,fontSize:t.fontSizeLG,boxSizing:"border-box",userSelect:"none"},progressRow:{display:"flex",alignItems:"center",gap:8},progressContainer:r`
    flex: 1;
    padding-right: 8px;
    .ant-slider-handle::after {
      box-shadow: 0 0 0 2px #FF0000 !important;
      background-color: #FF0000 !important;
    }
  `,timeText:{color:"#fff"},spaceBetween:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:0}}});function eh(e){let{children:t}=e;return(0,n.jsxs)(I,{children:[t,(0,n.jsx)(B,{}),(0,n.jsx)(ed,{})]})}let eg=(0,p.rU)(e=>{let{css:t}=e;return{appContainer:t`
    min-height: 100vh;
    background:
      radial-gradient(ellipse at 10% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(ellipse at 90% 80%, rgba(255, 119, 198, 0.25) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(120, 219, 255, 0.2) 0%, transparent 60%),
      linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%);
    padding: 40px 24px 80px;
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 40%);
      pointer-events: none;
    }
  `,contentWrapper:t`
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
  `,controlCard:t`
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 20px;
    margin-bottom: 24px;
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    }
  `,cardBody:t`
    padding: 16px;
  `,urlInput:t`
    margin-top: 12px;
    .ant-input {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #f8fafc;
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 13px;
      font-family: 'JetBrains Mono', 'SF Mono', monospace;
      transition: all 0.25s ease;
      box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);

      &::placeholder {
        color: rgba(248, 250, 252, 0.3);
      }

      &:focus {
        border-color: rgba(139, 92, 246, 0.6);
        box-shadow:
          0 0 0 3px rgba(139, 92, 246, 0.15),
          inset 0 2px 8px rgba(0, 0, 0, 0.3);
      }
    }
  `,playerCard:t`
    background: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    border-radius: 24px;
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset,
      0 0 80px rgba(139, 92, 246, 0.1);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%);
      pointer-events: none;
    }
  `,playerWrapper:t`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    position: relative;
    border-radius: 0;
    overflow: hidden;
  `,playerPlaceholder:t`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(248, 250, 252, 0.6);
    background:
      radial-gradient(ellipse at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%),
      linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%);
  `,placeholderIcon:t`
    font-size: 56px;
    margin-bottom: 20px;
    opacity: 0.4;
    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
  `,placeholderText:t`
    color: rgba(248, 250, 252, 0.7);
    font-size: 15px;
    font-weight: 500;
  `,placeholderSubtext:t`
    font-size: 12px;
    color: rgba(248, 250, 252, 0.4);
    margin-top: 6px;
  `}}),em=document.getElementById("root");em&&i.createRoot(em).render((0,n.jsx)(s.StrictMode,{children:(0,n.jsx)(o.Ay,{theme:{algorithm:a.A.darkAlgorithm},children:(0,n.jsx)(()=>{let{styles:e}=eg(),[t,r]=(0,s.useState)("live-native"),o=(0,l.A)(()=>[{id:"live-native",mode:"live",kernel:"native",label:"直播 - 原生",url:"https://www.w3schools.com/html/mov_bbb.mp4"},{id:"live-srswebrtc",mode:"live",kernel:"srswebrtc",label:"直播 - WebRTC",url:"webrtc://localhost/live/livestream"},{id:"live-flv",mode:"live",kernel:"mpegts",label:"直播 - FLV",url:"http://ivt.demo.qulubo.net/flv_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.flv"},{id:"live-hlsjs",mode:"live",kernel:"hlsjs",label:"直播 - HLS",url:"http://ivt.demo.qulubo.net/hls_srs/quick/5QDVGxXTRI6hxwI1A4s3fQ.m3u8"},{id:"playback-native",mode:"playback",kernel:"native",label:"回放 - 原生",url:"https://www.w3schools.com/html/mov_bbb.mp4"},{id:"playback-hlsjs",mode:"playback",kernel:"hlsjs",label:"回放 - HLS",url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}],[]),a=(0,l.A)(()=>o.find(e=>e.id===t)||o[0],[o,t]),i=(0,l.A)(()=>o.map(e=>({label:e.label,value:e.id})),[o]);return(0,n.jsx)("div",{className:e.appContainer,children:(0,n.jsxs)("div",{className:e.contentWrapper,children:[(0,n.jsx)(c.A,{variant:"borderless",className:e.controlCard,styles:{body:{padding:0}},children:(0,n.jsxs)("div",{className:e.cardBody,children:[(0,n.jsx)(d.A,{block:!0,size:"large",value:t,onChange:r,options:i}),(0,n.jsx)(u.A,{value:a.url,placeholder:"输入视频播放地址...",className:e.urlInput,readOnly:!0})]})}),(0,n.jsx)(c.A,{variant:"borderless",className:e.playerCard,styles:{body:{padding:0}},children:(0,n.jsx)("div",{className:e.playerWrapper,children:a.url?(0,n.jsx)(D,{kernel:a.kernel,src:a.url,config:{},children:"live"===a.mode?(0,n.jsx)(ea,{}):(0,n.jsx)(eh,{})}):(0,n.jsxs)("div",{className:e.playerPlaceholder,children:[(0,n.jsx)("div",{className:e.placeholderIcon,children:"\uD83D\uDCF9"}),(0,n.jsx)("span",{className:e.placeholderText,children:"暂无可用视频源"}),(0,n.jsx)("span",{className:e.placeholderSubtext,children:"请选择其他播放选项"})]})})})]})})},{})})}))}},i={};function l(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return s[e](r,r.exports,l),r.exports}l.m=s,l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(r,n){if(1&n&&(r=this(r)),8&n||"object"==typeof r&&r&&(4&n&&r.__esModule||16&n&&"function"==typeof r.then))return r;var o=Object.create(null);l.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>{a[e]=()=>r[e]});return a.default=()=>r,l.d(o,a),o},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r=[],l.O=(e,t,n,o)=>{if(t){o=o||0;for(var a=r.length;a>0&&r[a-1][2]>o;a--)r[a]=r[a-1];r[a]=[t,n,o];return}for(var s=1/0,a=0;a<r.length;a++){for(var[t,n,o]=r[a],i=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(l.O).every(e=>l.O[e](t[c]))?t.splice(c--,1):(i=!1,o<s&&(s=o));if(i){r.splice(a--,1);var d=n();void 0!==d&&(e=d)}}return e},n={410:0},l.O.j=e=>0===n[e],o=(e,t)=>{var r,o,[a,s,i]=t,c=0;if(a.some(e=>0!==n[e])){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(i)var d=i(l)}for(e&&e(t);c<a.length;c++)o=a[c],l.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return l.O(d)},(a=self.webpackChunkvideo_ts=self.webpackChunkvideo_ts||[]).forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var c=l.O(void 0,["783","37"],()=>l(3486));c=l.O(c)})();