<template>
  <div class="mx-auto min-h-screen text-orange-700 max-w-screen-2xl">
    <header
      class="flex justify-between pt-3 mb-8 border-orange-300 border-b pb-2"
    >
      <div class="text-xl font-semibold">
        <NuxtLink to="/">Logo Here</NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
