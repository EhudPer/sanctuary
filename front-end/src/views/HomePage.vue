<template>
  <div class="home-page">
    <!--    <h1 class="page-title">Welcome to Sanctuary</h1>-->
    <p>
      <b>Animal Sanctuary App</b>
    </p>
    <p>Managing the caring for rescued animals (under development)</p>
    <p>
      <b>Frameworks:</b> nodejs, express, apollo-graphql, mongoose, vue, vuex +
      <a href="https://github.com/EhudPer/sanctuary" target="_blank">github</a>
    </p>

    <p>By <b>Ehud Perlman</b>, fullstack webapps developer</p>
    <!--    <v-img src="../assets/ehud-and-kfitz.jpg" class="profile"></v-img>-->
    <v-img src="../assets/ehud.jpg" class="profile"></v-img>
    <!--    <p>-->
    <!--      <b>github: </b>-->
    <!--      <a href="https://github.com/EhudPer/sanctuary" target="_blank"-->
    <!--        >Sanctuary project</a-->
    <!--      >-->
    <!--    </p>-->
    <p>
      <b>
        Email:
        <a href="mailto:ehudperlman83@gmail.com">ehudperlman83@gmail.com</a>
      </b>
    </p>

    <p><i>Have an interesting project - I’d love to hear from you! </i></p>

    <!--    <img class="main-img" src="../assets/home.jpeg" alt="Home" />-->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  name: "HomePage",
  setup(props, { root }) {
    //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
    onBeforeMount(() => {
      if (document.readyState !== "complete") {
        root.$store.dispatch("togLoading", { loadingStatus: true });
      }
    });

    onMounted(() => {
      window.onload = function () {
        root.$store.dispatch("togLoading", { loadingStatus: false });
      };
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  //max-width: 650px;
  //max-height: 230px;
  margin: 15px 0;
}

//.main-img {
//  object-fit: cover;
//  max-height: 230px;
//}

.profile {
  //max-width: 1000px;
  max-height: 360px;
  //max-width: 400px;
  margin: 15px auto;
  //object-fit: contain;
  //object-position: right;
}

p {
  margin-bottom: 10px;
}

.home-page {
  a {
    color: var(--v-info-base) !important;
  }
}

@media only screen and (min-width: 386px) {
  .profile {
    max-height: none;
    max-width: 600px;
    //object-fit: contain;
  }
}

//@media only screen and (min-width: 960px) {
//  .profile {
//    //max-height: 800px;
//    //max-width: 1000px;
//    //max-height: 500px;
//  }
//}
</style>
