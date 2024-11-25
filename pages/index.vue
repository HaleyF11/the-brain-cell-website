<template>
  <div>
    <!-- <img src="/tbctabard.png" alt="the brain cell guild crest" /> -->
    <h1 class="text-8xl uppercase text-center mb-5">The Brain Cell</h1>
    <Card
      class="flex justify-self-center p-6 max-w-6xl hover:grayscale-0 transition-all duration-200 grayscale-50"
    >
      <img
        src="/ANSUREK_AOTC_banner.jpg"
        alt="Ansurek AOTC"
        class="rounded-lg"
      />
    </Card>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/RobotoCondensed.ttf");
}

* {
  font-family: "Roboto Condensed";
}

.grayscale-50 {
  filter: grayscale(40%);
}
</style>
