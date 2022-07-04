<script setup lang="ts">
defineProps<{
    name: string;
    label: string;
}>();
</script>

<template>
    <label>
        <input type="text" :name="name" placeholder=" " />
        <span class="label">{{ label }}</span>
    </label>
</template>
