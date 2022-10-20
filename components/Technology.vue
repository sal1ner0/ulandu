<template>
  <div class="col-sm-3 col-md-6 col-lg-3">
    <div class="service-box">
      <NuxtLink :to=link>
        <img :src="icon" class="service-icon">
        <p class="service-title">{{ title }}</p>
        <p class="service-text">{{ description }}</p>
        <img class="whitearrow-img" src="~static/images/white-arrow.svg"/>
      </NuxtLink>

    </div>
  </div>
</template>

<script>
export default {
  name: "Technology",
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
