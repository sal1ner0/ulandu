<template>
  <div class="col-sm-4 col-md-6 col-lg-4">
    <NuxtLink :to=link>
      <div class="timely d-flex">
        <img :src="icon" class="time-img">
        <div>
          <p>{{ title }}</p>
          <span>{{ description }}</span>
        </div>
        <img class="arrow-img" src="~static/images/smallarrow.svg"/>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "HiringTime",
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
