(this.webpackJsonpforumpage=this.webpackJsonpforumpage||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(4),c=a.n(s),i=a(1),l=a.n(i),o=a(5),d=a(6),m=a(7),u=a(8),p=a(9),v=a(2),h=a.n(v),f="https://forum.freecodecamp.org/",E=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getIconUrl=function(t){var a=e.state.data.users;for(var r in a)if(a[r].id==t){var n=a[r].username,s=a[r].avatar_template;return s=s.replace(/{size}/i,"135"),/^https?:\/\/|^\/\//i.test(s)||(s=f+s),{url:s,username:n}}},e.state={data:{}},h.a.updateLocale("en",{relativeTime:{future:"%s",past:"%s",s:"%d s",ss:"%d s",m:"%d min",mm:"%d min",h:"%d hour",hh:"%d hours",d:"%d day",dd:"%d days",w:"%d week",ww:"%d weeks",M:"%d month",MM:"%d months",y:"%d year",yy:"%d years"}}),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fcc-forum-proxy.freecodecamp.repl.co/latest");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return Object.keys(this.state.data).length>0&&(e=this.state.data.topic_list.topics.map((function(e,a){var r=[];for(var s in e.posters){var c=t.getIconUrl(e.posters[s].user_id),i=c.url,l=c.username;r.push(n.a.createElement("a",{href:f+"u/"+l,key:Math.random()},n.a.createElement("img",{src:i})))}return n.a.createElement("div",{className:"row body",key:a},n.a.createElement("div",null,a+1),n.a.createElement("div",{className:"topic"},n.a.createElement("a",{href:f+"/t/"+e.slug},e.title)),n.a.createElement("div",null,r),n.a.createElement("div",null,e.views),n.a.createElement("div",null,h()(e.bumped_at).fromNow()))}))),n.a.createElement("div",{className:"table"},n.a.createElement("div",{className:"row top"},n.a.createElement("div",{className:"head"},"#"),n.a.createElement("div",{className:"head"},"Topic"),n.a.createElement("div",{className:"head"},"Replies"),n.a.createElement("div",{className:"head"},"Views"),n.a.createElement("div",{className:"head"},"Activity")),e)}}]),a}(n.a.Component);a(17);var y=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null))};c.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.40c26ed0.chunk.js.map