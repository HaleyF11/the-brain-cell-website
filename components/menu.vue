<template>
  <nav>
    <ul class="flex space-x-2">
      <li>
        <NuxtLink to="/" class="link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/discord" class="link">Discord</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
.link {
  @apply hover:bg-orange-800 hover:text-orange-100 rounded-md py-2 px-1;
}
</style>
