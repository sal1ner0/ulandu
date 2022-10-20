<template>
  <div>
    <Header/>
    <main id="main">
      <Nuxt/>
      <Newsletter/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>
.container {
  max-width: 1320px !important;
}
</style>
