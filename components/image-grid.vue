<template>
  <section class="grid grid-cols-3 gap-5">
    <Card
      v-for="img of images"
      :key="img.link"
      @click="onCardOpen(img.link, img.alt, img.title)"
      class="extra-styles"
    >
      <img :src="img.link" :alt="img.alt" class="rounded-lg" />
    </Card>
    <ImageModal
      v-if="isClicked"
      :link="selectedImg.link"
      :alt="selectedImg.alt"
      :title="selectedImg.title"
      @close-modal="onCardClose"
    />
  </section>
</template>

<script lang="ts" setup>
interface Image {
  link: string;
  alt: string;
  title: string;
}
let scrollbarWidth = 0;
let isClicked = ref(false);
const selectedImg = ref({
  link: "",
  alt: "",
  title: "",
});

defineProps({
  images: {
    type: Array as PropType<Image[]>,
  },
});

onMounted(() => {
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});
const onCardOpen = (link: string, alt: string, title: string) => {
  selectedImg.value = {
    link,
    alt,
    title,
  };
  isClicked.value = true;
};

function onCardClose() {
  isClicked.value = false;
}
</script>

<style scoped>
.extra-styles {
  @apply flex justify-self-center p-6 max-w-6xl hover:saturate-100 saturate-50 transition-all duration-200 cursor-pointer;
}
</style>
