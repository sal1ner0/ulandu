<template>
  <div>
    <!-- Tab  Section -->
    <section id="works" class="align-items-center ">
      <img class="worksleft-img" src="~static/images/worksleft-img.png">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <b-tabs content-class="mt-3" nav-class="col-sm-6 mx-auto">
              <b-tab active>
                <template #title>
                  <p class="nav-link">All</p>
                </template>
                <div id="client">
                  <template v-for="OurWork in OurWorks">
                    <OurWork
                      :description="OurWork.description"
                      :image="OurWork.image"
                      :imagePositionFirst="OurWork.imagePositionFirst"
                      :title="OurWork.title"
                    />
                  </template>
                </div>
              </b-tab>
              <b-tab>
                <template #title>
                  <p class="nav-link">Mobile Apps</p>
                </template>
                <div id="client">
                  <p>Mobile Apps</p>
                </div>
              </b-tab>
              <b-tab>
                <template #title>
                  <p class="nav-link">Websites</p>
                </template>
                <div id="client">
                  <p>Websites</p>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <img class="worksright-img" src="~static/images/worksright-img.png"/>
    </section>
    <!--End Tab  Section -->

    <!-- dedicated -->
    <section id="dedicated" class="align-items-center ">
      <div class="container">
        <div class="dedicated-block">
          <div class="row">
            <div class="col-sm-6">
              <p class="dedicated-title">Have any idea in your mind?</p>
              <span class="dedicated-desc">At ulandu you get a one-stop shop for all you IT service needs, we will take
                care of all your needs right from Strategic concept development, Business analysis, Software development
                all in one place.</span>
              <a class="dedicated-btn" href="#">Let’s get started</a>
            </div>
            <div class="col-sm-6 text-center">
              <img class="dedicated-img w-100" src="~static/images/woman-thinking-of-investment.svg">
            </div>
          </div>
        </div>
      </div>

    </section>
    <!--// End dedicated -->

    <!-- Our Testimonial Section -->
    <testimonial/>
    <!-- // Our Testimonial Section -->

  </div>
</template>

<script>
export default {
  name: "our-works",
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
