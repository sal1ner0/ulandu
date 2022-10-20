<template>
  <section id="mobile" class="align-items-center"
           v-bind:class="{'first-mobile': imagePositionFirst,  'second-mobile': !imagePositionFirst}">
    <div class="container">
      <div class="row align-items-center ">
        <div v-if="!imagePositionFirst" class="col-sm-6 text-center">
          <img :src="image" class="client-image">
        </div>
        <div class="col-sm-6">
          <p class="lang-name">{{ title }} </p>
          <span class="lang-desc">{{ description }}</span>
          <NuxtLink class="Learnmore-btn" to="/">Learn more</NuxtLink>
        </div>
        <div v-if="imagePositionFirst" class="col-sm-6 text-center">
          <img :src="image" class="client-image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceFullCell",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    imagePositionFirst: {
      type: Boolean
    },
  }
}
</script>

<style scoped>

</style>
