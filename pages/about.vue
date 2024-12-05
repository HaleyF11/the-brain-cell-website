<template>
  <section>
    <h1 class="text-8xl uppercase text-center mb-5">About</h1>
  </section>
  <div
    class="card-padding bg-orange-950 rounded-lg text-orange-300 shadow-orange-950 shadow-md mb-5"
  >
    <p class="font-semibold text-center">
      ❤️🧡💛💚💙💜🖤 The Brain Cell is LGBTQ+ friendly and inclusive, this means
      we have zero tolerance for toxic behaviour such as the usage of slurs or
      homophobic remarks - <strong>no exceptions.</strong> 👊🏻👊🏼👊🏽👊🏾👊🏿
    </p>
  </div>
  <section
    class="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    <Card class="card-padding">
      <h2 class="font-semibold text-3xl text-center mb-3">About Us</h2>
      <p>
        The Brain Cell is a semi-casual guild on the RP server Wyrmrest Accord.
        We push each season for AOTC and KSM. Our guild is founded on
        inclusivity and a commitment to having fun. With this in mind, we still
        set expectations for our team to have fun and productive raid nights.
      </p>
    </Card>
    <Card class="card-padding">
      <h2 class="font-semibold text-3xl text-center mb-3">
        Raid Days and Times
      </h2>
      <ul class="text-center text-lg font-semibold">
        <li>Tuesday 5:00 - 7:00p PST</li>
        <li>Thursday 5:00 - 7:00p PST</li>
      </ul>
    </Card>
    <Card class="card-padding">
      <h2 class="font-semibold text-3xl text-center mb-3">
        What We're Looking For
      </h2>
      <ul class="flex flex-col divide-y-2 divide-orange-700">
        <li class="pb-2">
          Your character is raid-ready (or close to it) and you have experience
        </li>
        <li class="py-2">
          A good attitude and an ability to take constructive feedback
        </li>
        <li class="py-2">Regular attendance or communication on attendance</li>
        <li class="py-2">
          An interest in self-improvement, even outside of raid
        </li>
        <li class="py-2">Ability to use Discord and listen in raids</li>
      </ul>
    </Card>
  </section>
  <section class="text-3xl text-center mt-5">
    <h2>Contact Info:</h2>
    <p>Discord: <strong>hatosaurus</strong></p>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-padding {
  @apply p-3;
}
</style>
