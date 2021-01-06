(this["webpackJsonptech-challenge"]=this["webpackJsonptech-challenge"]||[]).push([[0],{35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(14),l=a.n(s),i=a(16),m=a(3),j=(a(35),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"headerBG",children:Object(n.jsx)("h1",{className:"title",children:Object(n.jsx)("a",{href:"/football-team-generator",children:"it's coming home"})})}),Object(n.jsx)("h3",{className:"subTitle",children:"a 5-a-side team generator"})]})}),b=function(e){var t=e.className,a=e.label,c=e.type;return Object(n.jsx)("button",{className:t,type:c,children:a})},d=function(){return Object(n.jsxs)("main",{children:[Object(n.jsxs)("section",{className:"cardContainer infoContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:"how it works"})}),Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"pick your team names"}),Object(n.jsx)("li",{children:"add your players"}),Object(n.jsx)("li",{children:"generate your teams"}),Object(n.jsx)("li",{children:"count your goals"})]})})]}),Object(n.jsx)(i.b,{to:"/team-settings",children:Object(n.jsx)(b,{className:"btn btnSettings",label:"Settings",name:"Settings"})})]})},h=a.p+"static/media/github.d5e23d73.svg",u=function(){return Object(n.jsx)("footer",{children:Object(n.jsx)("a",{href:"https://github.com/Tumekab/football-team-generator",rel:"noreferrer",target:"_blank",children:Object(n.jsx)("img",{className:"github",src:h,alt:"github link"})})})},o=a(5),O=a(4),x=a(17),N=a(18),f=a(10),p=a(20),S=a(19),y=function(e){var t=e.name,a=e.label,c=e.handleChange,r=e.value,s=e.type;return Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:t,className:"inputLabel playerLabel",children:a}),Object(n.jsx)("input",{id:t,type:s,onChange:c,value:r})]})},v=function(e){Object(p.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).handlePlayerName=function(e){n.setState({playerName:e.currentTarget.value})},n.state={playerName:"",teamsConfirmed:n.props.teamsConfirmed},n.handlePlayerName=n.handlePlayerName.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(N.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(Object(O.a)({},this.state)),this.setState({playerName:""})}},{key:"render",value:function(){var e=this.state.playerName;this.props.teamsConfirmed;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("section",{className:"cardContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:"enter your players"})}),Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)(y,{label:"Player Name",handleChange:this.handlePlayerName,value:e,type:"text"}),Object(n.jsx)(b,{className:"btn add-btn",label:"Add Player",name:"Add Player"})]})})]})})}}]),a}(r.a.Component),g=function(e){return{type:"GENERATE_TEAMS",teamOne:e.team1Players,teamTwo:e.team2Players}},T=Object(o.b)((function(e){return{teamsConfirmed:e.teamsConfirmed}}),(function(e){return{handleSubmit:function(t){e(function(e){return{type:"ADD_PLAYER",data:e}}(t))}}}))(v),C=function(e){var t=e.allPlayers;return Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:e.name})},t)}))})})},E=Object(o.b)((function(e){return{allPlayers:e.allPlayers}}))(C),P=function(e){var t=e.handleClick;return Object(n.jsx)("button",{className:"btn generateBtn",onClick:t,children:"generate teams"})},_=a(7),A=Object(_.b)(),k=Object(o.b)(null,(function(e){return{handleClick:function(t){e(g(t)),A.push("/team-selection")}}}))(P),M=function(e){Object(p.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).handleTeam1Name=function(e){n.setState({team1Name:e.currentTarget.value})},n.handleTeam2Name=function(e){n.setState({team2Name:e.currentTarget.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.handleSubmit(Object(O.a)({},n.state)),n.setState({team1Name:"",team2Name:""})},n.state={team1Name:"",team2Name:""},n.handleTeam1Name=n.handleTeam1Name.bind(Object(f.a)(n)),n.handleTeam2Name=n.handleTeam2Name.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.team1Name,a=e.team2Name;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"cardContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:"customise your teams"})}),Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("section",{className:"inputContainer",children:[Object(n.jsx)(y,{label:"Choose Team One Name",handleChange:this.handleTeam1Name,value:t,type:"text"}),Object(n.jsx)(y,{label:"Choose Team Two Name",handleChange:this.handleTeam2Name,value:a,type:"text"})]}),Object(n.jsx)(b,{className:"btn confirmBtn",label:"confirm",name:"confirm"})]})})]}),Object(n.jsx)(T,{}),Object(n.jsxs)("section",{className:"cardContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:"your players"})}),Object(n.jsx)(E,{})]}),Object(n.jsx)(k,{})]})}}]),a}(r.a.Component),D=Object(o.b)(null,(function(e){return{handleSubmit:function(t){e(function(e){return{type:"SEND_NAMES_TO_STATE",teamNames:e}}(t))}}}))(M),R=function(e){var t=e.team1Name,a=e.team1Score,c=e.handleClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:[t," ",Object(n.jsx)("br",{}),"Score:"]}),Object(n.jsx)("div",{className:"scoreBg",children:Object(n.jsx)("p",{className:"teamScore",children:a})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:c,className:"btn plusBtn",children:"+"})})]})})},F=Object(o.b)((function(e){return{team1Name:e.team1Name,team1Score:e.team1Score}}),(function(e){return{handleClick:function(t){e({type:"UPDATE_TEAM_1_SCORE"})}}}))(R),w=function(e){var t=e.team2Name,a=e.team2Score,c=e.handleClick;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:[t,Object(n.jsx)("br",{}),"Score: "]}),Object(n.jsx)("div",{className:"scoreBg",children:Object(n.jsx)("p",{className:"teamScore",children:a})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:c,className:"btn plusBtn",children:"+"})})]})})},B=Object(o.b)((function(e){return{team2Name:e.team2Name,team2Score:e.team2Score}}),(function(e){return{handleClick:function(t){e({type:"UPDATE_TEAM_2_SCORE"})}}}))(w),G=function(e){var t=e.team1Players,a=e.team1Name,c=e.team2Players,r=e.team2Name,s=e.handleReset,l=e.handleShuffle;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("main",{className:"cardGrid",children:[Object(n.jsxs)("section",{className:"cardContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:a})}),Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:e.name})},t)}))})}),Object(n.jsx)("div",{className:"cardDivider"}),Object(n.jsx)(F,{})]}),Object(n.jsxs)("section",{className:"cardContainer",children:[Object(n.jsx)("header",{className:"cardHeader",children:Object(n.jsx)("h2",{children:r})}),Object(n.jsx)("div",{className:"cardMain",children:Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("p",{children:e.name})},t)}))})}),Object(n.jsx)("div",{className:"cardDivider"}),Object(n.jsx)(B,{})]})]}),Object(n.jsx)("button",{className:"btn add-btn",label:"reset",name:"reset",onClick:s,children:"reset"}),Object(n.jsx)("button",{className:"btn add-btn",label:"reshuffle",name:"reshuffle",onClick:l,children:"reshuffle teams"})]})},L=Object(o.b)((function(e){return{team1Players:e.team1Players,team1Name:e.team1Name,team2Players:e.team2Players,team2Name:e.team2Name}}),(function(e){return{handleReset:function(){e({type:"RESET"}),A.push("/team-settings")},handleShuffle:function(t){e(g(t))}}}))(G);var H=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(d,{})}),Object(n.jsx)(m.a,{exact:!0,path:"/team-settings",children:Object(n.jsx)(D,{})}),Object(n.jsx)(m.a,{exact:!0,path:"/team-selection",children:Object(n.jsx)(L,{})})]}),Object(n.jsx)(u,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},I=a(12),J={team1Name:"Team 1",team2Name:"Team 2",team1Players:[],team2Players:[],allPlayers:[],team1Score:0,team2Score:0,teamsConfirmed:!1,previousGames:!1},V=a(29),X=function(e,t){switch(t.type){case"SEND_NAMES_TO_STATE":return function(e,t){var a=t.teamNames;return Object(O.a)(Object(O.a)({},e),{},{team1Name:a.team1Name,team2Name:a.team2Name})}(e,t);case"ADD_PLAYER":return function(e,t){var a=t.data;return Object(O.a)(Object(O.a)({},e),{},{allPlayers:[].concat(Object(V.a)(e.allPlayers),[{name:a.playerName}])})}(e,t);case"GENERATE_TEAMS":return function(e,t){var a=(r=e.allPlayers,r.sort((function(){return.5-Math.random()}))),n=a.slice(0,5),c=a.slice(5,10);var r;return Object(O.a)(Object(O.a)({},e),{},{team1Players:n,team2Players:c,teamName1:t.team1Name,teamName2:t.team2Name})}(e,t);case"UPDATE_TEAM_1_SCORE":return function(e){return Object(O.a)(Object(O.a)({},e),{},{team1Score:e.team1Score+1})}(e);case"UPDATE_TEAM_2_SCORE":return function(e){return Object(O.a)(Object(O.a)({},e),{},{team2Score:e.team2Score+1})}(e);case"RESET":return Object(O.a)({},J);case"SAVE_GAMES":return function(e,t){var a=t.previousGames;return Object(O.a)(Object(O.a)({},e),{},{previousGames:a,gamesLoaded:!0})}(e,t);default:return e}},Y=a(28),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,z=Object(I.d)(X,J,q(Object(I.a)(Y.a)));l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{store:z,children:Object(n.jsx)(H,{})})}),document.getElementById("root")),U()}},[[41,1,2]]]);
//# sourceMappingURL=main.918ec587.chunk.js.map