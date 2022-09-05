<template>
  <div>
    <div>
      <div>
        <NuxtLink to="/">Logo</NuxtLink>
      </div>
      <ul>
        <li>
          <NuxtLink to="/about-us">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/technologies">Technologies</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/our-works">Our Work</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact-us">Contact us</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
