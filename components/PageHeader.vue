<template>
  <section class="border">
    <h1 v-html="title" />
    <div>
      {{ description }}
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
