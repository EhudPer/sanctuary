(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addAnimal"],{"0999":function(e,a,t){},"158f":function(e,a,t){e.exports=t.p+"img/donkey.04c9f50d.jpg"},1749:function(e,a,t){e.exports=t.p+"img/ehud-and-kfitz copy.3fe75c6b.jpg"},"2fe6":function(e,a,t){e.exports=t.p+"img/dog.9b79b5d7.jpg"},"710a":function(e,a,t){var n={"./add-animal.jpg":"f322","./cat.jpg":"927c","./cow.jpg":"c666","./dog.jpg":"2fe6","./donkey.jpg":"158f","./ehud-and-kfitz copy.jpg":"1749","./ehud-and-kfitz-cropped.jpg":"9fa2","./ehud-and-kfitz-cropped2.jpg":"293d","./ehud-and-kfitz.jpg":"e401","./error.jpg":"f6de","./horse.jpg":"c295","./login.jpg":"d0cf","./other.jpg":"ac76","./pig.jpg":"cd2c","./register.jpg":"89ea"};function i(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id="710a"},"89ea":function(e,a,t){e.exports=t.p+"img/register.e3ace350.jpg"},"927c":function(e,a,t){e.exports=t.p+"img/cat.3537598e.jpg"},"9fa2":function(e,a,t){e.exports=t.p+"img/ehud-and-kfitz-cropped.ae4641f6.jpg"},ac76:function(e,a,t){e.exports=t.p+"img/other.64cf9054.jpg"},c295:function(e,a,t){e.exports=t.p+"img/horse.6b477ac1.jpg"},c666:function(e,a,t){e.exports=t.p+"img/cow.5b0d0b26.jpg"},c8b2:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1032"}},[n("v-list-item"),e.animalType?n("v-img",{attrs:{src:t("710a")("./"+e.animalType.toLowerCase()+".jpg"),alt:"Avatar","max-height":"500"}}):e._e(),n("v-form",{ref:"myForm",staticClass:"mb-4",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[n("v-text-field",{attrs:{counter:30,rules:e.nameRules,label:"Name",required:""},model:{value:e.animalName,callback:function(a){e.animalName=a},expression:"animalName"}}),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Category is required"}],label:"Category",required:""},model:{value:e.animalType,callback:function(a){e.animalType=a},expression:"animalType"}}),n("v-select",{attrs:{items:e.medicineTypeItems,label:"Medicine Type",clearable:""},model:{value:e.animalMedicineType,callback:function(a){e.animalMedicineType=a},expression:"animalMedicineType"}}),n("v-text-field",{attrs:{rules:[function(e){return e>=1&&!isNaN(e)||""===e||"Dosage must be a NUMBER that is 1 or greater"}],label:"Dosage",type:"number"},model:{value:e.animalDosage,callback:function(a){e.animalDosage=a},expression:"animalDosage"}}),n("v-text-field",{attrs:{rules:[function(e){return e>=1&&!isNaN(e)&&Number.isInteger(+e)||""===e||"Frequency must be an integer NUMBER that is 1 or greater"}],label:"Frequency",type:"number"},model:{value:e.animalFrequency,callback:function(a){e.animalFrequency=a},expression:"animalFrequency"}}),n("v-select",{attrs:{items:e.timeUnitItems,label:"Time Unit",clearable:""},model:{value:e.animalTimeUnit,callback:function(a){e.animalTimeUnit=a},expression:"animalTimeUnit"}}),n("div",{staticClass:"btn-container"},[e.valid&&""!==e.animalName&&""!==e.animalType?n("v-btn",{staticClass:"validate-btn",on:{click:e.validate}},[e._v(" Add ")]):e._e(),n("v-btn",{staticClass:"cancel-btn",on:{click:e.cancelHandler}},[e._v(" Cancel ")])],1)],1)],1)],1)},i=[],c=t("a6f4"),l=Object(c["c"])({name:"AddAnimal",setup(e,{root:a}){Object(c["d"])(async()=>{"complete"!==document.readyState&&a.$store.dispatch("togLoading",{loadingStatus:!0})}),Object(c["e"])(()=>{window.onload=function(){a.$store.dispatch("togLoading",{loadingStatus:!1})}});const t=Object(c["g"])(""),n=Object(c["g"])(""),i=Object(c["g"])(""),l=Object(c["g"])(""),o=Object(c["g"])(""),r=Object(c["g"])(""),s=Object(c["g"])(null),m=Object(c["g"])(!0),u=Object(c["g"])(""),d=Object(c["f"])([e=>!!e||"Name is required",e=>e&&e.length<=30||"Name must be less than 30 characters"]),p=Object(c["f"])(["Cat","Dog","Pig","Cow","Horse","Donkey","Other"]),g=Object(c["f"])(["Convenia","Superflex","Tsistophan","Cinolux","Doxilin","Activile","Other"]),f=Object(c["f"])(["Day","Week","Month","Year"]),v=()=>{const e=s.value.validate();e&&j()},b=()=>{y()},j=async()=>{a.$store.dispatch("togLoading",{loadingStatus:!0});const e={name:t.value,type:n.value,medicineType:i.value,dosage:l.value&&0!==l.value&&""!==l.value?+l.value:0,frequency:o.value&&0!==o.value&&""!==o.value&&Number.isInteger(+o.value)?+o.value:0,timeUnit:r.value,image_url:null};try{await a.$store.dispatch({type:"createAnimal",animalToCreateFields:e}),y()}catch(c){a.$swal.fire({title:"Error: animal not created!",text:c.message.toString(),confirmButtonColor:"#D62E1F",icon:"error",width:600,padding:"3em",background:"#fff"})}a.$store.dispatch("togLoading",{loadingStatus:!1})},y=()=>{a.$router.push({name:"AnimalsList"})};return{animalName:t,animalType:n,animalMedicineType:i,animalDosage:l,animalFrequency:o,animalTimeUnit:r,myForm:s,valid:m,name:u,nameRules:d,items:p,medicineTypeItems:g,timeUnitItems:f,validate:v,cancelHandler:b,moveToAnimalsList:y}}}),o=l,r=(t("e318"),t("2877")),s=Object(r["a"])(o,n,i,!1,null,"252df936",null);a["default"]=s.exports},cd2c:function(e,a,t){e.exports=t.p+"img/pig.dce921f5.jpg"},d0cf:function(e,a,t){e.exports=t.p+"img/login.5e32f028.jpg"},e318:function(e,a,t){"use strict";var n=t("0999"),i=t.n(n);i.a},e401:function(e,a,t){e.exports=t.p+"img/ehud-and-kfitz.282c6767.jpg"},f322:function(e,a,t){e.exports=t.p+"img/add-animal.abf51dc3.jpg"},f6de:function(e,a,t){e.exports=t.p+"img/error.8f20e169.jpg"}}]);
//# sourceMappingURL=addAnimal.05bf826e.js.map