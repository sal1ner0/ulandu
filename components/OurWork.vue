<template>
  <div class="row align-items-center client-row">
    <div v-if="imagePositionFirst" class="col-sm-6">
      <img class="client-image" src="https://dummyimage.com/500x515/3b635a/fff"/>
    </div>
    <div class="col-sm-6">
      <p class="client-name">{{ title }} </p>
      <span class="client-desc">{{ description }}</span>
    </div>
    <div v-if="!imagePositionFirst" class="col-sm-6">
      <img class="client-image" src="https://dummyimage.com/500x515/3b635a/fff"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurWork",
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
