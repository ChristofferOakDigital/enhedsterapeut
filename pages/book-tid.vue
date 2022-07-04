<script setup lang="ts">
const heroContent = {
    title: 'Her kan du bestille en tid! woop :-)',
    subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium egestas porta consectetur arcu, ipsum at.',
    linkMore: {
        title: 'Læs mere',
        url: '/behandlinger',
    },
    linkBook: {
        title: 'Book tid',
        url: '/book-tid',
    },
    imagePos: 'right',
    image: {
        url: '/media/images/krystal.jpg',
        alt: 'Syg nok alt tekst bro',
    },
};
</script>

<template>
    <article>
        <Contact />
        <Hero :content="heroContent" />
    </article>
</template>
