<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">

    <!-- Card -->
    <div id="card" class="flex flex-col gap-4 bg-dark-blue-card w-80 p-6 rounded-2xl shadow-xl shadow-cyan">
      <div class="relative">
        <img class="rounded-xl" src="./assets/img/image-equilibrium.jpg" alt="image-equilibrium">

        <!-- Hover overlay -->
        <div class="opacity-0 hover:opacity-100 hover:cursor-pointer">
          <div class="absolute w-full h-full bg-cyan/40 top-0 rounded-2xl"></div>
          <img class="absolute top-28 left-28" src="./assets/img/icon-view.svg" alt="icon-view">
        </div>

      </div>

      <!-- Description -->
      <p class="text-white font-semibold text-xl hover:text-cyan hover:cursor-pointer">Equilibrium #3429</p>
      <p class="text-soft-blue font-light">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <!-- Value content -->
      <div class="flex flex-row justify-between py-1">
        <div class="flex flex-row items-center gap-2">
          <img class="h-4" src="./assets/img/icon-ethereum.svg" alt="icon-ethereum">
          <p class="text-cyan whitespace-nowrap">0.041 ETH</p>
        </div>
        <div class="flex flex-row items-center gap-2">
          <img class="w-5 h-5" src="./assets/img/icon-clock.svg" alt="icon-clock">
          <p class="text-soft-blue whitespace-nowrap">
            3 days left
          </p>
        </div>
      </div>

      <!-- Creator callout -->
      <div class="flex flex-row gap-4 pt-4 border-t-2 border-dark-blue-line">
        <img class="w-8 rounded-full border-2 border-white" src="./assets/img/image-avatar.png" alt="image-avatar">
        <p class="text-soft-blue">Creation of <span class="text-white hover:text-cyan hover:cursor-pointer">Jules
            Wyvern</span></p>
      </div>
    </div>


  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      bodyClass: 'font-outfit bg-dark-blue-wallpaper'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>