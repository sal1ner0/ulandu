<template>
  <footer id="footer">

    <div class="footer-stuff">
      <div class="container">
        <div class="row ">
          <div class="col-lg-3 col-md-3 col-sm-3 ">
            <nuxt-img alt="ulandu" class="footerlogo" src="/images/logo.svg" title="ulandu"/>
            <div class="information">
              <div class="d-flex">
                <nuxt-img src="images/mailicon.svg"/>
                <a :href="`mailto:${$config.contact.email}`">
                  {{ $config.contact.email }}
                </a>
              </div>
              <div class="d-flex">
                <nuxt-img src="images/callicon.svg"/>
                <a :href="`tel:${$config.contact.phone_number}`">
                  {{ $config.contact.phone_number }}
                </a>
              </div>
            </div>
            <div>
              <p class="followus-text">Follow us</p>
              <div class="d-flex social-links">
                <a v-for="socialLink in Object.keys($config.social_links)" :key="socialLink" class="text-white" :href="$config.social_links[socialLink]" target="_blank" :title="socialLink">
                  <nuxt-img :src="`images/${socialLink}.png`"/>
                </a>
              </div>
            </div>
            <p class="copyright-text">Copyright @ ULANDU. all rights reserved</p>
          </div>
          <div class="col-lg-8 col-md-8 offset-lg-1">
            <div class="row">
              <div class="footerlink-links col-sm-3 ">
                <h5>Company</h5>
                <NuxtLink :to='({name: "about-us"})'>About</NuxtLink>
                <NuxtLink :to='({name: "our-works"})'>Our work</NuxtLink>
                <NuxtLink :to='({name: "contact-us"})'>Contact us</NuxtLink>
              </div>
              <div class="footerlink-links col-sm-3">
                <h5>Services</h5>
                <NuxtLink :to='({name: "services-mobile-development"})'>Mobile development</NuxtLink>
                <NuxtLink :to='({name: "services-web-development"})'>Web development</NuxtLink>
                <NuxtLink :to='({name: "services-ui-ux-design"})'>UI/UX design</NuxtLink>
                <NuxtLink :to='({name: "services-marketing"})'>Seo/Marketing</NuxtLink>
              </div>
              <div class="footerlink-links col-sm-3">
                <h5>Technology</h5>
                <NuxtLink :to='({name: "technologies-php"})'>PHP</NuxtLink>
                <NuxtLink :to='({name: "technologies-react-js"})'>React</NuxtLink>
                <NuxtLink :to='({name: "technologies-node-js"})'>Node Js</NuxtLink>
                <NuxtLink :to='({name: "technologies-angular-js"})'>Angular</NuxtLink>
              </div>
              <div class="footerlink-links col-sm-3">
                <h5>Hire team</h5>
                <NuxtLink :to='({name: "hire-us"})'>ReactJS Developers</NuxtLink>
                <NuxtLink :to='({name: "hire-us"})'>VueJS Developers</NuxtLink>
                <NuxtLink :to='({name: "hire-us"})'>AngularJS Developers</NuxtLink>
                <NuxtLink :to='({name: "hire-us"})'>PHP Developers</NuxtLink>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
