<template>
  <div class="col-sm-4 col-md-6 col-lg-4">
    <div class="help-box">
      <div class="help-header-block d-flex align-content-center">
        <img :src="icon">
        <p :class="color">{{ title }}</p>
      </div>
      <p class="help-dece">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateApps",
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
    color: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
