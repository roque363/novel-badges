(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/banner_1.75ea5578.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/banner_2.0df83e36.png"},33:function(e,a,t){e.exports=t.p+"static/media/banner_3.b74e7b9c.jpeg"},35:function(e,a,t){e.exports=t.p+"static/media/nino_profile.740357b0.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/nino.91f04904.jpg"},37:function(e){e.exports={results:[{id:"1",firstName:"Nino",lastName:"Nakano",mangaTitle:"5Toubun no Hanayome",avatarImage:"https://66.media.tumblr.com/bce6f07582df80a47c2adce923642744/tumblr_pl7iqav9lZ1u2xpn7o1_500.jpg",badgeImage:""},{id:"2",firstName:"Miku",lastName:"Nakano",mangaTitle:"5Toubun no Hanayome",avatarImage:"https://pa1.narvii.com/7129/988461aa59487d4d3343e59642f838f0787dbb6cr1-600-338_hq.gif",badgeImage:""},{id:"3",firstName:"Eriri",lastName:"Spencer Sawamura",mangaTitle:"Saenai Heroine no Sodatekata ",avatarImage:"https://pm1.narvii.com/6983/d8fcb602077a23c009b66ef0cb946051b4347e50r1-721-720v2_hq.jpg",badgeImage:""},{id:"4",firstName:"Eriri",lastName:"Spencer Sawamura",mangaTitle:"Saenai Heroine no Sodatekata ",avatarImage:"https://pm1.narvii.com/6983/d8fcb602077a23c009b66ef0cb946051b4347e50r1-721-720v2_hq.jpg",badgeImage:""},{id:"5",firstName:"Eriri",lastName:"Spencer Sawamura",mangaTitle:"Saenai Heroine no Sodatekata ",avatarImage:"https://pm1.narvii.com/6983/d8fcb602077a23c009b66ef0cb946051b4347e50r1-721-720v2_hq.jpg",badgeImage:""}]}},39:function(e,a,t){e.exports=t(68)},47:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),s=(t(25),t(44),t(45),t(46),t(47),t(8)),o=t(15),i=t(2),m=t(3),u=t(5),d=t(4),g=t(6),h=(t(48),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand logo",to:"/"},"NovelBadges"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent"},r.a.createElement("ul",{className:"navbar-nav ml-md-auto d-md-flex"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Inicio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/search"},"Buscar")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/badges/RickAndMorty"},"Rick y Morty")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/badges"},"Lista")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/badges/new"},"Nuevo")))))))}}]),a}(n.Component)),p=(t(53),t(54),t(16)),b=t(17),v=t(30),E=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"home-card"},r.a.createElement("div",{className:"home-card__header"},r.a.createElement(p.a,{className:"home-card__header__like",icon:v.a,style:{color:"rgb(189, 69, 69)"}}),r.a.createElement("div",{className:"home-card__header__season"},r.a.createElement(p.a,{icon:b.b,style:{color:"rgb(189, 69, 69)"}}),r.a.createElement("span",{className:"time"},this.props.serie.season))),r.a.createElement("div",{className:"home-card__img",style:{backgroundImage:"url(".concat(this.props.serie.cover,")")}}),r.a.createElement(s.b,{to:"#"},r.a.createElement("div",{className:"home-card__img--hover",style:{backgroundImage:"url(".concat(this.props.serie.cover,")")}})),r.a.createElement("div",{className:"home-card__info"},r.a.createElement("span",{className:"badge badge-dark"},"Wiki"),r.a.createElement("h3",{className:"card-title"},this.props.serie.title),r.a.createElement("span",{className:"card-author"},this.props.serie.author)))}}]),a}(r.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.series.map(function(e){return r.a.createElement("div",{className:"col-md-6 col-lg-4",key:e.id},r.a.createElement(E,{serie:e}))}))}}]),a}(r.a.Component),N=t(31),y=t.n(N),j=t(32),k=t.n(j),O=t(33),_=t.n(O),x=function(e){function a(e){var t;return Object(i.a)(this,a),t=Object(u.a)(this,Object(d.a)(a).call(this,e)),console.log("1. constructor()"),t.state={data:[]},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("3. componentDidMount()"),this.timeoutId=setTimeout(function(){e.setState({data:[{id:"1",title:"Go-T\u014dbun no Hanayome",author:"Negi Haruba",season:"Winter 2019",cover:"https://vignette.wikia.nocookie.net/5toubun-no-hanayome/images/4/4d/Quintuplets_color_art_-_volume_6_release.jpg/revision/latest?cb=20190122040542"},{id:"2",title:"Saenai Heroine no Sodatekata",author:"Fumiaki Maruto",season:"Winter 2015",cover:"https://www.saenai.tv/images/top/top_vsl_main1.png"},{id:"3",title:"SSSS.GRIDMAN",author:"Studio Trigger",season:"Winter 2018",cover:"https://gridman.net/img/home/visual_07.jpg"}]})},800)}},{key:"componentDidUpdate",value:function(e,a){console.log("5. componentDidUpdate()")}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount()"),clearTimeout(this.timeoutId)}},{key:"render",value:function(){return console.log("2/4. render()"),r.a.createElement("div",{className:"home-main"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:y.a,className:"d-block w-100",alt:"banner"}),r.a.createElement("h1",null,"Go-T\u014dbun no Hanayome")),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:k.a,className:"d-block w-100",alt:"banner"}),r.a.createElement("h1",null,"Saenai Heroine no Sodatekata")),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{src:_.a,className:"d-block w-100",alt:"banner"}),r.a.createElement("h1",null,"SSSS. GRIDMAN"))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))),r.a.createElement("div",null,r.a.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},r.a.createElement("defs",null,r.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),r.a.createElement("g",{className:"parallax"},r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(28, 35, 49,0.7)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(28, 35, 49,0.5)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(28, 35, 49,0.3)"}),r.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"rgb(244, 244, 247)"}))))),r.a.createElement("div",{className:"container home-content"},r.a.createElement("div",{className:"row"},r.a.createElement(f,{series:this.state.data}))))}}]),a}(r.a.Component),w=t(10),S=t.n(w),C=t(14),I=(t(59),t(60),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("h1",{className:"title"},e))))}}]),a}(r.a.Component));t(61);var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"preloader"},r.a.createElement("h2",null,"Cargando..."),r.a.createElement("div",{className:"loader"})))};function P(e){var a=e.genres;return"Comedy"===a?r.a.createElement("div",{style:{background:"#EEA800"}},a):"Romance"===a?r.a.createElement("div",{style:{background:"#FD337F"}},a):"Romance"===a?r.a.createElement("div",{style:{background:"#8855DD"}},a):"Action"===a?r.a.createElement("div",{style:{background:"#006AFA"}},a):"Slice of Life"===a?r.a.createElement("div",{style:{background:"#9AB710"}},a):"Drama"===a?r.a.createElement("div",{style:{background:"#00B19A"}},a):"Sci-Fi"===a?r.a.createElement("div",{style:{background:"#4A20E2"}},a):"Ecchi"===a?r.a.createElement("div",{style:{background:"#C00355"}},a):"Fantasy"===a?r.a.createElement("div",{style:{background:"#A864B7"}},a):r.a.createElement("div",{style:{background:"#8855DD"}},a)}var D=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.media;return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"search-card"},r.a.createElement("div",{className:"search-card__header"},r.a.createElement("span",{className:"badge badge-dark"},e.type),r.a.createElement("div",{className:"search-card__header__year"},r.a.createElement("span",{className:"time"},e.startDate.year))),r.a.createElement("div",{className:"search-card__img",style:{backgroundImage:"url(".concat(e.coverImage.extraLarge,")")}}),r.a.createElement("a",{href:e.siteUrl},r.a.createElement("div",{className:"search-card__img--hover",style:{backgroundImage:"url(".concat(e.coverImage.extraLarge,")")}})),r.a.createElement("div",{className:"search-card__info"},r.a.createElement("h3",{className:"card-title"},e.title.romaji),r.a.createElement("div",{className:"card-genero"},e.genres.map(function(e){return r.a.createElement("div",{className:"genero",key:e},r.a.createElement(P,{genres:e}))})))))}}]),a}(r.a.Component),F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,searchName:"",data:{data:{Page:{pageInfo:{total:"",currentPage:"",lastPage:"",hasNextPage:!1,perPage:""},media:[]}}}},t._isMounted=!0,t.handleChange=function(e){"search"===e.target.name&&t.setState({searchName:e.target.value})},t.handleClick=function(e){t.fetchData()},t.handleSubmit=function(e){e.preventDefault()},t.fetchData=Object(C.a)(S.a.mark(function e(){var a,n,r,c;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),"\n      query ($id: Int, $page: Int, $perPage: Int, $search: String) {\n        Page (page: $page, perPage: $perPage) {\n          pageInfo {\n            total\n            currentPage\n            lastPage\n            hasNextPage\n            perPage\n          }\n          media (id: $id, search: $search) {\n            id\n            title {\n              romaji\n              native\n            }\n            type\n            season\n            startDate {\n              year\n            }\n            endDate {\n              year\n            }\n            episodes\n            chapters\n            volumes\n            genres\n            siteUrl\n            coverImage {\n              extraLarge\n            }\n          }\n        }\n      }\n    ",a={search:t.state.searchName,page:1,perPage:15},"https://graphql.anilist.co",n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n      query ($id: Int, $page: Int, $perPage: Int, $search: String) {\n        Page (page: $page, perPage: $perPage) {\n          pageInfo {\n            total\n            currentPage\n            lastPage\n            hasNextPage\n            perPage\n          }\n          media (id: $id, search: $search) {\n            id\n            title {\n              romaji\n              native\n            }\n            type\n            season\n            startDate {\n              year\n            }\n            endDate {\n              year\n            }\n            episodes\n            chapters\n            volumes\n            genres\n            siteUrl\n            coverImage {\n              extraLarge\n            }\n          }\n        }\n      }\n    ",variables:a})},e.prev=5,e.next=8,fetch("https://graphql.anilist.co",n);case 8:return r=e.sent,e.next=11,r.json();case 11:c=e.sent,t._isMounted&&(console.log(c),t.setState({loading:!1,data:c})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),t.setState({loading:!0,error:e.t0});case 18:case"end":return e.stop()}},e,null,[[5,15]])})),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.state.error?"Error:".concat(this.state.error.message):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"Buscar Serie"}),r.a.createElement("div",{className:"container search-main"},r.a.createElement("form",{className:"search-form",action:"",onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,type:"search",id:"search",placeholder:"Buscar series ...",name:"search"}),r.a.createElement("button",{type:"submit",className:"search-form__icon",onClick:this.handleClick},r.a.createElement(p.a,{icon:b.c})))),r.a.createElement("div",{className:"container search-main"},r.a.createElement("div",{className:"row"},this.state.data.data.Page.media.map(function(e){return r.a.createElement("div",{className:"col-md-6 col-lg-4",key:e.id},r.a.createElement(D,{media:e}))}))),this.state.loading&&r.a.createElement(M,null),0===this.state.data.data.Page.media&&r.a.createElement("h3",null,"No encontramos datos"))}}]),a}(n.Component),T=t(19),A=t(34),B=(t(62),t(63),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.firstName,t=e.lastName,n=e.avatarImage,c=e.badgeImage,l=e.mangaTitle;return r.a.createElement("div",{className:"badge-card-container"},r.a.createElement("div",{className:"badge"},r.a.createElement("div",{className:"badge_header"},r.a.createElement("img",{className:"logo",src:c,alt:a})),r.a.createElement("div",{className:"badge_section-name"},r.a.createElement("img",{className:"badge_avatar",src:n,alt:a}),r.a.createElement("h2",null,a,r.a.createElement("br",null),t)),r.a.createElement("div",{className:"badge_section-info"},r.a.createElement("div",{className:"info-group"},r.a.createElement("h3",{className:"info-secondary-font"},"Japanese"),r.a.createElement("div",{className:"badge-font"},r.a.createElement("span",{lang:"ja"},r.a.createElement("ruby",null,r.a.createElement("rb",null,"\u4e2d"),r.a.createElement("rt",null,"\u306a\u304b")),r.a.createElement("ruby",null,r.a.createElement("rb",null,"\u91ce"),r.a.createElement("rp",null,"("),r.a.createElement("rt",null,"\u306e"),r.a.createElement("rp",null,")")),r.a.createElement("ruby",null,r.a.createElement("rb",null,"\u4e8c"),r.a.createElement("rt",null,"\u306b")),r.a.createElement("ruby",null,r.a.createElement("rb",null,"\u4e43"),r.a.createElement("rp",null,"("),r.a.createElement("rt",null,"\u306e"),r.a.createElement("rp",null,")"))))),r.a.createElement("div",{className:"info-group"},r.a.createElement("h3",{className:"info-secondary-font"},"R\u014dmaji"),r.a.createElement("div",{className:"badge-font"},a," ",t))),r.a.createElement("div",{className:"badge_footer"},"#",l)))}}]),a}(r.a.Component)),H=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Button Save was clicked")},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"New Waifu"),r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"First Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Manga Title"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"mangaTitle",value:this.props.formValues.mangaTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Banner Image"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"badgeImage",value:this.props.formValues.badgeImage})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Profile Image"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"avatarImage",value:this.props.formValues.avatarImage})),r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"btn btn-primary"},"Save"),this.props.error&&r.a.createElement("p",{className:"text-danger"},"Error en el Formulario")))}}]),a}(r.a.Component),$=t(35),W=t.n($),q=t(36),R=t.n(q),U=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",mangaTitle:"",badgeImage:"",avatarImage:""}},t.handleChange=function(e){t.setState({form:Object(A.a)({},t.state.form,Object(T.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(){var e=Object(C.a)(S.a.mark(function e(a){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t.setState({loading:!0,error:null});try{t.setState({loading:!1}),t.props.history.push("/badges")}catch(n){t.setState({loading:!1,error:n})}case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"New Waifu"}),r.a.createElement("div",{className:"container badgeNew-main"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(B,{firstName:this.state.form.firstName||"Nino",lastName:this.state.form.lastName||"Nakano",badgeImage:this.state.form.badgeImage||R.a,avatarImage:this.state.form.avatarImage||W.a,mangaTitle:this.state.form.mangaTitle||"5Toubun no Hanayome"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(H,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})))))}}]),a}(n.Component),L=(t(64),t(37)),V=(t(65),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"badgeItem"},r.a.createElement("img",{className:"badgeItem__avatar",src:this.props.badge.avatarImage,alt:this.props.badge.firstName}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("div",{className:"badgeItem__footer"},"#",this.props.badge.mangaTitle)))}}]),a}(r.a.Component)),G=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"badgeV2"},r.a.createElement("ul",{className:"list-unstyled"},this.props.badges.results.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(V,{badge:e}))})))}}]),a}(r.a.Component),J=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,error:null,data:void 0},t._isMounted=!0,t.fetchData=Object(C.a)(S.a.mark(function e(){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({loading:!0,error:null});try{a=L,t._isMounted&&setTimeout(function(){t.setState({loading:!1,data:a})},800)}catch(n){t.setState({loading:!0,error:n})}case 2:case"end":return e.stop()}},e)})),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchData(),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,clearInterval(this.intervalId)}},{key:"render",value:function(){return!0!==this.state.loading||this.state.data?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"New Waifu"}),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(s.b,{to:"/badges/new",className:"btn btn-primary"},"Nuevo Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(G,{badges:this.state.data}))))):r.a.createElement(M,null)}}]),a}(r.a.Component),z=(t(66),t(38)),Q=t.n(z),X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleHover=function(e){console.log("Button was hover")},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e,a=this.props.character;return e="Alive"===a.status?r.a.createElement("div",{className:"title title--alive"},a.status):"Dead"===a.status?r.a.createElement("div",{className:"title title--dead"},a.status):r.a.createElement("div",{className:"title title--unknown"},a.status),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"character-card"},r.a.createElement("h2",{className:"name"},a.name),e,r.a.createElement("div",{className:"desc"},"Origen: ",a.origin.name),r.a.createElement("img",{src:a.image,alt:a.name}),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:"actions__trade",onMouseOver:this.handleHover},a.species),r.a.createElement("button",{className:"actions__cancel",onMouseOver:this.handleHover},a.gender))))}}]),a}(r.a.Component);function Z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"loader-text"},"Cargando..."))}var K=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={nextPage:1,loading:!1,hasMore:!1,error:null,data:{info:{},results:[]}},t._isMounted=!0,t.fetchCharacters=Object(C.a)(S.a.mark(function e(){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character?page=".concat(t.state.nextPage));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t._isMounted&&(t.setState({loading:!1,data:{info:n.info,results:[].concat(t.state.data.results,n.results)},nextPage:t.state.nextPage+1}),""!==t.state.data.info.next?t.setState({hasMore:!0}):t.setState({hasMore:!1})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}},e,null,[[1,11]])})),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchCharacters()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.state.error?"Error:".concat(this.state.error.message):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"Rick y Morty"}),r.a.createElement(Q.a,{dataLength:this.state.data.results.length,next:this.fetchCharacters,hasMore:this.state.hasMore,loader:r.a.createElement(Z,null)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.data.results.map(function(e){return r.a.createElement("div",{className:"col-md-4 col-lg-3",key:e.id},r.a.createElement(X,{character:e}))})))),this.state.loading&&r.a.createElement(M,null))}}]),a}(r.a.Component),Y=(t(67),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).handleBackdClick=function(){t.props.history.goBack()},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"notfound-section"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",null,r.a.createElement("h1",null,"Error 404"),r.a.createElement("p",null,"La p\xe1gina que buscas no parece existir."),r.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg",onClick:this.handleBackdClick},r.a.createElement(p.a,{icon:b.a}),"Atras")))))}}]),a}(r.a.Component));var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{basename:"/novel-badges"},r.a.createElement(h,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:x}),r.a.createElement(o.b,{exact:!0,path:"/search",component:F}),r.a.createElement(o.b,{exact:!0,path:"/badges",component:J}),r.a.createElement(o.b,{exact:!0,path:"/badges/new",component:U}),r.a.createElement(o.b,{exact:!0,path:"/badges/RickAndMorty",component:K}),r.a.createElement(o.b,{path:"/404",component:Y}),r.a.createElement(o.a,{from:"*",to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.6ed8b160.chunk.js.map