<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">


    <div id="card" class="flex flex-col gap-4 bg-dark-blue-card w-80 p-6 rounded-2xl shadow-xl shadow-cyan">
      <img class="rounded-xl" src="./assets/img/image-equilibrium.jpg" alt="image-equilibrium">


      <p class="text-white font-semibold text-xl">Equilibrium #3429</p>
      <p class="text-soft-blue font-light">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div class="flex flex-row justify-between">
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


      <div class="flex flex-row gap-4 pt-4 border-t-2 border-dark-blue-line">
          <img class="w-8 rounded-full border-2 border-white" src="./assets/img/image-avatar.png" alt="image-avatar">
          <p class="text-soft-blue">Creation of <span class="text-white">Jules Wyvern</span></p>
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