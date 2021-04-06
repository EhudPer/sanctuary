<template>
  <div class="main-container">
    <v-card max-width="343">
      <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
        <div class="form-sub-container">
          <p :class="!isLogin ? '' : 'hide'" class="or-title">link password:</p>

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

          <div v-if="isLogin">
            <v-btn class="demo-account-btn" @click="demoHandler">
              Try our demo account
            </v-btn>
          </div>

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

          <v-btn :disabled="!valid" class="auth-btn" @click="submitHandler">
            {{ isLogin ? "Sign in" : "Sign up" }}
          </v-btn>

          <v-btn class="switch-to-register-btn" @click="switchHandler">
            <!--          Switch to Register-->
            {{ isLogin ? "sign up" : "sign in" }}
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
// @ts-nocheck

import {
  defineComponent,
  onBeforeMount,
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
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
    // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.
    const userEmail = ref("");
    const userPassword = ref("");
    const reUserPassword = ref("");

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
      if (!isLogin.value) {
        const valid = myForm.value.validate();
        if (!valid) {
          return;
        }
      }

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
            // confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
          });
        }

        moveToStart();

        if (result.showToast) {
          setTimeout(() => {
            root.$swal.fire({
              text: "You can also login with your password",
              toast: true,
              timer: 3000,
              position: "bottom",
              width: 600,
              padding: "3em",
              // buttonsStyling: false,
              customClass: {
                confirmButton: "swal-toast",
              },
              // background: "#fff",
            });
          }, 2000);
        }
      } catch (error) {
        console.log(error);

        root.$swal.fire({
          title: "Error:",
          text: error.message.toString(),

          icon: "warning",
          width: 600,
          padding: "3em",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "swal-btn v-btn v-btn--contained theme--light v-size--default",
          },
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

    const switchHandler = () => {
      isLogin.value = !isLogin.value;
      if (!isLogin.value) {
        if (userEmail.value && userEmail.value.indexOf("demo") !== -1) {
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
            // confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
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
            customClass: {
              confirmButton: "swal-toast",
            },
            // background: "#fff",
          });
        }, 2000);

        moveToStart();
      } catch (error) {
        if (error.message.toString().includes("Wrong credentials!")) {
          root.$swal.fire({
            title: "Wrong credentials!",
            // confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
          });
        } else {
          root.$swal.fire({
            text:
              error.message.toString() +
              " " +
              error.toString() +
              " " +
              error.graphQLErrors.toString(),
            // confirmButtonColor: "#D62E1F",
            icon: "error",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
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

            icon: "warning",
            width: 600,
            padding: "3em",
            // background: "#fff",
            buttonsStyling: false,
            customClass: {
              confirmButton:
                "swal-btn v-btn v-btn--contained theme--light v-size--default",
            },
          });
        }

        moveToStart();
      } catch (error) {
        root.$swal.fire({
          title: "Error: register failed!",
          // text: "Please try again at a later time.",
          text: error.message.toString(),
          // confirmButtonColor: "#D62E1F",
          icon: "error",
          width: 600,
          padding: "3em",
          // background: "#fff",
          buttonsStyling: false,
          customClass: {
            confirmButton:
              "swal-btn v-btn v-btn--contained theme--light v-size--default",
          },
        });
      }
      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    //use it from a global function later cause it's in more than one component.
    const moveToStart = () => {
      root.$router.push({
        name: "Start",
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
      moveToStart,
    };
  },
});
</script>

<style lang="scss" scoped>
.hide {
  visibility: hidden;
}

.main-container {
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
}

.google-btn-and-fixer-container {
  width: 100%;

  max-width: 254px;
  margin-top: -20px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
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
  //background: white;
  background: var(--v-thirteenth-base) !important;
  color: var(--v-tenth-base) !important;
}

.page-sub-title {
  //font-size: 1.2rem;
  font-weight: normal;
}

.v-card {
  width: 100%;
  margin: auto;
  overflow: scroll;

  background-color: var(--v-fifth-base) !important;
}

.v-card__actions {
  flex-direction: column;
}

form {
  padding: 0 8px;
  //height: 438px;
  height: 500px;

  .form-sub-container {
    button,
    .google-signin-btn-wrapper {
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      max-width: 250px;
      height: 50px !important;
      background: var(--v-secondary-base) !important;
      color: var(--v-tenth-base);
      font-size: 1rem;
      overflow: hidden;
    }
  }

  .auth-btn,
  .switch-to-register-btn {
    margin-top: 10px;
  }

  .switch-to-register-btn {
    display: block;
    margin: 0.5rem auto;
  }
}

.v-text-field {
  font-size: 1.2rem;
}

.v-input {
  font-size: 1rem;
  margin: 0 auto;

  max-width: 250px !important;
}

.google-signin-btn-wrapper {
  display: flex;
  justify-content: center;
}

.or-title {
  color: var(--v-tenth-base) !important;
  margin-top: 16px;
  margin-bottom: 0;
}

@media only screen and (min-width: 296px) {
  .auth-btn {
    margin-right: 3px;
  }
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
</style>
