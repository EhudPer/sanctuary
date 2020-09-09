<template>
    <div class="card">
        <img :src="props.animal.imageUrl" alt="Avatar" />
        <div class="container">
            <h4>
                <b>{{ props.animal.name }}</b>
            </h4>
            <p>{{ props.animal.type }}</p>
<!--            <p>{{ props.animal.dateOfBirth }}</p>-->
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'Animal',
    props: {
        animal: Object,
    },
    setup(props) {
        return {
            props,
        };
    },
});
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    max-width: 200px;
    margin: 20px;
}

img {
    width: 100%;
    border-radius: 5px 5px 0 0;
}
</style>
