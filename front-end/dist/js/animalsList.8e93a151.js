(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["animalsList"],{"157d":function(t,a,e){"use strict";var n=e("1f58"),i=e.n(n);i.a},"158f":function(t,a,e){t.exports=e.p+"img/donkey.04c9f50d.jpg"},"1f58":function(t,a,e){},"2fe6":function(t,a,e){t.exports=e.p+"img/dog.9b79b5d7.jpg"},"710a":function(t,a,e){var n={"./add-animal.jpg":"f322","./cat.jpg":"927c","./cow.jpg":"c666","./dog.jpg":"2fe6","./donkey.jpg":"158f","./error.jpg":"f6de","./horse.jpg":"c295","./login.jpg":"d0cf","./other.jpg":"ac76","./pig.jpg":"cd2c","./profile.jpg":"3a19","./register.jpg":"89ea"};function i(t){var a=o(t);return e(a)}function o(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="710a"},"7e72":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));const n=async(t,a,e=!1)=>{t.$store.dispatch("togLoading",{loadingStatus:!0});try{const n=await t.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this animal deletion!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#0457E7",cancelButtonColor:"#D62E1F",confirmButtonText:"Yes, delete it!"});if(!n.isConfirmed)return void t.$store.dispatch("togLoading",{loadingStatus:!1});await t.$store.dispatch({type:"deleteAnimal",animalId:a}),e||t.$router.push({name:"AnimalsList"})}catch(n){t.$swal.fire({title:"Error: animal not deleted!",text:"Please try again at a later time.",confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}t.$store.dispatch("togLoading",{loadingStatus:!1})}},"878f":function(t,a,e){"use strict";var n=e("a3fb"),i=e.n(n);i.a},"89ea":function(t,a,e){t.exports=e.p+"img/register.e3ace350.jpg"},"927c":function(t,a,e){t.exports=e.p+"img/cat.3537598e.jpg"},a3fb:function(t,a,e){},a521:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"animals-list"},[e("v-btn",{staticClass:"mt-3",attrs:{"x-large":"",color:"info accent-4"},on:{click:t.pushToAddAnimalPage}},[t._v(" Add Animal ")]),e("ul",t._l(t.animals,(function(t){return e("li",{key:t._id},[e("Animal",{attrs:{animal:t}})],1)})),0)],1)},i=[],o=e("a6f4"),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(t.props.animal.name)+" ")])],1)],1),n("v-img",{style:"cursor: pointer",attrs:{src:t.props.animal.image_url?t.props.animal.image_url:e("710a")("./"+t.props.animal.type.toLowerCase()+".jpg"),alt:"Avatar",height:"194"},on:{click:t.moveToAnimalDetails}}),n("v-card-text",[t._v(" "+t._s(t.props.animal.type)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"yellow accent-4"},on:{click:t.moveToAnimalEdit}},[t._v(" Edit ")]),n("v-btn",{attrs:{color:"error accent-4"},on:{click:t.deleteAnimalClicked}},[t._v(" Delete ")])],1)],1)},c=[],s=e("7e72"),l=Object(o["c"])({name:"Animal",props:{animal:Object},setup(t,{root:a}){function e(){a.$router.push({name:"AnimalDetails",params:{animalId:t.animal._id}})}function n(){a.$router.push({name:"AnimalEdit",params:{animalId:t.animal._id}})}const i=()=>{Object(s["a"])(a,t.animal._id,!0)};return{props:t,moveToAnimalDetails:e,moveToAnimalEdit:n,deleteAnimalClicked:i}}}),d=l,p=(e("878f"),e("2877")),m=Object(p["a"])(d,r,c,!1,null,"09fc5a3c",null),u=m.exports,f=Object(o["c"])({name:"AnimalsList",components:{Animal:u},setup(t,{root:a}){Object(o["d"])(async()=>{if("complete"!==document.readyState&&a.$store.dispatch("togLoading",{loadingStatus:!0}),0===a.$store.state.animals.length)try{await a.$store.dispatch("fetchAnimals")}catch(t){console.log("error log:",t),a.$swal.fire({title:"Error: animals not fetched!",text:t.message.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}}),Object(o["e"])(()=>{window.onload=function(){a.$store.dispatch("togLoading",{loadingStatus:!1})}});const e=Object(o["a"])(()=>a.$store.state.animals);function n(){a.$router.push({path:"/animals/add"})}return{animals:e,pushToAddAnimalPage:n}}}),g=f,h=(e("157d"),Object(p["a"])(g,n,i,!1,null,"70bd9308",null));a["default"]=h.exports},ac76:function(t,a,e){t.exports=e.p+"img/other.64cf9054.jpg"},c295:function(t,a,e){t.exports=e.p+"img/horse.6b477ac1.jpg"},c666:function(t,a,e){t.exports=e.p+"img/cow.5b0d0b26.jpg"},cd2c:function(t,a,e){t.exports=e.p+"img/pig.dce921f5.jpg"},d0cf:function(t,a,e){t.exports=e.p+"img/login.5e32f028.jpg"},f322:function(t,a,e){t.exports=e.p+"img/add-animal.abf51dc3.jpg"},f6de:function(t,a,e){t.exports=e.p+"img/error.8f20e169.jpg"}}]);
//# sourceMappingURL=animalsList.8e93a151.js.map