<script setup lang="ts">
defineProps<{
    content: {
        background?: string;
        title: string;
        subtitle: string;
        linkMore?: {
            title: string;
            url: string;
        };
        linkBook?: {
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
        <div class="container hero" :class="content.imagePos">
            <div class="obj-fit image">
                <img
                    v-if="content?.image"
                    :src="content.image.url"
                    :alt="content.image.alt"
                />
            </div>

            <div class="content">
                <h1 class="title">{{ content.title }}</h1>
                <p class="subtitle">{{ content.subtitle }}</p>

                <div
                    v-if="content?.linkMore || content?.linkBook"
                    class="buttons"
                >
                    <NuxtLink
                        v-if="content?.linkMore"
                        :to="`${content.linkMore.url}`"
                        class="btn btn--pri"
                    >
                        {{ content.linkMore.title }}
                    </NuxtLink>
                    <NuxtLink
                        v-if="content?.linkBook"
                        :to="`${content.linkBook.url}`"
                        class="btn btn--sec"
                    >
                        {{ content.linkBook.title }}
                    </NuxtLink>
                </div>
            </div>
        </div>
        <CurvesCurveMedium />
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

section {
    position: relative;
    padding: 7.5rem 0 0;
    color: $color--black;
    background-color: $color--sand;

    &.brown {
        color: $color--sand;
        background-color: $color--brown;
    }
}
.hero {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @include respond-to-min($lg) {
        grid-template-columns: 450px 1fr;
    }

    .image {
        min-height: 350px;

        @include respond-to-max($md--max) {
            display: none;
        }

        img {
            mask: url('/media/icons/mask.svg');
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
        }
    }

    .content {
        max-width: 800px;
        padding: 0 0 3rem;

        @include respond-to-min($lg) {
            padding: 7.5rem 0;
        }

        .title {
            margin-bottom: 2.5rem;
        }

        .subtitle {
            margin-bottom: 4rem;
            font-size: 2rem;
        }

        .buttons {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;

            @include respond-to-min($sm) {
                grid-template-columns: repeat(2, max-content);
            }
        }
    }

    &.right {
        @include respond-to-min($lg) {
            grid-template-columns: 1fr 450px;

            .image {
                order: 2;
            }
        }
    }
}
</style>
