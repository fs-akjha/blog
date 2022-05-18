!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cRhG:function(i,n,r){"use strict";r.r(n),r.d(n,"ProfileModule",function(){return j});var o,c,a,s,u,f,l=r("ey9i"),b=r("JIr8"),p=r("fXoL"),v=r("tyNb"),d=((o=function(){function i(t,n){e(this,i),this.profilesService=t,this.router=n}return t(i,[{key:"resolve",value:function(e,i){var t=this;return this.profilesService.get(e.params.username).pipe(Object(b.a)(function(e){return t.router.navigateByUrl("/")}))}}]),i}()).\u0275fac=function(e){return new(e||o)(p.Pb(l.d),p.Pb(v.c))},o.\u0275prov=p.Eb({token:o,factory:o.\u0275fac}),o),g=r("M0ag"),h=r("juF/"),m=((a=function(){function i(t,n){e(this,i),this.route=t,this.router=n,this.articlesConfig={type:"all",filters:{}}}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe(function(i){e.profile=i.profile,e.articlesConfig={type:"all",filters:{}},e.articlesConfig.filters.author=e.profile.username})}}]),i}()).\u0275fac=function(e){return new(e||a)(p.Ib(v.a),p.Ib(v.c))},a.\u0275cmp=p.Cb({type:a,selectors:[["app-profile-articles"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,i){1&e&&p.Jb(0,"app-article-list",0),2&e&&p.ac("limit",10)("config",i.articlesConfig)},directives:[h.a],encapsulation:2}),a),y=((c=function(){function i(t,n){e(this,i),this.route=t,this.router=n,this.favoritesConfig={type:"all",filters:{}}}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.data.subscribe(function(i){e.profile=i.profile,e.favoritesConfig.filters.favorited=e.profile.username})}}]),i}()).\u0275fac=function(e){return new(e||c)(p.Ib(v.a),p.Ib(v.c))},c.\u0275cmp=p.Cb({type:c,selectors:[["app-profile-favorites"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,i){1&e&&p.Jb(0,"app-article-list",0),2&e&&p.ac("limit",10)("config",i.favoritesConfig)},directives:[h.a],encapsulation:2}),c),L=r("bOdf"),k=r("vkgz"),w=r("UCte"),K=function(){return["/settings"]},C=function(){return{exact:!0}},O=function(e){return["/profile",e]},I=function(e){return["/profile",e,"favorites"]},J=[{path:":username",component:(s=function(){function i(t,n){e(this,i),this.route=t,this.userService=n}return t(i,[{key:"ngOnInit",value:function(){var e=this;this.route.data.pipe(Object(L.a)(function(i){return e.profile=i.profile,e.userService.currentUser.pipe(Object(k.a)(function(i){e.currentUser=i,e.isUser=e.currentUser.username===e.profile.username}))})).subscribe()}},{key:"onToggleFollowing",value:function(e){this.profile.following=e}}]),i}(),s.\u0275fac=function(e){return new(e||s)(p.Ib(v.a),p.Ib(l.f))},s.\u0275cmp=p.Cb({type:s,selectors:[["app-profile-page"]],decls:26,vars:18,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"hidden","profile","toggle"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink","hidden"],[1,"ion-gear-a"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"]],template:function(e,i){1&e&&(p.Lb(0,"div",0),p.Lb(1,"div",1),p.Lb(2,"div",2),p.Lb(3,"div",3),p.Lb(4,"div",4),p.Jb(5,"img",5),p.Lb(6,"h4"),p.kc(7),p.Kb(),p.Lb(8,"p"),p.kc(9),p.Kb(),p.Lb(10,"app-follow-button",6),p.Sb("toggle",function(e){return i.onToggleFollowing(e)}),p.Kb(),p.Lb(11,"a",7),p.Jb(12,"i",8),p.kc(13," Edit Profile Settings "),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Lb(14,"div",2),p.Lb(15,"div",3),p.Lb(16,"div",4),p.Lb(17,"div",9),p.Lb(18,"ul",10),p.Lb(19,"li",11),p.Lb(20,"a",12),p.kc(21," My Posts "),p.Kb(),p.Kb(),p.Lb(22,"li",11),p.Lb(23,"a",12),p.kc(24," Favorited Posts "),p.Kb(),p.Kb(),p.Kb(),p.Kb(),p.Jb(25,"router-outlet"),p.Kb(),p.Kb(),p.Kb(),p.Kb()),2&e&&(p.yb(5),p.ac("src",i.profile.image,p.hc),p.yb(2),p.lc(i.profile.username),p.yb(2),p.lc(i.profile.bio),p.yb(1),p.ac("hidden",i.isUser)("profile",i.profile),p.yb(1),p.ac("routerLink",p.bc(11,K))("hidden",!i.isUser),p.yb(9),p.ac("routerLinkActiveOptions",p.bc(12,C))("routerLink",p.cc(13,O,i.profile.username)),p.yb(3),p.ac("routerLinkActiveOptions",p.bc(15,C))("routerLink",p.cc(16,I,i.profile.username)))},directives:[w.a,v.e,v.d,v.g],encapsulation:2}),s),resolve:{profile:d},children:[{path:"",component:m},{path:"favorites",component:y}]}],U=((f=function i(){e(this,i)}).\u0275fac=function(e){return new(e||f)},f.\u0275mod=p.Gb({type:f}),f.\u0275inj=p.Fb({imports:[[v.f.forChild(J)],v.f]}),f),j=((u=function i(){e(this,i)}).\u0275fac=function(e){return new(e||u)},u.\u0275mod=p.Gb({type:u}),u.\u0275inj=p.Fb({providers:[d],imports:[[g.a,U]]}),u)}}])}();