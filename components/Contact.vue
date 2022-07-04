<script setup lang="ts"></script>

<template>
    <section>
        <div class="container">
            <form>
                <fieldset>
                    <ElementsFormTextInput name="firstname" label="Fornavn" />
                    <ElementsFormTextInput name="lastname" label="Efternavn" />
                </fieldset>
                <fieldset>
                    <ElementsFormTextInput name="firstname" label="Fornavn" />
                    <ElementsFormEmailInput label="E-mail" />
                </fieldset>
            </form>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

section {
    padding-top: 2rem;
    background-color: $color--sand;

    form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        fieldset {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            border: none;
        }
    }
}
</style>
