(this["webpackJsonpkanbandb-app"]=this["webpackJsonpkanbandb-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(22),a(1)),i=a(16),d=a(9),u=a.n(d),l=a(10),p=a(4),m=a(5),f=a(2),b=a(8),h=a(7),O=(a(24),a(25),a(6)),v=a(13),E=(a(26),function(e){var t=e.card,a=e.index;return r.a.createElement(O.b,{draggableId:t.id,index:a},(function(e,a){return r.a.createElement("div",Object.assign({className:"card"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,style:(n=a.isDragging,c=e.draggableProps.style,n&&null!==c.transform&&(c.transform+=" rotate(10deg)"),Object(v.a)({},c))}),t.description);var n,c}))}),g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cards,a=e.status;return r.a.createElement(O.c,{droppableId:a},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef,className:"card-column"},e.droppableProps),t.map((function(e,t){return r.a.createElement(E,{card:e,index:t,key:e.id})})),e.placeholder)}))}}]),a}(n.Component),S=(a(30),a(15)),j=a.n(S),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.connect("testDB");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var a={name:e.state.create,description:e.state.create,status:"TODO"};I().then((function(e,t){e.addCard(a).then((function(e){return console.log("successfully added card ".concat(e))})),e.getCards().then((function(e){return console.log(e)}))})),e.setState({create:""}),e.props.updateCards()},e.state={create:""},e.update=e.update.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(m.a)(a,[{key:"update",value:function(e){var t=this;return function(a){t.setState(Object(s.a)({},e,a.currentTarget.value))}}},{key:"render",value:function(){var e=this.handleSubmit,t=this.update;return r.a.createElement("div",{className:"create-card"},r.a.createElement("form",{onSubmit:e,className:"create-card-form"},r.a.createElement("input",{onChange:t("create"),value:this.state.create,placeholder:"e.g. Bug: TextPoll not dispatching half stars"}),r.a.createElement("button",null,"ADD NEW")))}}]),a}(n.Component),D=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).updateCards=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I().then((function(t,a){t.getCardsByStatusCodes(["TODO"]).then((function(t){e.setState((function(){return{TODO:t}}))})),t.getCardsByStatusCodes(["IN_PROGRESS"]).then((function(t){e.setState((function(){return{IN_PROGRESS:t}}))})),t.getCardsByStatusCodes(["DONE"]).then((function(t){e.setState((function(){return{DONE:t}}))}))}));case 1:case"end":return t.stop()}}),t)}))),e.onDragEnd=function(t){var a=t.destination,n=t.source;t.draggableId;if(a&&(a.droppableId!==n.droppableId||a.index!==n.index)){var r=n.droppableId,c=Array.from(e.state[r]);if(a.droppableId===n.droppableId){var o=c.splice(n.index,1);c.splice.apply(c,[a.index,0].concat(Object(i.a)(o))),e.setState((function(){return Object(s.a)({},a.droppableId,c)}))}if(a.droppableId!==n.droppableId){var d=c[n.index];d.status=a.droppableId,c.splice(n.index,1);var u=Array.from(e.state[a.droppableId]);u.splice(a.index,0,d),e.setState((function(){var e;return e={},Object(s.a)(e,a.droppableId,u),Object(s.a)(e,n.droppableId,c),e})),I().then((function(e,t){e.updateCardById(d.id,{status:a.droppableId})}))}}},e.state={TODO:[],IN_PROGRESS:[],DONE:[]},e.updateCards=e.updateCards.bind(Object(f.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.updateCards()}},{key:"render",value:function(){var e=this.state,t=e.TODO,a=e.IN_PROGRESS,n=e.DONE;return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{onDragEnd:this.onDragEnd},r.a.createElement("div",{className:"column-container"},r.a.createElement("h1",{className:"column-title"},"To-do"),r.a.createElement(g,{cards:t,status:"TODO"})),r.a.createElement("div",{className:"column-container"},r.a.createElement("h1",{className:"column-title"},"In Progress"),r.a.createElement(g,{cards:a,status:"IN_PROGRESS"})),r.a.createElement("div",{className:"column-container"},r.a.createElement("h1",{className:"column-title"},"Done"),r.a.createElement(g,{cards:n,status:"DONE"})),r.a.createElement(N,{updateCards:this.updateCards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9bd06896.chunk.js.map