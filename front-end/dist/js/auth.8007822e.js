(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"2fef":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("v-card",{attrs:{"max-width":"343"}},[n("v-form",{ref:"myForm",staticClass:"mb-4",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("div",{staticClass:"form-sub-container"},[n("p",{staticClass:"or-title",class:t.isLogin?"hide":""},[t._v("link password:")]),n("div",{staticClass:"google-btn-and-fixer-container"},[n("div",{staticClass:"google-text-fixer"},[t._v("Sign in with Google")]),n("GoogleLogin",{staticClass:"google-signin-btn-wrapper",attrs:{params:t.params,renderParams:t.renderParams,onSuccess:t.onSuccess,onFailure:t.onFailure}})],1),t.isLogin?n("div",[n("v-btn",{staticClass:"demo-account-btn",on:{click:t.demoHandler}},[t._v(" Demo account ")])],1):t._e(),n("v-text-field",{attrs:{counter:t.isLogin?null:"30",rules:t.emailRules,type:"email",label:"Email",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),n("v-text-field",{attrs:{counter:t.isLogin?null:"30",rules:t.passwordRules,type:"password",label:"Password",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)}},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}}),t.isLogin?t._e():n("v-text-field",{attrs:{counter:t.isLogin?null:"30",rules:t.rePasswordRules,type:"password",label:"Confirm password",required:""},model:{value:t.reUserPassword,callback:function(e){t.reUserPassword=e},expression:"reUserPassword"}}),n("v-btn",{staticClass:"auth-btn",class:"demo@demo.com"===t.userEmail&&"demouser"===t.userPassword?"mark-auth-btn":"",attrs:{disabled:!t.valid},on:{click:t.submitHandler}},[t._v(" "+t._s(t.isLogin?"Sign in":"Sign up")+" ")]),n("v-btn",{staticClass:"switch-to-register-btn",on:{click:t.switchHandler}},[t._v(" "+t._s(t.isLogin?"sign up":"sign in")+" ")])],1)])],1)],1)},o=[],s=n("a6f4"),a=n("e571"),r=n.n(a),l=Object(s["c"])({name:"Auth",components:{GoogleLogin:r.a},setup(t,{root:e}){Object(s["d"])(async()=>{"complete"!==document.readyState&&e.$store.dispatch("togLoading",{loadingStatus:!0})}),Object(s["e"])(()=>{window.onload=function(){e.$store.dispatch("togLoading",{loadingStatus:!1})}});const n=Object(s["g"])(""),i=Object(s["g"])(""),o=Object(s["g"])(""),a=Object(s["g"])(!0),r=Object(s["g"])(null),l=Object(s["g"])(!0),d=Object(s["g"])(""),c=Object(s["f"])([t=>!!t||"Email is required",t=>t&&t.length<=30||"Email must be less than 30 characters"]),u=Object(s["f"])([t=>!!t||"Password is required",t=>t&&t.length<=30||"Password must be less than 30 characters"]),g=Object(s["f"])([t=>!!t||"Confirm password is required",t=>t===i.value||"The password confirmation does not match."]),m=Object(s["f"])({client_id:"525617387179-qpf4t5s671j058shidk8c8ap9brdvhhe.apps.googleusercontent.com"}),f=Object(s["f"])({width:250,height:50,longtitle:!0}),h=async t=>{if(!a.value){const t=r.value.validate();if(!t)return}const n=t.uc?t.uc.id_token:t.tc.id_token;e.$store.dispatch("togLoading",{loadingStatus:!0});try{let t;if(a.value)t=await e.$store.dispatch({type:"signinOrSignupGoogle",token:n});else{const o={token:n,password:i.value};t=await e.$store.dispatch({type:"linkPassword",tokenAndPassword:o})}if(!t.isSuccess)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Wrong credentials!",icon:"warning",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}});_(),t.showToast&&setTimeout(()=>{e.$swal.fire({text:"You can also login with your password",toast:!0,timer:3e3,position:"bottom",width:600,padding:"3em",customClass:{confirmButton:"swal-toast"}})},2e3)}catch(o){console.log(o),e.$swal.fire({title:"Error:",text:o.message.toString(),icon:"warning",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}e.$store.dispatch("togLoading",{loadingStatus:!1})},p=t=>{console.log("error: "),console.log(t)},v=t=>{if(t.keyboardEvent&&"Enter"===t.keyboardEvent.key&&!a.value)return;const e=r.value.validate();if(e){const t={userEmail:n.value,userPassword:i.value};a.value?y(t):S(t)}},w=()=>{a.value=!a.value,a.value||n.value&&-1!==n.value.indexOf("demo")&&(n.value="",i.value="",r.value.reset())},b=()=>{n.value="demo@demo.com",i.value="demouser"},y=async t=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const n=await e.$store.dispatch({type:"loginUser",userToAuthFields:t});if(!n)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Wrong credentials!",icon:"warning",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}});setTimeout(()=>{e.$swal.fire({text:"You can also login with google",toast:!0,timer:3e3,position:"bottom",width:600,padding:"3em",customClass:{confirmButton:"swal-toast"}})},2e3),_()}catch(n){n.message.toString().includes("Wrong credentials!")?e.$swal.fire({title:"Wrong credentials!",icon:"warning",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}}):e.$swal.fire({text:n.message.toString()+" "+n.toString()+" "+n.graphQLErrors.toString(),icon:"error",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}e.$store.dispatch("togLoading",{loadingStatus:!1})},S=async t=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const n=await e.$store.dispatch({type:"createUser",userToAuthFields:t});if(!n)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Error: login for new registered user failed!",text:"Please try again at a later time.",icon:"warning",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}});_()}catch(n){e.$swal.fire({title:"Error: register failed!",text:n.message.toString(),icon:"error",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}e.$store.dispatch("togLoading",{loadingStatus:!1})},_=()=>{e.$router.push({name:"Start"})};return{userEmail:n,userPassword:i,reUserPassword:o,isLogin:a,myForm:r,valid:l,name:d,emailRules:c,passwordRules:u,rePasswordRules:g,params:m,renderParams:f,onSuccess:h,onFailure:p,submitHandler:v,loginUser:y,createUser:S,switchHandler:w,demoHandler:b,moveToStart:_}}}),d=l,c=(n("b810"),n("2877")),u=Object(c["a"])(d,i,o,!1,null,"af749e1a",null);e["default"]=u.exports},"60fa5":function(t,e,n){},b810:function(t,e,n){"use strict";var i=n("60fa5"),o=n.n(i);o.a},e571:function(t,e,n){!function(t,n){n(e)}(0,(function(t){"use strict";var e,n,i=function(t){return e?Promise.resolve(e):(n||(n=function(t){return new Promise((function(n,i){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{e=window.gapi.auth2.init(Object.assign({},t))}catch(t){i({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}n(e)}))}}))}(t)),n)},o=function(t,e){return t?t[e]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},s={load:function(t){return Promise.all([i(t),new Promise((function(t,e){if(!document.getElementById("auth2_script_id")){var n=document.createElement("script");n.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),n.setAttribute("async",!0),n.setAttribute("defer","defer"),n.setAttribute("id","auth2_script_id"),document.head.appendChild(n)}t()}))]).then((function(t){return t[0]}))},signIn:function(){return o(e,"signIn")},signOut:function(){return o(e,"signOut")},isSignedIn:function(){return o(e.isSignedIn,"get")},currentUser:function(){return o(e.currentUser,"get")},grantOfflineAccess:function(){return o(e,"grantOfflineAccess")}},a=0,r=function(t,e,n,i,o,s,a,r,l,d){"boolean"!=typeof a&&(l=r,r=a,a=!1);var c,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):e&&(c=a?function(){e.call(this,d(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),c)if(u.functional){var g=u.render;u.render=function(t,e){return c.call(e),g(t,e)}}else{var m=u.beforeCreate;u.beforeCreate=m?[].concat(m,c):[c]}return n}({render:function(){var t=this.$createElement,e=this._self._c||t;return this.renderParams&&!this.logoutButton?e("div",{attrs:{id:this.id},on:{click:this.handleClick}}):e("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(a++)},methods:{handleClick:function(){var t=this,e=this.logoutButton?"signOut":"signIn";s[e]().then((function(e){return t.onSuccess(e)})).catch((function(e){return t.onFailure(e)}))}},mounted:function(){var t=this;s.load(this.params).then((function(){t.renderParams&&!1===t.logoutButton&&window.gapi.signin2.render(t.id,t.renderParams),s.isSignedIn()&&t.onCurrentUser(s.currentUser())})).catch((function(t){console.log(t)}))}},void 0,!1,void 0,void 0,void 0),l={install:function(t,e){t.GoogleAuth=s.load(e)}};t.GoogleLogin=r,t.LoaderPlugin=l,t.default=r,Object.defineProperty(t,"__esModule",{value:!0})}))}}]);
//# sourceMappingURL=auth.8007822e.js.map