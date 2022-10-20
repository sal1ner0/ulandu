<template>
  <div class="element">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <img :src="image"/>
      </div>
      <div class="col-sm-6">
        <h4 class="industry-title">{{ title }}</h4>
        <p class="industry-desc">{{ description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustrySolution",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
