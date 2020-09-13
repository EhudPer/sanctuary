<template>
  <div id="app">
    <div id="nav">
      <img alt="Sanctuary logo" src="./assets/logo.png" class="logo" />
      <router-link to="/">Home</router-link> |
      <router-link to="/animals">Animals</router-link>
    </div>
    <router-view />
  </div>
</template>

//use separate global app scss file and import instead of using it in this
component. //order and make more organized all the scss code here.
<style lang="scss">
$bg-color: #f1f2f5;
$color: #050505;

body {
  background-color: $bg-color;
  color: $color;
  font-size: 1.2em;
  //font-family: cursive;
  font-family: Verdana, Avenir, Helvetica, Arial, sans-serif;
}

#app {
  text-align: center;
  //margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.page-title {
  font-size: 1.2em;
}

@media only screen and (min-width: 386px) {
  body {
    font-size: 1.5em;
  }

  .logo {
    max-width: 200px;
  }

  .page-title {
    font-size: 1.5em;
  }
}

//temp setting here until nav component is ready.
.logo {
  width: 100%;
  max-width: 150px;
  height: auto;
  display: block;
  margin: 15px auto;
}

#nav {
  margin-bottom: 20px;
}
</style>
