<template>
    <footer>
        <CurvesCurveFooter />
        <div class="container">
            <NuxtLink class="logo" to="/">
                <img
                    class="image"
                    src="/media/images/logo-white.png"
                    alt="Hi mum lel"
                />
            </NuxtLink>

            <span>Kontakt KiroJess</span>
            <span>Adresse: Langesvej 34, stuen, 3400 Hillerød</span>
            <span>Telefon: <a href="tel:+4548242444">+45 48 24 24 44</a></span>
            <span
                >Email:
                <a href="mailto:lisbeth.jessen@kirojess.dk">
                    lisbeth.jessen@kirojess.dk
                </a></span
            >
            <span class="italic"
                >Der er mulighed for gratis parkering ved klinikken</span
            >
        </div>
    </footer>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';

footer {
    position: relative;
    padding-bottom: 8rem;
    background-color: $color--brown;

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 1;

        .logo {
            height: 90px;
            width: max-content;
            margin-bottom: 3rem;

            .image {
                height: 100%;
                width: auto;
                object-fit: contain;
            }
        }

        span {
            margin-bottom: 1.6rem;
            font-size: 1.6rem;
            color: $color--white;
            line-height: 120%;

            &.tag {
                margin-bottom: 1.5rem;
                font-family: $font--pri;
            }

            &.italic {
                margin-top: 3rem;
                font-style: italic;
            }
        }

        a:hover {
            text-decoration: underline;
        }
    }
}
</style>
