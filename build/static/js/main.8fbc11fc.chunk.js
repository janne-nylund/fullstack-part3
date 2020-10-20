(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=t(2),i=t(3),l=t.n(i),s=function(){return l.a.get("/api/notes").then((function(e){return e.data}))},m=function(e){return l.a.post("/api/notes",e).then((function(e){return e.data}))},f=function(e,n){return l.a.put("".concat("/api/notes","/").concat(e),n).then((function(e){return e.data}))},d=function(e){return l.a.delete("".concat("/api/notes","/").concat(e)).then((function(e){return e.status}))},b=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",{className:"textInputs"},"Name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",{className:"textInputs"},"Number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"addButton"},"add")))},h=function(e){var n=e.person;return r.a.createElement(r.a.Fragment,null,n.name," ",n.number)},w=function(e){var n=e.personsToShow,t=e.removePerson;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",null,r.a.createElement(h,{person:e}),r.a.createElement("button",{value:e.id,onClick:function(e){return t(e.target.value)}},"Delete")))})))},p=function(e){var n=e.message,t=e.cssSelector;return null===n?null:r.a.createElement("div",{className:t},n)},v=function(e){var n=Object(a.useState)([]),t=Object(c.a)(n,2),o=t[0],u=t[1],i=Object(a.useState)(""),l=Object(c.a)(i,2),h=l[0],v=l[1],E=Object(a.useState)(""),C=Object(c.a)(E,2),N=C[0],g=C[1],j=Object(a.useState)([]),O=Object(c.a)(j,2),L=O[0],S=O[1],k=Object(a.useState)(""),y=Object(c.a)(k,2),T=y[0],P=y[1],x=Object(a.useState)(null),D=Object(c.a)(x,2),I=D[0],B=D[1],F=Object(a.useState)(null),J=Object(c.a)(F,2),A=J[0],q=J[1];Object(a.useEffect)((function(){s().then((function(e){u(e),S(e)}))}),[]);return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(p,{message:I,cssSelector:"notification"}),r.a.createElement(p,{message:A,cssSelector:"error"}),r.a.createElement("div",null,"Filter persons",r.a.createElement("input",{value:T,onChange:function(e){var n=e.target.value;P(n),S(o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})))}})),r.a.createElement("h2",null,"Add a new person"),r.a.createElement(b,{addPerson:function(e){e.preventDefault();var n={name:h,number:N};if(o.some((function(e){return e.name.toLowerCase()===h.toLowerCase()&&""===N}))){var t=o.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));window.alert("Please give a number for ".concat(t.name,"."))}else if(o.some((function(e){return e.name.toLowerCase()===h.toLowerCase()&&e.number!==N}))){var a=o.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));window.confirm("".concat(a.name," is already added to the phonebook, replace the old number with a new one?"))&&f(a.id,n).then((function(e){var n=o.map((function(n){return n.id!==a.id?n:e}));u(n),S(n),v(""),g(""),P(""),B("".concat(h,"'s number was updated")),setTimeout((function(){B(null)}),2500)})).catch((function(e){q("".concat(a.name," was already removed from server")),setTimeout((function(){q(null)}),2500),u(o.filter((function(e){return e.id!==a.id}))),S(o.filter((function(e){return e.id!==a.id})))}))}else if(o.some((function(e){return e.name.toLowerCase()===h.toLowerCase()&&e.number===N}))){var r=o.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}));window.alert("".concat(r.name," already exists in the phonebook"))}else m(n).then((function(e){u(o.concat(e)),S(o.concat(e)),v(""),g(""),P(""),B("".concat(h," was added to the phonebook")),setTimeout((function(){B(null)}),2500)}))},newName:h,newNumber:N,handleNameChange:function(e){v(e.target.value)},handleNumberChange:function(e){g(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(w,{removePerson:function(e){var n=o.find((function(n){return n.id===Number(e)}));window.confirm("Delete ".concat(n.name,"?"))&&d(e).then((function(t){P(""),u(o.filter((function(n){return n.id!==Number(e)}))),S(o.filter((function(n){return n.id!==Number(e)}))),B("".concat(n.name," was deleted, status: ").concat(t)),setTimeout((function(){B(null)}),2500)})).catch((function(e){q("".concat(n.name," was already removed from server, status: ").concat(e.response.status)),setTimeout((function(){q(null)}),2500),u(o.filter((function(e){return e.id!==n.id}))),S(o.filter((function(e){return e.id!==n.id})))}))},personsToShow:L}))};t(36);u.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8fbc11fc.chunk.js.map