(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{10:function(e,t,n){},5:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),s=n(4),a=n.n(s),i=(n(10),n(0)),u=function(e){return Object(i.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},o=function(e){var t=function(t){return Object(i.jsx)(u,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"board-row",children:[t(0),t(1),t(2)]}),Object(i.jsxs)("div",{className:"board-row",children:[t(3),t(4),t(5)]}),Object(i.jsxs)("div",{className:"board-row",children:[t(6),t(7),t(8)]})]})},l=function(e){var t,n=Object(r.useState)([{squares:Array(9).fill(null)}]),s=Object(c.a)(n,2),a=s[0],u=s[1],l=Object(r.useState)(0),b=Object(c.a)(l,2),d=b[0],O=b[1],v=Object(r.useState)(!0),f=Object(c.a)(v,2),h=f[0],x=f[1],m=a[d],k=j(m.squares),q=a.map((function(e,t){var n=t?"Go to move #"+t:"Go to game start";return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){return function(e){O(e),x(e%2===0)}(t)},children:n})},t)}));return t=k?"Winner: "+k:"Next player: "+(h?"X":"O"),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"game-board",children:Object(i.jsx)(o,{squares:m.squares,onClick:function(e){return function(e){var t=a[d].squares.slice();j(t)||t[e]||(t[e]=h?"X":"O",u(a.slice(0,d+1).concat([{squares:t}])),O(d+1),x(!h))}(e)}})}),Object(i.jsxs)("div",{className:"game-info",children:[Object(i.jsx)("div",{children:t}),Object(i.jsx)("ol",{children:q})]})]})};function j(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(c.a)(t[n],3),s=r[0],a=r[1],i=r[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}a.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.35d2fa80.chunk.js.map