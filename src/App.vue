<template>
    <div id="app">
        <HomePage msg="Welcome to Your Sanctuary App" />
    </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
    name: 'App',
    components: {
        HomePage,
    },
};
</script>

<style lang="scss">
$bg-color: #f1f2f5;
$color: #050505;

body {
    background-color: $bg-color;
    color: $color;
    font-size: 1.2em;
    font-family: cursive;
}

ul {
    list-style-type: none;
    padding: 0;
}

#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}

@media only screen and (min-width: 386px) {
    body {
        font-size: 1.5em;
    }
}
</style>
