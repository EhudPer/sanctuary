<template>
    <div class="home-page">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        <h1 class="page-title">{{ msg }}</h1>
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

<style lang="scss" scoped>
.logo {
    width: 100%;
    max-width: 150px;
    height: auto;
}

@media only screen and (min-width: 386px) {
    .logo {
        max-width: 200px;
    }
}
</style>
