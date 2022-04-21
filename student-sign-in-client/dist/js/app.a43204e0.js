(function(t){function e(e){for(var d,c,a=e[0],s=e[1],i=e[2],l=0,b=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(d in s)Object.prototype.hasOwnProperty.call(s,d)&&(t[d]=s[d]);o&&o(e);while(b.length)b.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],d=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(d=!1)}d&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var d={},r={app:0},u=[];function c(e){if(d[e])return d[e].exports;var n=d[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=d,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)c.d(n,d,function(e){return t[e]}.bind(null,d));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var o=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1df8":function(t,e,n){},"250c":function(t,e,n){},"487e":function(t,e,n){"use strict";n("250c")},"4bd0":function(t,e,n){},"509a":function(t,e,n){"use strict";n("915b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var d=n("7a23"),r={id:"app"};function u(t,e,n,u,c,a){var s=Object(d["i"])("NewStudentForm"),i=Object(d["i"])("StudentTable"),o=Object(d["i"])("StudentMessage");return Object(d["e"])(),Object(d["c"])("div",r,[Object(d["d"])(s,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),Object(d["d"])(i,{students:c.students,onStudentPresent:a.studentArrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["students","onStudentPresent","onDeleteStudent"]),Object(d["d"])(o,{student:c.mostRecentStudent},null,8,["student"])])}var c=Object(d["o"])("data-v-70a5aad0");Object(d["g"])("data-v-70a5aad0");var a={class:"alert alert-danger"},s={class:"card add-student m-2 p-2"},i=Object(d["d"])("h4",{class:"card-title"},"Add new student",-1),o={class:"form-group"},l=Object(d["d"])("label",{for:"name"},"Name",-1),b={class:"form-group"},f=Object(d["d"])("label",{for:"starID"},"Star ID",-1);Object(d["f"])();var j=c((function(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["n"])(Object(d["d"])("div",a,[(Object(d["e"])(!0),Object(d["c"])(d["a"],null,Object(d["h"])(u.errors,(function(t){return Object(d["e"])(),Object(d["c"])("li",{key:t},Object(d["j"])(t),1)})),128))],512),[[d["m"],u.errors.length>0]]),Object(d["d"])("div",s,[i,Object(d["d"])("div",o,[l,Object(d["n"])(Object(d["d"])("input",{id:"name",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.newStudentName=t})},null,512),[[d["l"],u.newStudentName,void 0,{trim:!0}]])]),Object(d["d"])("div",b,[f,Object(d["n"])(Object(d["d"])("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return u.newStarID=t})},null,512),[[d["l"],u.newStarID,void 0,{trim:!0}]])]),Object(d["d"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return c.addStudent&&c.addStudent.apply(c,arguments)})},"Add")])])})),O={name:"NewStudentForm",emits:["student-added"],data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0===this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}};n("c651");O.render=j,O.__scopeId="data-v-70a5aad0";var p=O,h=(n("b0c0"),{class:"card student-list m-2 p-2"}),m=Object(d["d"])("h4",{class:"card-title"},"Students",-1),S={class:"edit-table-toggle form-check"},A=Object(d["d"])("label",{for:"edit-table",class:"form-check-label"},"Edit table?",-1),v={id:"student-table"},y={class:"table"},g=Object(d["d"])("th",null,"Name",-1),w=Object(d["d"])("th",null,"StarID",-1),I=Object(d["d"])("th",null,"Present?",-1);function M(t,e,n,r,u,c){var a=Object(d["i"])("StudentRow");return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["d"])("div",h,[m,Object(d["d"])("div",S,[Object(d["n"])(Object(d["d"])("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.editTable=t})},null,512),[[d["k"],u.editTable]]),A]),Object(d["d"])("div",v,[Object(d["d"])("table",y,[Object(d["d"])("tr",null,[g,w,I,Object(d["n"])(Object(d["d"])("th",null,"Delete",512),[[d["m"],u.editTable]])]),(Object(d["e"])(!0),Object(d["c"])(d["a"],null,Object(d["h"])(n.students,(function(t){return Object(d["e"])(),Object(d["c"])(a,{key:t.name,student:t,edit:u.editTable,onStudentArrivedOrLeft:c.arrivedOrLeft,onDeleteStudent:c.studentDeleted},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])})),128))])])])])}var k=n("ed3a"),D=n.n(k);function x(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("tr",{class:{present:n.student.present,absent:!n.student.present}},[Object(d["d"])("td",null,Object(d["j"])(n.student.name),1),Object(d["d"])("td",null,Object(d["j"])(n.student.starID),1),Object(d["d"])("td",null,[Object(d["d"])("input",{type:"checkbox",checked:n.student.present,onChange:e[1]||(e[1]=function(t){return c.arrivedOrLeft(n.student,t.target.checked)})},null,40,["checked"])]),Object(d["n"])(Object(d["d"])("td",null,[Object(d["d"])("img",{class:"delete-icon",onClick:e[2]||(e[2]=function(){return c.deleteStudent&&c.deleteStudent.apply(c,arguments)}),src:D.a})],512),[[d["m"],n.edit]])],2)}var C={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}};n("6c52");C.render=x;var U=C,R={name:"StudentTable",components:{StudentRow:U},emits:["student-present","delete-student"],data:function(){return{editTable:!1}},props:{students:Array},methods:{arrivedOrLeft:function(t,e){this.$emit("student-present",t,e)},studentDeleted:function(t){this.$emit("delete-student",t)}}};n("509a");R.render=M;var T=R,N=Object(d["o"])("data-v-3da39674");Object(d["g"])("data-v-3da39674");var P={key:0,class:"alert alert-success"},F={key:1,class:"alert alert-info"};Object(d["f"])();var G=N((function(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["n"])(Object(d["d"])("div",null,[n.student.present?(Object(d["e"])(),Object(d["c"])("div",P," Welcome, "+Object(d["j"])(n.student.name)+"! ",1)):(Object(d["e"])(),Object(d["c"])("div",F," Goodbye, "+Object(d["j"])(n.student.name)+". See you later! ",1))],512),[[d["m"],n.student.name]])])})),L={name:"StudentMessage",props:{student:Object}};n("87fa");L.render=G,L.__scopeId="data-v-3da39674";var E=L,Q={name:"app",data:function(){return{students:[],mostRecentStudent:{}}},components:{NewStudentForm:p,StudentTable:T,StudentMessage:E},mounted:function(){this.updateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(){e.updateStudents()}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then((function(){e.updateStudents(),e.mostRecentStudent={}}))},updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e}))}}};n("487e");Q.render=u;var J=Q,K=n("bc3a"),B=n.n(K),Y="/api/Students",V={getAllStudents:function(){return B.a.get(Y).then((function(t){return t.data}))},addStudent:function(t){return B.a.post(Y,t).then((function(t){return t.data}))},updateStudent:function(t){return B.a.patch("".concat(Y,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return B.a["delete"]("".concat(Y,"/").concat(t)).then((function(t){return t.data}))}},W=Object(d["b"])(J);W.config.globalProperties.$student_api=V,W.mount("#app")},"6c52":function(t,e,n){"use strict";n("4bd0")},"87fa":function(t,e,n){"use strict";n("e209")},"915b":function(t,e,n){},c651:function(t,e,n){"use strict";n("1df8")},e209:function(t,e,n){},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.a43204e0.js.map