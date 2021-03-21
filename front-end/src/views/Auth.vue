<template>
  <div>
    <!--    <h1 class="page-title">{{ isLogin ? "Login" : "Register" }}</h1>-->
    <v-card max-width="1032" class="mx-auto">
      <!--      <v-list-item>-->
      <!--        <v-list-item-avatar color="grey"></v-list-item-avatar>-->
      <!--      </v-list-item>-->

      <!--      <v-img-->
      <!--        v-if="isLogin"-->
      <!--        src="@/assets/login.jpg"-->
      <!--        alt="Avatar"-->
      <!--        max-height="150"-->
      <!--      ></v-img>-->

      <!--      <v-img-->
      <!--        v-else-->
      <!--        src="@/assets/register.jpg"-->
      <!--        alt="Avatar"-->
      <!--        max-height="150"-->
      <!--      ></v-img>-->

      <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
        <v-text-field
          v-model="userEmail"
          :counter="isLogin ? null : '30'"
          :rules="emailRules"
          type="email"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          @keyup.enter="submitHandler"
          v-model="userPassword"
          :counter="isLogin ? null : '30'"
          :rules="passwordRules"
          type="password"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          v-if="!isLogin"
          v-model="reUserPassword"
          :counter="isLogin ? null : '30'"
          :rules="rePasswordRules"
          type="password"
          label="Confirm password"
          required
        ></v-text-field>

        <div class="btns-container">
          <v-btn
            :disabled="!valid"
            color="success"
            class="auth-btn"
            @click="submitHandler"
            width="100%"
            max-width="130"
          >
            {{ isLogin ? "Sign in" : "Sign up" }}
          </v-btn>

          <!--        <v-btn-->
          <!--          color="error"-->
          <!--          class="reset-form-btn"-->
          <!--          @click="reset"-->
          <!--          width="100%"-->
          <!--          max-width="130"-->
          <!--        >-->
          <!--          Reset Form-->
          <!--        </v-btn>-->

          <!--        <v-btn-->
          <!--          class="reset-validation-btn"-->
          <!--          color="warning"-->
          <!--          @click="resetValidation"-->
          <!--          width="100%"-->
          <!--          max-width="178"-->
          <!--        >-->
          <!--          Reset Validation-->
          <!--        </v-btn>-->

          <!--        <p v-if="isLogin" class="or-title">Or:</p>-->
          <p v-if="!isLogin" class="or-title">link password:</p>

          <div class="google-btn-and-fixer-container">
            <div class="google-text-fixer">Sign in with Google</div>
            <GoogleLogin
              class="google-signin-btn-wrapper"
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            ></GoogleLogin>
          </div>
          <!--        <p class="or-title">Or:</p>-->
          <v-btn
            class="switch-to-register-btn"
            color="info"
            @click="switchHandler"
            width="100%"
            max-width="130"
          >
            <!--          Switch to Register-->
            <!--          Switch to {{ isLogin ? "register" : "login" }}-->
            {{ isLogin ? "sign up" : "sign in" }}
          </v-btn>

          <div v-if="isLogin">
            <!--          <p class="page-sub-title">Try our demo account</p>-->
            <!--          <p class="page-sub-title">-->
            <!--            <span>Email: demo@demo.com</span>,-->
            <!--            <span>Password: demouser</span>-->
            <!--          </p>-->
            <v-btn
              class="demo-account-btn"
              color="brown"
              @click="demoHandler"
              width="100%"
              max-width="224"
            >
              Try our demo account
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
// @ts-nocheck

import {
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";
import GoogleLogin from "vue-google-login";

export default defineComponent({
  name: "Auth",
  components: {
    GoogleLogin,
  },
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
    onBeforeMount(async () => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
    });

    onMounted(() => {
      // document.getElementById("connected3yap2b3ti7qi").textContent =
      //   "Sign in with Google";
      // ("inline-block");
      console.log(root.$el.querySelector(".abcRioButtonContents span"));
      console.log(root.$el.querySelector("#app"));

      // // let result = document.evaluate(
      // //   // '//div[@class="abcRioButtonContentWrapper"]/span[@class="abcRioButtonContents"]/following-sibling::text()[1]',
      // //   '//span[text()="Signed in with Google"]',
      // //   document,
      // //   null,
      // //   XPathResult.STRING_TYPE
      // // ).stringValue;
      //
      // console.log(result.trim());

      console.log(root.$el);
      // console.log(root.$el.querySelector("span"));
      console.log(root.$el.querySelector('[id^="connected"]'));
      // console.log(document.querySelector(".abcRioButtonContents span"));
      // console.log(root.$el.querySelector(".abcRioButtonContents span"));
      // document.querySelector(".abcRioButtonContents span");

      // console.log(root.$el.querySelector("span"));
      // console.log(root.$el.querySelector('[id^="connected"]'));
      const spansEls = document.querySelectorAll("span");
      console.log(spansEls);

      window.onload = function () {
        // console.log(this.$el.querySelector(".abcRioButtonContents span"));

        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
    // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.
    const userEmail = ref("");
    const userPassword = ref("");
    const reUserPassword = ref("");
    // const newAnimalImageUrl = ref("");
    const isLogin = ref(true);
    const myForm = ref(null);
    const valid = ref(true);
    const name = ref("");

    //Add full password and email validation for registration.

    const emailRules = reactive([
      (v) => !!v || "Email is required",
      (v) => (v && v.length <= 30) || "Email must be less than 30 characters",
    ]);
    const passwordRules = reactive([
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 30) || "Password must be less than 30 characters",
    ]);
    const rePasswordRules = reactive([
      (v) => !!v || "Confirm password is required",
      (v) =>
        v === userPassword.value || "The password confirmation does not match.",
    ]);

    //Start - Google login area
    //get secret or clinet id from backend later!:
    const params = reactive({
      client_id:
        "525617387179-qpf4t5s671j058shidk8c8ap9brdvhhe.apps.googleusercontent.com",
    });

    const renderParams = reactive({
      width: 250,
      height: 50,
      longtitle: true,
    });

    const onSuccess = async (googleUser) => {
      console.log("googleUser.uc", googleUser.uc);
      console.log("googleUser", googleUser);
      const token = googleUser.uc
        ? googleUser.uc.id_token
        : googleUser.tc.id_token;

      //try moving the flow all the way to db just with using the ggogle token and the clip
      // so i can crEATE the user or get it from the db and return a token anyhow to local storage a
      //should work like regular maybe.. at least make it work..

      root.$store.dispatch("togLoading", { loadingStatus: true });
      try {
        let result;

        if (isLogin.value) {
          result = await root.$store.dispatch({
            type: "signinOrSignupGoogle",
            token,
          });
        } else {
          const tokenAndPassword = { token, password: userPassword.value };

          result = await root.$store.dispatch({
            type: "linkPassword",
            tokenAndPassword,
          });
        }

        if (!result.isSuccess) {
          root.$store.dispatch("togLoading", { loadingStatus: false });

          return root.$swal.fire({
            title: "Wrong credentials!",
            confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }

        moveToAnimalsList();

        if (result.showToast) {
          setTimeout(() => {
            root.$swal.fire({
              text: "You can also login with your password",
              toast: true,
              timer: 3000,
              position: "bottom",
              width: 600,
              padding: "3em",
              background: "#fff",
            });
          }, 2000);
        }
      } catch (error) {
        console.log(error);

        root.$swal.fire({
          title: "Error:",
          text: error.message.toString(),
          // text: "Error is here!",
          confirmButtonColor: "red",
          icon: "warning",
          width: 600,
          padding: "3em",
          background: "#fff",
        });
      }
      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    const onFailure = (error) => {
      console.log("error: ");
      console.log(error);
    };

    //End - Google login area

    const submitHandler = (event) => {
      console.log(event);
      if (
        event.keyboardEvent &&
        event.keyboardEvent.key === "Enter" &&
        !isLogin.value
      ) {
        return;
      }
      //Make a new service file for importing the functions here from the file for more separation and order.
      const valid = myForm.value.validate();
      if (valid) {
        const userToAuthFields = {
          userEmail: userEmail.value,
          userPassword: userPassword.value,
        };

        if (isLogin.value) {
          loginUser(userToAuthFields);
        } else {
          createUser(userToAuthFields);
          //add register code and make sure o log in the user after signup correctly with token and all without
          //need for unnessesary login.
        }
      }
    };

    // const reset = () => {
    //   myForm.value.reset();
    // };

    // const resetValidation = () => {
    //   myForm.value.resetValidation();
    // };

    const switchHandler = () => {
      isLogin.value = !isLogin.value;
      if (!isLogin.value) {
        if (userEmail.value.indexOf("demo") !== -1) {
          userEmail.value = "";
          userPassword.value = "";
          myForm.value.reset();
        }
      }
    };

    const demoHandler = () => {
      userEmail.value = "demo@demo.com";
      userPassword.value = "demouser";
    };

    const loginUser = async (userToAuthFields) => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      try {
        const result = await root.$store.dispatch({
          type: "loginUser",
          userToAuthFields,
        });

        if (!result) {
          root.$store.dispatch("togLoading", { loadingStatus: false });

          return root.$swal.fire({
            title: "Wrong credentials!",
            confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }

        setTimeout(() => {
          root.$swal.fire({
            text: "You can also login with google",
            toast: true,
            timer: 3000,
            position: "bottom",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }, 2000);

        moveToAnimalsList();
      } catch (error) {
        if (error.message.toString().includes("Wrong credentials!")) {
          root.$swal.fire({
            title: "Wrong credentials!",
            confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        } else {
          root.$swal.fire({
            // title: "Error: login failed!f",
            // text: "Please try again at a later time.",
            // text: error.message.toString(),
            text:
              error.message.toString() +
              " " +
              error.toString() +
              " " +
              error.graphQLErrors.toString(),
            confirmButtonColor: "#D62E1F",
            icon: "error",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }
      }
      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    const createUser = async (userToAuthFields) => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      try {
        const result = await root.$store.dispatch({
          type: "createUser",
          userToAuthFields,
        });

        if (!result) {
          root.$store.dispatch("togLoading", { loadingStatus: false });

          return root.$swal.fire({
            title: "Error: login for new registered user failed!",
            text: "Please try again at a later time.",
            // text: error.message.toString(),
            confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }

        moveToAnimalsList();
      } catch (error) {
        root.$swal.fire({
          title: "Error: register failed!",
          // text: "Please try again at a later time.",
          text: error.message.toString(),
          confirmButtonColor: "#D62E1F",
          icon: "error",
          width: 600,
          padding: "3em",
          background: "#fff",
        });
      }
      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    //use it from a global function later cause it's in more than one component.
    const moveToAnimalsList = () => {
      root.$router.push({
        name: "AnimalsList",
      });
    };

    return {
      userEmail,
      userPassword,
      reUserPassword,
      isLogin,
      myForm,
      valid,
      name,
      emailRules,
      passwordRules,
      rePasswordRules,
      params,
      renderParams,
      onSuccess,
      onFailure,
      submitHandler,
      loginUser,
      createUser,
      // reset,
      // resetValidation,
      switchHandler,
      demoHandler,
      // updateLoginState,
      moveToAnimalsList,
    };
  },
});
</script>

<style lang="scss" scoped>
.google-btn-and-fixer-container {
  //background: darkgrey;
  color: gray;
  width: 100%;
  max-width: 254px;
  margin-top: -20px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  //display: flex;
  //align-items: center;
  //height: 0px;
}

.google-text-fixer {
  pointer-events: none;
  position: relative;
  top: 38px;
  //left: 80px;
  left: 40px;
  z-index: 100;
  width: 100%;
  max-width: 200px;
  background: white;
}

.page-sub-title {
  //font-size: 1.2rem;
  font-weight: normal;

  span {
    color: #0457e7;
  }
}

.v-card {
  width: 100%;
  margin: 15px auto;
  overflow: scroll;
}

.v-card__actions {
  flex-direction: column;
}

form {
  padding: 0 8px;

  .btns-container {
    button,
    .google-signin-btn-wrapper {
      margin-bottom: 20px;
    }
  }

  .auth-btn,
  //.reset-form-btn,
  //.reset-validation-btn,
  .switch-to-register-btn {
    margin-top: 10px;
  }

  .switch-to-register-btn {
    display: block;
    margin: 0.5rem auto;
  }
}

.demo-account-btn {
  color: white;
}

.google-signin-btn-wrapper {
  display: flex;
  justify-content: center;

  //#connected3yap2b3ti7qi {
  //  display: inline-block;
  //}
}

//.or-title {
//  margin-top: 10px;
//}

@media only screen and (min-width: 296px) {
  .auth-btn {
    margin-right: 3px;
  }

  //.reset-form-btn {
  //  margin-left: 3px;
  //}
}

@media only screen and (max-width: 290px) {
  .google-text-fixer {
    font-size: 16px;
  }
}

@media only screen and (min-width: 395px) {
  .v-card__actions {
    flex-direction: row;
  }
}

@media only screen and (min-width: 960px) {
  .google-btn-and-fixer-container {
    margin-right: 0px;
    margin-left: 0px;
  }

  .btns-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0;

    .auth-btn,
    .switch-to-register-btn,
    google-signin-btn-wrapper,
    demo-account-btn {
      margin-top: 0px;
      margin-right: 0px;
      margin-left: 0;
    }
  }
}

@media only screen and (min-width: 1025px) {
  .btns-container {
    padding: 20px;
  }
}

//@media only screen and (min-width: 480px) {
//  .reset-form-btn {
//    margin-right: 3px;
//  }
//
//  .reset-validation-btn {
//    margin-left: 3px;
//  }
//}
</style>
