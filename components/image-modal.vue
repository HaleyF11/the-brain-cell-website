<template>
  <div class="fixed inset-x-0 top-0 w-screen h-screen">
    <div
      @click="onCloseModal"
      class="p-5 mx-auto max-w-max relative mt-20 z-10 bg-orange-300 rounded-lg"
    >
      <img :src="link" :alt="alt" class="rounded-lg max-height" />
      <h3 class="text-center font-semibold text-2xl pt-2">{{ title }}</h3>
    </div>
    <div
      @click="onCloseModal"
      class="bg-black w-screen h-screen absolute left-0 top-0 opacity-90 z-0"
    ></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  alt: {
    type: String,
  },
});

const emit = defineEmits(["closeModal"]);

function onCloseModal() {
  emit("closeModal");
}
</script>

<style scoped>
.max-height {
  max-height: 550px;
}
</style>
