<script setup lang="ts">
defineProps<{
  content: {
    align: string;
    title: string;
    text: string;
  };
}>();
</script>

<template>
  <section>
    <div class="container" :class="content.align">
      <h2>{{ content.title }}</h2>
      <p>{{ content.text }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

section {
  padding: 20% 0;
  color: $color--black;

  .container {
    max-width: 65rem;

    h2 {
      margin-bottom: 3.5rem;
    }

    &.center > * {
      text-align: center;
    }
  }
}
</style>
