(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0rid":function(t,e,i){"use strict";i.r(e);var n=i("3Pt+"),r=i("ofXK"),o=i("tyNb");class c{constructor(t){this._id=t.id,this._filter=t.filter,this._name=t.name}get id(){return this._id}get filter(){return this._filter}get name(){return this._name}}class s{constructor(t){this._id=t.id,this._categoryFilter=t.categoryFilter,this._categoryName=t.categoryName,this._name=t.name,this._img=t.img,this._link=t.link}get id(){return this._id}get categoryFilter(){return this._categoryFilter}get categoryName(){return this._categoryName}get name(){return this._name}get img(){return this._img}get link(){return this._link}}var a=i("fXoL"),l=i("EnSQ"),g=i("5dVO");let d=(()=>{class t{constructor(){this.title="",this.sectionTitle="",this.sections=[],this.heightCorrector=0,this.animationActive=!1}ngOnInit(){setTimeout(()=>this._init(),100)}_init(){this.sectionTitle=this.title,this.sections=this._findSections(),this.heightCorrector=parseInt(`${$(window).innerHeight()/2}`)}_findSections(){const t=[];return $("[id]").each((e,i)=>{const n=$(i).data("title");if(n){const e=$(i).attr("id"),r=parseInt($(i).offset().top);t.push({id:e,title:n,pos:r})}}),t}onScroll(){if(this.animationActive)return;const t=parseInt($(document).scrollTop());let e=null;for(let i=0;i<this.sections.length;i++){const n=this.sections[i];t+this.heightCorrector>=n.pos&&(e=n)}e&&this.sectionTitle===e.title||(e||this.sectionTitle!==this.title)&&(this.animationActive=!0,this._changeSectionAnimation(e?e.title:this.title,()=>{this.animationActive=!1}))}_changeSectionAnimation(t,e=(()=>{})){const i=$(".section-slider").innerWidth(),n=document.getElementsByClassName("section-slider-title")[0],r=document.getElementsByClassName("section-slider-bg2")[0],o=i;gsap.to(r,0,{x:-i}),gsap.to(r,.4,{x:0,delay:0,ease:"Expo.easeInOut"}),gsap.to(n,.4,{opacity:0,onComplete:()=>{this.sectionTitle=t,gsap.to(n,.4,{opacity:1})}}),gsap.to(r,.4,{x:o,delay:.6,ease:"Expo.easeInOut",onComplete:()=>{e()}})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Db({type:t,selectors:[["s-section-slider"]],hostBindings:function(t,e){1&t&&a.Ub("scroll",(function(t){return e.onScroll(t)}),!1,a.cc)},inputs:{title:"title"},decls:5,vars:1,consts:[[1,"section-slider"],[1,"section-slider-bg1"],[1,"section-slider-bg2"],[1,"section-slider-title"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Kb(1,"div",1),a.Kb(2,"div",2),a.Mb(3,"h3",3),a.ic(4),a.Lb(),a.Lb()),2&t&&(a.zb(4),a.jc(e.sectionTitle))},styles:[".section-slider[_ngcontent-%COMP%]{position:relative;background:var(--primary-700);color:var(--primary-50);width:100%;height:100%;overflow:hidden}.section-slider[_ngcontent-%COMP%]   .section-slider-title[_ngcontent-%COMP%]{position:absolute;z-index:3;bottom:2rem;text-align:center;color:var(--primary-50);font-size:4.4rem;text-transform:uppercase}.section-slider[_ngcontent-%COMP%]   .section-slider-title[_ngcontent-%COMP%]:before{left:calc(50% - 3rem);margin-bottom:.6rem;top:unset;bottom:0;width:6rem;height:4px}.section-slider[_ngcontent-%COMP%]   .section-slider-bg1[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;height:100%;background-image:url(/assets/img/1.jpg)}.section-slider[_ngcontent-%COMP%]   .section-slider-bg2[_ngcontent-%COMP%]{position:absolute;z-index:2;background:var(--primary-900);width:100%;height:100%;transform:translateX(-100%)}"]}),t})();var m=i("+NYR");function h(t,e){if(1&t&&(a.Mb(0,"div",9),a.ic(1),a.Lb()),2&t){const t=e.$implicit;a.Ab("data-filter",t.filter),a.zb(1),a.jc(t.name)}}let b=(()=>{class t{constructor(t){this.navigationService=t,this.categories=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(m.a))},t.\u0275cmp=a.Db({type:t,selectors:[["s-portfolio-header"]],inputs:{categories:"categories"},decls:11,vars:1,consts:[[1,"container-fluid"],[1,"row","gallery-header"],[1,"col-auto","d-flex","align-items-center","pl-5"],["class","gallery-filter",4,"ngFor","ngForOf"],[1,"col-auto","m-auto"],[1,"col-auto","right-navbar"],[1,"gallery-counter"],["id","gallery-count"],["id","gallery-total"],[1,"gallery-filter"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.Mb(2,"div",2),a.hc(3,h,2,2,"div",3),a.Lb(),a.Kb(4,"div",4),a.Mb(5,"div",5),a.Mb(6,"div",6),a.Mb(7,"div",7),a.ic(8,"0"),a.Lb(),a.Mb(9,"div",8),a.ic(10,"0"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(3),a.Zb("ngForOf",e.categories))},directives:[r.i],styles:['.gallery-header[_ngcontent-%COMP%]{background:var(--primary-900);height:var(--header-height);width:100%;overflow-x:auto;overflow-y:hidden}.right-navbar[_ngcontent-%COMP%]{background:var(--primary-800);height:100%;display:flex;align-items:center;padding-left:1rem}.right-navbar[_ngcontent-%COMP%]:before{content:"";position:absolute;background:var(--secondary);left:-.3rem;width:.5rem;height:3.6rem;top:calc(50% - 1.8rem)}.gallery-counter[_ngcontent-%COMP%]{width:18rem;display:flex;align-items:center}.gallery-counter[_ngcontent-%COMP%]   #gallery-count[_ngcontent-%COMP%], .gallery-counter[_ngcontent-%COMP%]   #gallery-total[_ngcontent-%COMP%]{font-size:1.4rem;width:50%;text-align:center;padding:1.1rem 0}.gallery-counter[_ngcontent-%COMP%]   #gallery-count[_ngcontent-%COMP%]{color:var(--primary-50)}.gallery-counter[_ngcontent-%COMP%]   #gallery-total[_ngcontent-%COMP%]{border-left:1px solid var(--primary-300);color:var(--secondary)}.gallery-filter[_ngcontent-%COMP%]{background:var(--primary-900);display:inline-block;font-size:1.4rem;padding:0 2rem;color:var(--primary-50);cursor:pointer;height:var(--header-height);line-height:var(--header-height)}.active[_ngcontent-%COMP%], .gallery-filter[_ngcontent-%COMP%]:hover{color:var(--secondary)}.active[_ngcontent-%COMP%]{background:var(--primary-800)}']}),t})();function p(t,e){if(1&t){const t=a.Nb();a.Mb(0,"div",3),a.Mb(1,"div",4),a.Mb(2,"div",5),a.Ub("click",(function(){a.dc(t);const i=e.$implicit;return a.Wb().navigationService.loadPage(i.link,i.name)})),a.Kb(3,"div",6),a.Mb(4,"div",7),a.Mb(5,"span"),a.ic(6),a.Lb(),a.ic(7),a.Lb(),a.Lb(),a.Mb(8,"div",8),a.Ub("click",(function(){a.dc(t);const i=e.$implicit;return a.Wb().navigationService.loadPage(i.link,i.name)})),a.Mb(9,"span",9),a.ic(10),a.Lb(),a.Lb(),a.Mb(11,"div",10),a.ic(12),a.Lb(),a.Lb(),a.Lb()}if(2&t){const t=e.$implicit;a.Zb("ngClass",t.categoryFilter.replace(".","")),a.zb(6),a.jc(t.name[0]),a.zb(1),a.kc("",t.name.split(" ")[0].substr(1)," "),a.zb(3),a.jc(t.name),a.zb(2),a.jc(t.categoryName)}}let u=(()=>{class t{constructor(t){this.navigationService=t,this.items=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(m.a))},t.\u0275cmp=a.Db({type:t,selectors:[["s-portfolio-gallery"]],inputs:{items:"items"},decls:3,vars:1,consts:[[1,"container"],[1,"row","gallery-container"],["class","gallery-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"gallery-item",3,"ngClass"],[1,"item-content"],[1,"picture",3,"click"],[1,"picture-bg"],[1,"picture-text"],[1,"title",3,"click"],[1,"title-text"],[1,"category"]],template:function(t,e){1&t&&(a.Mb(0,"div",0),a.Mb(1,"div",1),a.hc(2,p,13,5,"div",2),a.Lb(),a.Lb()),2&t&&(a.zb(2),a.Zb("ngForOf",e.items))},directives:[r.i,r.h],styles:[".gallery-container[_ngcontent-%COMP%]{overflow:hidden;padding:5rem 0}.gallery-item[_ngcontent-%COMP%]{width:33.33%}.item-content[_ngcontent-%COMP%]{width:calc(100% - 4rem);padding:2rem 0;margin:2rem}.item-content[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{position:relative;width:100%;height:20rem;border:.1rem solid var(--primary-100);display:flex;align-items:center}.item-content[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   .picture-bg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background:var(--primary-800);background-image:url(/assets/img/1.jpg);background-position:50%;background-size:cover;transition:all .2s linear}.item-content[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]   .picture-text[_ngcontent-%COMP%]{position:relative;width:100%;color:var(--primary-50);font-size:5.4rem;text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden;padding:0 1rem}.item-content[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]:hover   .picture-bg[_ngcontent-%COMP%]{transform:scale(1.1)}.item-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;color:var(--primary-900);font-size:1.8rem;font-weight:700;margin:2rem 0 1rem}.item-content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.4rem}.item-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{color:var(--primary-900)}.item-content[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%], .item-content[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{cursor:pointer}.item-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]:hover{color:var(--secondary)}@media (max-width:1024px){.gallery-item[_ngcontent-%COMP%]{width:50%}}@media (max-width:600px){.gallery-item[_ngcontent-%COMP%]{width:100%}}"]}),t})();const v=[{path:"",component:(()=>{class t{constructor(t,e){this.dataService=t,this.loaderService=e,this.categories=[],this.items=[]}ngOnInit(){this.dataService.getProjectsCategories().subscribe(t=>{this.categories=[],t.forEach(t=>{this.categories.push(new c(t))})}),this.dataService.getProjects().subscribe(t=>{this.items=[],t.forEach(t=>{this.items.push(new s(t))})}),setTimeout(()=>this._init(),100)}_init(){const t=this;this.loaderService.loadScript("assets/js/isotope.pkgd-v3.0.6.min.js").then(()=>{t.$grid=$(".gallery-container").isotope({itemSelector:".gallery-item",layoutMode:"fitRows",percentPosition:!0});const e=$(".gallery-filter");e.on("click",(function(){const i=$(this).attr("data-filter");t.$grid.isotope({filter:i}),e.removeClass("active"),$(this).addClass("active"),setTimeout(()=>t._updateGalleryCounter(),500),gsap.to(window,{duration:0,scrollTo:0})})),setTimeout(()=>t._updateGalleryCounter(),500),e.first().addClass("active")})}_updateGalleryCounter(){const t=$(".gallery-item").length,e=t-$(".gallery-item").filter((t,e)=>"none"===$(e).css("display")).length;$("#gallery-count").text(e),$("#gallery-total").text(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(l.a),a.Jb(g.a))},t.\u0275cmp=a.Db({type:t,selectors:[["portfolio"]],decls:8,vars:3,consts:[[1,"_fixed-column-wrap"],[3,"title"],[1,"_column-wrap"],[1,"_section-header"],[3,"categories"],[1,"_section"],[3,"items"]],template:function(t,e){1&t&&(a.Mb(0,"div"),a.Mb(1,"div",0),a.Kb(2,"s-section-slider",1),a.Lb(),a.Mb(3,"div",2),a.Mb(4,"div",3),a.Kb(5,"s-portfolio-header",4),a.Lb(),a.Mb(6,"div",5),a.Kb(7,"s-portfolio-gallery",6),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(2),a.Zb("title","Portafolio"),a.zb(3),a.Zb("categories",e.categories),a.zb(2),a.Zb("items",e.items))},directives:[d,b,u],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[o.c.forChild(v)],o.c]}),t})();i.d(e,"PortfolioModule",(function(){return y}));let y=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[f,r.b,n.a,n.b]]}),t})()}}]);