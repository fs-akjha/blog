!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ALb8:function(e,i,n){"use strict";n.r(i),n.d(i,"EditorModule",function(){return K});var o,a=n("ey9i"),c=n("lJxs"),s=n("JIr8"),l=n("fXoL"),u=n("tyNb"),b=((o=function(){function e(r,i,n){t(this,e),this.articlesService=r,this.router=i,this.userService=n}return r(e,[{key:"resolve",value:function(t,e){var r=this;return this.articlesService.get(t.params.slug).pipe(Object(c.a)(function(t){if(r.userService.getCurrentUser().username===t.author.username)return t;r.router.navigateByUrl("/")}),Object(s.a)(function(t){return r.router.navigateByUrl("/")}))}}]),e}()).\u0275fac=function(t){return new(t||o)(l.Pb(a.a),l.Pb(u.c),l.Pb(a.f))},o.\u0275prov=l.Eb({token:o,factory:o.\u0275fac}),o),f=n("M0ag"),p=n("3Pt+"),d=n("vWSW"),m=n("ofXK");function h(t,e){if(1&t){var r=l.Mb();l.Lb(0,"span",15),l.Lb(1,"i",16),l.Sb("click",function(){l.gc(r);var t=e.$implicit;return l.Ub().removeTag(t)}),l.Kb(),l.mc(2),l.Kb()}if(2&t){var i=e.$implicit;l.yb(2),l.oc(" ",i," ")}}var g,v,y,L=((g=function(){function e(r,i,n,o){t(this,e),this.articlesService=r,this.route=i,this.router=n,this.fb=o,this.article={},this.tagField=new p.c,this.errors={},this.isSubmitting=!1,this.articleForm=this.fb.group({title:"",description:"",body:""}),this.article.tagList=[]}return r(e,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe(function(e){e.article&&(t.article=e.article,t.articleForm.patchValue(e.article))})}},{key:"addTag",value:function(){var t=this.tagField.value;this.article.tagList.indexOf(t)<0&&this.article.tagList.push(t),this.tagField.reset("")}},{key:"removeTag",value:function(t){this.article.tagList=this.article.tagList.filter(function(e){return e!==t})}},{key:"submitForm",value:function(){var t=this;this.isSubmitting=!0,this.updateArticle(this.articleForm.value),this.articlesService.save(this.article).subscribe(function(e){return t.router.navigateByUrl("/article/"+e.slug)},function(e){t.errors=e,t.isSubmitting=!1})}},{key:"updateArticle",value:function(t){Object.assign(this.article,t)}}]),e}()).\u0275fac=function(t){return new(t||g)(l.Ib(a.a),l.Ib(u.a),l.Ib(u.c),l.Ib(p.b))},g.\u0275cmp=l.Cb({type:g,selectors:[["app-editor-page"]],decls:20,vars:5,consts:[[1,"editor-page"],[1,"container","page"],[1,"row"],[1,"col-md-10","offset-md-1","col-xs-12"],[3,"errors"],[3,"formGroup"],[3,"disabled"],[1,"form-group"],["formControlName","title","type","text","placeholder","Article Title",1,"form-control","form-control-lg"],["formControlName","description","type","text","placeholder","What's this article about?",1,"form-control"],["formControlName","body","rows","8","placeholder","Write your article (in markdown)",1,"form-control"],["type","text","placeholder","Enter tags",1,"form-control",3,"formControl","keyup.enter"],[1,"tag-list"],["class","tag-default tag-pill",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-lg","pull-xs-right","btn-primary",3,"click"],[1,"tag-default","tag-pill"],[1,"ion-close-round",3,"click"]],template:function(t,e){1&t&&(l.Lb(0,"div",0),l.Lb(1,"div",1),l.Lb(2,"div",2),l.Lb(3,"div",3),l.Jb(4,"app-list-errors",4),l.Lb(5,"form",5),l.Lb(6,"fieldset",6),l.Lb(7,"fieldset",7),l.Jb(8,"input",8),l.Kb(),l.Lb(9,"fieldset",7),l.Jb(10,"input",9),l.Kb(),l.Lb(11,"fieldset",7),l.Lb(12,"textarea",10),l.mc(13,"              "),l.Kb(),l.Kb(),l.Lb(14,"fieldset",7),l.Lb(15,"input",11),l.Sb("keyup.enter",function(){return e.addTag()}),l.Kb(),l.Lb(16,"div",12),l.lc(17,h,3,1,"span",13),l.Kb(),l.Kb(),l.Lb(18,"button",14),l.Sb("click",function(){return e.submitForm()}),l.mc(19," Publish Article "),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb(),l.Kb()),2&t&&(l.yb(4),l.ac("errors",e.errors),l.yb(1),l.ac("formGroup",e.articleForm),l.yb(1),l.ac("disabled",e.isSubmitting),l.yb(9),l.ac("formControl",e.tagField),l.yb(2),l.ac("ngForOf",e.article.tagList))},directives:[d.a,p.o,p.j,p.f,p.a,p.i,p.e,p.d,m.j],encapsulation:2}),g),w=[{path:"",component:L,canActivate:[a.b]},{path:":slug",component:L,canActivate:[a.b],resolve:{article:b}}],k=((y=r(function e(){t(this,e)})).\u0275fac=function(t){return new(t||y)},y.\u0275mod=l.Gb({type:y}),y.\u0275inj=l.Fb({imports:[[u.f.forChild(w)],u.f]}),y),K=((v=r(function e(){t(this,e)})).\u0275fac=function(t){return new(t||v)},v.\u0275mod=l.Gb({type:v}),v.\u0275inj=l.Fb({providers:[b],imports:[[f.a,k]]}),v)}}])}();