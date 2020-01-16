(this.webpackJsonpcny_frontend=this.webpackJsonpcny_frontend||[]).push([[0],{102:function(e,t,n){},129:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var A=n(0),a=n.n(A),r=n(21),c=n.n(r),i=(n(102),n(173)),o=n(174),s=n(94),l="#9E1830",u="#F6552A",m="#F8B237",p=Object(s.a)({palette:{type:"dark",primary:{main:"#9E1830"},secondary:{main:"#F6552A"},background:{default:"#9E1830"}},typography:{fontFamily:"SentyWen",fontSize:24,h1:{fontSize:40}}}),d=n(42),g=n(25),h=n(3),b=n.n(h),f=n(17),v=n(84),w=n(171),E=n(177),M=Object(v.a)({container:{backgroundColor:m,background:"linear-gradient(90deg, rgba(255,191,80,1) 0%, rgba(224,143,0,1) 100%)",padding:"32px 12px",color:l,boxShadow:"inset 0 16px 24px -16px ".concat(u,", inset 0 -16px 24px -16px ").concat(u),textAlign:"center",fontWeight:"bold",textShadow:"0px 0px 6px ".concat(l)}}),N=function(e){var t=M({});return a.a.createElement("div",{className:"".concat(t.container," ").concat(e.className),onClick:e.onClick},e.children)},G=n(18),I=n(33),D=n(34),x=n(36),y=n(9),Y=function e(){Object(y.a)(this,e),this.update=void 0,this.dispose=void 0};Y.id=void 0;var S,j,Z=a.a.createContext({dependencies:{}}),C=function(e){function t(e){var n;Object(y.a)(this,t),(n=Object(I.a)(this,Object(D.a)(t).call(this,e))).update=function(){n.setState({})},n.useDependency=function(e){};var A={},a=!0,r=!1,c=void 0;try{for(var i,o=e.dependencies[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var s=i.value,l=s;A[l.id]=new s,A[l.id].update=n.update}}catch(u){r=!0,c=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw c}}return n.state={dependencies:A},n}return Object(x.a)(t,e),Object(G.a)(t,[{key:"componentWillUnmount",value:function(){this.state.dependencies.forEach((function(e){return e.dispose()}))}},{key:"render",value:function(){return a.a.createElement(Z.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component),k=function(e){return a.a.useContext(Z).dependencies[e.id]},R=n(19);!function(e){e.START="START",e.END="END"}(S||(S={})),function(e){e.EMPTY="EMPTY",e.WAITING="WAITING",e.PLAYING="PLAYING",e.END="END"}(j||(j={}));var Q=function(e){function t(){var e,n;Object(y.a)(this,t);for(var A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(n=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).isFetchingAllQuestions=!1,n.gameState=j.EMPTY,n.currentQuestionPos=1,n.questionState=S.START,n.currentAnswer=void 0,n.correctAnswer=null,n.score=0,n.rank=0,n.questionsMap=new Map,n.questionResultsMap=new Map,n.getAllQuestions=function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n.isFetchingAllQuestions=!0,t.next=3,b.a.awrap(R.a.fetchAllQuestions());case 3:(e=t.sent)&&e.length>0?(n.questionsMap=new Map,e.forEach((function(e){return n.questionsMap.set(e.position,e)})),n.update()):console.log(e);case 5:case"end":return t.stop()}}))},n.getCurrentGameState=function(){var e,t;return b.a.async((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,b.a.awrap(R.a.getCurrentGameState());case 2:if(!(e=A.sent)){A.next=16;break}if(n.gameState=e.progress,n.questionState=e.questionState,n.currentQuestionPos=e.question,n.gameState!==j.PLAYING||n.questionsMap.get(n.currentQuestionPos)){A.next=12;break}return A.next=10,b.a.awrap(R.a.fetchQuestion(n.currentQuestionPos));case 10:(t=A.sent)&&n.questionsMap.set(t.position,t);case 12:return n.update(),A.abrupt("return",!0);case 16:return A.abrupt("return",!1);case 17:case"end":return A.stop()}}))},n.getCurrentQuestion=function(){return n.questionsMap.get(n.currentQuestionPos)},n.preloadImages=function(){n.questionsMap.size>0&&n.questionsMap.forEach((function(e){e.images.forEach((function(t,n){R.a.fetchImageAsBase64(t.url).then((function(t){return e.images[n].url=t}))}))}))},n.getQuestionResults=function(e){var t;return b.a.async((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,b.a.awrap(R.a.fetchQuestionResults(n.currentQuestionPos));case 2:(t=A.sent)&&(n.questionResultsMap.set(e,t),n.update());case 4:case"end":return A.stop()}}))},n.handleEvent=function(e){switch(console.log("Handling",e),e.progress){case j.EMPTY:n.gameState=j.EMPTY,n.update();break;case j.WAITING:n.gameState=j.WAITING,n.update();break;case j.PLAYING:n.currentQuestionPos=e.question,n.gameState=j.PLAYING,n.questionState=e.questionState,n.update();break;case j.END:n.currentQuestionPos=0,n.gameState=j.END,n.update()}},n}return Object(x.a)(t,e),t}(Y);Q.id="GameService";var W=function(e,t){return e.toLowerCase()===t.toLowerCase()},T=function(e){var t=e.gameService,n=Object(g.f)(),A=Object(g.g)();console.log("Current game service",t);var r=function(){switch(console.log("Comparing...",A.pathname,"/"),t.gameState){case j.EMPTY:case j.WAITING:if(!W(A.pathname,"/"))return n.push("/");break;case j.PLAYING:!function(){switch(t.questionState){case S.START:if(!W(A.pathname,"/projection-qn"))return n.push("/projection-qn");break;case S.END:if(!W(A.pathname,"/projection-score"))n.push("/projection-score")}}();break;case j.END:if(!W(A.pathname,"/"))return n.push("/")}};return a.a.useEffect(r,[]),a.a.useEffect((function(){r()}),[t.gameState,t.questionState]),a.a.createElement(a.a.Fragment,null)},B=Object(v.a)({title:{position:"absolute",width:"100%",bottom:0,padding:"12px",backgroundColor:"rgba(0,0,0,0.4)",textShadow:"0 0 4px #000, 0 0 6px #000, 0 0 8px #000",fontSize:function(e){return e.fontSize?e.fontSize:"64px"},lineHeight:function(e){return e.fontSize?"".concat(e.fontSize+8,"px"):"72px"}}}),z=function(e){var t=B(e);return a.a.createElement("div",{className:t.title},e.children)},O=Object(v.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"},borderDiv:{top:0,zIndex:200,position:"absolute",width:"100%",height:"100%",border:"8px solid ".concat(u)}}),L=function(e){var t=Math.round(e/1e3),n=Math.floor(t/60),A=n<10?"0".concat(n):n.toString(),a=t%60,r=a<10?"0".concat(a):a.toString();return"".concat(A,":").concat(r)},F=function(){var e=O({}),t=(Object(g.f)(),k(Q)),n=a.a.useRef(Date.now()),A=a.a.useState(0),r=Object(f.a)(A,2),c=r[0],i=r[1],o=a.a.useRef(null);if(a.a.useEffect((function(){t.isFetchingAllQuestions||t.getAllQuestions();b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(t.getCurrentGameState());case 2:t.questionState===S.END&&R.a.fetchQuestionResults(t.currentQuestionPos).then((function(e){return console.log("Your results are",e)}));case 3:case"end":return e.stop()}}));return o.current=window.setInterval((function(){i(Date.now()-n.current)}),1e3),function(){return clearInterval(n.current)}}),[]),0===t.questionsMap.size||t.gameState===j.END)return a.a.createElement(T,{gameService:t});var s=t.questionsMap.get(t.currentQuestionPos);if(!s)return a.a.createElement(a.a.Fragment,null);var l=s.images.sort((function(e,t){return e.id-t.id}));return console.log("Now your images",l),a.a.createElement("div",{className:e.container},a.a.createElement(T,{gameService:t}),a.a.createElement(w.a,{style:{flex:1,padding:24},cols:Math.ceil(l.length/2)},l.filter((function(e,t){return t<Math.ceil(l.length/2)})).map((function(t){return a.a.createElement(E.a,{style:{padding:8,height:"100%"}},a.a.createElement("img",{style:{objectFit:"cover",height:"100%",width:"100%"},src:t.url}),a.a.createElement(z,null,t.title),a.a.createElement("div",{className:e.borderDiv}))}))),a.a.createElement(N,{className:e.title},s.position,". ",s.title,a.a.createElement("br",null),a.a.createElement("span",{style:{fontSize:"0.75em"}},L(c))),a.a.createElement(w.a,{style:{flex:1,padding:24},cols:Math.ceil(l.length/2)},l.filter((function(e,t){return t>=Math.ceil(l.length/2)})).map((function(t){return a.a.createElement(E.a,{style:{padding:4,height:"100%"}},a.a.createElement("img",{style:{objectFit:"cover",height:"100%",width:"100%"},src:t.url}),a.a.createElement(z,null,t.title),a.a.createElement("div",{className:e.borderDiv}))}))))},J=function(e){return a.a.createElement("div",{style:{margin:"4px 5vw",flex:1,minHeight:"1em",height:0!==e.votes?"calc(".concat(85*e.scorePercent,"% + 1em)"):"1em",background:m,textAlign:"center",fontSize:"2em",color:l,position:"relative",lineHeight:"1em",transition:"height 0.5s ease-out"}},-1!==e.votes?e.votes:"")},U=function(e){if(!e.availableResults||0===e.availableResults.resultsMap.size)return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:"100%"}}),e.question.images.map((function(e){return a.a.createElement(J,{votes:0,scorePercent:1})})));var t=Array.from(e.availableResults.resultsMap.values()).reduce((function(e,t){return e>t?e:t}));return t||(t=1),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:"100%"}}),e.question.images.map((function(n){var A=e.availableResults.resultsMap.get(n.id);return A||(A=0),a.a.createElement(J,{votes:A,scorePercent:A/t})})))},P=n(176),H=n(178),V=n(88),X=n.n(V),q=n(89),K=n.n(q),_=n(90),$=n.n(_),ee=Object(v.a)({container:{position:"fixed",display:"flex",flexFlow:"column",width:"80%",margin:"0 10%",justifyContent:"center",height:"100%",visibility:function(e){return e.show?"visible":"hidden"},overflow:"hidden",userSelect:"none","&:focus":{outline:"none"}},textContainer:{position:"relative",width:"100%",padding:"0 30%",color:l,height:function(e){return e.show?"60%":0},transition:"height 0.6s",overflow:"hidden"},bodyImg:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:-1},title:{textAlign:"center"},ranking:{fontSize:"2em",textAlign:"center"}}),te=function(e){var t=ee({show:e.show}),n=a.a.useState(null),A=Object(f.a)(n,2),r=A[0],c=A[1];return a.a.useEffect((function(){e.show&&(console.log("Fetching"),R.a.fetchAllUsersRank().then((function(e){e&&c(e)})))}),[e.show]),a.a.createElement(P.a,{keepMounted:!0,open:Boolean(e.show),onClose:e.onClose},a.a.createElement("div",{className:t.container,onClick:e.onClose},a.a.createElement("img",{src:X.a}),a.a.createElement("div",{className:t.textContainer},a.a.createElement("img",{className:t.bodyImg,src:K.a}),a.a.createElement(H.a,{variant:"h1",className:t.title},"Leaderboard"),r&&a.a.createElement(a.a.Fragment,null,r.filter((function(e){return"admin"!==e.username})).map((function(e,n){return a.a.createElement(H.a,{className:t.ranking},a.a.createElement("span",{style:{float:"left"}},n+1,"."),e.username)})))),a.a.createElement("img",{src:$.a})))},ne=Object(v.a)({container:{height:"calc(100vh - 24px)",display:"flex",flexFlow:"column",overflow:"hidden"},title:{fontSize:"3em"},graphContainer:{padding:"24px 24px 0 24px",height:"60vh",display:"flex",alignItems:"flex-end"},borderDiv:{top:0,zIndex:200,position:"absolute",width:"100%",height:"100%",border:"6px solid ".concat(u)}}),Ae=function(){var e=ne({}),t=(Object(g.f)(),k(Q)),n=a.a.useState(!1),A=Object(f.a)(n,2),r=A[0],c=A[1];if(console.log("Updating..."),a.a.useEffect((function(){b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(t.getCurrentGameState());case 2:t.questionState===S.END&&t.getQuestionResults(t.currentQuestionPos);case 3:case"end":return e.stop()}}))}),[]),0===t.questionsMap.size||t.gameState===j.END)return a.a.createElement(T,{gameService:t});var i=t.questionsMap.get(t.currentQuestionPos);if(!i)return a.a.createElement(a.a.Fragment,null);var o=i.images.sort((function(e,t){return e.id-t.id}));return a.a.createElement("div",{className:e.container},a.a.createElement(T,{gameService:t}),a.a.createElement(N,{className:e.title,onClick:function(){return c(!0)}},i.position,". ",i.title),a.a.createElement("div",{className:e.graphContainer},a.a.createElement(U,{question:i,availableResults:t.questionResultsMap.get(i.id)})),a.a.createElement(w.a,{style:{padding:24},cols:o.length},o.map((function(t){return a.a.createElement(E.a,{style:{padding:"8px",height:"100%"}},a.a.createElement("img",{src:t.url}),a.a.createElement(z,{fontSize:40},t.title),a.a.createElement("div",{className:e.borderDiv}))}))),a.a.createElement(te,{show:r,onClose:function(){return c(!1)}}))},ae=n(91),re=n.n(ae),ce=n(175),ie=Object(v.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",padding:"120px 0",color:m,textAlign:"center",textShadow:"4px 4px #333333"}}),oe=function(){var e=ie({});return a.a.createElement(ce.a,{className:e.container},a.a.createElement("img",{style:{transform:"scale(2)"},src:re.a}))},se=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,null),a.a.createElement(N,null,a.a.createElement(H.a,{variant:"h1",style:{fontSize:"64px"}},"GREAT MINDS THINK ALIKE")))},le=n(161),ue=n(38),me=n.n(ue),pe=(n(129),function(e){return a.a.createElement("div",{className:"pFallingCoint ".concat(e.className),style:e.style},a.a.createElement("img",{src:me.a,className:"coin1"}),a.a.createElement("img",{src:me.a,className:"coin2"}),a.a.createElement("img",{src:me.a,className:"coin3"}),a.a.createElement("img",{src:me.a,className:"coin4"}),a.a.createElement("img",{src:me.a,className:"coin5"}))}),de=Object(le.a)({container:{display:"flex",flexFlow:"column",height:"100%",alignItems:"stretch"},cointreeContainer:{flex:1,display:"flex",alignItems:"center",marginBottom:"64px"}}),ge=function(){var e=de({}),t=k(Q),n=a.a.useState(!1),A=Object(f.a)(n,2),r=A[0],c=A[1];return a.a.createElement("div",{className:e.container},a.a.createElement(T,{gameService:t}),a.a.createElement(se,null),a.a.createElement("div",{className:e.cointreeContainer,onClick:function(){t.gameState===j.END&&c(!0)}},a.a.createElement(pe,null)),a.a.createElement(te,{show:r,onClose:function(){return c(!1)}}))},he=function(){return a.a.createElement(d.a,{basename:""},a.a.createElement(g.c,null,a.a.createElement(g.a,{path:"/projection-qn"},a.a.createElement(F,null)),a.a.createElement(g.a,{path:"/projection-score"},a.a.createElement(Ae,null)),a.a.createElement(g.a,{exact:!0,path:"/"},a.a.createElement(ge,null))))},be=n(92),fe=n.n(be),ve=n(93),we=function(e){function t(){var e,n;Object(y.a)(this,t);for(var A=arguments.length,a=new Array(A),r=0;r<A;r++)a[r]=arguments[r];return(n=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(a)))).socket=void 0,n.stompClient=void 0,n}return Object(x.a)(t,e),Object(G.a)(t,[{key:"activate",value:function(e){var t=this;this.stompClient=new ve.Client({reconnectDelay:5e3}),this.stompClient.webSocketFactory=function(){return new fe.a("https://cnybackend.southeastasia.cloudapp.azure.com/game")},this.stompClient.onConnect=function(n){console.log(n);t.stompClient.subscribe("/topic/game",(function(t){var n=JSON.parse(t.body);console.log(n),e(n)}))},this.stompClient.activate()}},{key:"deactivate",value:function(){this.stompClient&&this.stompClient.active&&this.stompClient.deactivate()}}]),t}(Y);we.id="SocketService";var Ee=[Q,we],Me=function(){var e=k(Q),t=k(we);return a.a.useEffect((function(){t.activate(e.handleEvent),b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(e.getAllQuestions());case 2:return t.next=4,b.a.awrap(e.getCurrentGameState());case 4:e.preloadImages();case 5:case"end":return t.stop()}}))}),[]),a.a.createElement(a.a.Fragment,null)},Ne=function(){return a.a.createElement("img",{id:"preloader",style:{display:"none"}})},Ge=function(){return a.a.createElement(C,{dependencies:Ee},a.a.createElement(i.a,{theme:p},a.a.createElement(o.a,null),a.a.createElement(he,null),a.a.createElement(Me,null),a.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var A=n(3),a=n.n(A),r=n(9),c=n(28),i=n.n(c),o=n(86),s="https://cnybackend.southeastasia.cloudapp.azure.com/api",l=function e(){Object(r.a)(this,e)};l.fetchAllQuestions=function(){var e,t=arguments;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return!(t.length>0&&void 0!==t[0])||t[0],n.prev=1,n.next=4,a.a.awrap(i.a.get(s+"/question/all"));case 4:if(200!==(e=n.sent).status){n.next=8;break}return console.log("Getting all your questions",e.data),n.abrupt("return",e.data);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),null,null,[[1,10]])},l.getCurrentGameState=function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(i.a.get(s+"/game/state"));case 3:if(200!==(e=t.sent).status){t.next=9;break}return console.log("Getting current game state",e.data),t.abrupt("return",e.data);case 9:return t.abrupt("return",null);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error encountered when fetching question!",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),null,null,[[0,12]])},l.fetchQuestion=function(e){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(i.a.get(s+"/question/".concat(e)));case 3:if(200!==(t=n.sent).status){n.next=6;break}return n.abrupt("return",t.data);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error("Error encountered when fetching question!",n.t0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),null,null,[[0,8]])},l.fetchQuestionResults=function(e){var t,n;return a.a.async((function(A){for(;;)switch(A.prev=A.next){case 0:t=0;case 1:if(!(t<10)){A.next=16;break}return A.prev=2,A.next=5,a.a.awrap(i.a.get(s+"/poll/".concat(e)));case 5:if(200!==(n=A.sent).status){A.next=8;break}return A.abrupt("return",o.a.adaptFromJson(n.data.pollSummaries));case 8:A.next=13;break;case 10:A.prev=10,A.t0=A.catch(2),console.error("Attempt ".concat(t+1,": Error encountered when fetching question!"),A.t0);case 13:t++,A.next=1;break;case 16:case"end":return A.stop()}}),null,null,[[2,10]])},l.fetchImageAsBase64=function(t){var n,A;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=t.replace("http://","https://"),r.next=4,a.a.awrap(i.a.get(t,{responseType:"arraybuffer"}));case 4:if(200!==(n=r.sent).status){r.next=10;break}return A=e.from(n.data,"binary").toString("base64"),r.abrupt("return","data:image/jpg;base64, ".concat(A));case 10:return r.abrupt("return",null);case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),console.error("Error encountered when fetching image!",r.t0),r.abrupt("return",null);case 17:case"end":return r.stop()}}),null,null,[[0,13]])},l.fetchAllUsersRank=function(){var e;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(i.a.get(s+"/game/rank?size=10"));case 3:if(200!==(e=t.sent).status){t.next=8;break}return t.abrupt("return",e.data);case 8:return t.abrupt("return",null);case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),console.error("Error encountered when fetching leaderboard ranks!",t.t0),t.abrupt("return",null);case 15:case"end":return t.stop()}}),null,null,[[0,11]])}}).call(this,n(106).Buffer)},38:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIjWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDEtMDhUMTE6NTM6MDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3ZWVmODFiLTY0NjItODY0ZC04NTQyLTViNTVhN2YzYmNhMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YTYzZTAyLTk0YzItMDA0MC04Y2YzLTFkZTE2ZDgzYzNkOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlkYWQ3MGEyLTgyZGYtMGI0MS1hODZiLWFiMjBjM2YyOWRlNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWRhZDcwYTItODJkZi0wYjQxLWE4NmItYWIyMGMzZjI5ZGU3IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTA4VDExOjUzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjYzA2YWE0LTI4MzUtNjk0Mi05Yjc5LTE4MGNlODNiMzk1NiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0wOFQxMTo1MzowNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3N2VlZjgxYi02NDYy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"},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var A=n(9),a=function e(){Object(A.a)(this,e),this.resultsMap=new Map};a.adaptFromJson=function(e){var t=new a;return e.forEach((function(e){t.resultsMap.set(e.choice,e.number)})),t}},88:function(e,t,n){e.exports=n.p+"static/media/ldscrolltop.8bd5aca6.png"},89:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABgsAAACNCAYAAACJ8EqgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAxLTE1VDEwOjQxOjM0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMS0xNVQxMTozNDo1MSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMS0xNVQxMTozNDo1MSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTI1NWE0NC1hZmY2LTMwNDAtYTVjMC0xYTAyZTQ5NWYzYTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkY2U3NDIxOC05M2QxLWFhNGEtYTdlMi1mMjc0N2FmZDA1NjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWJiY2VmNi1iNTQ1LTNkNGQtYTI4Mi0yYTNiOWFjODViY2QiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVhYmJjZWY2LWI1NDUtM2Q0ZC1hMjgyLTJhM2I5YWM4NWJjZCIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0xNVQxMDo0MTozNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MjU1YTQ0LWFmZjYtMzA0MC1hNWMwLTFhMDJlNDk1ZjNhNiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0xNVQxMTozNDo1MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoUvoxAAAATESURBVHgB7cFBqohhAAXQ+90oQ8y8gbEN2ANGVkspCzFWLzNJFOX9NmAgA5N7zjlJbq7rug3/7POrly+SvM3/ciX9mnx/feXn86Sf80d3v67cu988efowvd9cv64AAAAAAPytc6/58e1nPn38knOSc07+5O5R8uDdyYP3yd3j/G/PHr15+yH8s3POTa/rug0AAAAAADDpuq7bBgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANMaAAAAAABgWgMAAAAAAExrAAAAAACAaQ0AAAAAADCtAQAAAAAApjUAAAAAAMC0BgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANMaAAAAAABgWgMAAAAAAExrAAAAAACAaQ0AAAAAADCtAQAAAAAApjUAAAAAAMC0BgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANMaAAAAAABgWgMAAAAAAExrAAAAAACAaQ0AAAAAADCtAQAAAAAApjUAAAAAAMC0BgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANMaAAAAAABgWgMAAAAAAExrAAAAAACAaQ0AAAAAADCtAQAAAAAApjUAAAAAAMC0BgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANMaAAAAAABgWgMAAAAAAExrAAAAAACAaQ0AAAAAADCtAQAAAAAApjUAAAAAAMC0BgAAAAAAmNYAAAAAAADTGgAAAAAAYFoDAAAAAABMawAAAAAAgGkNAAAAAAAwrQEAAAAAAKY1AAAAAADAtAYAAAAAAJjWAAAAAAAA0xoAAAAAAGBaAwAAAAAATGsAAAAAAIBpDQAAAAAAMK0BAAAAAACmNQAAAAAAwLQGAAAAAACY1gAAAAAAANN6zrkJAAAAAAAw6Zxz8xvdjyg08qZepgAAAABJRU5ErkJggg=="},90:function(e,t,n){e.exports=n.p+"static/media/ldscrollbottom.7ffb925b.png"},91:function(e,t,n){e.exports=n.p+"static/media/cntxt.2b7d2dc6.svg"},97:function(e,t,n){e.exports=n(159)}},[[97,1,2]]]);