<script setup lang="ts">
const heroContent = {
    title: 'A healer is someone who holds space for you while you awaken your inner healer.',
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

const paraContent = {
    align: 'center',
    title: 'Hvad kan enhedsterapi gøre for dig?',
    text: 'At hjælpe det enkelte menneske, patient eller klient til at hjælpe sig selv i mange forskellige former for problemstillinger. Princippet er at styrke personlige evner, ressourcer og muligheder uanset funktionsniveauet, samt at arbejde ud fra den enkeltes kontekst med familie- og psykosocial baggrund. Ved samarbejde mellem behandler og klient at op fælles resonans og respons. Der er mange forskellige redskaber og nogle af dem er specielt effektive i forbindelse med stress, traumer, chok og fobier (jævnf.  Slavinski).',
};

const textImgContent = {
    background: 'terra',
    title: 'Enhedsterapeut Lisbeth Jessen',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt ante imperdiet vel pellentesque nec sed. Amet in placerat netus faucibus. Etiam diam eget at diam, at ridiculus sem magna. Commodo, lacus, quisque tellus, orci nisi, feugiat. Dictum non sed placerat donec semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tincidunt ante imperdiet vel pellentesque nec sed. Amet in placerat netus faucibus. Etiam diam eget at diam, at ridiculus sem magna. Commodo, lacus, quisque tellus, orci nisi, feugiat. Dictum non sed placerat donec semper.',
    link: {
        title: 'Læs mere',
        url: '/klinikken',
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
        <Hero :content="heroContent" />
        <Paragraph :content="paraContent" />
        <TextImage :content="textImgContent" />
    </article>
</template>
