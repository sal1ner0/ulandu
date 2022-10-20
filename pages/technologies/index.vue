<template>
  <div>
    <PageHeader title="Technologies"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>


    <!--Our Technology Section -->
    <section id="ourservice" class="align-items-center about-main-heading service-section">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h3 class="title-heading">Our Services<i class="green-arrow"><img
              src="~static/images/heading-arrow.svg"/></i>
            </h3>
            <h5>Technology spectrum we have</h5>
          </div>
        </div>
        <div class="row">
          <template v-for="technology in technologies">
            <technology
              :description="technology.description"
              :icon="technology.icon"
              :link="technology.link"
              :title="technology.title"
            />
          </template>
        </div>
      </div>
    </section>
    <!--End Our Technology Section -->

    <!--Our Help Section -->
    <section id="help" class="align-items-center ">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12 text-center">
            <h2>We help you create Apps for</h2>
          </div>
        </div>
        <div class="row">
          <template v-for="createApp in createApps">
            <CreateApps
              :color="createApp.color"
              :description="createApp.description"
              :icon="createApp.icon"
              :title="createApp.title"
            />
          </template>
        </div>
      </div>
    </section>
    <!--End Our services Section -->

    <GetEstimate/>
  </div>
</template>

<script>
export default {
  name: "technologies",
  data() {
    return {
      technologies: [
        {
          title: "Mobile",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/phone.svg'),
          link: "/services/mobile-development",
        },
        {
          title: "Front end",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/frontendicon.svg'),
          link: "/services/web-development",
        },
        {
          title: "Database",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/Database.svg'),
          link: "/services/ui-ux-design",
        },
        {
          title: "Design",
          description: "Ullamcorper nisi, sagittis, proin ac et euismod pharetra ornare. Semper feugiat nec a cursus tincidunt nulla in. Consequat hac ut lobortis amet, varius sapien sagittis. Aliquam molestie diam at massa non justo, turpis mollis quam",
          icon: require('~/static/images/Design.svg'),
          link: "/services/mobile-development",
        },
      ],
      createApps: [
        {
          title: "Business",
          description: "Our collaborative consulting on Mobile Strategy serves as a catalyst in streamlining IT frameworks and processes with the mobile roadmap that is aligned with enterprise scenarios, policies and current systems.",
          icon: require('~/static/images/business.svg'),
          color: "help-title red",
        },
        {
          title: "Enterprise",
          description: "Our collaborative consulting on Mobile Strategy serves as a catalyst in streamlining IT frameworks and processes with the mobile roadmap that is aligned with enterprise scenarios, policies and current systems.",
          icon: require('~/static/images/enterprise.svg'),
          color: "help-title blue",
        },
        {
          title: "Consumers",
          description: "Our collaborative consulting on Mobile Strategy serves as a catalyst in streamlining IT frameworks and processes with the mobile roadmap that is aligned with enterprise scenarios, policies and current systems.",
          icon: require('~/static/images/consumer.svg'),
          color: "help-title green",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
