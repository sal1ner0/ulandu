<template>
  <div class="element">
    <div class="service-box">
      <img :src="icon"/>
      <p class="service-title ">{{ title }}</p>
      <p class="service-text">{{ description }}</p>
      <NuxtLink :to=link class="service-btn col-sm-12">
        Learn More
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceIndex",
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
