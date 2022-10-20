<template>
  <div>
    <section id="company" class="align-items-center">
      <img class="companyleft-img" src="~static/images/companyleft-img.png">
      <div class="container">
        <div class="row ">
          <div class="col-lg-6">
            <h3 class="company-heading">OUR COMPANY<i class="green-arrow"><img
              src="~static/images/heading-arrow.svg"/></i></h3>
            <p class="compnay-overview">Ullamcorper nisi, <br/>sagittis, proin ac et</br> euismod pharetra<br/>
              ornare. </p>
            <p class="compnay-tagline">Ullamcorper nisi, sagittis, proin ac et euismod <br/>pharetra ornare. Semper
              feugiat nec a cursus
              <br/>tincidunt
              nulla in. Consequat hac ut lobortis amet, <br/>varius sapien sagittis. Aliquam molestie diam at
              <br/>massa non
              justo, turpis mollis quam
            </p>
            <button v-if="!isAbout" class="company-btn">Let’s Tour</button>
          </div>
          <div class="col-sm-6 text-center">
            <img class="client-image" height="784px" src="~static/images/our_company.png">
          </div>
          <div v-if="isAbout" class="col-sm-12 text-center">
            <p class="project-completed">We completed over 100+ Projects <br/>
              Successfully & counting</p>
          </div>
        </div>
      </div>
      <img class="companyright-img" src="~static/images/companyright-img.png">
    </section>
    <!--End Company Section -->

  </div>
</template>

<script>
export default {
  name: "OurCompany",
  props: {
    isAbout: {
      type: Boolean
    },
  }
}
</script>

<style scoped>

</style>
