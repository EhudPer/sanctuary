(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],c=0,m=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({AnimalEdit:"AnimalEdit",addAnimal:"addAnimal",animalDetails:"animalDetails",animalsList:"animalsList",auth:"auth"}[t]||t)+"."+{AnimalEdit:"71a3e20a",addAnimal:"9bee91e5",animalDetails:"579091fe",animalsList:"e36f5abb",auth:"3cd3ebee"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={AnimalEdit:1,addAnimal:1,animalDetails:1,animalsList:1,auth:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({AnimalEdit:"AnimalEdit",addAnimal:"addAnimal",animalDetails:"animalDetails",animalsList:"animalsList",auth:"auth"}[t]||t)+"."+{AnimalEdit:"8c25f4ab",addAnimal:"0200863d",animalDetails:"bada216e",animalsList:"f7af8cda",auth:"46ebf928"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],c=u.getAttribute("data-href");if(c===n||c===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var m=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,a[1](m)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"375e":function(t,e,a){"use strict";var n=a("f4d3"),r=a.n(n);r.a},4165:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},6711:function(t,e,a){"use strict";var n=a("4165"),r=a.n(n);r.a},"9c0c":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("a6f4"),o=a("5886"),i=(a("4413"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:{background:t.$vuetify.theme.themes.light.background},attrs:{id:"app","data-app":""}},[a("MainNavigation"),a("div",{staticClass:"view"},[a("router-view")],1),a("div",{staticClass:"loader"},[a("Loader")],1)],1)}),s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{fullscreen:""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-container",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.5)"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)},u=[],c=Object(r["c"])({name:"Loader",setup(t,{root:e}){const a=Object(r["a"])(()=>e.$store.getters.getLoadingStatus);return{loading:a}}}),m=c,d=a("2877"),p=Object(d["a"])(m,l,u,!1,null,"55f59531",null),g=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"main-navigation__nav"},[a("v-app-bar",{attrs:{color:"brown",dark:"",fixed:"",app:""}},[a("v-toolbar-title",[a("div",{staticClass:"main-navigation__nav__logo"},[t._v(" Sanctuary ")])]),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("v-toolbar-items",[a("v-btn",{attrs:{text:"",to:"/"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)]),t.token?a("v-btn",{attrs:{text:"",to:"/animals"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/animals"}},[t._v("Animals")])],1)]):t._e(),t.token?a("v-btn",{attrs:{text:"",to:"/auth"},on:{click:t.logoutHandler}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/auth"}},[t._v("Log out")])],1)]):t._e(),t.token?t._e():a("v-btn",{attrs:{text:"",to:"/auth"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/auth"}},[t._v("Auth")])],1)])],1):t._e(),t.$vuetify.breakpoint.mdAndUp?t._e():a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1),t.token?a("v-list-item",{attrs:{to:"/animals"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/animals"}},[t._v("Animals")])],1)],1):t._e(),t.token?t._e():a("v-list-item",{attrs:{to:"/auth"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/auth"}},[t._v("Auth")])],1)],1),t.token?a("v-list-item",{attrs:{to:"/auth"},on:{click:t.logoutHandler}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/auth"}},[t._v("Log out")])],1)],1):t._e()],1)],1)],1)],1)},f=[],v=a("74ca"),k=a("478e"),y=a("2bf2"),A=new v["a"]({link:new k["a"]({uri:"http://localhost:8000/graphql"}),cache:new y["a"]}),b=a("2f62"),w=a("9530"),_=a.n(w);n["default"].use(b["a"]);const S={getLoadingStatus:t=>t.loading,getToken:t=>t.token,getAnimals:t=>t.animals,getAnimalById:t=>e=>t.animals.find(t=>t._id===e)},I={toggleLoader(t,e){t.loading=e},initTokenState:(t,e)=>{t.token=e?localStorage.getItem("token"):null},updateTokenState(t,e){t.token=e},setAnimal(t,e){t.animal=e},setAnimals(t,e){t.animals=e},createAnimalInStore(t,e){const a=t.animals.slice();a.push(e);const n=a;t.animals=n},updateAnimalInStore(t,e){const a=t.animals.findIndex(t=>t._id===e._id),n=t.animals.slice();n[a]=e;const r=n;t.animals=r},deleteAnimalFromStore(t,{_id:e}){const a=t.animals.slice(),n=a.findIndex(t=>t._id===e);a.splice(n,1);const r=a;t.animals=r}},E={async togLoading({commit:t},{loadingStatus:e}){t("toggleLoader",e)},async initTokenStateAction({commit:t}){const e=localStorage.getItem("token")?await L(localStorage.getItem("token")):null;t("initTokenState",e)},async loginUser({commit:t},{userToAuthFields:e}){try{const a=await A.query({query:_.a`
          query login($userInput: UserInput!) {
            login(input: $userInput) {
              userId
              token
              tokenExpiration
            }
          }
        `,variables:{userInput:{email:e.userEmail,password:e.userPassword}}}),n=a.data.login.token;return j(n),t("updateTokenState",n),"success"}catch(a){throw new Error(a)}},async isAuthToken({commit:t},e){try{const t=await A.query({query:_.a`
          query validateToken($token: String!) {
            validateToken(token: $token)
          }
        `,variables:{token:e}}),a=t.data.validateToken;return a}catch(a){throw new Error(a)}},async createUser({commit:t},{userToAuthFields:e}){try{const a=await A.mutate({mutation:_.a`
          mutation createUser($userInput: UserInput!) {
            createUser(input: $userInput) {
              userId
              token
            }
          }
        `,variables:{userInput:{email:e.userEmail,password:e.userPassword}}}),n=a.data.createUser.token;return j(n),t("updateTokenState",n),"success"}catch(a){throw new Error(a)}},async signinOrSignupGoogle({commit:t},{token:e}){try{const a=await A.query({query:_.a`
          query signGoogle($token: String!) {
            signGoogle(token: $token) {
              token
              showToast
            }
          }
        `,variables:{token:e}}),n=a.data.signGoogle.token;return j(n),t("updateTokenState",e),{isSuccess:!0,showToast:a.data.signGoogle.showToast}}catch(a){throw console.log("error obj: "),console.log(a),new Error(a)}},async linkPassword({commit:t},{tokenAndPassword:e}){const{token:a,password:n}=e;try{const e=await A.query({query:_.a`
          query linkPassword($tokenAndPassword: TokenAndPassword!) {
            linkPassword(tokenAndPassword: $tokenAndPassword) {
              token
            }
          }
        `,variables:{tokenAndPassword:{token:a,password:n}}}),r=e.data.linkPassword.token;return j(r),t("updateTokenState",r),{isSuccess:!0,showToast:!1}}catch(r){throw new Error(r)}},async fetchAnimals({commit:t}){try{const e=await A.query({query:_.a`
          query Animals {
            animals {
              _id
              name
              type
              image_url
            }
          }
        `,context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("setAnimals",e.data.animals),e.data.animals}catch(e){throw new Error(e)}},async createAnimal({commit:t},{animalToCreateFields:e}){try{const a=await A.mutate({mutation:_.a`
          mutation createAnimal($animalInput: AnimalInput!) {
            createAnimal(input: $animalInput) {
              _id
              name
              type
              image_url
            }
          }
        `,variables:{animalInput:{name:e.name,type:e.type,image_url:e.image_url}},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("createAnimalInStore",a.data.createAnimal),a.data.createAnimal}catch(a){throw new Error(a)}},async updateAnimal({commit:t},{updatedAnimalFields:e}){try{const a=await A.mutate({mutation:_.a`
          mutation updateAnimal(
            $animalId: String!
            $animalInput: AnimalInput!
          ) {
            updateAnimal(_id: $animalId, input: $animalInput) {
              _id
              name
              type
              image_url
            }
          }
        `,variables:{animalId:e._id,animalInput:{name:e.name,type:e.type,image_url:e.image_url}},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("updateAnimalInStore",a.data.updateAnimal),a.data.updateAnimal}catch(a){throw new Error(a)}},async deleteAnimal({commit:t},{animalId:e}){try{const a=await A.mutate({mutation:_.a`
          mutation deleteAnimal($animalId: String!) {
            deleteAnimal(_id: $animalId) {
              _id
            }
          }
        `,variables:{animalId:e},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("deleteAnimalFromStore",a.data.deleteAnimal),a.data.deleteAnimal}catch(a){throw new Error(a)}}},$={token:null,animals:[],loading:!1};var T=new b["a"].Store({getters:S,mutations:I,actions:E,state:$});const j=t=>{localStorage.setItem("token",t)},L=async t=>await T.dispatch("isAuthToken",t),O=async t=>{localStorage.removeItem("token"),t.$store.commit("updateTokenState",null),t.$store.commit("setAnimals",[]),A.resetStore(),t.$router.push("/auth")};var x=Object(r["c"])({name:"MainNavigation",setup(t,{root:e}){const a=Object(r["a"])(()=>e.$store.getters.getToken),n=()=>{O(e)};return{token:a,logoutHandler:n}}}),P=x,q=(a("375e"),Object(d["a"])(P,h,f,!1,null,"edf54d06",null)),C=q.exports,D=Object(r["c"])({name:"App",components:{MainNavigation:C,Loader:g},setup(t,{root:e}){Object(r["d"])(async()=>{console.log("ss");try{await e.$store.dispatch("initTokenStateAction")}catch(t){console.log(t)}})}}),F=D,M=(a("5c0b"),Object(d["a"])(F,i,s,!1,null,null,null)),U=M.exports,B=a("8c4f"),H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("h1",{staticClass:"page-title"},[t._v("Welcome to Sanctuary")]),n("img",{attrs:{src:a("d495"),alt:"Home"}}),n("p",[t._v(" Mange your sanctuary and keep track of all your animals related information ")]),n("p",[t._v(" Mange your sanctuary and keep track of all your animals related information place holder. ")]),n("p",[t._v(" Mange your sanctuary and keep track of all your animals related information place holder. ")])])}],G=Object(r["c"])({name:"HomePage",setup(t,{root:e}){return Object(r["d"])(()=>{"complete"!==document.readyState&&e.$store.dispatch("togLoading",{loadingStatus:!0})}),Object(r["e"])(()=>{window.onload=function(){e.$store.dispatch("togLoading",{loadingStatus:!1})}}),{}}}),z=G,J=(a("6711"),Object(d["a"])(z,H,N,!1,null,"e4735b7a",null)),K=J.exports;n["default"].use(B["a"]);const W=[{path:"/",name:"Home",component:K},{path:"/auth",name:"Auth",component:()=>a.e("auth").then(a.bind(null,"2fef"))},{path:"/animals",name:"AnimalsList",component:()=>a.e("animalsList").then(a.bind(null,"a521")),meta:{requiresAuth:!0}},{path:"/animals/add",name:"AddAnimal",component:()=>a.e("addAnimal").then(a.bind(null,"c8b2")),meta:{requiresAuth:!0}},{path:"/animals/:animalId",name:"AnimalDetails",component:()=>a.e("animalDetails").then(a.bind(null,"dec9")),meta:{requiresAuth:!0}},{path:"/animals/edit/:animalId",name:"AnimalEdit",component:()=>a.e("AnimalEdit").then(a.bind(null,"c317")),meta:{requiresAuth:!0}}],Q=new B["a"]({mode:"history",base:"/",routes:W});Q.beforeEach(async(t,e,a)=>{const n=!!localStorage.getItem("token")&&await L(localStorage.getItem("token")),r=t.matched.some(t=>t.meta.requiresAuth);r&&!n?a("auth"):"/auth"===t.path.toString()&&n?a("/animals"):a()});var R=Q,V=a("ce5b"),X=a.n(V);a("bf40");n["default"].use(X.a);var Y=new X.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#b5651d",secondary:"#424242",accent:"#82B1FF",error:"#D62E1F",info:"#0457E7",success:"#018744",warning:"#FFA700",background:"#eff2f5"}}}});a("e792"),a("d5e8"),a("5363");n["default"].use(r["b"]),n["default"].use(o["a"]),new n["default"]({store:T,vuetify:Y,router:R,render:t=>t(U)}).$mount("#app")},d495:function(t,e,a){t.exports=a.p+"img/home.0e2af50e.jpeg"},f4d3:function(t,e,a){}});
//# sourceMappingURL=app.169318fe.js.map