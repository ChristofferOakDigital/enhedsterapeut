<script setup lang="ts">
defineProps<{
  content: {
    background: string;
    title: string;
    text: string;
    link: {
      title: string;
      url: string;
    };
    imagePos: string;
    image: {
      url: string;
      alt: string;
    };
  };
}>();
</script>

<template>
  <section :class="content.background">
    <CurvesCurveSmall />
    <div class="container text-image" :class="content.imagePos">
      <div class="obj-fit image">
        <img
          v-if="content?.image"
          :src="content.image.url"
          :alt="content.image.alt"
        />
      </div>
      <div class="text">
        <h2>{{ content.title }}</h2>
        <p>{{ content.text }}</p>
        <NuxtLink :to="`${content.link.url}`" class="btn btn--pri">
          {{ content.link.title }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables";

section {
  position: relative;
  padding: 0 0 21%;

  .text-image {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 10rem;

    @include respond-to-min($lg) {
      grid-template-columns: 1fr 1fr;
    }

    .image {
      min-height: 250px;

      img {
        mask: url("/media/icons/mask.svg");
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
      }
    }

    .text {
      @include respond-to-min($lg) {
        padding: 10rem 0;
      }

      .btn {
        margin-top: 4rem;
      }
    }

    &.right {
      @include respond-to-min($lg) {
        .image {
          order: 2;
        }
      }
    }
  }

  &.terra {
    color: $color--white;
    background-color: $color--terra;
  }
}
</style>
