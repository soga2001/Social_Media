(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(36),s=a.n(c),i=(a(98),a(24)),o=a(25),l=a(30),j=a(28),d=a(17),h=a.n(d),b=a(31),u=a(38),x=a(11),O=a(139),m=a(132),p=a(140),g=a(133),f=a(84),v=a(137),y=(a(100),a(13)),k=a.n(y);function w(){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("http://127.0.0.1:5000/protected",{},{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){return!0}));case 3:e.next=11;break;case 5:if(e.prev=5,e.t0=e.catch(0),localStorage.getItem("token")){e.next=9;break}return e.abrupt("return",!1);case 9:return e.next=11,k.a.post("http://127.0.0.1:5000/refresh-token",{},{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){return localStorage.setItem("token",e.data),!0})).catch((function(e){return localStorage.removeItem("token"),localStorage.removeItem("username"),"/Post"===window.location.href||"/Profile"===window.location.href?window.location.href="/Home":window.location.reload(),!1}));case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var N=a(135),I=a(136),C=a(67),F=a(41),B=a(7),_=(a(51),a(82),a(141)),P=a(85),T=a(2);var E=function(){var e=Object(r.useState)([]),t=Object(B.a)(e,2),a=t[0],n=t[1],c=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:5000/post");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){return function(t){return k.a.delete("http://127.0.0.1:5000/post/".concat(e),{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){e.data&&c()}))}},i=function(e,t){return function(a){k.a.patch("http://127.0.0.1:5000/like",{post_id:e,likes:t},{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){c()}))}};return Object(r.useEffect)((function(){c()}),[]),Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h1",{className:"header",children:"Home Page"}),a.map((function(e){return Object(T.jsxs)(_.a,{border:"light",className:"text-center",id:"card",children:[Object(T.jsxs)(_.a.Header,{style:{background:"#C6F5FF"},as:"h3",children:[" ",e.title]}),Object(T.jsxs)(_.a.Body,{style:{background:"#E3FAFF"},children:[Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(f.a,{children:[Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Author: "})," ",e.author]}),Object(T.jsx)("input",{type:"text",id:"post_id",value:e._id,hidden:!0,readOnly:!0})]}),Object(T.jsx)(f.a,{children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Date Posted: "}),e.date_posted]})})]}),Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsx)(_.a.Text,{className:"posts",children:e.content})})})]}),Object(T.jsx)(_.a.Footer,{id:"card-footer",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{md:1,xs:2,children:Object(T.jsxs)(P.a,{id:"heart",onClick:i(e._id,e.likes),children:[Object(T.jsx)(F.b,{})," ",e.likes]})}),Object(T.jsx)(f.a,{md:1,xs:2,children:e.author===localStorage.getItem("username")?Object(T.jsx)(P.a,{id:"button",variant:"outline-primary",onClick:s(e._id),children:"Delete"}):""})]})})]},e._id)}))]})},A=a(86),D=a(138),H=a(22),L=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={err:"",registered:""},e.register=function(t){t.preventDefault(),k.a.post("http://127.0.0.1:5000/register",{firstname:document.getElementById("firstname").value,lastname:document.getElementById("lastname").value,phone:document.getElementById("phone").value,email:document.getElementById("email").value,username:document.getElementById("username").value,password:document.getElementById("password").value}).then((function(t){t.data.error?(e.setState({registered:""}),e.setState({err:t.data.error})):t.data&&(e.setState({err:""}),e.setState({registered:"You have been registered. Redirecting to the login page...."}),setTimeout((function(){return window.location.href="/Login"}),800))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)(m.a,{style:{padding:"1%"},children:Object(T.jsxs)(_.a,{style:{width:"70%",margin:"auto"},children:[Object(T.jsx)(_.a.Header,{as:"h3",className:"header",children:"Register"}),Object(T.jsxs)(_.a.Body,{children:[Object(T.jsxs)("form",{onSubmit:this.register,children:[Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"First Name",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"text",id:"firstname",placeholder:"First Name",required:!0})})}),Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Last Name",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"text",id:"lastname",placeholder:"Last Name",required:!0})})})]}),Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Email",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"email",id:"email",placeholder:"name@example.com",required:!0})})}),Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Phone: 111-111-1111",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"tel",id:"phone",placeholder:"111-111-1111",required:!0})})})]}),Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Username",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"text",id:"username",placeholder:"username",required:!0})})}),Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Password",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"password",id:"password",placeholder:"Password",required:!0})})})]}),Object(T.jsx)(P.a,{type:"submit",variant:"outline-primary",className:"button",children:"Register"})]}),this.state.err?Object(T.jsxs)(H.a,{variant:"danger",children:[" ",this.state.err," "]}):this.state.registered&&Object(T.jsx)(H.a,{variant:"info",children:this.state.registered})]})]})})}}]),a}(r.Component),z=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={err:"",logged_in:""},e.login=function(t){t.preventDefault(),k.a.post("http://127.0.0.1:5000/login",{username:document.getElementById("username").value,password:document.getElementById("password").value}).then((function(t){t.data.error?e.setState({err:t.data.error}):t.data&&(e.setState({err:""}),e.setState({logged_in:"You have been logged in. Redirecting to home page...."}),localStorage.setItem("token",t.data.access_token),localStorage.setItem("username",t.data.username),setTimeout((function(){return window.location.href="/Home"}),800))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{className:"app",children:Object(T.jsx)(m.a,{style:{padding:"1%"},children:Object(T.jsxs)(_.a,{style:{width:"70%",margin:"auto"},children:[Object(T.jsx)(_.a.Header,{as:"h3",className:"header",children:"Login"}),Object(T.jsxs)(_.a.Body,{style:{padding:"3%"},children:[Object(T.jsxs)("form",{onSubmit:this.login,children:[Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Username",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"text",id:"username",placeholder:"username",required:!0})})}),Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Password",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"password",id:"password",placeholder:"Password",required:!0})})})]}),Object(T.jsx)(P.a,{type:"submit",variant:"outline-primary",className:"button",children:"Login"})]}),this.state.err?Object(T.jsxs)(H.a,{variant:"danger",className:"message",children:[" ",this.state.err," "]}):this.state.logged_in&&Object(T.jsx)(H.a,{className:"message",children:this.state.logged_in})]})]})})})}}]),a}(r.Component),q=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={err:"",message:""},e.post=function(t){t.preventDefault(),k.a.post("http://127.0.0.1:5000/post",{title:document.getElementById("title").value,content:document.getElementById("content").value},{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(t){e.setState({err:""}),e.setState({message:"Posted"}),setTimeout((function(){return window.location.href="/Home"}),800)})).catch((function(t){localStorage.getItem("token")?w():(e.setState({message:""}),e.setState({err:"Please login before trying to post a content."}))}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{className:"app",children:Object(T.jsx)(m.a,{style:{padding:"1%"},children:Object(T.jsxs)(_.a,{border:"light",style:{width:"70%",margin:"auto"},children:[Object(T.jsx)(_.a.Header,{as:"h3",className:"header",style:{background:"#FFD9AE"},children:"Post Content"}),Object(T.jsxs)(_.a.Body,{style:{width:"100%",margin:"auto",background:"#FFEBD4"},children:[Object(T.jsxs)("form",{className:"post",onSubmit:this.post,children:[Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsx)(A.a,{label:"Title",className:"mb-3",children:Object(T.jsx)(D.a.Control,{type:"text",id:"title",placeholder:"title",required:!0})})})}),Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsxs)(D.a.Group,{className:"mb-3",children:[Object(T.jsx)(D.a.Label,{children:"Content"}),Object(T.jsx)(D.a.Control,{as:"textarea",id:"content",rows:10})]})})}),Object(T.jsx)(P.a,{type:"submit",variant:"outline-primary",className:"button",children:"Post"})]}),this.state.err?Object(T.jsx)(H.a,{className:"message",children:this.state.err}):this.state.message&&Object(T.jsx)(H.a,{className:"message",children:this.state.message})]})]})})})}}]),a}(r.Component),R=a(89);var Y=function(){var e=Object(r.useState)([]),t=Object(B.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),s=Object(B.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)(""),j=Object(B.a)(l,2),d=j[0],u=j[1],x=Object(r.useState)(!1),O=Object(B.a)(x,2),p=O[0],v=O[1],y=Object(r.useState)([]),w=Object(B.a)(y,2),S=w[0],N=w[1],I=Object(r.useState)(""),C=Object(B.a)(I,2),E=C[0],A=C[1],D=Object(r.useState)(!1),L=Object(B.a)(D,2),z=L[0],q=L[1],Y=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://127.0.0.1:5000/user",{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){n(e.data)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://127.0.0.1:5000/user_post",{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){e.data.message?(u(e.data.message),v(!0)):(v(!1),o(e.data))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e,t){return function(a){k.a.patch("http://127.0.0.1:5000/like",{post_id:e,likes:t},{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){U(),G()}))}},G=function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.a.get("http://127.0.0.1:5000/liked",{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){e.data.message?(A("You have liked no posts."),q(!0),N([])):(q(!1),N(e.data))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Y(),U(),G()}),[]),Object(T.jsxs)(m.a,{children:[Object(T.jsx)("h1",{className:"header",children:"Profile"}),a.map((function(e){return Object(T.jsxs)(_.a,{id:"info",children:[Object(T.jsx)(_.a.Header,{className:"header",as:"h3",style:{background:"#F9DBFF"},children:"Your Info"}),Object(T.jsxs)(_.a.Body,{style:{background:"#FCEEFF"},children:[Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Username:"})," ",e.username]})}),Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Email:"})," ",e.email]})})]}),Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Name:"})," ",e.firstname," ",e.lastname]})}),Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Phone:"})," ",e.phone]})})]}),Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Roles:"})," ",e.roles]})}),Object(T.jsx)(f.a,{md:6,children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"UserID:"})," ",e._id]})})]})]})]},e.username)})),Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(f.a,{md:6,children:[Object(T.jsx)("h1",{className:"header",children:"Your Posts"}),!1===p&&i.map((function(e){return Object(T.jsxs)(_.a,{border:"light",className:"text-center",id:"card",children:[Object(T.jsxs)(_.a.Header,{style:{background:"#C6F5FF"},as:"h3",children:[" ",e.title]}),Object(T.jsxs)(_.a.Body,{style:{background:"#E3FAFF"},children:[Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(f.a,{children:[Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Author: "})," ",e.author]}),Object(T.jsx)("input",{type:"text",id:"post_id",value:e._id,hidden:!0,readOnly:!0})]}),Object(T.jsx)(f.a,{children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Date Posted: "}),e.date_posted]})})]}),Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsx)(_.a.Text,{className:"posts",children:e.content})})})]}),Object(T.jsx)(_.a.Footer,{id:"card-footer",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{md:1,xs:2,children:Object(T.jsxs)(P.a,{id:"heart",onClick:J(e._id,e.likes),children:[Object(T.jsx)(F.b,{})," ",e.likes]})}),Object(T.jsx)(f.a,{md:1,xs:2,children:e.author===localStorage.getItem("username")?Object(T.jsx)(P.a,{id:"button",variant:"outline-primary",onClick:(t=e._id,function(e){return k.a.delete("http://127.0.0.1:5000/post/".concat(t),{headers:{Authorization:"Bearer"+localStorage.getItem("token")}}).then((function(e){e.data.message?(u(e.data.message),v(!0),o([])):(v(!1),U(),G())}))}),children:"Delete"}):""})]})})]},e._id);var t}))||Object(T.jsx)(H.a,{id:"message",children:d})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)("h1",{className:"header",children:"Liked Post"}),!1===z&&S.map((function(e){return Object(T.jsxs)(_.a,{style:{margin:"auto",width:"100%"},className:"text-center",children:[Object(T.jsxs)(_.a.Header,{as:"h3",style:{background:"#FFDBEC"},children:[" ",e.title]}),Object(T.jsxs)(_.a.Body,{style:{background:"#FDE7F1"},children:[Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(f.a,{children:[Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Author: "})," ",e.author]}),Object(T.jsx)(_.a.Text,{hidden:!0,children:e._id}),Object(T.jsx)("input",{type:"text",id:"post_id",value:e._id,hidden:!0,readOnly:!0})]}),Object(T.jsx)(f.a,{children:Object(T.jsxs)(_.a.Text,{children:[Object(T.jsx)("strong",{children:"Date Posted: "}),e.date_posted]})})]}),Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{children:Object(T.jsx)(_.a.Text,{className:"posts",children:e.content})})})]}),Object(T.jsx)(_.a.Footer,{id:"card-footer",children:Object(T.jsx)(g.a,{children:Object(T.jsx)(f.a,{xs:2,md:2,children:Object(T.jsxs)(P.a,{id:"heart",onClick:J(e._id,e.likes),children:[Object(T.jsx)(R.a,{})," ",e.likes]})})})})]})}))||Object(T.jsx)(H.a,{id:"message",children:E})]})]})]})},U=a(134),J=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsxs)("h1",{children:["This is the setting page ",Object(T.jsx)(U.a,{})," "]})})}}]),a}(r.Component);function G(){localStorage.removeItem("token"),localStorage.removeItem("username"),window.location.href="/Home"}window.onload=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));var M=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(T.jsxs)(u.a,{children:[Object(T.jsx)(O.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",id:"navbar",children:Object(T.jsxs)(m.a,{className:"container",children:[Object(T.jsxs)(O.a.Brand,{id:"brand",href:"/Home",children:[Object(T.jsx)("img",{id:"logo",alt:"Logo",src:"/logo.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","Social Media"]}),Object(T.jsx)(O.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(T.jsxs)(O.a.Collapse,{id:"responsive-navbar-nav",children:[Object(T.jsxs)(p.a,{variant:"pills",className:"me-auto",children:[Object(T.jsx)(u.b,{to:"/Home",id:"item",activeClassName:"active",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{xs:3,children:Object(T.jsx)(C.c,{})}),Object(T.jsx)(f.a,{xs:3,children:"Home"})]})}),localStorage.getItem("token")&&Object(T.jsx)(u.b,{to:"/Post",id:"item",activeClassName:"active",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{xs:3,children:Object(T.jsx)(F.a,{})}),Object(T.jsx)(f.a,{xs:3,children:"Post"})]})})]}),Object(T.jsxs)(p.a,{variant:"pills",children:[!localStorage.getItem("token")&&Object(T.jsxs)(u.b,{to:"/Login",id:"item",activeClassName:"active",children:["Login ",Object(T.jsx)(N.a,{})]}),!localStorage.getItem("token")&&Object(T.jsx)(u.b,{to:"/Register",id:"item",activeClassName:"active",children:"Register"}),localStorage.getItem("token")&&Object(T.jsxs)(v.a,{title:localStorage.getItem("username"),id:"item",menuVariant:"dark",children:[Object(T.jsx)(v.a.Item,{children:Object(T.jsx)(u.b,{to:"/Profile",id:"drop-item",activeClassName:"active",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:"Profile"}),Object(T.jsx)(f.a,{children:Object(T.jsx)(C.b,{})})]})})}),Object(T.jsx)(v.a.Item,{children:Object(T.jsx)(u.b,{to:"/Setting",id:"drop-item",activeClassName:"active",children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:"Setting"}),Object(T.jsx)(f.a,{children:Object(T.jsx)(C.a,{})})]})})}),Object(T.jsx)(v.a.Divider,{}),Object(T.jsx)(v.a.Item,{onClick:G,children:Object(T.jsxs)(g.a,{children:[Object(T.jsx)(f.a,{children:"LogOut"}),Object(T.jsx)(f.a,{children:Object(T.jsx)(I.a,{})})]})})]})]})]})]})}),Object(T.jsx)(x.a,{exact:!0,path:"/",children:Object(T.jsx)(E,{})}),Object(T.jsxs)(x.a,{exact:!0,path:"/Home",children:[Object(T.jsx)(E,{})," "]}),Object(T.jsx)(x.a,{exact:!0,path:"/Post",children:Object(T.jsx)(q,{})}),Object(T.jsx)(x.a,{exact:!0,path:"/Login",children:Object(T.jsx)(z,{})}),Object(T.jsx)(x.a,{exact:!0,path:"/Register",children:Object(T.jsx)(L,{})}),Object(T.jsx)(x.a,{exact:!0,path:"/Profile",children:Object(T.jsx)(Y,{})}),Object(T.jsx)(x.a,{exact:!0,path:"/Setting",children:Object(T.jsx)(J,{})})]})}}]),a}(r.Component),V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,142)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(T.jsx)(n.a.Fragment,{children:Object(T.jsx)(M,{})}),document.getElementById("root")),V()},51:function(e,t,a){},98:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.bdd061be.chunk.js.map