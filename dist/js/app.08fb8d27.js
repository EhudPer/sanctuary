(function(t){function e(e){for(var n,r,s=e[0],l=e[1],u=e[2],c=0,m=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return l.p+"js/"+({AnimalEdit:"AnimalEdit",addAnimal:"addAnimal",animalDetails:"animalDetails",animalsList:"animalsList",auth:"auth",start:"start"}[t]||t)+"."+{AnimalEdit:"cb934806",addAnimal:"6080ecef",animalDetails:"1ea8b666",animalsList:"f562b1e9",auth:"8007822e",start:"9d5ce3a4"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={AnimalEdit:1,addAnimal:1,animalDetails:1,animalsList:1,auth:1,start:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({AnimalEdit:"AnimalEdit",addAnimal:"addAnimal",animalDetails:"animalDetails",animalsList:"animalsList",auth:"auth",start:"start"}[t]||t)+"."+{AnimalEdit:"f1de0f9d",addAnimal:"eff8e738",animalDetails:"f88c79b5",animalsList:"0750ea52",auth:"e761bdb0",start:"32cf5601"}[t]+".css",i=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===i))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],c=u.getAttribute("data-href");if(c===n||c===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],d.parentNode.removeChild(d),a(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var m=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",m.name="ChunkLoadError",m.type=n,m.request=r,a[1](m)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"6e29":function(t,e,a){"use strict";var n=a("a02b"),r=a.n(n);r.a},"9c0c":function(t,e,a){},a02b:function(t,e,a){},a1a5:function(t,e,a){t.exports=a.p+"img/ehud.f712bc98.jpg"},b2f1:function(t,e,a){"use strict";var n=a("b4d2"),r=a.n(n);r.a},b4d2:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("a6f4"),i=a("5886"),o=(a("4413"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app","data-app":""}},[a("MainNavigation"),a("div",{staticClass:"view"},[a("router-view")],1),a("div",{staticClass:"loader"},[a("Loader")],1)],1)}),s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{fullscreen:""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-container",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.5)"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1)],1)},u=[],c=Object(r["c"])({name:"Loader",setup(t,{root:e}){const a=Object(r["a"])(()=>e.$store.getters.getLoadingStatus);return{loading:a}}}),m=c,d=a("2877"),p=Object(d["a"])(m,l,u,!1,null,"55f59531",null),h=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"main-navigation__nav"},[a("v-app-bar",{attrs:{color:"sixth",dark:"",fixed:"",app:""}},[a("v-btn",{ref:"backBtn",staticClass:"back-btn hide tenth",on:{click:t.backBtnHandler}},[t._v(" Back ")]),a("div",{staticClass:"logo-and-dots-container"},[a("v-toolbar-title",[a("div",{staticClass:"main-navigation__nav__logo"},[t._v(" Sanctuary ")])]),a("v-spacer"),t.$vuetify.breakpoint.mdAndUp?a("v-toolbar-items",["Home"!==t.$route.name?a("v-btn",{attrs:{text:"",to:"/"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/"}},[t._v("About")])],1)]):t._e(),t.token&&t.hasAnimals&&"AnimalsList"!==t.$route.name?a("v-btn",{staticClass:"animals-list-btn",attrs:{text:"",to:"/animals"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/animals"}},[t._v("View Animals")])],1)]):t._e(),t.token&&"AddAnimal"!==t.$route.name?a("v-btn",{attrs:{text:"",to:"/animals/add"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/animals/add"}},[t._v("Add Animal")])],1)]):t._e(),t.token?a("v-btn",{attrs:{text:"",to:"/auth"},on:{click:t.logoutHandler}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/auth"}},[t._v("Log out")])],1)]):t._e(),t.token||"Auth"===t.$route.name?t._e():a("v-btn",{attrs:{text:"",to:"/auth"}},[a("span",{staticClass:"mr-2"},[a("router-link",{attrs:{to:"/auth"}},[t._v("Sign in")])],1)])],1):t._e(),t.$vuetify.breakpoint.mdAndUp?t._e():a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[a("v-list",["Home"!==t.$route.name?a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/"}},[t._v("About")])],1)],1):t._e(),t.token&&t.hasAnimals&&"AnimalsList"!==t.$route.name?a("v-list-item",{attrs:{to:"/animals"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/animals"}},[t._v("View Animals")])],1)],1):t._e(),t.token&&"AddAnimal"!==t.$route.name?a("v-list-item",{attrs:{to:"/animals/add"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/animals/add"}},[t._v("Add Animal")])],1)],1):t._e(),t.token||"Auth"===t.$route.name?t._e():a("v-list-item",{attrs:{to:"/auth"}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/auth"}},[t._v("Sign in")])],1)],1),t.token?a("v-list-item",{attrs:{to:"/auth"},on:{click:t.logoutHandler}},[a("v-list-item-title",[a("router-link",{attrs:{to:"/auth"}},[t._v("Log out")])],1)],1):t._e()],1)],1)],1)],1)],1)},f=[],v=a("74ca"),A=a("478e"),b=a("2bf2"),y=new v["a"]({link:new A["a"]({uri:"https://sanctuary-app.herokuapp.com/graphql"}),cache:new b["a"]}),k=a("2f62"),_=a("9530"),w=a.n(_);n["default"].use(k["a"]);const S={getLoadingStatus:t=>t.loading,getToken:t=>t.token,getAnimals:t=>t.animals,getAnimalById:t=>e=>t.animals.find(t=>t._id===e)},$={toggleLoader(t,e){t.loading=e},initTokenState:(t,e)=>{t.token=e?localStorage.getItem("token"):null},updateTokenState(t,e){t.token=e},setAnimal(t,e){t.animal=e},setAnimals(t,e){t.animals=e},createAnimalInStore(t,e){const a=t.animals.slice();a.push(e);const n=a;t.animals=n},updateAnimalInStore(t,e){const a=t.animals.findIndex(t=>t._id===e._id),n=t.animals.slice();n[a]=e;const r=n;t.animals=r},deleteAnimalFromStore(t,{_id:e}){const a=t.animals.slice(),n=a.findIndex(t=>t._id===e);a.splice(n,1);const r=a;t.animals=r}},I={async togLoading({commit:t},{loadingStatus:e}){t("toggleLoader",e)},async initTokenStateAction({commit:t}){const e=localStorage.getItem("token")?await L(localStorage.getItem("token")):null;t("initTokenState",e)},async loginUser({commit:t},{userToAuthFields:e}){try{const a=await y.query({query:w.a`
          query login($userInput: UserInput!) {
            login(input: $userInput) {
              userId
              token
              tokenExpiration
            }
          }
        `,variables:{userInput:{email:e.userEmail,password:e.userPassword}}}),n=a.data.login.token;return q(n),t("updateTokenState",n),"success"}catch(a){throw new Error(a)}},async isAuthToken({commit:t},e){try{const t=await y.query({query:w.a`
          query validateToken($token: String!) {
            validateToken(token: $token)
          }
        `,variables:{token:e}}),a=t.data.validateToken;return a}catch(a){throw new Error(a)}},async createUser({commit:t},{userToAuthFields:e}){try{const a=await y.mutate({mutation:w.a`
          mutation createUser($userInput: UserInput!) {
            createUser(input: $userInput) {
              userId
              token
            }
          }
        `,variables:{userInput:{email:e.userEmail,password:e.userPassword}}}),n=a.data.createUser.token;return q(n),t("updateTokenState",n),"success"}catch(a){throw new Error(a)}},async signinOrSignupGoogle({commit:t},{token:e}){try{const a=await y.query({query:w.a`
          query signGoogle($token: String!) {
            signGoogle(token: $token) {
              token
              showToast
            }
          }
        `,variables:{token:e}}),n=a.data.signGoogle.token;return q(n),t("updateTokenState",e),{isSuccess:!0,showToast:a.data.signGoogle.showToast}}catch(a){throw new Error(a)}},async linkPassword({commit:t},{tokenAndPassword:e}){const{token:a,password:n}=e;try{const e=await y.query({query:w.a`
          query linkPassword($tokenAndPassword: TokenAndPassword!) {
            linkPassword(tokenAndPassword: $tokenAndPassword) {
              token
            }
          }
        `,variables:{tokenAndPassword:{token:a,password:n}}}),r=e.data.linkPassword.token;return q(r),t("updateTokenState",r),{isSuccess:!0,showToast:!1}}catch(r){throw new Error(r)}},async fetchAnimals({commit:t}){try{const e=await y.query({query:w.a`
          query Animals {
            animals {
              _id
              name
              type
              medicineType
              dosage
              frequency
              timeUnit
              image_url
            }
          }
        `,context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("setAnimals",e.data.animals),e.data.animals}catch(e){throw new Error(e)}},async createAnimal({commit:t},{animalToCreateFields:e}){try{const a=await y.mutate({mutation:w.a`
          mutation createAnimal($animalInput: AnimalInput!) {
            createAnimal(input: $animalInput) {
              _id
              name
              type
              medicineType
              dosage
              frequency
              timeUnit
              image_url
            }
          }
        `,variables:{animalInput:{name:e.name,type:e.type,medicineType:e.medicineType,dosage:e.dosage,frequency:e.frequency,timeUnit:e.timeUnit,image_url:e.image_url}},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}}),n=0!==a.data.createAnimal.dosage?a.data.createAnimal.dosage:"",r={...a.data.createAnimal,dosage:n},i=0!==a.data.createAnimal.frequency?a.data.createAnimal.frequency:"",o={...r,frequency:i};return t("createAnimalInStore",o),o}catch(a){throw new Error(a)}},async updateAnimal({commit:t},{updatedAnimalFields:e}){try{const a=await y.mutate({mutation:w.a`
          mutation updateAnimal(
            $animalId: String!
            $animalInput: AnimalInput!
          ) {
            updateAnimal(_id: $animalId, input: $animalInput) {
              _id
              name
              type
              medicineType
              dosage
              frequency
              timeUnit
              image_url
            }
          }
        `,variables:{animalId:e._id,animalInput:{name:e.name,type:e.type,medicineType:e.medicineType,dosage:e.dosage,frequency:e.frequency,timeUnit:e.timeUnit,image_url:e.image_url}},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}}),n=0!==a.data.updateAnimal.dosage?a.data.updateAnimal.dosage:"",r={...a.data.updateAnimal,dosage:n},i=0!==a.data.updateAnimal.frequency?a.data.updateAnimal.frequency:"",o={...r,frequency:i};return t("updateAnimalInStore",o),o}catch(a){throw new Error(a)}},async deleteAnimal({commit:t},{animalId:e}){try{const a=await y.mutate({mutation:w.a`
          mutation deleteAnimal($animalId: String!) {
            deleteAnimal(_id: $animalId) {
              _id
            }
          }
        `,variables:{animalId:e},context:{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}});return t("deleteAnimalFromStore",a.data.deleteAnimal),a.data.deleteAnimal}catch(a){throw new Error(a)}}},E={token:null,animals:[],loading:!1};var T=new k["a"].Store({getters:S,mutations:$,actions:I,state:E});const q=t=>{localStorage.setItem("token",t)},L=async t=>await T.dispatch("isAuthToken",t),j=async t=>{localStorage.removeItem("token"),t.$store.commit("updateTokenState",null),t.$store.commit("setAnimals",[]),y.resetStore(),t.$router.push("/auth")};var x=Object(r["c"])({name:"MainNavigation",setup(t,{root:e}){const a=Object(r["g"])(),n=Object(r["a"])(()=>e.$store.getters.getToken),i=Object(r["a"])(()=>e.$store.getters.getAnimals.length);Object(r["h"])(()=>e.$route,t=>{if(!a.value)return;const e=a.value.$el;"Home"===t.name?e.classList.add("hide"):e.classList.remove("hide")});const o=()=>{j(e)},s=()=>{"Auth"===e.$route.name||"Start"===e.$route.name||"AnimalsList"===e.$route.name?e.$router.push({path:"/"}):"AddAnimal"===e.$route.name||"AnimalEdit"===e.$route.name||"AnimalDetails"===e.$route.name?e.$router.push({path:"/animals"}):e.$router.go(-1)};return{root:e,backBtn:a,token:n,hasAnimals:i,logoutHandler:o,backBtnHandler:s}}}),O=x,P=(a("b2f1"),Object(d["a"])(O,g,f,!1,null,"4f5f9846",null)),C=P.exports,U=Object(r["c"])({name:"App",components:{MainNavigation:C,Loader:h},setup(t,{root:e}){Object(r["d"])(async()=>{try{"complete"!==document.readyState&&e.$store.dispatch("togLoading",{loadingStatus:!0}),await e.$store.dispatch("initTokenStateAction");const t=e.$store.getters.getToken;let a;t&&(a=L(t)),0===e.$store.state.animals.length&&a&&await e.$store.dispatch("fetchAnimals")}catch(t){console.log(t)}}),Object(r["e"])(()=>{window.onload=function(){e.$store.dispatch("togLoading",{loadingStatus:!1})}})}}),B=U,D=(a("5c0b"),Object(d["a"])(B,o,s,!1,null,null,null)),H=D.exports,F=a("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[t._m(0),n("p",[t._v("Managing the caring for rescued animals (under development)")]),t._m(1),t._m(2),n("v-img",{staticClass:"profile",attrs:{src:a("a1a5")}}),t._m(3),t._m(4)],1)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Animal Sanctuary App")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("Frameworks:")]),t._v(" nodejs, express, apollo-graphql, mongoose, vue, vuex + "),a("a",{attrs:{href:"https://github.com/EhudPer/sanctuary",target:"_blank"}},[t._v("github")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("By "),a("b",[t._v("Ehud Perlman")]),t._v(", fullstack webapps developer")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v(" Email: "),a("a",{attrs:{href:"mailto:ehudperlman83@gmail.com"}},[t._v("ehudperlman83@gmail.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("i",[t._v("Have an interesting project - I’d love to hear from you! ")])])}],G=Object(r["c"])({name:"HomePage",setup(t,{root:e}){return Object(r["d"])(()=>{"complete"!==document.readyState&&e.$store.dispatch("togLoading",{loadingStatus:!0})}),Object(r["e"])(()=>{window.onload=function(){e.$store.dispatch("togLoading",{loadingStatus:!1})}}),{}}}),z=G,J=(a("6e29"),Object(d["a"])(z,M,N,!1,null,"5b6f0d71",null)),V=J.exports;n["default"].use(F["a"]);const K=[{path:"/",name:"Home",component:V},{path:"/auth",name:"Auth",component:()=>a.e("auth").then(a.bind(null,"2fef"))},{path:"/animals",name:"AnimalsList",component:()=>a.e("animalsList").then(a.bind(null,"a521")),meta:{requiresAuth:!0}},{path:"/start",name:"Start",component:()=>a.e("start").then(a.bind(null,"d701")),meta:{requiresAuth:!0}},{path:"/animals/add",name:"AddAnimal",component:()=>a.e("addAnimal").then(a.bind(null,"c8b2")),meta:{requiresAuth:!0}},{path:"/animals/:animalId",name:"AnimalDetails",component:()=>a.e("animalDetails").then(a.bind(null,"dec9")),meta:{requiresAuth:!0}},{path:"/animals/edit/:animalId",name:"AnimalEdit",component:()=>a.e("AnimalEdit").then(a.bind(null,"c317")),meta:{requiresAuth:!0}}],Q=new F["a"]({mode:"history",base:"/",routes:K});Q.beforeEach(async(t,e,a)=>{const n=!!localStorage.getItem("token")&&await L(localStorage.getItem("token")),r=t.matched.some(t=>t.meta.requiresAuth);r&&!n?a("auth"):"/auth"===t.path.toString()&&n?a("/animals"):a()});var R=Q,W=a("ce5b"),X=a.n(W);a("bf40");n["default"].use(X.a);var Y=new X.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#616852",secondary:"#b9baba",third:"#1a285a",fourth:"#69718c",fifth:"#798f6f",sixth:"#a99041",seventh:"#3b5842",eighth:"#ececeb",ninth:"#a89f6d",tenth:"#0f182f",eleventh:"#8c8b93",twelvth:"#333529",thirteenth:"#fffffff"}}}});a("e792"),a("d5e8"),a("5363");n["default"].use(r["b"]),n["default"].use(i["a"]),new n["default"]({store:T,vuetify:Y,router:R,render:t=>t(H)}).$mount("#app")}});
//# sourceMappingURL=app.08fb8d27.js.map