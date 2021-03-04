<template>
  <div>
    <h1 class="page-title">{{ isLogin ? "Login" : "Register" }}</h1>
    <v-card max-width="1032" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-img
        v-if="isLogin"
        src="@/assets/login.jpg"
        alt="Avatar"
        max-height="150"
      ></v-img>

      <v-img
        v-else
        src="@/assets/register.jpg"
        alt="Avatar"
        max-height="150"
      ></v-img>

      <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
        <v-text-field
          v-model="userEmail"
          :counter="30"
          :rules="emailRules"
          type="email"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="userPassword"
          :counter="30"
          :rules="passwordRules"
          type="password"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          v-if="!isLogin"
          v-model="reUserPassword"
          :counter="30"
          :rules="rePasswordRules"
          type="password"
          label="Confirm password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="auth-btn"
          @click="submitHandler"
          width="100%"
          max-width="130"
        >
          {{ isLogin ? "Login" : "Register" }}
        </v-btn>

        <v-btn
          color="error"
          class="reset-form-btn"
          @click="reset"
          width="100%"
          max-width="130"
        >
          Reset Form
        </v-btn>

        <v-btn
          class="reset-validation-btn"
          color="warning"
          @click="resetValidation"
          width="100%"
          max-width="178"
        >
          Reset Validation
        </v-btn>

        <p v-if="isLogin" class="or-title">Or:</p>
        <p v-else class="or-title">Or link password:</p>

        <GoogleLogin
          class="google-signin-btn-wrapper"
          :params="params"
          :renderParams="renderParams"
          :onSuccess="onSuccess"
          :onFailure="onFailure"
        ></GoogleLogin>

        <p class="or-title">Or:</p>
        <v-btn
          class="switch-to-register-btn"
          color="info"
          @click="switchHandler"
          width="100%"
          max-width="198"
        >
          <!--          Switch to Register-->
          Switch to {{ isLogin ? "register" : "login" }}
        </v-btn>

        <div v-if="isLogin">
          <p class="page-sub-title">For demo use only:</p>
          <p class="page-sub-title">
            <span>Email: demo@demo.com</span>,
            <span>Password: demouser</span>
          </p>
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
    if (document.readyState !== "complete") {
      root.$store.dispatch("togLoading", { loadingStatus: true });
    }

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
      const token = googleUser.uc.id_token;

      //try moving the flow all the way to db just with using the ggogle token and the clip
      // so i can crEATE the user or get it from the db and return a token anyhow to local storage a
      //should work like regular maybe.. at least make it work..

      // This only gets the user information: id, name, imageUrl and email
      // console.log(
      //   "googleUser.getBasicProfile(): ",
      //   googleUser.getBasicProfile()
      // );

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
        root.$swal.fire({
          title: "Error:",
          text: error.message.toString(),
          confirmButtonColor: "red",
          icon: "warning",
          width: 600,
          padding: "3em",
          background: "#fff",
        });
      }
      root.$store.dispatch("togLoading", { loadingStatus: false });
    };

    const onFailure = () => {
      console.log("error: ");
    };

    //End - Google login area

    const submitHandler = () => {
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

    const reset = () => {
      myForm.value.reset();
    };

    const resetValidation = () => {
      myForm.value.resetValidation();
    };

    const switchHandler = () => {
      isLogin.value = !isLogin.value;
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
            title: "Error: login failed!",
            text: "Please try again at a later time.",
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
      reset,
      resetValidation,
      switchHandler,
      // updateLoginState,
      moveToAnimalsList,
    };
  },
});
</script>

<style lang="scss" scoped>
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

  .auth-btn,
  .reset-form-btn,
  .reset-validation-btn,
  .switch-to-register-btn {
    margin-top: 10px;
  }

  .switch-to-register-btn {
    display: block;
    margin: 0.5rem auto;
  }
}

.google-signin-btn-wrapper {
  display: flex;
  justify-content: center;
}

.or-title {
  margin-top: 10px;
}

@media only screen and (min-width: 296px) {
  .auth-btn {
    margin-right: 3px;
  }

  .reset-form-btn {
    margin-left: 3px;
  }
}

@media only screen and (min-width: 395px) {
  .v-card__actions {
    flex-direction: row;
  }
}

@media only screen and (min-width: 480px) {
  .reset-form-btn {
    margin-right: 3px;
  }

  .reset-validation-btn {
    margin-left: 3px;
  }
}
</style>
