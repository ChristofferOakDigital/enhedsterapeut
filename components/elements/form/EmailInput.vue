<script setup lang="ts">
defineProps<{
    label: string;
}>();

const email = ref('');
const invalid = ref(false);

const validateEmail = () => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    invalid.value = !regex.test(email.value.toLocaleLowerCase());
};
</script>

<template>
    <label>
        <input
            type="email"
            name="email"
            placeholder=" "
            :class="{ error: invalid }"
            v-model="email"
            @blur="validateEmail"
        />
        <span class="label">{{ label }}</span>
    </label>
</template>
