<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">


    <div id="card" class="flex flex-col bg-dark-blue-card">
      <img src="./assets/img/image-equilibrium.jpg" alt="image-equilibrium">


      <p class="text-white">Equilibrium #3429</p>
      <p class="text-soft-blue">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div class="flex flex-row">
        <div class="flex flex-row">
          <img src="./assets/img/icon-ethereum.svg" alt="icon-ethereum">
          <p class="text-cyan">0.041 ETH</p>
        </div>
        <div class="flex flex-row">
          <img src="./assets/img/icon-clock.svg" alt="icon-clock">
          <p class="text-soft-blue">
            3 days left
          </p>
        </div>
      </div>


      <div class="flex flex-row">
          <img class="" src="./assets/img/image-avatar.png" alt="image-avatar">
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