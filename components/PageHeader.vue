<template>
  <section id="green-banner" class="align-items-center mobile-banner about-main-heading">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12 mx-auto">
          <h1 class="greenbanner-heading"> {{ title }} <b>{{ subTitle }}</b></h1>
          <p class="col-sm-11 mx-auto">{{ description }}</p>
        </div>
      </div>
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
    subTitle: {
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
