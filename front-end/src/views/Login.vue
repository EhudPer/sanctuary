<template>
  <div>
    <h1 class="page-title">Login</h1>
    <v-card max-width="1032" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-img src="@/assets/login.jpg" alt="Avatar" max-height="500"></v-img>

      <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
        <v-text-field
          v-model="userEmail"
          :counter="30"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="userPassword"
          :counter="30"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="login-btn"
          @click="login"
          width="100%"
          max-width="130"
        >
          Login
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
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
} from "@vue/composition-api";

export default defineComponent({
  name: "Login",
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
    // const newAnimalImageUrl = ref("");

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

    const login = () => {
      const valid = myForm.value.validate();
      if (valid) {
        loginUser();
      }
    };

    const reset = () => {
      myForm.value.reset();
    };

    const resetValidation = () => {
      myForm.value.resetValidation();
    };

    const loginUser = async () => {
      root.$store.dispatch("togLoading", { loadingStatus: true });
      const userToLoginFields = {
        userEmail: userEmail.value,
        userPassword: userPassword.value,
      };

      try {
        const result = await root.$store.dispatch({
          type: "loginUser",
          userToLoginFields,
        });
        console.log(result);

        if (!result.token) {
          root.$store.dispatch("togLoading", { loadingStatus: false });

          return root.$swal.fire({
            title: "Wrong credentials!!",
            confirmButtonColor: "red",
            icon: "warning",
            width: 600,
            padding: "3em",
            background: "#fff",
          });
        }
        //SWAL is not needed - just annoying for users.
        //Can be restored if needed later!.
        // root.$swal.fire({
        //   title: "Animal created successfully!",
        //   confirmButtonColor: "#0457E7",
        //   icon: "success",
        //   width: 600,
        //   padding: "3em",
        //   background: "#fff",
        // });

        moveToAnimalsList();
      } catch (error) {
        console.log(error);
        console.log(error.message);

        if (error.message.toString().includes("Wrong credentials!")) {
          root.$swal.fire({
            title: "Wrong credentials!!",
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

    //use it from a global function later cause it's in more than one component.
    const moveToAnimalsList = () => {
      root.$router.push({
        name: "AnimalsList",
      });
    };

    return {
      userEmail,
      userPassword,
      myForm,
      valid,
      name,
      emailRules,
      passwordRules,
      login,
      loginUser,
      reset,
      resetValidation,
      moveToAnimalsList,
    };
  },
});
</script>

<style lang="scss" scoped>
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

  .login-btn,
  .reset-form-btn,
  .reset-validation-btn {
    margin-top: 10px;
  }
}

@media only screen and (min-width: 296px) {
  .login-btn {
    margin-right: 3px;
  }

  .reset-form-btn {
    margin-left: 3px;
  }
}

@media only screen and (min-width: 395px) {
  .v-card__actions {
    flex-direction: row;
    //flex-wrap: wrap;
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
