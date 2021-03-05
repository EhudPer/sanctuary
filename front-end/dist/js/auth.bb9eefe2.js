(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth"],{"0596":function(t,e,i){"use strict";var o=i("7fd6"),n=i.n(o);n.a},"2fef":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"page-title"},[t._v(t._s(t.isLogin?"Login":"Register"))]),o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1032"}},[o("v-list-item",[o("v-list-item-avatar",{attrs:{color:"grey"}})],1),t.isLogin?o("v-img",{attrs:{src:i("d0cf"),alt:"Avatar","max-height":"150"}}):o("v-img",{attrs:{src:i("89ea"),alt:"Avatar","max-height":"150"}}),o("v-form",{ref:"myForm",staticClass:"mb-4",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-text-field",{attrs:{counter:30,rules:t.emailRules,type:"email",label:"Email",required:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),o("v-text-field",{attrs:{counter:30,rules:t.passwordRules,type:"password",label:"Password",required:""},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}}),t.isLogin?t._e():o("v-text-field",{attrs:{counter:30,rules:t.rePasswordRules,type:"password",label:"Confirm password",required:""},model:{value:t.reUserPassword,callback:function(e){t.reUserPassword=e},expression:"reUserPassword"}}),o("v-btn",{staticClass:"auth-btn",attrs:{disabled:!t.valid,color:"success",width:"100%","max-width":"130"},on:{click:t.submitHandler}},[t._v(" "+t._s(t.isLogin?"Login":"Register")+" ")]),o("v-btn",{staticClass:"reset-form-btn",attrs:{color:"error",width:"100%","max-width":"130"},on:{click:t.reset}},[t._v(" Reset Form ")]),o("v-btn",{staticClass:"reset-validation-btn",attrs:{color:"warning",width:"100%","max-width":"178"},on:{click:t.resetValidation}},[t._v(" Reset Validation ")]),t.isLogin?o("p",{staticClass:"or-title"},[t._v("Or:")]):o("p",{staticClass:"or-title"},[t._v("Or link password:")]),o("GoogleLogin",{staticClass:"google-signin-btn-wrapper",attrs:{params:t.params,renderParams:t.renderParams,onSuccess:t.onSuccess,onFailure:t.onFailure}}),o("p",{staticClass:"or-title"},[t._v("Or:")]),o("v-btn",{staticClass:"switch-to-register-btn",attrs:{color:"info",width:"100%","max-width":"198"},on:{click:t.switchHandler}},[t._v(" Switch to "+t._s(t.isLogin?"register":"login")+" ")]),t.isLogin?o("div",[o("p",{staticClass:"page-sub-title"},[t._v("For demo use only:")]),o("p",{staticClass:"page-sub-title"},[o("span",[t._v("Email: demo@demo.com")]),t._v(", "),o("span",[t._v("Password: demouser")])])]):t._e()],1)],1)],1)},n=[],r=i("a6f4"),s=i("e571"),a=i.n(s),d=Object(r["c"])({name:"Auth",components:{GoogleLogin:a.a},setup(t,{root:e}){"complete"!==document.readyState&&e.$store.dispatch("togLoading",{loadingStatus:!0}),Object(r["e"])(()=>{window.onload=function(){e.$store.dispatch("togLoading",{loadingStatus:!1})}});const i=Object(r["g"])(""),o=Object(r["g"])(""),n=Object(r["g"])(""),s=Object(r["g"])(!0),a=Object(r["g"])(null),d=Object(r["g"])(!0),c=Object(r["g"])(""),l=Object(r["f"])([t=>!!t||"Email is required",t=>t&&t.length<=30||"Email must be less than 30 characters"]),u=Object(r["f"])([t=>!!t||"Password is required",t=>t&&t.length<=30||"Password must be less than 30 characters"]),g=Object(r["f"])([t=>!!t||"Confirm password is required",t=>t===o.value||"The password confirmation does not match."]),f=Object(r["f"])({client_id:"525617387179-qpf4t5s671j058shidk8c8ap9brdvhhe.apps.googleusercontent.com"}),p=Object(r["f"])({width:250,height:50,longtitle:!0}),m=async t=>{const i=t.uc.id_token;e.$store.dispatch("togLoading",{loadingStatus:!0});try{let t;if(s.value)t=await e.$store.dispatch({type:"signinOrSignupGoogle",token:i});else{const n={token:i,password:o.value};t=await e.$store.dispatch({type:"linkPassword",tokenAndPassword:n})}if(!t.isSuccess)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Wrong credentials!",confirmButtonColor:"red",icon:"warning",width:600,padding:"3em",background:"#fff"});S(),t.showToast&&setTimeout(()=>{e.$swal.fire({text:"You can also login with your password",toast:!0,timer:3e3,position:"bottom",width:600,padding:"3em",background:"#fff"})},2e3)}catch(n){alert(n.toString()),e.$swal.fire({title:"Error:",text:n.message.toString()+" "+n.toString()+" "+n.graphQLErrors.toString(),confirmButtonColor:"red",icon:"warning",width:600,padding:"3em",background:"#fff"})}e.$store.dispatch("togLoading",{loadingStatus:!1})},h=()=>{console.log("error: ")},w=()=>{const t=a.value.validate();if(t){const t={userEmail:i.value,userPassword:o.value};s.value?y(t):C(t)}},v=()=>{a.value.reset()},b=()=>{a.value.resetValidation()},_=()=>{s.value=!s.value},y=async t=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const i=await e.$store.dispatch({type:"loginUser",userToAuthFields:t});if(!i)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Wrong credentials!",confirmButtonColor:"red",icon:"warning",width:600,padding:"3em",background:"#fff"});setTimeout(()=>{e.$swal.fire({text:"You can also login with google",toast:!0,timer:3e3,position:"bottom",width:600,padding:"3em",background:"#fff"})},2e3),S()}catch(i){i.message.toString().includes("Wrong credentials!")?e.$swal.fire({title:"Wrong credentials!",confirmButtonColor:"red",icon:"warning",width:600,padding:"3em",background:"#fff"}):e.$swal.fire({text:i.message.toString()+" "+i.toString()+" "+i.graphQLErrors.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}e.$store.dispatch("togLoading",{loadingStatus:!1})},C=async t=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const i=await e.$store.dispatch({type:"createUser",userToAuthFields:t});if(!i)return e.$store.dispatch("togLoading",{loadingStatus:!1}),e.$swal.fire({title:"Error: login for new registered user failed!",text:"Please try again at a later time.",confirmButtonColor:"red",icon:"warning",width:600,padding:"3em",background:"#fff"});S()}catch(i){e.$swal.fire({title:"Error: register failed!",text:i.message.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}e.$store.dispatch("togLoading",{loadingStatus:!1})},S=()=>{e.$router.push({name:"AnimalsList"})};return{userEmail:i,userPassword:o,reUserPassword:n,isLogin:s,myForm:a,valid:d,name:c,emailRules:l,passwordRules:u,rePasswordRules:g,params:f,renderParams:p,onSuccess:m,onFailure:h,submitHandler:w,loginUser:y,createUser:C,reset:v,resetValidation:b,switchHandler:_,moveToAnimalsList:S}}}),c=d,l=(i("0596"),i("2877")),u=Object(l["a"])(c,o,n,!1,null,"6a23e256",null);e["default"]=u.exports},"7fd6":function(t,e,i){},"89ea":function(t,e,i){t.exports=i.p+"img/register.e3ace350.jpg"},d0cf:function(t,e,i){t.exports=i.p+"img/login.5e32f028.jpg"},e571:function(t,e,i){!function(t,i){i(e)}(0,(function(t){"use strict";var e,i,o=function(t){return e?Promise.resolve(e):(i||(i=function(t){return new Promise((function(i,o){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{e=window.gapi.auth2.init(Object.assign({},t))}catch(t){o({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}i(e)}))}}))}(t)),i)},n=function(t,e){return t?t[e]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},r={load:function(t){return Promise.all([o(t),new Promise((function(t,e){if(!document.getElementById("auth2_script_id")){var i=document.createElement("script");i.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),i.setAttribute("async",!0),i.setAttribute("defer","defer"),i.setAttribute("id","auth2_script_id"),document.head.appendChild(i)}t()}))]).then((function(t){return t[0]}))},signIn:function(){return n(e,"signIn")},signOut:function(){return n(e,"signOut")},isSignedIn:function(){return n(e.isSignedIn,"get")},currentUser:function(){return n(e.currentUser,"get")},grantOfflineAccess:function(){return n(e,"grantOfflineAccess")}},s=0,a=function(t,e,i,o,n,r,s,a,d,c){"boolean"!=typeof s&&(d=a,a=s,s=!1);var l,u="function"==typeof i?i.options:i;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,n&&(u.functional=!0)),o&&(u._scopeId=o),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):e&&(l=s?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(u.functional){var g=u.render;u.render=function(t,e){return l.call(e),g(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return i}({render:function(){var t=this.$createElement,e=this._self._c||t;return this.renderParams&&!this.logoutButton?e("div",{attrs:{id:this.id},on:{click:this.handleClick}}):e("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var t=this,e=this.logoutButton?"signOut":"signIn";r[e]().then((function(e){return t.onSuccess(e)})).catch((function(e){return t.onFailure(e)}))}},mounted:function(){var t=this;r.load(this.params).then((function(){t.renderParams&&!1===t.logoutButton&&window.gapi.signin2.render(t.id,t.renderParams),r.isSignedIn()&&t.onCurrentUser(r.currentUser())})).catch((function(t){console.log(t)}))}},void 0,!1,void 0,void 0,void 0),d={install:function(t,e){t.GoogleAuth=r.load(e)}};t.GoogleLogin=a,t.LoaderPlugin=d,t.default=a,Object.defineProperty(t,"__esModule",{value:!0})}))}}]);
//# sourceMappingURL=auth.bb9eefe2.js.map