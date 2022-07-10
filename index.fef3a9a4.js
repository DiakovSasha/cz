!function(){var t,i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={};t=void 0!==o?o:"undefined"!=typeof window?window:e,i=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var i,o="Success",e="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(i){return i||(i="head"),null!==t.document[i]||(s('\nNotiflix needs to be appended to the "<'+i+'>" element, but you called it before the "<'+i+'>" element has been created.'),!1)},f=function(){var t={},i=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],o++);for(var e=function(o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(i&&"[object Object]"===Object.prototype.toString.call(o[e])?t[e]=f(t[e],o[e]):t[e]=o[e])};o<arguments.length;o++)e(arguments[o]);return t},c=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,p=function(s,c,p,d){if(!l("body"))return!1;i||x.Notify.init({});var y=f(!0,i,{});if("object"==typeof p&&!Array.isArray(p)||"object"==typeof d&&!Array.isArray(d)){var u={};"object"==typeof p?u=p:"object"==typeof d&&(u=d),i=f(!0,i,u)}var b,g,w=i[s.toLocaleLowerCase("en")];m++,"string"!=typeof c&&(c="Notiflix "+s),i.plainText&&(b=c,(g=t.document.createElement("div")).innerHTML=b,c=g.textContent||g.innerText||""),!i.plainText&&c.length>i.messageMaxLength&&(i=f(!0,i,{closeButton:!0,messageMaxLength:150}),c='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),c.length>i.messageMaxLength&&(c=c.substring(0,i.messageMaxLength)+"..."),"shadow"===i.fontAwesomeIconStyle&&(w.fontAwesomeIconColor=w.background),i.cssAnimation||(i.cssAnimationDuration=0);var h=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(h.id=r.wrapID,h.style.width=i.width,h.style.zIndex=i.zindex,h.style.opacity=i.opacity,"center-center"===i.position?(h.style.left=i.distance,h.style.top=i.distance,h.style.right=i.distance,h.style.bottom=i.distance,h.style.margin="auto",h.classList.add("nx-flex-center-center"),h.style.maxHeight="calc((100vh - "+i.distance+") - "+i.distance+")",h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.justifyContent="center",h.style.alignItems="center",h.style.pointerEvents="none"):"center-top"===i.position?(h.style.left=i.distance,h.style.right=i.distance,h.style.top=i.distance,h.style.bottom="auto",h.style.margin="auto"):"center-bottom"===i.position?(h.style.left=i.distance,h.style.right=i.distance,h.style.bottom=i.distance,h.style.top="auto",h.style.margin="auto"):"right-bottom"===i.position?(h.style.right=i.distance,h.style.bottom=i.distance,h.style.top="auto",h.style.left="auto"):"left-top"===i.position?(h.style.left=i.distance,h.style.top=i.distance,h.style.right="auto",h.style.bottom="auto"):"left-bottom"===i.position?(h.style.left=i.distance,h.style.bottom=i.distance,h.style.top="auto",h.style.right="auto"):(h.style.right=i.distance,h.style.top=i.distance,h.style.left="auto",h.style.bottom="auto"),i.backOverlay){var v=t.document.getElementById(r.overlayID)||t.document.createElement("div");v.id=r.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=i.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=w.backOverlayColor||i.backOverlayColor,v.className=i.cssAnimation?"nx-with-animation":"",v.style.animationDuration=i.cssAnimation?i.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(h);var N=t.document.createElement("div");N.id=i.ID+"-"+m,N.className=i.className+" "+w.childClassName+" "+(i.cssAnimation?"nx-with-animation":"")+" "+(i.useIcon?"nx-with-icon":"")+" nx-"+i.cssAnimationStyle+" "+(i.closeButton&&"function"!=typeof p?"nx-with-close-button":"")+" "+("function"==typeof p?"nx-with-callback":"")+" "+(i.clickToClose?"nx-notify-click-to-close":""),N.style.fontSize=i.fontSize,N.style.color=w.textColor,N.style.background=w.background,N.style.borderRadius=i.borderRadius,N.style.pointerEvents="all",i.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.style.fontFamily='"'+i.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',i.cssAnimation&&(N.style.animationDuration=i.cssAnimationDuration+"ms");var k="";if(i.closeButton&&"function"!=typeof p&&(k='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+w.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),i.useIcon)if(i.useFontAwesome)N.innerHTML='<i style="color:'+w.fontAwesomeIconColor+"; font-size:"+i.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+w.fontAwesomeClassName+" "+("shadow"===i.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+c+"</span>"+(i.closeButton?k:"");else{var T="";s===o?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===e?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+w.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),N.innerHTML=T+'<span class="nx-message nx-with-icon">'+c+"</span>"+(i.closeButton?k:"")}else N.innerHTML='<span class="nx-message">'+c+"</span>"+(i.closeButton?k:"");if("left-bottom"===i.position||"right-bottom"===i.position){var L=t.document.getElementById(r.wrapID);L.insertBefore(N,L.firstChild)}else t.document.getElementById(r.wrapID).appendChild(N);var M=t.document.getElementById(N.id);if(M){var z,C,H=function(){M.classList.add("nx-remove");var i=t.document.getElementById(r.overlayID);i&&h.childElementCount<=0&&i.classList.add("nx-remove"),clearTimeout(z)},I=function(){if(M&&null!==M.parentNode&&M.parentNode.removeChild(M),h.childElementCount<=0&&null!==h.parentNode){h.parentNode.removeChild(h);var i=t.document.getElementById(r.overlayID);i&&null!==i.parentNode&&i.parentNode.removeChild(i)}clearTimeout(C)};if(i.closeButton&&"function"!=typeof p&&t.document.getElementById(N.id).querySelector("span.nx-close-button").addEventListener("click",(function(){H();var t=setTimeout((function(){I(),clearTimeout(t)}),i.cssAnimationDuration)})),("function"==typeof p||i.clickToClose)&&M.addEventListener("click",(function(){"function"==typeof p&&p(),H();var t=setTimeout((function(){I(),clearTimeout(t)}),i.cssAnimationDuration)})),!i.closeButton&&"function"!=typeof p){var W=function(){z=setTimeout((function(){H()}),i.timeout),C=setTimeout((function(){I()}),i.timeout+i.cssAnimationDuration)};W(),i.pauseOnHover&&(M.addEventListener("mouseenter",(function(){M.classList.add("nx-paused"),clearTimeout(z),clearTimeout(C)})),M.addEventListener("mouseleave",(function(){M.classList.remove("nx-paused"),W()})))}}if(i.showOnlyTheLastOne&&m>0)for(var A=t.document.querySelectorAll("[id^="+i.ID+"-]:not([id="+i.ID+"-"+m+"])"),S=0;S<A.length;S++){var B=A[S];null!==B.parentNode&&B.parentNode.removeChild(B)}i=f(!0,i,y)},x={Notify:{init:function(o){i=f(!0,r,o),function(i,o){if(!l("head"))return!1;if(null!==i()&&!t.document.getElementById(o)){var e=t.document.createElement("style");e.id=o,e.innerHTML=i(),t.document.head.appendChild(e)}}(c,"NotiflixNotifyInternalCSS")},merge:function(t){if(!i)return s("You have to initialize the Notify module before call Merge function."),!1;i=f(!0,i,t)},success:function(t,i,e){p(o,t,i,e)},failure:function(t,i,o){p(e,t,i,o)},warning:function(t,i,o){p(n,t,i,o)},info:function(t,i,o){p(a,t,i,o)}}};return"object"==typeof t.Notiflix?f(!0,t.Notiflix,{Notify:x.Notify}):{Notify:x.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(t)})):"object"==typeof e?e=i(t):t.Notiflix=i(t);for(var n=document.querySelector(".game"),a=0;a<9;a+=1)n.innerHTML+='<div class="block"></div>';var r=0;n.addEventListener("click",(function(t){"block"===t.target.className&&(t.target.innerHTML=r%2==0?"x":"0",r+=1,function(){var t=document.querySelectorAll(".block");console.log(t),"x"===t[0].innerHTML&&"x"===t[1].innerHTML&&"x"===t[2].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[3].innerHTML&&"x"===t[4].innerHTML&&"x"===t[5].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[6].innerHTML&&"x"===t[7].innerHTML&&"x"===t[8].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[0].innerHTML&&"x"===t[3].innerHTML&&"x"===t[6].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[1].innerHTML&&"x"===t[4].innerHTML&&"x"===t[7].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[2].innerHTML&&"x"===t[5].innerHTML&&"x"===t[8].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[0].innerHTML&&"x"===t[4].innerHTML&&"x"===t[8].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"x"===t[2].innerHTML&&"x"===t[4].innerHTML&&"x"===t[6].innerHTML&&e.Notify.success("Cross Winner",{width:"500px",fontSize:"28px"});"0"===t[0].innerHTML&&"0"===t[1].innerHTML&&"0"===t[2].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[3].innerHTML&&"0"===t[4].innerHTML&&"0"===t[5].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[6].innerHTML&&"0"===t[7].innerHTML&&"0"===t[8].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[0].innerHTML&&"0"===t[3].innerHTML&&"0"===t[6].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[1].innerHTML&&"0"===t[4].innerHTML&&"0"===t[7].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[2].innerHTML&&"0"===t[5].innerHTML&&"0"===t[8].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[0].innerHTML&&"0"===t[4].innerHTML&&"0"===t[8].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"});"0"===t[2].innerHTML&&"0"===t[4].innerHTML&&"0"===t[6].innerHTML&&e.Notify.success("Zerro Winner",{width:"500px",fontSize:"28px"})}())}))}();
//# sourceMappingURL=index.fef3a9a4.js.map
