(this.webpackJsonpcodefest2021=this.webpackJsonpcodefest2021||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i,o,r,s,c,a,h=n(1),l=n.n(h),u=n(12),d=n.n(u),j=(n(20),n.p,n(21),n(2)),b=n(3),p=n(5),y=n(4),m=n(6),f=n(7),x=f.a.div(i||(i=Object(m.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    width: 70vw;\n    height: 70vh;\n    display: flex;\n\n    h1 {\n        text-align: center;\n    }\n"]))),g=f.a.div(o||(o=Object(m.a)(["\n    width: 70%;\n    border: 1px solid #eee;\n    border-radius: 2rem;\n    background: #fff;\n    padding: 0rem 2rem 1rem 2rem;\n"]))),O=f.a.div(r||(r=Object(m.a)(["\n    display: flex;\n    //flex-wrap: wrap;\n"]))),v=f.a.div(s||(s=Object(m.a)(["\n    border-radius: 1rem;\n    background: lightblue;\n    width: 50%;\n    margin: 2rem;\n    padding: 1rem;\n\n    h1 {\n        font-size: 1.25rem;\n        font-style: italic;\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n"]))),k=f.a.div(c||(c=Object(m.a)(["\n    width: 30%;\n    //border: 1px solid #eee;\n    padding: 2rem;\n"]))),w=f.a.div(a||(a=Object(m.a)(["\n    text-align: center;\n    margin: 4rem auto;\n    width: 50vw;\n"]))),C=n(0),q=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(v,{onClick:this.props.onClick,children:[Object(C.jsx)("h1",{children:this.props.title}),this.props.desc]})}}]),n}(l.a.Component),I=[{question:"career choice",choices:[{title:"work at construction site",desc:"very tiring, risk of injuries, pay: $2.76/day",price:{money:0,health:0,next:-1}},{title:"sell rice pudding",desc:"profit: $1.55/day",price:{money:0,health:0,next:2}}]},{question:"oh no! you broke your leg at the construction job. you need to heal to work and continue providing of the family, but medical bills are high.",choices:[{title:"hospital",desc:"cost: $10",price:{money:10,health:0,next:2}},{title:"no hospital",desc:"we need to save the money. i'll pay someone (with no official expertise) to wrap it up. a broken leg makes it much harder to find a job, of course...",price:{money:2,health:0,next:0}}]},{question:"meal time!",choices:[{title:"rice",desc:"cost: $0.50. relatively cheap, enough for everyone, but not so nutritious.",price:{money:.5,health:3,next:3}},{title:"beans",desc:"cost: $1. more costly, but our health is important. we need nutrition to stay strong to work, and my children need to grow and stay healthy.",price:{money:1,health:-4,next:4}}]},{question:"at work, you feel faint - your energy levels are very low. food for you or save the money for your children?",choices:[{title:"food for me",desc:"if something happens to me, who will take care of my children?",price:{money:.5,health:2,next:-1}},{title:"save for my children",desc:"i can hold out for a bit longer. i need to invest money in their education, their future.",price:{money:0,health:-4,next:-1}}]},{question:"the landlord is here...",choices:[{title:"pay my rent",desc:"cost: $5",price:{money:5,health:0,next:9}},{title:"don't pay my rent",desc:"we'll live in a makeshift house under the bridge. the conditions are worse, but we save $5/month",price:{money:0,health:2,next:-1}}]},{question:"it was a dark and stormy night under the bridge...",choices:[{title:"go to work",desc:"i'm putting my children at risk, but if i don't work, who will?",price:{money:0,health:0,next:-1}},{title:"stay home",desc:"we're going to miss today's income, but what if something happens to my children while i'm gone? all that i do is for them anyways.",price:{money:0,health:0,next:-1}}]}],S=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"generateChoices",value:function(){for(var e,t=this,n=[],i=function(i){e=Object(C.jsx)(q,{title:t.props.choices[i].title,desc:t.props.choices[i].desc,onClick:function(){return t.props.onClick(i)}}),n.push(e)},o=0;o<this.props.choices.length;o++)i(o);return n}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:this.props.question}),Object(C.jsx)(O,{children:this.generateChoices()})]})}}]),n}(l.a.Component),$=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsx)(g,{children:this.props.decision?Object(C.jsx)(S,{question:this.props.question,choices:this.props.choices,onClick:function(t){return e.props.onClick(t)}}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("h1",{children:["you ",this.props.win,"!"]}),"in reality, for people living in poverty, it's not a simple win or lose, and decisions are affected by more factors.",Object(C.jsx)("br",{}),"however, we hope that this game gave you some insight into the difficult decisions that the poor must make to survive.",Object(C.jsx)("br",{}),"As of 2020, about half of the world\u2019s population live on or live with less than $2.50 in a day.",Object(C.jsx)("h2",{children:"why does poverty exist?"}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:"not enough jobs to go around at the bottom of the labor market"}),Object(C.jsx)("li",{children:"limited access to clean water, education, etc."}),Object(C.jsx)("li",{children:"widening wealth gap that keep the poor poor or make them poorer"}),Object(C.jsx)("li",{children:"natural disasters destroying homes"}),Object(C.jsx)("li",{children:"corrupt governments"})]}),Object(C.jsx)("h2",{children:"how can you help?"}),Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:["donate: ",Object(C.jsx)("a",{target:"_blank",href:"https://peopleagainstpoverty.com/get-involved/donate/",children:"People Against Poverty"}),",\xa0",Object(C.jsx)("a",{target:"_blank",href:"https://donate.worldvision.org/give/poverty-in-america",children:"World Vision"})]}),Object(C.jsxs)("li",{children:["volunteer: ",Object(C.jsx)("a",{target:"_blank",href:"https://www.unicef.org/careers/volunteers-unicef",children:"UNICEF"}),",\xa0",Object(C.jsx)("a",{target:"_blank",href:"https://thp.org/",children:"The Hunger Project"}),",\xa0",Object(C.jsx)("a",{target:"_blank",href:"https://childrenshungeralliance.org/",children:"Children's Hunger Alliance"}),",\xa0",Object(C.jsx)("a",{target:"_blank",href:"https://www.roomtoread.org/",children:"Room to Read"}),",\xa0 your local soup kitchen"]})]})]})})}}]),n}(l.a.Component),A=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(C.jsxs)(k,{children:[Object(C.jsx)("h1",{children:"stats"}),Object(C.jsxs)("div",{class:"stat",children:[Object(C.jsx)("b",{children:"career:"})," ",this.props.career]}),Object(C.jsxs)("div",{class:"stat",children:[Object(C.jsx)("b",{children:"daily income:"})," ",this.props.income]}),Object(C.jsxs)("div",{class:"stat",children:[Object(C.jsx)("b",{children:"money:"})," $",this.props.money]}),Object(C.jsxs)("div",{class:"stat",children:[Object(C.jsx)("b",{children:"health:"})," ",this.props.health]}),Object(C.jsx)("button",{onClick:function(){return e.props.onClick(0)},children:"RESTART"}),Object(C.jsx)("button",{onClick:function(){return e.props.onClick(1)},children:"HOW TO PLAY"})]})}}]),n}(l.a.Component),P=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(e){var i;return Object(j.a)(this,n),(i=t.call(this,e)).state={money:5,health:15,questionIndex:0,career:"",dailyIncome:0,gameOver:!1,win:"",instructions:!0},i}return Object(b.a)(n,[{key:"statClick",value:function(e){0==e?this.restart():this.setState({instructions:!0})}},{key:"restart",value:function(){this.setState({money:5,health:10,questionIndex:0,career:"",dailyIncome:0,gameOver:!1,win:""})}},{key:"gameOver",value:function(e){9==e?this.setState({win:"win"}):0==e&&this.setState({win:"lose"}),this.setState({gameOver:!0})}},{key:"getNext",value:function(e){var t=Math.round(2*Math.random()),n=this.state.questionIndex;if(0==t){if(0==n)return 2;if(3==n)return 4;if(4==n)return 9;if(5==n)return 9}else{if(0==n)return 1;if(3==n)return 0;if(4==n)return 5;if(5==n)return 0}}},{key:"handleClick",value:function(e){var t=I[this.state.questionIndex].choices[e].price;0==this.state.questionIndex&&(0==e?this.setState({career:"constructon site",dailyIncome:2.76}):1==e&&this.setState({career:"selling rice pudding",dailyIncome:1.55})),2!=this.state.questionIndex&&3!=this.state.questionIndex&&4!=this.state.questionIndex||this.state.money<t.money&&(console.log("not enough money"),this.gameOver(0));var n=t.next;-1===t.next?(0==(n=this.getNext(e))&&this.gameOver(n),9==n&&this.gameOver(n)):(0===t.next||9===t.next)&&this.gameOver(t.next),console.log(n),n<9&&n>0&&this.setState({money:(this.state.money-t.money+this.state.dailyIncome).toFixed(2),health:this.state.health-t.health,questionIndex:n})}},{key:"render",value:function(){var e=this;return this.state.instructions?Object(C.jsxs)(w,{children:[Object(C.jsxs)("i",{children:["once you click ",Object(C.jsx)("b",{children:"play"}),", you are a single mother struggling to take care of your two children.",Object(C.jsx)("br",{}),"you must make difficult decisions that can decide you and your children's fates."]}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"for many of these decisions, the ensuing decision you're forced to make is random. it's up to luck. work at a construction site? maybe you get lucky and nothing happens. or you could get injured...",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"in this simulation, each question = one day. therefore, for each question, your daily income will be added to your money. of course, it's not a perfect simulation, because in reality, you would lose more money every day for food.",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"you must keep ",Object(C.jsx)("b",{children:"health"})," levels at least 15. if you can't afford to pay for necessary food or rent, you lose. you might also lose due to bad luck. you break your leg - maybe you can find a job, or maybe there are no jobs you can take on without two working legs.",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),'you win if you just happen to be lucky and face "no more struggles." of course, this is not true in the real world, because your poverty doesn\'t just end like that.',Object(C.jsx)("button",{onClick:function(){e.setState({instructions:!1})},children:"PLAY"})]}):Object(C.jsxs)(x,{children:[Object(C.jsx)(A,{career:this.state.career,income:this.state.dailyIncome,money:this.state.money,health:this.state.health,onClick:function(t){return e.statClick(t)}}),this.state.gameOver?Object(C.jsx)($,{decisions:!1,win:this.state.win}):Object(C.jsx)($,{decision:!0,question:I[this.state.questionIndex].question,choices:I[this.state.questionIndex].choices,onClick:function(t){return e.handleClick(t)}})]})}}]),n}(l.a.Component);var F=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{style:{textAlign:"center"},children:"The Game of Life: But You're Poor"}),Object(C.jsx)(P,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),r(e),s(e)}))};d.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root")),T()}},[[27,1,2]]]);
//# sourceMappingURL=main.ff01184d.chunk.js.map