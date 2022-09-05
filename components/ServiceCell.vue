<template>
  <div class="border">
    <div>
      Icon
    </div>
    <div>{{ title }}</div>
    <div>{{ description }}</div>
    <NuxtLink :to=link>
      Learn More
    </NuxtLink>
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
