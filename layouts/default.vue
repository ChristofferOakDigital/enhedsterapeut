<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <Header />
    <main>
      <slot> Something went wrong.. damn </slot>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

main {
  padding-top: 75px;

  @include respond-to-min($lg) {
    padding-top: 100px;
  }
}
</style>
