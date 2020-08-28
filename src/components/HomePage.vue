<template>
    <div class="home-page">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    width: 200px;
    height: 200px;
}
</style>
