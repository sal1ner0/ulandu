<template>
  <header id="header" class="fixed-top  align-items-center">
    <div class="top-header">
      <div class="container">
        <div class="row justify-content-between  align-items-center">
          <div class="col-1">
            <NuxtLink :to='({path: "/"})'><img alt="Decore Motor logo" class="main-logo" src="~static/images/logo.svg"/>
            </NuxtLink>
          </div>
          <div class="col-6">
            <div class="main-header">
              <div class=" d-flex align-items-center mobile-header">
                <nav id="navbar" class="navbar">
                  <ul>
                    <div class="mobile-logo">
                      <img alt="Decore Motor logo" class="mobile-main-logo" src="~static/images/logo.svg">
                    </div>

                    <li>
                      <NuxtLink :to='({name: "about-us"})'><span>About</span></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to='({name: "services"})'><span>Services</span></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to='({name: "technologies"})'><span>Technology</span></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to='({name: "our-works"})'>Our work</NuxtLink>
                    </li>
                    <li class="contactus-link">
                      <NuxtLink :to='({name: "contact-us"})'>Contact us</NuxtLink>
                    </li>
                  </ul>

                  <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->

              </div>


            </div>

          </div>

        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
