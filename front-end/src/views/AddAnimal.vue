<template>
    <div>
        <h1 class="page-title">Add Animal</h1>
        <v-card max-width="1032" class="mx-auto">
            <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
            </v-list-item>
            <v-img
                src="../assets/add-animal.jpg"
                alt="Avatar"
                max-height="500"
            ></v-img>
            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <!--      <v-card-text>-->
            <!--        {{ animal.type }}-->
            <!--      </v-card-text>-->

            <v-form ref="myForm" v-model="valid" class="mb-4" lazy-validation>
                <v-text-field
                    v-model="animalName"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-select
                    v-model="animalType"
                    :items="items"
                    :rules="[v => !!v || 'Type is required']"
                    label="Type"
                    required
                ></v-select>

                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="validate-btn"
                    @click="validate"
                    width="100%"
                    max-width="130"
                >
                    Validate
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
    ref
} from '@vue/composition-api';

export default defineComponent({
    name: 'AddAnimal',
    setup(props, { root }) {
        //check if i can put the code of mount and before mount in some function and only call it in all the component instead duplicate code.
        if (document.readyState !== 'complete') {
            root.$store.dispatch('togLoading', { loadingStatus: true });
        }

        onMounted(() => {
            window.onload = function() {
                root.$store.dispatch('togLoading', { loadingStatus: false });
            };
        });

        //Later try to set that when the edit page is loaded that the values of the controls will not be empty -
        // but with the current animal's details from the db - all the time, even on refresh or loading from url directly.
        const animalName = ref('');
        const animalType = ref('');
        // const newAnimalImageUrl = ref("");

        const myForm = ref(null);
        const valid = ref(true);
        const name = ref('');
        const nameRules = reactive([
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ]);
        const select = ref(null);
        //later move those types of animals to one file and read them from it for all
        //the places needed with the types list like the select box etc.
        const items = reactive([
            'Cat',
            'Dog',
            'Pig',
            'Cow',
            'Horse',
            'Donkey',
            'Other'
        ]);

        const validate = () => {
            const valid = myForm.value.validate();
            if (valid) {
                addAnimal();
            }
        };

        const reset = () => {
            myForm.value.reset();
        };

        const resetValidation = () => {
            myForm.value.resetValidation();
        };

        const addAnimal = async () => {
            root.$store.dispatch('togLoading', { loadingStatus: true });
            const animalToCreateFields = {
                name: animalName.value,
                type: animalType.value,
                // image_url: newAnimalImageUrl.value,
                image_url:
                    'https://cdnuploads.aa.com.tr/uploads/Contents/2019/10/24/thumbs_b_c_fb8263ce4f9f43ebdc7634b0d1eb0a08.jpg?v=115427'
            };

            try {
                const result = await root.$store.dispatch({
                    type: 'createAnimal',
                    animalToCreateFields
                });
                console.log(result);

                root.$swal.fire({
                    title: 'Animal created successfully!',
                    confirmButtonColor: '#0457E7',
                    icon: 'success',
                    width: 600,
                    padding: '3em',
                    background: '#fff'
                });
                moveToAnimalDetails(result._id.toString());
            } catch (error) {
                console.log(error);
                root.$swal.fire({
                    title: 'Error: animal not created!',
                    text: 'Please try again at a later time.',
                    confirmButtonColor: '#D62E1F',
                    icon: 'error',
                    width: 600,
                    padding: '3em',
                    background: '#fff'
                });
            }
            root.$store.dispatch('togLoading', { loadingStatus: false });
        };

        //use it from a global function later cause it's in more than one component.
        const moveToAnimalDetails = animalId => {
            root.$router.push({
                name: 'AnimalDetails',
                params: { animalId }
            });
        };

        return {
            animalName,
            animalType,
            myForm,
            valid,
            name,
            nameRules,
            select,
            items,
            validate,
            reset,
            resetValidation,
            moveToAnimalDetails
        };
    }
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

    .validate-btn,
    .reset-form-btn,
    .reset-validation-btn {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 296px) {
    .validate-btn {
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
