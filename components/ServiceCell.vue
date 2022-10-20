<template>
<div class="col-sm-4 col-md-6 col-lg-4">
  <div class="service-box">
    <a href="#">
      <img :src="icon">
      <p class="service-title">{{ title }}</p>
      <p class="service-text">{{ description }}</p>
    </a>
    <NuxtLink :to=link class="service-btn col-sm-12">
      Learn More
    </NuxtLink>
  </div>
</div>
</template>
<script>
export default {
  name: "ServiceCell",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
