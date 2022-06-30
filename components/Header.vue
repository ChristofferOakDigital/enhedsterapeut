<script setup lang="ts">
interface HeaderData {
    path: string;
    title: {
        type: string;
        value: string;
    };
}

// const response = await $fetch.raw("http://localhost:3000/testData/pages.json");
// const pages = response._data as HeaderData[];

const toggleBurger = ref(false);
</script>

<template>
    <header>
        <div class="mobile">
            <NuxtLink to="/home" class="logo" @click="toggleBurger = false">
                <img src="/media/images/logo.png" alt="Hej logo" />
            </NuxtLink>

            <button
                class="burger"
                :class="{ active: toggleBurger }"
                @click="toggleBurger = !toggleBurger"
            >
                <span />
                <span />
                <span />
            </button>

            <nav :class="{ show: toggleBurger }">
                <ul>
                    <li>
                        <NuxtLink to="/" @click="toggleBurger = false">
                            <img src="/media/images/logo.png" alt="Hej" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/kontakt" @click="toggleBurger = false">
                            <span>Kontakt</span>
                        </NuxtLink>
                    </li>
                    <!-- <li v-for="page in pages">
            <NuxtLink :to="`${page.path}`" @click="toggleBurger = false">
              <span v-if="page.title.type === 'text'">{{
                page.title.value
              }}</span>
              <img
                v-if="page.title.type === 'image'"
                :src="page.title.value"
                alt="Hej"
              />
            </NuxtLink>
          </li> -->
                </ul>
            </nav>
        </div>

        <div class="desktop">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">
                            <img src="/media/images/logo.png" alt="Hej" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/kontakt">
                            <span>Kontakt</span>
                        </NuxtLink>
                    </li>
                    <!-- <li v-for="page in pages">
            <NuxtLink :to="`${page.path}`">
              <span v-if="page.title.type === 'text'">{{
                page.title.value
              }}</span>
              <img
                v-if="page.title.type === 'image'"
                :src="page.title.value"
                alt="Hej"
              />
            </NuxtLink>
          </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

header {
    position: fixed;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color--white;
    z-index: 2;

    @include respond-to-min($lg) {
        height: 100px;
    }

    .mobile {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem;

        @include respond-to-min($lg) {
            display: none;
        }

        .logo {
            position: relative;
            height: 45px;
            width: 45px;
            z-index: 3;
        }

        .burger {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 45px;
            width: 45px;
            background-color: transparent;
            border: none;
            z-index: 3;
            cursor: pointer;

            span {
                position: absolute;
                top: calc(50% - 1px);
                left: calc(50% - 15px);
                height: 2px;
                width: 30px;
                border-radius: 5px;
                background-color: $color--brown;
                opacity: 1;
                transition: all 300ms ease-out;
                pointer-events: none;

                &:first-of-type {
                    transform: translateY(-10px);
                }

                &:last-of-type {
                    transform: translateY(10px);
                }
            }

            &.active {
                span:first-of-type {
                    transform: translateY(0) rotate(45deg);
                }

                span:nth-of-type(2) {
                    opacity: 0;
                }

                span:last-of-type {
                    transform: translateY(0) rotate(-45deg);
                }
            }
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding: 75px 2rem;
            background-color: $color--white;
            z-index: 2;
            transform: translateX(100%);
            transition: transform 300ms ease-out;

            &.show {
                transform: translateX(0) !important;
            }
        }
    }

    .desktop {
        display: none;

        @include respond-to-min($lg) {
            display: block;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;

            li a {
                padding: 1.5rem 3.5rem;
                font-family: $font--pri;
                font-size: 2rem;
                line-height: 120%;
            }
        }
    }
}
</style>
