<template>
  <h1 class="text-8xl uppercase text-center mb-5">Gallery</h1>
  <p v-if="isLoading" class="text-center text-5xl">Loading images...</p>
  <ImageGrid v-else :images="images" />
</template>

<script lang="ts" setup>
const isLoading = ref(true);
const images = [
  {
    link: "/images/ANSUREK_AOTC_banner.jpg",
    alt: "Ansurek AOTC",
    title: "Ansurek kill",
  },
  {
    link: "/images/bears-classic.jpg",
    alt: "Druids in classic",
    title: "Brain Cell in Classic Classic having a beary good time",
  },
  {
    link: "/images/BRD-normal.png",
    alt: "BRD normal raid anniversary",
    title: "Brain Cell defeats anniversary BRD Normal (it wasn't worth it)",
  },
  {
    link: "/images/brutos.png",
    alt: "Congregation of Brutosaurs in Dornogal",
    title: "Players show their appreciation for Blizzard.",
  },
  {
    link: "/images/cuddle-dragon.png",
    alt: "Dracthyr cuddles cat",
    title: "Big dragon cuddles an eeper",
  },
  {
    link: "/images/get-him.jpg",
    alt: "Dragon flying after dragon",
    title: "GET HIM!",
  },
  {
    link: "/images/sandstone-party.jpg",
    alt: "Sandstone drake party",
    title: "3 Sandstone Drakes 1 Post",
  },
  {
    link: "/images/webwrap.jpg",
    alt: "Dead raid corpses wrapped up",
    title: "Despair in visual form",
  },
];
onMounted(() => {
  isLoading.value = false;
});
</script>

<style></style>
