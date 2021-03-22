(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AnimalEdit"],{"0314":function(e,t,a){},"158f":function(e,t,a){e.exports=a.p+"img/donkey.04c9f50d.jpg"},"2fe6":function(e,t,a){e.exports=a.p+"img/dog.9b79b5d7.jpg"},7079:function(e,t,a){"use strict";var n=a("0314"),i=a.n(n);i.a},"710a":function(e,t,a){var n={"./add-animal.jpg":"f322","./cat.jpg":"927c","./cow.jpg":"c666","./dog.jpg":"2fe6","./donkey.jpg":"158f","./error.jpg":"f6de","./horse.jpg":"c295","./login.jpg":"d0cf","./other.jpg":"ac76","./pig.jpg":"cd2c","./profile.jpg":"3a19","./register.jpg":"89ea"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="710a"},"7e72":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=async(e,t,a=!1)=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const n=await e.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this animal deletion!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#0457E7",cancelButtonColor:"#D62E1F",confirmButtonText:"Yes, delete it!"});if(!n.isConfirmed)return void e.$store.dispatch("togLoading",{loadingStatus:!1});await e.$store.dispatch({type:"deleteAnimal",animalId:t}),a||e.$router.push({name:"AnimalsList"})}catch(n){e.$swal.fire({title:"Error: animal not deleted!",text:"Please try again at a later time.",confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}e.$store.dispatch("togLoading",{loadingStatus:!1})}},"89ea":function(e,t,a){e.exports=a.p+"img/register.e3ace350.jpg"},"927c":function(e,t,a){e.exports=a.p+"img/cat.3537598e.jpg"},ac76:function(e,t,a){e.exports=a.p+"img/other.64cf9054.jpg"},c295:function(e,t,a){e.exports=a.p+"img/horse.6b477ac1.jpg"},c317:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.animal?n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1032"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[e._v(" "+e._s(e.animal.name)+" ")])],1)],1),e.newAnimalType?n("v-img",{style:"cursor: pointer",attrs:{src:a("710a")("./"+e.newAnimalType.toLowerCase()+".jpg"),alt:"Avatar","max-height":"500"},on:{click:e.moveToAnimalDetails}}):e._e(),n("v-form",{ref:"myForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.newAnimalName,callback:function(t){e.newAnimalName=t},expression:"newAnimalName"}}),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Category is required"}],label:"Category",required:""},model:{value:e.newAnimalType,callback:function(t){e.newAnimalType=t},expression:"newAnimalType"}}),n("v-select",{attrs:{items:e.medicineTypeItems,label:"Medicine Type",clearable:""},model:{value:e.newAnimalMedicineType,callback:function(t){e.newAnimalMedicineType=t},expression:"newAnimalMedicineType"}}),n("v-text-field",{attrs:{rules:[function(e){return e>=1||""===e||"Dosage must be 1 or greater"}],label:"Dosage",type:"number"},model:{value:e.newAnimalDosage,callback:function(t){e.newAnimalDosage=t},expression:"newAnimalDosage"}}),n("div",{staticClass:"btns-container"},[n("v-card-actions",[e.valid&&""!==e.newAnimalName&&""!==e.newAnimalType?n("v-btn",{staticClass:"validate-btn",attrs:{color:"success",width:"100%","max-width":"130"},on:{click:e.validate}},[e._v(" Save ")]):e._e(),n("v-btn",{attrs:{color:"error accent-4"},on:{click:e.deleteAnimalClicked}},[e._v(" Delete ")])],1)],1)],1)],1):e._e()],1)},i=[],o=a("a6f4"),l=a("7e72"),r=Object(o["c"])({name:"AnimalEdit",setup(e,{root:t}){Object(o["d"])(async()=>{"complete"!==document.readyState&&t.$store.dispatch("togLoading",{loadingStatus:!0});const e=0!==t.$store.getters.getAnimals.length;if(!e)try{await t.$store.dispatch("fetchAnimals")}catch(a){t.$swal.fire({title:"Error: animal not fetched!",text:a.message.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}}),Object(o["e"])(()=>{window.onload=async()=>{t.$store.dispatch("togLoading",{loadingStatus:!1})}});const a=t.$route.params.animalId,n=Object(o["a"])(()=>t.$store.getters.getAnimalById(a)),i=n.value?Object(o["g"])(n.value.name):Object(o["g"])(""),r=n.value?Object(o["g"])(n.value.type):Object(o["g"])(""),c=n.value&&n.value.medicineType?Object(o["g"])(n.value.medicineType):Object(o["g"])(""),s=n.value&&n.value.dosage?Object(o["g"])(n.value.dosage):Object(o["g"])(""),d=Object(o["g"])(null),u=Object(o["g"])(!0),m=Object(o["g"])(""),g=Object(o["f"])([e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"]),p=Object(o["g"])(null),f=Object(o["f"])(["Cat","Dog","Pig","Cow","Horse","Donkey","Other"]),v=Object(o["f"])(["Convenia","Superflex","Tsistophan","Cinolux","Doxilin","Activile","Other"]),b=()=>{const e=d.value.validate();e&&h()},w=()=>{d.value.reset()},j=()=>{d.value.resetValidation()},h=async()=>{t.$store.dispatch("togLoading",{loadingStatus:!0});const e={_id:a,name:i.value?i.value:i,type:r.value?r.value:r,medicineType:c.value?c.value:"",dosage:s.value&&0!==s.value&&""!==s.value?+s.value:0,image_url:n.value.image_url?n.value.image_url:null};try{await t.$store.dispatch({type:"updateAnimal",updatedAnimalFields:e}),A()}catch(o){t.$swal.fire({title:"Error: animal not updated!",text:o.message.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}t.$store.dispatch("togLoading",{loadingStatus:!1})};function y(){t.$router.push({path:"/animals/add"})}const A=()=>{t.$router.push({name:"AnimalDetails",params:{animalId:a}})},x=()=>{Object(l["a"])(t,a)};return{animal:n,newAnimalName:i,newAnimalType:r,newAnimalMedicineType:c,newAnimalDosage:s,myForm:d,valid:u,name:m,nameRules:g,select:p,items:f,medicineTypeItems:v,validate:b,reset:w,resetValidation:j,pushToAddAnimalPage:y,moveToAnimalDetails:A,deleteAnimalClicked:x}}}),c=r,s=(a("7079"),a("2877")),d=Object(s["a"])(c,n,i,!1,null,"27874878",null);t["default"]=d.exports},c666:function(e,t,a){e.exports=a.p+"img/cow.5b0d0b26.jpg"},cd2c:function(e,t,a){e.exports=a.p+"img/pig.dce921f5.jpg"},d0cf:function(e,t,a){e.exports=a.p+"img/login.5e32f028.jpg"},f322:function(e,t,a){e.exports=a.p+"img/add-animal.abf51dc3.jpg"},f6de:function(e,t,a){e.exports=a.p+"img/error.8f20e169.jpg"}}]);
//# sourceMappingURL=AnimalEdit.66f30353.js.map