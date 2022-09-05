<template>
  <div class="border">
    <div v-if="imagePositionFirst">
      Image
    </div>
    <div>
      <div><b>{{ title }}</b></div>
      <div>{{ description }}</div>
      <div>
        <NuxtLink to="/">Learn more</NuxtLink>
      </div>
    </div>
    <div v-if="!imagePositionFirst">
      Image
    </div>
  </div>
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
