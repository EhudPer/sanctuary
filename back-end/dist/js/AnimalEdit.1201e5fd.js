(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AnimalEdit"],{"158f":function(e,t,a){e.exports=a.p+"img/donkey.04c9f50d.jpg"},1749:function(e,t,a){e.exports=a.p+"img/ehud-and-kfitz copy.3fe75c6b.jpg"},"2fe6":function(e,t,a){e.exports=a.p+"img/dog.9b79b5d7.jpg"},"3bce":function(e,t,a){},"710a":function(e,t,a){var n={"./add-animal.jpg":"f322","./cat.jpg":"927c","./cow.jpg":"c666","./dog.jpg":"2fe6","./donkey.jpg":"158f","./ehud-and-kfitz copy.jpg":"1749","./ehud-and-kfitz-cropped.jpg":"9fa2","./ehud-and-kfitz-cropped2.jpg":"293d","./ehud-and-kfitz.jpg":"e401","./error.jpg":"f6de","./horse.jpg":"c295","./login.jpg":"d0cf","./other.jpg":"ac76","./pig.jpg":"cd2c","./register.jpg":"89ea"};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id="710a"},"7e72":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=async(e,t,a=!1)=>{e.$store.dispatch("togLoading",{loadingStatus:!0});try{const n=await e.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this animal deletion!",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default",cancelButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}});if(!n.isConfirmed)return void e.$store.dispatch("togLoading",{loadingStatus:!1});await e.$store.dispatch({type:"deleteAnimal",animalId:t}),a||e.$router.push({name:"AnimalsList"})}catch(n){e.$swal.fire({title:"Error: animal not deleted!",text:"Please try again at a later time.",icon:"error",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}e.$store.dispatch("togLoading",{loadingStatus:!1})}},"89ea":function(e,t,a){e.exports=a.p+"img/register.e3ace350.jpg"},"927c":function(e,t,a){e.exports=a.p+"img/cat.3537598e.jpg"},9539:function(e,t,a){"use strict";var n=a("3bce"),i=a.n(n);i.a},"9fa2":function(e,t,a){e.exports=a.p+"img/ehud-and-kfitz-cropped.ae4641f6.jpg"},ac76:function(e,t,a){e.exports=a.p+"img/other.64cf9054.jpg"},c295:function(e,t,a){e.exports=a.p+"img/horse.6b477ac1.jpg"},c317:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.animal?n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1032"}},[n("v-list-item"),e.newAnimalType?n("v-img",{style:"cursor: pointer",attrs:{src:a("710a")("./"+e.newAnimalType.toLowerCase()+".jpg"),alt:"Avatar","max-height":"500"},on:{click:e.moveToAnimalDetails}}):e._e(),n("v-form",{ref:"myForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""},model:{value:e.newAnimalName,callback:function(t){e.newAnimalName=t},expression:"newAnimalName"}}),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Category is required"}],label:"Category",required:""},model:{value:e.newAnimalType,callback:function(t){e.newAnimalType=t},expression:"newAnimalType"}}),n("v-select",{attrs:{items:e.medicineTypeItems,label:"Medicine Type",clearable:""},model:{value:e.newAnimalMedicineType,callback:function(t){e.newAnimalMedicineType=t},expression:"newAnimalMedicineType"}}),n("v-text-field",{attrs:{rules:[function(e){return e>=1||""===e||"Dosage must be a NUMBER that is 1 or greater"}],label:"Dosage",type:"number"},model:{value:e.newAnimalDosage,callback:function(t){e.newAnimalDosage=t},expression:"newAnimalDosage"}}),n("v-text-field",{attrs:{rules:[function(e){return e>=1&&Number.isInteger(+e)||""===e||"Frequency must be an integer NUMBER that is 1 or greater"}],label:"Frequency",type:"number"},model:{value:e.newAnimalFrequency,callback:function(t){e.newAnimalFrequency=t},expression:"newAnimalFrequency"}}),n("v-select",{attrs:{items:e.timeUnitItems,label:"Time Unit",clearable:""},model:{value:e.newAnimalTimeUnit,callback:function(t){e.newAnimalTimeUnit=t},expression:"newAnimalTimeUnit"}}),n("div",{staticClass:"btns-container"},[e.valid&&""!==e.newAnimalName&&""!==e.newAnimalType?n("v-btn",{staticClass:"validate-btn",on:{click:e.validate}},[e._v(" Save ")]):e._e(),n("v-btn",{on:{click:e.deleteAnimalClicked}},[e._v(" Delete ")])],1),n("div",{staticClass:"cancel-btn-container"},[n("v-btn",{on:{click:e.cancelHandler}},[e._v(" Cancel ")])],1)],1)],1):e._e()],1)},i=[],l=a("a6f4"),o=a("7e72"),c=Object(l["c"])({name:"AnimalEdit",setup(e,{root:t}){Object(l["d"])(async()=>{"complete"!==document.readyState&&t.$store.dispatch("togLoading",{loadingStatus:!0});const e=0!==t.$store.getters.getAnimals.length;if(!e)try{await t.$store.dispatch("fetchAnimals")}catch(a){t.$swal.fire({title:"Error: animal not fetched!",text:a.message.toString(),icon:"error",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}}),Object(l["e"])(()=>{window.onload=async()=>{t.$store.dispatch("togLoading",{loadingStatus:!1})}});const a=t.$route.params.animalId,n=Object(l["a"])(()=>t.$store.getters.getAnimalById(a));n.value||console.log("");const i=n.value?Object(l["g"])(n.value.name):Object(l["g"])(""),c=n.value?Object(l["g"])(n.value.type):Object(l["g"])(""),s=n.value&&n.value.medicineType?Object(l["g"])(n.value.medicineType):Object(l["g"])(""),r=n.value&&n.value.dosage?Object(l["g"])(n.value.dosage):Object(l["g"])(""),u=n.value&&n.value.frequency?Object(l["g"])(n.value.frequency):Object(l["g"])(""),m=n.value&&n.value.timeUnit?Object(l["g"])(n.value.timeUnit):Object(l["g"])(""),d=Object(l["g"])(null),g=Object(l["g"])(!0),p=Object(l["g"])(""),v=Object(l["f"])([e=>!!e||"Name is required",e=>e&&e.length<=10||"Name must be less than 10 characters"]),f=Object(l["g"])(null),b=Object(l["f"])(["Cat","Dog","Pig","Cow","Horse","Donkey","Other"]),h=Object(l["f"])(["Convenia","Superflex","Tsistophan","Cinolux","Doxilin","Activile","Other"]),w=Object(l["f"])(["Day","Week","Month","Year"]),y=()=>{const e=d.value.validate();e&&A()},j=()=>{T()},A=async()=>{t.$store.dispatch("togLoading",{loadingStatus:!0});const e={_id:a,name:i.value?i.value:i,type:c.value?c.value:c,medicineType:s.value?s.value:"",dosage:r.value&&0!==r.value&&""!==r.value?+r.value:0,frequency:u.value&&0!==u.value&&""!==u.value?+u.value:0,timeUnit:m.value?m.value:"",image_url:n.value.image_url?n.value.image_url:null};try{await t.$store.dispatch({type:"updateAnimal",updatedAnimalFields:e}),O()}catch(l){t.$swal.fire({title:"Error: animal not updated!",text:l.message.toString(),icon:"error",width:600,padding:"3em",buttonsStyling:!1,customClass:{confirmButton:"swal-btn v-btn v-btn--contained theme--light v-size--default"}})}t.$store.dispatch("togLoading",{loadingStatus:!1})};function x(){t.$router.push({path:"/animals/add"})}const O=()=>{t.$router.push({name:"AnimalDetails",params:{animalId:a}})},T=()=>{t.$router.push({name:"AnimalsList"})},k=()=>{Object(o["a"])(t,a)};return{animal:n,newAnimalName:i,newAnimalType:c,newAnimalMedicineType:s,newAnimalTimeUnit:m,newAnimalDosage:r,newAnimalFrequency:u,myForm:d,valid:g,name:p,nameRules:v,select:f,items:b,medicineTypeItems:h,timeUnitItems:w,validate:y,cancelHandler:j,pushToAddAnimalPage:x,moveToAnimalDetails:O,moveToAnimalsList:T,deleteAnimalClicked:k}}}),s=c,r=(a("9539"),a("2877")),u=Object(r["a"])(s,n,i,!1,null,"4f22c081",null);t["default"]=u.exports},c666:function(e,t,a){e.exports=a.p+"img/cow.5b0d0b26.jpg"},cd2c:function(e,t,a){e.exports=a.p+"img/pig.dce921f5.jpg"},d0cf:function(e,t,a){e.exports=a.p+"img/login.5e32f028.jpg"},e401:function(e,t,a){e.exports=a.p+"img/ehud-and-kfitz.282c6767.jpg"},f322:function(e,t,a){e.exports=a.p+"img/add-animal.abf51dc3.jpg"},f6de:function(e,t,a){e.exports=a.p+"img/error.8f20e169.jpg"}}]);
//# sourceMappingURL=AnimalEdit.1201e5fd.js.map