<template>
  <div>
    <PageHeader
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id. Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis."
      title="Hire development"/>

    <!--Our time Section -->
    <section id="time" class="align-items-center ">
      <div class="container">

        <div class="row align-items-center ">

          <template v-for="HiringTime in HiringTimes">
            <HiringTime
              :description="HiringTime.description"
              :icon="HiringTime.icon"
              :link="HiringTime.link"
              :title="HiringTime.title"
            />
          </template>

        </div>
      </div>
    </section>
    <!--End time Section -->

    <!-- hiring process -->
    <section id="hiring" class="align-items-center about-main-heading ">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h3 class="title-heading">Hiring Process<i class="green-arrow"><img
              src="~static/images/heading-arrow.svg"/></i>
            </h3>
            <h4>We Follow Our Work Process</h4>
            <p class="col-sm-9 tegline-text">Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper
              feugiat nec a cursus tincidunt
              nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
              justo, turpis mollis quam</p>
          </div>
        </div>
        <div class="row align-items-center process-row">
          <div class="col-sm-5 text-center">
            <img src="~static/images/send-your-resume.svg"/>
          </div>
          <div class="col-sm-6">
            <div class="d-flex">
              <div class="numbeing"><img src="~static/images/one.png"/></div>
              <div>
                <p class="process-title">Send your resume</p>
                <span class="process-desc">Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper
                  feugiat nec a cursus
                  tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center process-row">
          <div class="col-sm-5 text-center">
            <img src="~static/images/set-interview.svg"/>
          </div>
          <div class="col-sm-6">
            <div class="d-flex">
              <div class="numbeing"><img src="~static/images/two.png"/></div>
              <div>
                <p class="process-title">Set interview</p>
                <span class="process-desc">Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper
                  feugiat nec a cursus
                  tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center process-row">
          <div class="col-sm-5 text-center">
            <img src="~static/images/selection-process.svg"/>
          </div>
          <div class="col-sm-6">
            <div class="d-flex">
              <div class="numbeing"><img src="~static/images/three.png"/></div>
              <div>
                <p class="process-title">Selection process</p>
                <span class="process-desc">Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper
                  feugiat nec a cursus
                  tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- End hiring process -->

    <!-- dedicated -->
    <section id="dedicated" class="align-items-center ">
      <div class="container">
        <div class="dedicated-block">
          <div class="row">
            <div class="col-sm-6">
              <p class="dedicated-title">Looking to Hire Dedicated Developers?</p>
              <span class="dedicated-desc">At ulandu you get a one-stop shop for all you IT service needs, we will take
                care of all your needs
                right from Strategic concept development, Business analysis, Software development all in one
                place.</span>
              <a class="dedicated-btn" href="#">Let’s get started</a>
            </div>
            <div class="col-sm-5 offset-sm-1">
              <img class="dedicated-img" src="~static/images/hire_image.svg">
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- End dedicated -->

    <IndustryWeWorked/>

    <Testimonial/>


    <Clients/>


  </div>
</template>

<script>
export default {
  name: "hire-us",
  data() {
    return {
      HiringTimes: [
        {
          title: "Full time developer",
          description: "8 hours per day",
          icon: require('~/static/images/fulltime.svg'),
          link: "",
        },
        {
          title: "Part time developer",
          description: "4 hours per day",
          icon: require('~/static/images/parttime.svg'),
          link: "",
        },
        {
          title: "Hourly base hiring",
          description: "Hourly",
          icon: require('~/static/images/hourly.svg'),
          link: "",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
