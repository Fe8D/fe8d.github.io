(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(342)},340:function(e,t,n){e.exports=n.p+"static/media/template.e8c75232.png"},342:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(97),c=n.n(o),l=n(54),u=n(67),i=n(18),s=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),o=t[0],c=t[1],s=Object(a.useState)(""),p=Object(u.a)(s,2),m=p[0],h=p[1],d=Object(a.useState)("none"),g=Object(u.a)(d,2),f=g[0],v=g[1];return r.a.createElement(i.View,{activePanel:"home",popout:"making"===f?r.a.createElement(i.ScreenSpinner,null):null},r.a.createElement(i.Panel,{id:"home"},r.a.createElement(i.PanelHeader,null,"\u041a\u0442\u043e?"),r.a.createElement(i.FormLayout,{style:{background:"white"}},"shared"===f?r.a.createElement(i.FormStatus,{title:"\u0423\u0440\u0430\u0430!",style:{background:"#528bcc",color:"white"}},"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u044b\u043b\u0430 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430!"):null,"sharingError"===f?r.a.createElement(i.FormStatus,{title:"\u0423\u0432\u044b! ",state:"error"},"\u041c\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0432\u043e\u0439 \u0442\u043e\u043a\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"):null,"error"===f?r.a.createElement(i.FormStatus,{title:"\u041e\u0448\u0438\u0431\u043a\u0430!",state:"error"},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430..."):null,r.a.createElement(i.Input,{top:"\u0418\u043c\u044f",value:o,onChange:function(e){return c(e.currentTarget.value.length<=16?e.currentTarget.value:o)}}),r.a.createElement(i.Input,{top:"\u0427\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442? (\u0432 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0430\u0434\u0435\u0436\u0435)",value:m,onChange:function(e){return h(e.currentTarget.value.length<=16?e.currentTarget.value:m)}})),r.a.createElement(i.FixedLayout,{vertical:"bottom",style:{margin:15,paddingRight:30}},r.a.createElement(i.Button,{size:"xl",onClick:function(){v("making"),function(e,t,a){var r=document.createElement("canvas");r.width=1080,r.height=1920;var o=r.getContext("2d");o.textAlign="center",o.fillStyle="#FFFFFF";var c=new Image;c.onload=function(){o.drawImage(c,0,0),o.font="96px Arial Black",o.fillText(e,540,1133),o.font="68px Arial",o.fillText(t,540,1494),a(r.toDataURL())},c.src=n(340)}(o,m,function(e){l.a.send("VKWebAppGetAuthToken",{app_id:6999640,scope:"stories"}).then(function(t){var n=t.data.access_token;l.a.send("VKWebAppCallAPIMethod",{method:"stories.getPhotoUploadServer",params:{access_token:n,add_to_news:1,link_text:"open",link_url:"https://vk.com/app6999640",v:"5.95"}}).then(function(t){var n=t.data.response.upload_url,a=new FormData;a.append("file",function(e,t){for(var n=e.split(","),a=n[0].match(/:(.*?);/)[1],r=atob(n[1]),o=r.length,c=new Uint8Array(o);o--;)c[o]=r.charCodeAt(o);return new File([c],t,{type:a})}(e,"story.png")),fetch("https://cors-anywhere.herokuapp.com/"+n,{method:"POST",body:a}).then(function(e){return e.json()}).then(function(e){return e.error?v("error"):v("shared")}).catch(console.error)}).catch(console.error)}).catch(function(){return v("sharingError")})})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"))))};n(341);l.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(s,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.19860701.chunk.js.map