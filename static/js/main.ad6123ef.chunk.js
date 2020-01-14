(this.webpackJsonpcny_frontend=this.webpackJsonpcny_frontend||[]).push([[0],{124:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(79),i=n.n(c),s=(n(97),n(167)),o=n(168),u=n(89),l="#9E1830",p="#F6552A",m="#F8B237",d=Object(u.a)({palette:{type:"dark",primary:{main:"#9E1830"},secondary:{main:"#F6552A"},background:{default:"#9E1830"}},typography:{fontFamily:"SentyWen",fontSize:24,h1:{fontSize:40}}}),g=n(39),h=n(23),f=n(3),b=n.n(f),E=n(80),v=n(165),A=n(170),w=n(166),y=Object(E.a)({container:{backgroundColor:m,background:"linear-gradient(90deg, rgba(255,191,80,1) 0%, rgba(224,143,0,1) 100%)",padding:"32px 12px",color:l,boxShadow:"inset 0 16px 24px -16px ".concat(p,", inset 0 -16px 24px -16px ").concat(p),textAlign:"center",fontWeight:"bold",textShadow:"0px 0px 6px ".concat(l)}}),I=function(e){var t=y({});return r.a.createElement("div",{className:"".concat(t.container," ").concat(e.className)},e.children)},M=n(22),N=n(30),G=n(31),x=n(33),S=n(14),D=function e(){Object(S.a)(this,e),this.update=void 0,this.dispose=void 0};D.id=void 0;var j,Y,Z=r.a.createContext({dependencies:{}}),R=function(e){function t(e){var n;Object(S.a)(this,t),(n=Object(N.a)(this,Object(G.a)(t).call(this,e))).update=function(){n.setState({})},n.useDependency=function(e){};var a={},r=!0,c=!1,i=void 0;try{for(var s,o=e.dependencies[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value,l=u;a[l.id]=new u,a[l.id].update=n.update}}catch(p){c=!0,i=p}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n.state={dependencies:a},n}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentWillUnmount",value:function(){this.state.dependencies.forEach((function(e){return e.dispose()}))}},{key:"render",value:function(){return r.a.createElement(Z.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),k=function(e){return r.a.useContext(Z).dependencies[e.id]},T=n(24);!function(e){e.START="START",e.END="END"}(j||(j={})),function(e){e.EMPTY="EMPTY",e.WAITING="WAITING",e.PLAYING="PLAYING",e.END="END"}(Y||(Y={}));var O=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(N.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).isFetchingAllQuestions=!1,n.gameState=Y.EMPTY,n.currentQuestionPos=1,n.questionState=j.START,n.currentAnswer=void 0,n.correctAnswer=null,n.score=0,n.rank=0,n.questionsMap=new Map,n.questionResultsMap=new Map,n.getAllQuestions=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n.isFetchingAllQuestions=!0,t.next=3,b.a.awrap(T.a.fetchAllQuestions());case 3:(e=t.sent)&&e.length>0?(n.questionsMap=new Map,e.forEach((function(e){return n.questionsMap.set(e.position,e)})),n.update()):console.log(e);case 5:case"end":return t.stop()}}))},n.getCurrentGameState=function(){var e,t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(T.a.getCurrentGameState());case 2:if(!(e=a.sent)){a.next=16;break}if(n.gameState=e.progress,n.questionState=e.questionState,n.currentQuestionPos=e.question,n.gameState!==Y.PLAYING||n.questionsMap.get(n.currentQuestionPos)){a.next=12;break}return a.next=10,b.a.awrap(T.a.fetchQuestion(n.currentQuestionPos));case 10:t=a.sent,n.questionsMap.set(t.position,t);case 12:return n.update(),a.abrupt("return",!0);case 16:return a.abrupt("return",!1);case 17:case"end":return a.stop()}}))},n.getCurrentQuestion=function(){return n.questionsMap.get(n.currentQuestionPos)},n.preloadImages=function(){n.questionsMap.size>0&&n.questionsMap.forEach((function(e){e.images.forEach((function(t,n){T.a.fetchImageAsBase64(t.url).then((function(t){return e.images[n].url=t}))}))}))},n.getQuestionResults=function(e){var t;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(T.a.fetchQuestionResults(n.currentQuestionPos));case 2:(t=a.sent)&&(n.questionResultsMap.set(e,t),n.update());case 4:case"end":return a.stop()}}))},n.handleEvent=function(e){switch(console.log("Handling",e),e.progress){case Y.EMPTY:n.gameState=Y.EMPTY,n.update();break;case Y.WAITING:n.gameState=Y.WAITING,n.update();break;case Y.PLAYING:n.currentQuestionPos=e.question,n.gameState=Y.PLAYING,n.questionState=e.questionState,n.update();break;case Y.END:n.currentQuestionPos=0,n.gameState=Y.END,n.update()}},n}return Object(x.a)(t,e),t}(D);O.id="GameService";var C=function(e,t){return e.toLowerCase()===t.toLowerCase()},W=function(e){var t=e.gameService,n=Object(h.f)(),a=Object(h.g)();console.log("Current game service",t);var c=function(){switch(t.gameState){case Y.EMPTY:case Y.WAITING:if(!C(a.pathname,"/"))return n.push("/");break;case Y.PLAYING:!function(){switch(t.questionState){case j.START:if(!C(a.pathname,"/projection-qn"))return n.push("/projection-qn");break;case j.END:if(!C(a.pathname,"/projection-score"))n.push("/projection-score")}}();break;case Y.END:if(!C(a.pathname,"/"))return n.push("/")}};return r.a.useEffect(c,[]),r.a.useEffect((function(){c()}),[t.gameState,t.questionState]),r.a.createElement(r.a.Fragment,null)},Q=Object(E.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"}}),z=function(){var e=Q({}),t=(Object(h.f)(),k(O));if(r.a.useEffect((function(){t.isFetchingAllQuestions||t.getAllQuestions();b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(t.getCurrentGameState());case 2:t.questionState===j.END&&T.a.fetchQuestionResults(t.currentQuestionPos).then((function(e){return console.log("Your results are",e)}));case 3:case"end":return e.stop()}}))}),[]),0===t.questionsMap.size||t.gameState===Y.END)return r.a.createElement(r.a.Fragment,null);var n=t.questionsMap.get(t.currentQuestionPos);if(!n)return r.a.createElement(r.a.Fragment,null);var a=n.images.sort((function(e,t){return e.id-t.id}));return console.log("Now your images",a),r.a.createElement("div",{className:e.container},r.a.createElement(W,{gameService:t}),r.a.createElement(v.a,{style:{flex:1,padding:24},cols:Math.ceil(a.length/2)},a.filter((function(e,t){return t<Math.ceil(a.length/2)})).map((function(e){return r.a.createElement(A.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{style:{objectFit:"cover",height:"100%",width:"100%"},src:e.url}),r.a.createElement(w.a,{subtitle:e.title}))}))),r.a.createElement(I,{className:e.title},n.title),r.a.createElement(v.a,{style:{flex:1,padding:24},cols:Math.ceil(a.length/2)},a.filter((function(e,t){return t>=Math.ceil(a.length/2)})).map((function(e){return r.a.createElement(A.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{style:{objectFit:"cover",height:"100%",width:"100%"},src:e.url}),r.a.createElement(w.a,{subtitle:e.title}))}))))},B=function(e){return r.a.createElement("div",{style:{margin:"4px 5vw",flex:1,height:"".concat(95*e.scorePercent+5,"%"),background:m,textAlign:"center",fontSize:"2em",color:l}},-1!==e.votes?e.votes:"")},L=function(e){if(!e.availableResults)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"100%"}}),e.question.images.map((function(e){return r.a.createElement(B,{votes:-1,scorePercent:0})})));var t=Array.from(e.availableResults.resultsMap.values()).reduce((function(e,t){return e>t?t:e}));return t||(t=1),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"100%"}}),e.question.images.map((function(n){var a=e.availableResults.resultsMap.get(n.id);return a||(a=0),r.a.createElement(B,{votes:a,scorePercent:a/t})})))},F=Object(E.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"},graphContainer:{padding:"24px 24px 0 24px",height:"60vh",display:"flex",alignItems:"flex-end"}}),J=function(){var e=F({}),t=(Object(h.f)(),k(O));if(console.log("Updating..."),r.a.useEffect((function(){b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(t.getCurrentGameState());case 2:t.questionState===j.END&&t.getQuestionResults(t.currentQuestionPos);case 3:case"end":return e.stop()}}))}),[]),0===t.questionsMap.size||t.gameState===Y.END)return r.a.createElement(r.a.Fragment,null);var n=t.questionsMap.get(t.currentQuestionPos);if(!n)return r.a.createElement(r.a.Fragment,null);var a=n.images.sort((function(e,t){return e.id-t.id}));return r.a.createElement("div",{className:e.container},r.a.createElement(W,{gameService:t}),r.a.createElement(I,{className:e.title},n.title),r.a.createElement("div",{className:e.graphContainer},r.a.createElement(L,{question:n,availableResults:t.questionResultsMap.get(n.id)})),r.a.createElement(v.a,{style:{padding:24},cols:a.length},a.map((function(e){return r.a.createElement(A.a,{style:{padding:4,height:"100%"}},r.a.createElement("img",{src:e.url}),r.a.createElement(w.a,{subtitle:e.title}))}))))},P=n(84),U=n.n(P),H=n(169),V=Object(E.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",padding:"120px 0",color:m,textAlign:"center",textShadow:"4px 4px #333333"}}),X=function(){var e=V({});return r.a.createElement(H.a,{className:e.container},r.a.createElement("img",{style:{transform:"scale(2)"},src:U.a}))},q=n(171),K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(I,null,r.a.createElement(q.a,{variant:"h1",style:{fontSize:"64px"}},"GREAT MINDS THINK ALIKE")))},_=n(156),$=n(35),ee=n.n($),te=(n(124),function(e){return r.a.createElement("div",{className:"pFallingCoint ".concat(e.className),style:e.style},r.a.createElement("img",{src:ee.a,className:"coin1"}),r.a.createElement("img",{src:ee.a,className:"coin2"}),r.a.createElement("img",{src:ee.a,className:"coin3"}),r.a.createElement("img",{src:ee.a,className:"coin4"}),r.a.createElement("img",{src:ee.a,className:"coin5"}))}),ne=n(87),ae=n.n(ne),re=n(88),ce=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(N.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).socket=void 0,n.stompClient=void 0,n}return Object(x.a)(t,e),Object(M.a)(t,[{key:"activate",value:function(e){var t=this;this.stompClient=new re.Client({reconnectDelay:5e3}),this.stompClient.webSocketFactory=function(){return new ae.a("https://cnybackend.southeastasia.cloudapp.azure.com/game")},this.stompClient.onConnect=function(n){console.log(n);t.stompClient.subscribe("/topic/game",(function(t){var n=JSON.parse(t.body);console.log(n),e(n)}))},this.stompClient.activate()}},{key:"deactivate",value:function(){this.stompClient&&this.stompClient.active&&this.stompClient.deactivate()}}]),t}(D);ce.id="SocketService";var ie=Object(_.a)({container:{display:"flex",flexFlow:"column",height:"100%",alignItems:"stretch"}}),se=function(){var e=ie({}),t=(k(ce),k(O));return r.a.createElement("div",{className:e.container},r.a.createElement(W,{gameService:t}),r.a.createElement(K,null),r.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"center",marginBottom:"64px"}},r.a.createElement(te,null)))},oe=function(){return r.a.createElement(g.a,{basename:"/CNY_ProjectionFrontend"},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/projection-qn"},r.a.createElement(z,null)),r.a.createElement(h.a,{path:"/projection-score"},r.a.createElement(J,null)),r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(se,null))))},ue=[O,ce],le=function(){var e=k(O),t=k(ce);return r.a.useEffect((function(){t.activate(e.handleEvent),b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(e.getAllQuestions());case 2:return t.next=4,b.a.awrap(e.getCurrentGameState());case 4:e.preloadImages();case 5:case"end":return t.stop()}}))}),[]),r.a.createElement(r.a.Fragment,null)},pe=function(){return r.a.createElement("img",{id:"preloader",style:{display:"none"}})},me=function(){return r.a.createElement(R,{dependencies:ue},r.a.createElement(s.a,{theme:d},r.a.createElement(o.a,null),r.a.createElement(oe,null),r.a.createElement(le,null),r.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var a=n(3),r=n.n(a),c=n(14),i=n(34),s=n.n(i),o=n(82),u="https://cnybackend.southeastasia.cloudapp.azure.com/api",l=function e(){Object(c.a)(this,e)};l.fetchAllQuestions=function(){var e,t=arguments;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return!(t.length>0&&void 0!==t[0])||t[0],n.prev=1,n.next=4,r.a.awrap(s.a.get(u+"/question/all"));case 4:if(200!==(e=n.sent).status){n.next=8;break}return console.log("Getting all your questions",e.data),n.abrupt("return",e.data);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),null,null,[[1,10]])},l.getCurrentGameState=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(s.a.get(u+"/game/state"));case 3:if(200!==(e=t.sent).status){t.next=9;break}return console.log("Getting current game state",e.data),t.abrupt("return",e.data);case 9:return t.abrupt("return",null);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error encountered when fetching question!",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),null,null,[[0,12]])},l.fetchQuestion=function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(s.a.get(u+"/question/".concat(e)));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),null,null,[[0,8]])},l.fetchQuestionResults=function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(s.a.get(u+"/poll/".concat(e)));case 3:if(t=n.sent,console.log(t),200!==t.status){n.next=9;break}return n.abrupt("return",o.a.adaptFromJson(t.data.choices));case 9:return n.abrupt("return",null);case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 16:case"end":return n.stop()}}),null,null,[[0,12]])},l.fetchImageAsBase64=function(t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=t.replace("http://","https://"),c.next=4,r.a.awrap(s.a.get(t,{responseType:"arraybuffer"}));case 4:if(200!==(n=c.sent).status){c.next=10;break}return a=e.from(n.data,"binary").toString("base64"),c.abrupt("return","data:image/jpg;base64, ".concat(a));case 10:return c.abrupt("return",null);case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(0),console.error("Error encountered when fetching image!",c.t0),c.abrupt("return",null);case 17:case"end":return c.stop()}}),null,null,[[0,13]])}}).call(this,n(101).Buffer)},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIjWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDEtMDhUMTE6NTM6MDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3ZWVmODFiLTY0NjItODY0ZC04NTQyLTViNTVhN2YzYmNhMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YTYzZTAyLTk0YzItMDA0MC04Y2YzLTFkZTE2ZDgzYzNkOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlkYWQ3MGEyLTgyZGYtMGI0MS1hODZiLWFiMjBjM2YyOWRlNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWRhZDcwYTItODJkZi0wYjQxLWE4NmItYWIyMGMzZjI5ZGU3IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTA4VDExOjUzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjYzA2YWE0LTI4MzUtNjk0Mi05Yjc5LTE4MGNlODNiMzk1NiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3N2VlZjgxYi02NDYy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"},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(14),r=function e(){Object(a.a)(this,e),this.resultsMap=new Map};r.adaptFromJson=function(e){var t=new r;return e.forEach((function(e){t.resultsMap.set(e.choice,e.number)})),t}},84:function(e,t,n){e.exports=n.p+"static/media/cntxt.4ca3826e.svg"},92:function(e,t,n){e.exports=n(154)},97:function(e,t,n){}},[[92,1,2]]]);