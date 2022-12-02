<template>
  <div>
    <!-- Banner Section -->
    <section id="Banner" class="align-items-center">
      <div class="bannerimg"><img src="~static/images/bannerbg.png"/></div>
      <div class="container">
        <div class="row ">
          <div class="col-lg-6">
            <h1 class="banner-heading">Always deliver <br><span>More than </span><br/>Expected <i
              class="green-arrow"><img src="~static/images/green-arrow.svg"/></i></h1>
            <p>Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare.<br/> Semper feugiat nec a cursus
              tincidunt
              nulla in. Consequat hac ut<br/> lobortis amet, varius sapien sagittis. Aliquam molestie diam at
              massa<br/> non
              justo, turpis mollis quam</p>
            <NuxtLink :to='({name: "contact-us"})' class="banner-btn" type="button">Contact us</NuxtLink>

          </div>
          <div class="col-sm-6 mt-5"><img alt="banner-image" height="900" src="~static/images/hero.png"></div>
        </div>
      </div>
      <img class="bannercircle-img" src="~static/images/banner-circle.png">
    </section>
    <!--End Banner Section -->

    <!-- Clients Section -->
    <Clients/>
    <!--End Clients Section -->

    <!-- Our Services Section -->
    <section id="Services" class="align-items-center">
      <div class="container">
        <div id="ourservice">
          <div class="col-sm-12">
            <div class="service-main-heading">
              <h2>OUR SERVICES <i class="green-arrow"><img src="~static/images/heading-arrow.svg"/></i></h2>
              <NuxtLink :to='({name: "services"})'>View All <img src="~static/images/small-arrow.svg"/></NuxtLink>
            </div>
          </div>
          <div class="slick-slider row mr-0">
            <swiper ref="serviceSwiper" :options="servicesSwiperOptions">
              <swiper-slide v-for="service in services" :key="service.title">
                <ServiceIndex
                  :description="service.description"
                  :icon="service.icon"
                  :link="service.link"
                  :title="service.title"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>

    </section>
    <!-- Our Services Section -->

    <!-- Newsletter -->
    <LetsTalk/>
    <!-- End Newsletter -->

    <!-- Our Compnay Section -->
    <OurCompany :is-about="false"/>
    <!-- End Our Compnay Section -->

    <!-- Counter Section -->
    <Statistics/>
    <!-- End Counter Section -->

    <!-- Technology -->
    <section id="technology">
      <img class="technologyleft-img" src="~static/images/technologyleft-img.png"/>
      <div class="container">
        <h3 class="technology-heading">TECHNOLOGY WE WORK <i class="green-arrow"><img
          src="~static/images/heading-arrow.svg"/></i>
        </h3>
        <b-tabs active-nav-item-class="btn">
          <b-tab active>
            <template #title>
              <p>
                <b-img src="~static/images/phone.svg"></b-img>
              </p>
              Mobile
            </template>
            <div>
              <div class="row">
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/angular.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/css.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/reactjs.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/javascript.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/vue.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/html.svg"/>
                </div>

              </div>
              <div class="col-sm-12">
                <p>
                  Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam.
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                <b-img src="~static/images/Backend.svg"></b-img>
              </p>
              Back end
            </template>
            <div>
              <div class="row">
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/angular.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/css.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/reactjs.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/javascript.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/vue.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/html.svg"/>
                </div>

              </div>
              <div class="col-sm-12">
                <p>
                  Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam.
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                <b-img src="~static/images/frontendicon.svg"></b-img>
              </p>
              Front end
            </template>
            <div>
              <div class="row">
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/angular.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/css.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/reactjs.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/javascript.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/vue.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/html.svg"/>
                </div>

              </div>
              <div class="col-sm-12">
                <p>
                  Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam.
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                <b-img src="~static/images/Database.svg"></b-img>
              </p>
              Database
            </template>
            <div>
              <div class="row">
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/angular.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/css.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/reactjs.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/javascript.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/vue.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/html.svg"/>
                </div>

              </div>
              <div class="col-sm-12">
                <p>
                  Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam.
                </p>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                <b-img src="~static/images/Design.svg"></b-img>
              </p>
              Design
            </template>
            <div>
              <div class="row">
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/angular.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/css.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/reactjs.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/javascript.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/vue.svg"/>
                </div>
                <div class="col-sm-2 col-6 text-center">
                  <img src="~static/images/html.svg"/>
                </div>

              </div>
              <div class="col-sm-12">
                <p>
                  Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt
                  nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non
                  justo, turpis mollis quam.
                </p>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </section>
    <!-- End Technology -->

    <!-- worldwide -->
    <TrustedMap/>
    <!-- end worldwide -->

    <!-- Our industry Section -->
    <section id="industry" class=" ">
      <div class="container">
        <div id="ourservice">
          <div class="col-sm-12">
            <div class="industry-main-heading service-main-heading">
              <h2>INDUSTRY WISE SOLUTIONS <i class="green-arrow"><img src="~static/images/heading-arrow.svg"></i></h2>
            </div>
          </div>

          <div class="industry-tabs">
            <b-tabs>
              <b-tab active>
                <template #title>
                  <p>E-commerce
                  </p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Healthcare</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Food delievery</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Real estate</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Travel</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Sport</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Business</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Education</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>Entertainment</p>
                </template>
                <swiper ref="industrySolutions" :options="industrySolutionsSwiperOptions">
                  <swiper-slide v-for="industrySolution in industrySolutions" :key="industrySolution.title">
                    <IndustrySolution
                      :description="industrySolution.description"
                      :image="industrySolution.image"
                      :title="industrySolution.title"
                    />
                  </swiper-slide>
                </swiper>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>

    </section>
    <!-- Our industry Section -->

    <!-- sucessfull -->
    <GetEstimate/>
    <!-- end sucessfull -->

    <!-- Our Testimonial Section -->
    <Testimonial/>
    <!-- End Our Testimonial Section -->

    <!-- Our Work Section -->
    <section id="client" class="align-items-center ">
      <div class="container">
        <div class="col-sm-12">
          <div class="client-main-heading">
            <h2>OUR WORKS <i class="green-arrow"><img src="~static/images/heading-arrow.svg"></i></h2>
          </div>
        </div>
        <template v-for="OurWork in OurWorks">
          <OurWork
            :description="OurWork.description"
            :image="OurWork.image"
            :imagePositionFirst="OurWork.imagePositionFirst"
            :title="OurWork.title"
          />
        </template>
      </div>
    </section>
    <!-- // Our Work Section -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      services: [
        {
          title: "App Development",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/phone.svg'),
          link: "/services/mobile-development",
        },
        {
          title: "Web Development",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/web.svg'),
          link: "/services/web-development",
        },
        {
          title: "UI/UX Design",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/Design.svg'),
          link: "/services/ui-ux-design",
        },
        {
          title: "Quality Assurance",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/quality.svg'),
          link: "/services/mobile-development",
        },
        {
          title: "Search engine optimization",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/search.svg'),
          link: "/services/mobile-development",
        },
      ],
      industrySolutions: [
        {
          title: "Bookie - Book your entertainment",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          image: "https://dummyimage.com/500X500/3b635a/fff",
        },
        {
          title: "Bookie - Book your entertainment now",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          image: "https://dummyimage.com/500X500/3b635a/fff",
        },
      ],
      OurWorks: [
        {
          title: "Patcho app",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id semper amet nunc, adipiscing viverra senectus volutpat. Morbi dolor non interdum fermentum. Tellus metus porttitor in sit tellus elit. Quam elit tortor pharetra, eu a cursus venenatis. Dictumst vel accumsan lectus quis scelerisque sed nunc enim quis. Volutpat et sit rhoncus lorem sagittis faucibus sapien est odio. Urna, tincidunt quis quis sed purus vitae egestas. Senectus placerat et aenean nunc odio varius. Sed feugiat ante tellus risus consectetur tincidunt faucibus.",
          image: "https://dummyimage.com/500x515/3b635a/fff",
          imagePositionFirst: true,
        },
        {
          title: "Patcho app",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id semper amet nunc, adipiscing viverra senectus volutpat. Morbi dolor non interdum fermentum. Tellus metus porttitor in sit tellus elit. Quam elit tortor pharetra, eu a cursus venenatis. Dictumst vel accumsan lectus quis scelerisque sed nunc enim quis. Volutpat et sit rhoncus lorem sagittis faucibus sapien est odio. Urna, tincidunt quis quis sed purus vitae egestas. Senectus placerat et aenean nunc odio varius. Sed feugiat ante tellus risus consectetur tincidunt faucibus.",
          image: "https://dummyimage.com/500x515/3b635a/fff",
          imagePositionFirst: false,
        },
      ],
      servicesSwiperOptions: {
        slidesPerView: 3,
      },
      industrySolutionsSwiperOptions: {
        slidesPerView: 1,
      },
    }
  }
}
</script>
