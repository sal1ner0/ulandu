<template>
  <div>

    <PageHeader
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id. Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis."
      title="Services"/>


    <!--Our services Section -->
    <section id="ourservice" class="align-items-center about-main-heading ">
      <img class="serviceleft-img" src="~static/images/serviceleft-img.png">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h3 class="title-heading">OUR Services<i class="green-arrow"><img
              src="~static/images/heading-arrow.svg"/></i>
            </h3>
          </div>
        </div>
        <div class="row">

          <template v-for="service in services">
            <ServiceCell
              :description="service.description"
              :icon="service.icon"
              :link="service.link"
              :title="service.title"
            />
          </template>
        </div>
      </div>
      <img class="serviceright-img" src="~static/images/serviceright-img.png"/>
    </section>
    <!--End Our services Section -->

    <!--  consulation -->
    <section id="consulation">
      <div class="container">
        <div class="col-sm-12 text-center">
          <p class="text-white">Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a
            cursus tincidunt nulla in.</p>
          <h2 class="text-white">GET CONSULTATION ?</h2>
          <a class="contactus-btn">Contact us</a>
        </div>
      </div>
    </section>
    <!-- ENd consulation -->

    <GetEstimate/>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      services: [
        {
          title: "App Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          icon: require('~/static/images/phone.svg'),
          link: "/services/mobile-development",
        },
        {
          title: "Web Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          icon: require('~/static/images/web.svg'),
          link: "/services/web-development",
        },
        {
          title: "UI/UX Design",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          icon: require('~/static/images/Design.svg'),
          link: "/services/ui-ux-design",
        },
        {
          title: "Quality Assurance",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          icon: require('~/static/images/quality.svg'),
          link: "/services/mobile-development",
        },
        {
          title: "Search engine optimization",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          icon: require('~/static/images/search.svg'),
          link: "/services/mobile-development",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
