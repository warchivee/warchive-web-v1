(this.webpackJsonpwarchive_client_app=this.webpackJsonpwarchive_client_app||[]).push([[0],{47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(20),n=a.n(s),r=a(11),l=a.n(r),o=a(21),i=a(5),d=a(7),j=a(3),b=a(2),m=a(22),u=a.n(m),h=a(23),O=(a(47),a(0));var f=function(e){var t=e.wata_id,a=e.title,c=e.creator,s=e.category,n=e.genre,r=e.keywords,l=e.cautions,o=e.platforms,i=e.thumnail,d=e.bookmark,j=e.add_bookmark,b=e.delete_bookmark,m={backgroundImage:"url(".concat(i,")"),backgroundSize:"100%"};return Object(O.jsxs)("div",{className:"wata",style:m,children:[Object(O.jsxs)("div",{className:"wata__header",children:[Object(O.jsxs)("div",{className:"header__row header__titles",children:[Object(O.jsx)("h3",{className:"header__title",children:a}),Object(O.jsx)("span",{className:d?"header__bookmark bookmark":"header__bookmark",onClick:d?function(){return b(t)}:function(){return j(t)},children:Object(O.jsx)("i",{className:"fas fa-star"})})]}),Object(O.jsx)("div",{className:"header__row header__creator",children:Object(O.jsx)("span",{className:"wata__creator",children:c})}),Object(O.jsxs)("div",{className:"header__row header__categorys",children:[Object(O.jsxs)("span",{className:"categorys__category wata__category",children:["#",s]}),Object(O.jsxs)("span",{className:"categorys__category wata__genre",children:["#",n]})]})]}),Object(O.jsx)("div",{className:"wata__body",children:Object(O.jsxs)("div",{className:"body__column",children:[Object(O.jsx)("ul",{className:"wata__platforms",children:o.map((function(e,t){return Object(O.jsx)("li",{className:"platforms__platform",children:e.name.length>0?Object(O.jsx)("a",{href:e.url,target:"_blank",children:Object(O.jsx)("span",{children:e.name})}):Object(O.jsx)("span",{})},t)}))}),Object(O.jsx)("div",{className:"body__column",children:Object(O.jsx)("ul",{className:"wata__keywords",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"keywords__keyword",children:e.length>0?Object(O.jsxs)("span",{className:"keyword",children:["#",e]}):Object(O.jsx)("span",{})},t)}))})})]})}),Object(O.jsx)("div",{className:"wata__footer",children:Object(O.jsx)("ul",{className:"footer__cautions",children:l.map((function(e,t){return Object(O.jsx)("li",{className:"cautions__caution",children:e.length>0?Object(O.jsxs)("div",{className:"caution",children:["#",e]}):Object(O.jsx)("span",{})},t)}))})})]})};a(49);function _(e){return Object(O.jsx)("div",{className:"header-container",children:Object(O.jsxs)("div",{className:"header-contents",children:[Object(O.jsxs)("div",{className:"header-contents__col",children:[Object(O.jsx)("div",{className:"header-contents-col__title",children:Object(O.jsx)("a",{href:".",children:Object(O.jsx)("img",{className:"title__logo",src:"https://i.ibb.co/WtWVG8r/logo.png",alt:"warchive logo"})})}),Object(O.jsxs)("span",{className:e.isBookmark?"header-contents-col__icon open_bookmark":"header-contents-col__icon",onClick:e.open_bookmark,children:[Object(O.jsx)("i",{className:"fas fa-star"}),Object(O.jsx)("span",{className:"icon__label",children:"\uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d"})]}),Object(O.jsxs)("span",{className:"header-contents-col__icon",onClick:e.open_mail,children:[Object(O.jsx)("i",{className:"fas fa-envelope"}),Object(O.jsx)("span",{className:"icon__label",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4/\ubb38\uc758"})]})]}),Object(O.jsx)("div",{className:"header-contents__col",children:Object(O.jsx)("span",{className:"header-contents-col__icon"})})]})})}a(50);var x=a(9),p=a.n(x);function g(e){return Object(O.jsx)("div",{className:"email-popup-overlay",style:e.open_mail_flag?{opacity:"1",zIndex:"4"}:{opacity:"0",zIndex:"-1"},children:Object(O.jsxs)("div",{className:"email-popup-container",children:[Object(O.jsxs)("div",{className:"email-popup-container__header",children:[Object(O.jsxs)("div",{className:"header__colomn",children:[Object(O.jsx)("i",{className:"fas fa-envelope"}),Object(O.jsx)("span",{className:"icon__label",children:"\ucd94\ucc9c\uc791\uc81c\ubcf4/\ubb38\uc758"})]}),Object(O.jsx)("div",{className:"header__colomn",children:Object(O.jsx)("div",{className:"close-button",onClick:function(){return e.close_mail(!1)},children:Object(O.jsx)("i",{className:"fas fa-times"})})})]}),Object(O.jsx)("div",{className:"popup__body",children:Object(O.jsxs)("form",{id:"contact-form",onSubmit:function(t){if(Object(x.init)("user_K30JVUSlyUKXFRdUVpXl5"),t.preventDefault(),""==e.name||""==e.email||1==e.tap&&""==e.recoContents||0==e.tap&&""==e.errContents)alert("\ube48\uce78\uc744 \uae30\uc785\ud574\uc8fc\uc138\uc694.");else if(a="\ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",0!=window.confirm(a)){if(console.log(e.isDisabled),e.isDisabled)return alert("\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."),!1;e.setIsDisabled(!0),p.a.sendForm("warchive","warchive_template",t.target).then((function(t){alert("\uc774\uba54\uc77c\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ud558\uc600\uc2b5\ub2c8\ub2e4."),e.init(),setTimeout((function(){e.setIsDisabled(!1)}),18e4)}),(function(e){alert("\uc774\uba54\uc77c \uc804\uc1a1\ud574 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}else alert("\uc774\uba54\uc77c \uc804\uc1a1\uc744 \ucde8\uc18c\ud558\uc600\uc2b5\ub2c8\ub2e4.");var a},children:[Object(O.jsx)("input",{type:"hidden",name:"contact_number"}),Object(O.jsxs)("div",{className:"body__colomn",children:[Object(O.jsx)("div",{className:"colomn__header",children:"\ubb38\uc758\uc790 \uc815\ubcf4"}),Object(O.jsxs)("div",{className:"colomn__body",children:[Object(O.jsx)("div",{className:"colomn-body__colomn",children:Object(O.jsx)("input",{type:"text",name:"user_name",value:e.name,onChange:e.handleName,placeholder:"\uc774\ub984"})}),Object(O.jsx)("div",{className:"colomn-body__colomn",children:Object(O.jsx)("input",{type:"email",name:"user_email",value:e.email,onChange:e.handleEmail,placeholder:"\uc774\uba54\uc77c"})})]})]}),Object(O.jsxs)("div",{className:"body__colomn",children:[Object(O.jsx)("div",{className:"colomn__header",children:"\ubb38\uc758\ub0b4\uc6a9"}),Object(O.jsxs)("div",{className:"colomn__body",children:[Object(O.jsx)("div",{className:"colomn-body__colomn",children:Object(O.jsxs)("div",{className:"radio-container",children:[Object(O.jsxs)("div",{className:"radio-box",onClick:function(){return e.setTap(!0)},children:[Object(O.jsx)("input",{type:"radio",name:"email_type",value:"\ucd94\ucc9c\uc791 \uc81c\ubcf4",id:"rec",checked:e.tap,readOnly:!0}),Object(O.jsx)("label",{htmlFor:"rec",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4"})]}),Object(O.jsxs)("div",{className:"radio-box",onClick:function(){return e.setTap(!1)},children:[Object(O.jsx)("input",{id:"etc",type:"radio",name:"email_type",value:"\uae30\ud0c0 \ubb38\uc758",checked:!e.tap,readOnly:!0}),Object(O.jsx)("label",{htmlFor:"etc",children:"\uae30\ud0c0 \ubb38\uc758"})]})]})}),Object(O.jsx)("div",{className:"colomn-body__colomn",children:e.tap?Object(O.jsx)("div",{className:"textarea",children:Object(O.jsx)("textarea",{name:"message",rows:"10",onChange:e.handleRecoContents,value:e.recoContents})}):Object(O.jsx)("textarea",{name:"message",rows:"10",onChange:e.handleErrContents,placeholder:"\uc624\ub958 \uc81c\ubcf4 \ubc0f \uae30\ud0c0 \ubb38\uc758\uc0ac\ud56d\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",value:e.errContents})})]})]}),Object(O.jsx)("input",{type:"submit",value:"\ubcf4\ub0b4\uae30"})]})})]})})}a(53);function v(){return Object(O.jsx)("div",{className:"loader",children:"Loading..."})}a(54);var y=function(e){return Object(O.jsx)("div",{className:"searchbar__container",children:Object(O.jsx)("input",{className:"search__input",type:"search",placeholder:"\uc81c\ubaa9/\uc791\uac00/\uac10\ub3c5\uba85\uc73c\ub85c \uac80\uc0c9",onChange:e.search_searchbar})})};a(55);function k(e){return Object(O.jsxs)("div",{id:e.id,className:"selected-keyword-list__bubble",onClick:function(){e.delete({name:e.name,value:e.value})},children:[Object(O.jsx)("span",{children:e.value}),Object(O.jsx)("i",{className:"fas fa-times"})]})}function w(e){return Object(O.jsxs)("div",{className:"category-box__bubble-list__bubble",children:[Object(O.jsx)("input",{type:"radio",id:e.id,name:e.name,value:e.value,readOnly:!0,checked:e.isChecked(e.value)}),Object(O.jsx)("label",{htmlFor:e.id,onClick:function(){e.setSelectedCategory(e.value),e.select({name:e.name,value:e.value}),e.setKeywordbarState(!e.keywordbarState)},children:e.value})]})}function N(e){return Object(O.jsxs)("div",{className:"bubble-list__bubble",children:[Object(O.jsx)("input",{type:"checkbox",id:e.id,name:e.name,value:e.value,readOnly:!0,checked:e.isChecked({name:e.name,value:e.value})}),Object(O.jsx)("label",{htmlFor:e.id,onClick:function(){e.select({name:e.name,value:e.value})},children:e.value})]})}function S(e){var t={display:"none"},a={display:"flex"},c=0;return Object(O.jsxs)("div",{className:"selected-keyword-box",style:e.state?a:t,children:[Object(O.jsx)("div",{className:"keywordbar__selected-keyword-list",style:e.state?{display:"inline-block"}:t,children:e.selected_keyword?e.selected_keyword.map((function(t){return Object(O.jsx)(k,{id:t.name+"selectbubble"+c++,name:t.name,value:t.value,delete:e.delete,state:e.state},t.name+"selectbubble"+c++)})):Object(O.jsx)("div",{})}),Object(O.jsx)("div",{style:e.state?a:t,children:Object(O.jsx)("div",{className:"init-keyword-button",onClick:function(){e.init()},children:"\uac80\uc0c9\ucd08\uae30\ud654"})})]})}function C(e){var t=0;return Object(O.jsx)("div",{className:"keywordbar__category-box",children:Object(O.jsx)("div",{className:"category-box__bubble-list",children:e.value.map((function(a){return Object(O.jsx)(w,{id:e.name+"bubble"+t++,name:e.name,value:a,select:e.select,setSelectedCategory:e.setSelectedCategory,delete:e.delete,isChecked:e.isChecked,setKeywordbarState:e.setKeywordbarState},e.name+"bubble"+t++)}))})})}function K(e){var t=0;return Object(O.jsxs)("div",{className:"keywordbar__keyword-box",children:[Object(O.jsx)("h3",{className:"keyword-box__header",children:e.header}),Object(O.jsx)("div",{className:"keyword-box__bubble-list",children:e.value.map((function(a){return Object(O.jsx)(N,{id:e.name+"bubble"+t++,name:e.name,value:a,select:e.select,delete:e.delete,isChecked:e.isChecked},e.name+"bubble"+t++)}))})]})}function P(e){return e.isBookmark&&e.firstStart&&(e.setKeywordbarState(!1),e.setSelectedKeywords([]),e.setFirstStart(!1)),Object(O.jsxs)("div",{className:"keywordbar",children:[Object(O.jsxs)("div",{class:"keywordbar__header",children:[Object(O.jsx)("div",{className:"keywordbar__button",onClick:function(){e.setKeywordbarState(!e.keywordbarState)},children:Object(O.jsxs)("span",{className:"button__text",children:["\ud0a4\uc6cc\ub4dc\ub85c \ucc3e\uae30"," ",e.keywordbarState?Object(O.jsx)("i",{className:"fas fa-angle-up"}):Object(O.jsx)("i",{className:"fas fa-angle-down"})]})}),Object(O.jsx)(C,{name:"category",header:"\uce74\ud14c\uace0\ub9ac",value:e.category,setSelectedCategory:e.setSelectedCategory,select:e.checkSelectedKeywords,isChecked:e.isIncludeSelectedCategory,setKeywordbarState:e.setKeywordbarState})]}),Object(O.jsxs)("div",{className:"keywordbar__container",style:e.keywordbarState?{display:"flex"}:{display:"none"},children:[Object(O.jsx)(K,{name:"genre",header:"\uc7a5\ub974",value:e.genre,select:e.checkSelectedKeywords,isChecked:e.isIncludeSelectedKeyword}),Object(O.jsx)("div",{className:"line"}),Object(O.jsx)(K,{name:"platform",header:"\ud50c\ub7ab\ud3fc",value:e.platform,select:e.checkSelectedKeywords,isChecked:e.isIncludeSelectedKeyword}),Object(O.jsx)("div",{className:"line"}),Object(O.jsx)(K,{name:"keyword",header:"\ud0a4\uc6cc\ub4dc",value:e.keyword,select:e.checkSelectedKeywords,isChecked:e.isIncludeSelectedKeyword})]}),Object(O.jsx)("div",{className:"selected-keyword-container",children:Object(O.jsx)(S,{selected_keyword:e.selectedKeywords,delete:e.deleteSelectedKeyword,init:e.initSelectedKeyword,state:e.keywordbarState})})]})}a(56);function I(e){return Object(O.jsx)("div",{className:"pagination",children:Object(O.jsxs)("ul",{pagination:"pagination",children:[Object(O.jsx)("li",{onClick:function(){e.paginate(1),window.scrollTo(0,0)},children:Object(O.jsx)("i",{class:"fas fa-angle-double-left"})}),e.pageNumbers.map((function(t){return Object(O.jsx)("li",{onClick:function(){e.paginate(t),window.scrollTo(0,0)},children:Object(O.jsx)("span",{className:t==e.currentPageNumber?"current_page":"page",children:t})},t)})),Object(O.jsx)("li",{onClick:function(){console.log(Math.ceil(e.searchResultLength/e.watasPerPage)),e.paginate(Math.ceil(e.searchResultLength/e.watasPerPage)),window.scrollTo(0,0)},children:Object(O.jsx)("i",{class:"fas fa-angle-double-right"})})]})})}a(57);function M(){return Object(O.jsx)("div",{className:"footer-container",children:Object(O.jsxs)("div",{className:"footer-contents",children:[Object(O.jsxs)("div",{className:"footer-contents__col",children:[Object(O.jsxs)("div",{className:"footer-contents-col__row",children:[Object(O.jsx)("span",{className:"email-label",children:"\uc5f0\ub77d\ucc98"}),Object(O.jsx)("span",{className:"email",children:"team.warchive@gmail.com"})]}),Object(O.jsxs)("div",{className:"footer-contents-col__row",children:[Object(O.jsx)("span",{className:"account-label",children:"\ud6c4\uc6d0\uacc4\uc88c"}),Object(O.jsx)("span",{className:"account",children:"\uc6b0\ub9ac 1002 343 024735 \u3147\u3148\u3147"})]})]}),Object(O.jsx)("div",{className:"footer-contents__col",children:Object(O.jsx)("a",{className:"footer-contents-col__row sns-logo",href:"https://twitter.com/Womynarchive",target:"_blank",children:Object(O.jsx)("i",{className:"fab fa-twitter-square"})})})]})})}a(58);function W(e){return Object(O.jsx)("div",{className:"mheader-container",children:Object(O.jsxs)("div",{className:"mheader-contents",children:[Object(O.jsxs)("div",{className:"mheader-contents__title",children:[Object(O.jsx)("div",{className:"menu",onClick:function(){return e.setIsMenu(!0)},children:Object(O.jsx)("i",{class:"fas fa-bars"})}),Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("a",{href:".",children:Object(O.jsx)("img",{src:"https://i.ibb.co/WtWVG8r/logo.png",alt:"warchive logo"})})}),Object(O.jsx)("div",{className:"icons",children:Object(O.jsx)("div",{className:e.isBookmark?"bookmark open_bookmark":"bookmark",onClick:e.open_bookmark,children:Object(O.jsx)("i",{className:"fas fa-star"})})})]}),Object(O.jsx)("div",{className:"mheader-contents__searchbar",children:Object(O.jsx)("input",{type:"search",placeholder:"\uc81c\ubaa9/\uc791\uac00/\uac10\ub3c5\uba85\uc73c\ub85c \uac80\uc0c9",onChange:e.search_searchbar})})]})})}a(59);function L(e){return Object(O.jsxs)("div",{className:"mMenu-overlay",style:e.isMenu?{display:"block"}:{display:"none"},children:[Object(O.jsxs)("div",{className:"mMenu-container",children:[Object(O.jsx)("div",{className:"mMenu-conatiner__closeBtn",onClick:function(){return e.setIsMenu(!1)},children:Object(O.jsx)("i",{class:"fas fa-times"})}),Object(O.jsxs)("div",{className:"mMenu-container__title",children:[Object(O.jsx)("img",{src:"https://i.ibb.co/6DbrQJB/2.png"}),Object(O.jsx)("div",{className:"mMenu-title__label",children:" \uc5ec\uc131\uc11c\uc0ac \uc544\uce74\uc774\ube0c \ud504\ub85c\uc81d\ud2b8"}),Object(O.jsx)("div",{className:"mMenu-title__title",children:"Warchive"})]}),Object(O.jsxs)("div",{className:"mMenu-container__contents",children:[Object(O.jsxs)("div",{className:"mMenu-container__contents__row bookmark",onClick:function(){e.open_bookmark(),e.setIsMenu(!1)},children:[Object(O.jsx)("i",{className:"fas fa-star"}),Object(O.jsx)("span",{className:"label",children:"\ubd81\ub9c8\ud06c \ubaa9\ub85d"})]}),Object(O.jsxs)("div",{className:"mMenu-container__contents__row mail",onClick:e.open_mail,children:[Object(O.jsx)("i",{className:"fas fa-envelope"}),Object(O.jsx)("span",{className:"label",children:"\ucd94\ucc9c\uc791 \uc81c\ubcf4/\ubb38\uc758"})]}),Object(O.jsx)("div",{className:"mMenu-container__contents__row"})]}),Object(O.jsxs)("div",{className:"mMenu-container__footer",children:[Object(O.jsx)("div",{className:"mMenu-sns",children:Object(O.jsx)("a",{className:"footer-contents-col__row sns-logo",href:"https://twitter.com/Womynarchive",target:"_blank",children:Object(O.jsx)("i",{className:"fab fa-twitter-square"})})}),Object(O.jsx)("div",{className:"one-bar"}),Object(O.jsxs)("div",{className:"mMenu-container__footer__row",children:[Object(O.jsx)("span",{className:"label",children:"\uc5f0\ub77d\ucc98"}),Object(O.jsx)("span",{className:"text",children:"team.warchive@gmail.com"})]}),Object(O.jsxs)("div",{className:"mMenu-container__footer__row",children:[Object(O.jsx)("span",{className:"label",children:"\ud6c4\uc6d0\uacc4\uc88c"}),Object(O.jsx)("span",{className:"text",children:"\uc6b0\ub9ac 1002 343 024735 \u3147\u3148\u3147"})]})]})]}),Object(O.jsx)("div",{className:"mMenu-closeArea",onClick:function(){return e.setIsMenu(!1)}})]})}a(60);function T(e){var t=e.wata_id,a=e.title,c=e.creator,s=e.category,n=e.genre,r=e.keywords,l=e.cautions,o=e.platforms,i=e.thumnail,d=e.bookmark,j=e.add_bookmark,b=e.delete_bookmark,m=e.overlay,u=e.setOverlayInfo,h={backgroundImage:"url(".concat(i,")"),backgroundSize:"cover",backgroundPosition:"50%"};return Object(O.jsxs)("div",{className:"mWata",children:[Object(O.jsx)("div",{className:"mWata-thumnail",style:h}),Object(O.jsxs)("div",{className:"mWata-contents",children:[Object(O.jsxs)("div",{className:"mWata-contents__header",children:[Object(O.jsx)("h3",{className:"header__title",children:a}),Object(O.jsx)("span",{className:d?"header__bookmark bookmark":"header__bookmark",onClick:d?function(){return b(t)}:function(){return j(t)},children:Object(O.jsx)("i",{className:"fas fa-star"})})]}),Object(O.jsx)("div",{className:"mWata-contents__creator",children:c}),Object(O.jsxs)("ul",{className:"mWata-contents__keywords",children:[Object(O.jsxs)("li",{children:["#",s]}),Object(O.jsxs)("li",{children:["#",n]}),r.map((function(e,t){return Object(O.jsx)("li",{className:"keywords__keyword",children:e.length>0?Object(O.jsxs)("span",{className:"keyword",children:["#",e]}):Object(O.jsx)("span",{})},t)}))]}),Object(O.jsx)("ul",{className:"mWata-thumnail__cautions",children:l.map((function(e,t){return Object(O.jsx)("li",{children:e.length>0?Object(O.jsxs)("div",{className:"caution",children:["#",e]}):Object(O.jsx)("span",{})},t)}))})]}),Object(O.jsx)("div",{className:"mWata-overlay",onClick:function(){return u({id:t,state:!m})},style:m?{opacity:1}:{opacity:0},children:m?Object(O.jsx)("ul",{className:"mWata-overlay__platforms",children:o.map((function(e,t){return Object(O.jsx)("li",{children:e.name.length>0?Object(O.jsx)("a",{href:e.url,target:"_blank",children:Object(O.jsx)("span",{children:e.name})}):Object(O.jsx)("span",{})},t)}))}):Object(O.jsx)("div",{})})]})}a(61);a(62);var B=function(){var e="watas0",t="watas1",a="bookmarks",s=Object(c.useState)([]),n=Object(b.a)(s,2),r=n[0],m=n[1],x=Object(c.useState)(!1),p=Object(b.a)(x,2),k=p[0],w=p[1],N=Object(c.useState)([]),S=Object(b.a)(N,2),C=S[0],K=S[1],B=Object(c.useState)(""),D=Object(b.a)(B,2),E=D[0],F=D[1],R=Object(c.useState)(!1),A=Object(b.a)(R,2),J=A[0],z=A[1],V=Object(c.useState)({category:[],genre:[],platform:[],keyword:[]}),U=Object(b.a)(V,2),q=U[0],G=U[1],Q=Object(c.useState)([]),X=Object(b.a)(Q,2),Y=X[0],H=X[1],Z=Object(c.useState)("\uc804\uccb4"),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)({category:[],genre:[],platform:[],keyword:[]}),ce=Object(b.a)(ae,2),se=ce[0],ne=ce[1],re=Object(c.useState)([]),le=Object(b.a)(re,2),oe=le[0],ie=le[1],de=Object(c.useState)([]),je=Object(b.a)(de,2),be=je[0],me=je[1],ue=Object(c.useState)({id:"",state:!1}),he=Object(b.a)(ue,2),Oe=he[0],fe=he[1],_e=Object(c.useState)(!1),xe=Object(b.a)(_e,2),pe=xe[0],ge=xe[1],ve=Object(c.useState)(!1),ye=Object(b.a)(ve,2),ke=ye[0],we=ye[1],Ne=Object(c.useState)(!0),Se=Object(b.a)(Ne,2),Ce=Se[0],Ke=Se[1],Pe=Object(c.useState)(!1),Ie=Object(b.a)(Pe,2),Me=Ie[0],We=(Ie[1],Object(c.useState)(!0)),Le=Object(b.a)(We,2),Te=Le[0],Be=Le[1],De=Object(c.useState)({currentPage:1,watasPerPage:12,pageLimit:2}),Ee=Object(b.a)(De,2),Fe=Ee[0],Re=Ee[1],Ae=Object(c.useState)(!1),Je=Object(b.a)(Ae,2),ze=Je[0],Ve=Je[1],Ue=Object(c.useState)(!0),qe=Object(b.a)(Ue,2),Ge=qe[0],Qe=qe[1],Xe="\uc81c\ubaa9:\n\ud0a4\uc6cc\ub4dc: \n\ud50c\ub7ab\ud3fc: \n\uac04\ub2e8\uc18c\uac1c: ",Ye=Object(c.useState)(""),He=Object(b.a)(Ye,2),Ze=He[0],$e=He[1],et=Object(c.useState)(""),tt=Object(b.a)(et,2),at=tt[0],ct=tt[1],st=Object(c.useState)(Xe),nt=Object(b.a)(st,2),rt=nt[0],lt=nt[1],ot=Object(c.useState)(""),it=Object(b.a)(ot,2),dt=it[0],jt=it[1],bt=function(e){return function(t,a){return mt(t[e],a[e])}},mt=function(e,t){function a(e){var t=e.toLowerCase().charCodeAt(0);return(44032<=t&&t<=55215?"1":12592<=t&&t<=12687?"2":97<=t&&t<=122?"3":"9")+e}return(e=a(e))<(t=a(t))?-1:e>t?1:0},ut=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):[]},ht=function(e,t){localStorage.setItem(e,JSON.stringify(t))},Ot=function(e){F(e.target.value),Re(Object(j.a)(Object(j.a)({},Fe),{},{currentPage:1,pageLimit:2}))},ft=function(e){H(e)},_t=function(){ft([]),kt("none","init",0)},xt=function(e){yt(e.name)||("category"==e.name?kt("category","category",e.value):(ft([].concat(Object(d.a)(Y),[e])),kt(e.name,"add",e.value)))},pt=function(e){if(yt(e)){var t=Y.filter((function(t){if(t.name!=e.name||t.value!=e.value)return t}));ft(t),kt(e.name,"delete",e.value)}},gt=function(e){yt(e)?pt(e):xt(e)},vt=function(e){return ee==e},yt=function(e){for(var t=0;t<Y.length;t++)if(Y[t].name==e.name&&Y[t].value==e.value)return!0;return!1},kt=function(e,t,a){F(""),Re(Object(j.a)(Object(j.a)({},Fe),{},{currentPage:1,pageLimit:2}));var c=[];"category"==e?c=q.category:"genre"==e?c=q.genre:"platform"==e?c=q.platform:"keyword"==e?c=q.keyword:"none"==e&&(c=[]),"category"==t?(G("\uc804\uccb4"==a?Object(i.a)({genre:[],platform:[],keyword:[]},e,["\uac8c\uc784","\ub9cc\ud654","\uc11c\uc801","\uc601\uc0c1"]):Object(i.a)({genre:[],platform:[],keyword:[]},e,[a])),ft([])):"add"==t?1!=c.includes(a)&&G(Object(j.a)(Object(j.a)({},q),{},Object(i.a)({},e,[].concat(Object(d.a)(c),[a])))):"delete"==t?G(Object(j.a)(Object(j.a)({},q),{},Object(i.a)({},e,function(e,t){return e.filter((function(e){if(e!=t)return e}))}(c,a)))):"init"==t&&G(Object(j.a)(Object(j.a)({},q),{},{genre:[],platform:[],keyword:[]}))},wt=function(e){we(e)},Nt=function(e){$e(e.target.value)},St=function(e){ct(e.target.value)},Ct=function(e){lt(e.target.value)},Kt=function(e){jt(e.target.value)},Pt=function(){w(!0),F(""),G({category:[],genre:[],platform:[],keyword:[]}),Re(Object(j.a)(Object(j.a)({},Fe),{},{currentPage:1}))},It=function(e){var t=ut(a);if(!t.includes(e)){var c=[].concat(Object(d.a)(t),[e]);alert("\ubd81\ub9c8\ud06c\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4."),ht(a,c),K(c)}},Mt=function(e){var t=ut(a).filter((function(t){if(t!=e)return t}));ht(a,t),K(t),alert("\ubd81\ub9c8\ud06c\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.")},Wt=function(e,t,a){var c=[];return c=e.slice(t,a),c},Lt=function(e){var t=[],a=Fe.currentPage-Fe.pageLimit,c=Fe.currentPage+Fe.pageLimit;c<2*Fe.pageLimit+1&&(c=2*Fe.pageLimit+1,a=1),a<1&&(a=1);var s=Math.ceil(e/Fe.watasPerPage);c>=s&&(c=s);for(var n=a;n<=c;n++)t.push(n);return t},Tt=function(e){Re(Object(j.a)(Object(j.a)({},Fe),{},{currentPage:e}))};return Object(c.useEffect)((function(){var a=!1,c=ut(t);function s(){return(s=Object(o.a)(l.a.mark((function s(){var n,r,o;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(n=[],"undefined"!=typeof c&&null!=c&&0!=c.length){s.next=10;break}return localStorage.removeItem(e),s.next=5,u.a.get("http://warchive.pythonanywhere.com/api/?type=data");case 5:r=s.sent,o=r.data,n=o.wata_list,s.next=11;break;case 10:n=c;case 11:"undefined"!=typeof n&&null!=n&&0!=n.length&&(m(n),Ke(!1),0==a&&(ht(t,n),m(n)));case 12:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return function(){s.apply(this,arguments)}(),function(){a=!0,Ke(!1)}}),[Me]),Object(c.useEffect)((function(){!function(e){var t=[],a=[],c=[],s=[];e&&e.map((function(e){return"\uc804\uccb4"==ee?(t.push(e.category.replace(/\s/g,"")),a.push(e.genre.replace(/\s/g,"")),e.platforms.map((function(e){""!=e.name&&c.push(e.name.replace(/\s/g,""))})),e.keywords.map((function(e){""!=e&&s.push(e.replace(/\s/g,""))}))):(t.push(e.category),ee==e.category&&(a.push(e.genre.replace(/\s/g,"")),e.platforms.map((function(e){""!=e.name&&c.push(e.name.replace(/\s/g,""))})),e.keywords.map((function(e){""!=e&&s.push(e.replace(/\s/g,""))})))),0})),ne({category:["\uc804\uccb4"].concat(Object(d.a)(Array.from(new Set(t)).sort(mt))),genre:Array.from(new Set(a)).sort(mt),platform:Array.from(new Set(c)).sort(mt),keyword:Array.from(new Set(s)).sort(mt)})}(r)}),[ee,r]),Object(c.useEffect)((function(){!function(){var e=[],t=r;if(k){var c=[];r.filter((function(e){ut(a).map((function(t){e.wata_id==t&&c.push(e)}))})),t=c}""!==E?e=t.filter((function(e){if(e.title.toLowerCase().replace(/\s/g,"").indexOf(E.toLowerCase().replace(/\s/g,""))>-1||e.creator.toLowerCase().replace(/\s/g,"").indexOf(E.toLowerCase().replace(/\s/g,""))>-1)return e})):0==q.category.length&&0==q.genre.length&&0==q.platform.length&&0==q.keyword.length?e=t:(e=[[],[],[],[]],q.category.map((function(a){var c=t.filter((function(e){if(e.category.replace(/\s/g,"")==a.replace(/\s/g,""))return e}));e[0]=e[0].concat(c)})),q.genre.map((function(a){var c=t.filter((function(e){if(e.genre.replace(/\s/g,"")==a.replace(/\s/g,""))return e}));e[1]=e[1].concat(c)})),q.platform.map((function(a){var c=[];t.filter((function(e){e.platforms.map((function(t){t.name.replace(/\s/g,"")==a.replace(/\s/g,"")&&c.push(e)}))})),e[2]=e[2].concat(c)})),q.keyword.map((function(a){var c=[];t.filter((function(e){e.keywords.map((function(t){t.replace(/\s/g,"")==a.replace(/\s/g,"")&&c.push(e)}))})),e[3]=e[3].concat(c)})),0==!(e=e.filter((function(e){if(e.length>0)return e}))).length&&(e=e.reduce((function(e,t){return e.filter((function(e){return t.includes(e)}))})))),e=Array.from(new Set(e)).sort(bt("title"));var s=Fe.currentPage*Fe.watasPerPage,n=s-Fe.watasPerPage;me(e.length),ie(Wt(e,n,s))}()}),[r,q,E,Fe,k,C,ee]),Object(h.useMediaQuery)({minWidth:600})?Object(O.jsxs)("div",{className:"root_container",children:[Object(O.jsx)(_,{open_bookmark:Pt,open_mail:wt,isBookmark:k}),Object(O.jsx)(g,{close_mail:wt,open_mail_flag:ke,tap:Ge,name:Ze,email:at,recoTem:Xe,errTem:"",recoContents:rt,errContents:dt,handleName:Nt,handleEmail:St,handleRecoContents:Ct,handleErrContents:Kt,setTap:Qe,init:function(){ct(""),$e(""),jt(""),lt(Xe)},isDisabled:ze,setIsDisabled:Ve}),Object(O.jsxs)("section",{className:"container",children:[Ce?Object(O.jsx)(v,{}):Object(O.jsxs)("div",{className:"container__box",children:[Object(O.jsxs)("div",{className:"serachbar",children:[Object(O.jsx)(P,{category:se.category,genre:se.genre,platform:se.platform,keyword:se.keyword,isBookmark:k,initSelectedKeyword:_t,addSelectedKeyword:xt,deleteSelectedKeyword:pt,checkSelectedKeywords:gt,isIncludeSelectedKeyword:yt,setKeywordbarState:z,setSelectedKeywords:ft,setFirstStart:Be,keywordbarState:J,selectedKeywords:Y,firstStart:Te,setSelectedCategory:te,isIncludeSelectedCategory:vt}),Object(O.jsx)(y,{search_searchbar:Ot})]}),""==E&&0==q.category.length&&0==q.genre.length&&0==q.platform.length&&0==q.keyword.length?Object(O.jsx)("div",{className:"result_title"}):Object(O.jsxs)("div",{className:"result_title",children:["\uac80\uc0c9 \uacb0\uacfc\ub294 \ucd1d ",be," \uac1c \uc785\ub2c8\ub2e4."]}),Object(O.jsx)("div",{className:"wata_list",children:oe.map((function(e){if("Y"!=e.isDelete){var t=!1;return ut(a).map((function(a){e.wata_id==a&&(t=!0)})),Object(O.jsx)(f,{wata_id:e.wata_id,title:e.title,creator:e.creator,category:e.category,genre:e.genre,keywords:e.keywords.sort(mt),cautions:e.cautions,platforms:e.platforms.sort(bt("name")),thumnail:e.thumnail,bookmark:t,add_bookmark:It,delete_bookmark:Mt},e.wata_id)}}))})]}),Object(O.jsx)(I,{watasPerPage:Fe.watasPerPage,searchResultLength:be,pageNumbers:Lt(be),paginate:Tt,currentPageNumber:Fe.currentPage}),k?Object(O.jsx)("div",{className:"bookmark-share__container",children:Object(O.jsx)("span",{className:"bookmark_caution",children:"\uc778\ud130\ub137 \uae30\ub85d,\ucfe0\ud0a4 \ub4f1\uc744 \uc0ad\uc81c\ud558\uc2dc\uba74 \uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d\uc774 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4."})}):Object(O.jsx)("div",{})]}),Object(O.jsx)(M,{})]}):Object(O.jsxs)("div",{className:"mRoot__container",children:[Object(O.jsx)(W,{setIsMenu:ge,open_bookmark:Pt,isBookmark:k,search_searchbar:Ot}),Object(O.jsx)(L,{isMenu:pe,setIsMenu:ge,open_mail:wt,open_bookmark:Pt}),Object(O.jsx)(g,{close_mail:wt,open_mail_flag:ke,tap:Ge,name:Ze,email:at,recoTem:Xe,errTem:"",recoContents:rt,errContents:dt,handleName:Nt,handleEmail:St,handleRecoContents:Ct,handleErrContents:Kt,setTap:Qe}),Object(O.jsx)(P,{category:se.category,genre:se.genre,platform:se.platform,keyword:se.keyword,isBookmark:k,initSelectedKeyword:_t,addSelectedKeyword:xt,deleteSelectedKeyword:pt,checkSelectedKeywords:gt,isIncludeSelectedKeyword:yt,setKeywordbarState:z,setSelectedKeywords:ft,setFirstStart:Be,keywordbarState:J,selectedKeywords:Y,firstStart:Te,setSelectedCategory:te,isIncludeSelectedCategory:vt}),Object(O.jsxs)("section",{className:"mContainer",children:[""==E&&0==q.category.length&&0==q.genre.length&&0==q.platform.length&&0==q.keyword.length?Object(O.jsx)("div",{className:"result_title"}):Object(O.jsxs)("div",{className:"result_title",children:["\uac80\uc0c9 \uacb0\uacfc\ub294 \ucd1d ",be," \uac1c \uc785\ub2c8\ub2e4."]}),Object(O.jsx)("div",{className:"mWata_list",children:oe.map((function(e){if("Y"!=e.isDelete){var t=!1;return ut(a).map((function(a){e.wata_id==a&&(t=!0)})),Object(O.jsx)(T,{wata_id:e.wata_id,title:e.title,creator:e.creator,category:e.category,genre:e.genre,keywords:e.keywords,cautions:e.cautions,platforms:e.platforms,thumnail:e.thumnail,bookmark:t,add_bookmark:It,delete_bookmark:Mt,overlay:Oe.id==e.wata_id&&Oe.state,setOverlayInfo:fe},e.wata_id)}}))})]}),Object(O.jsx)(I,{watasPerPage:Fe.watasPerPage,pageNumbers:Lt(be),paginate:Tt,currentPageNumber:Fe.currentPage,searchResultLength:be}),k?Object(O.jsx)("div",{className:"bookmark-share__container",children:Object(O.jsx)("span",{className:"bookmark_caution",children:"\uc778\ud130\ub137 \uae30\ub85d,\ucfe0\ud0a4 \ub4f1\uc744 \uc0ad\uc81c\ud558\uc2dc\uba74 \uc990\uaca8\ucc3e\uae30 \ubaa9\ub85d\uc774 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4."})}):Object(O.jsx)("div",{})]})};n.a.render(Object(O.jsx)(B,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cbe7a08c.chunk.js.map