<template>
  <div>
    <PageHeader
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id. Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis."
      subTitle="Ulandu" title="About"/>

    <!-- About Section -->
    <section id="about" class="align-items-center about-main-heading">
      <img class="aboutright-img" src="~static/images/aboutright-img.png"/>
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h3 class="title-heading">OUR Ulandu<i class="green-arrow"><img src="~static/images/heading-arrow.svg"/></i>
            </h3>

            <img class="about-img" src="https://dummyimage.com/1321x520/3b635a/fff"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in
              maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id.
              Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis. Leo lectus
              pellentesque sed pellentesque nam auctor. Turpis cras massa mauris ut purus leo pretium. Aliquet sit ipsum
              vitae at enim volutpat. Facilisis tempor, non mi, et lacus, faucibus luctus quis aliquet. Sagittis, id
              viverra sed adipiscing tincidunt dictumst.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in
              maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id.
              Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis. Leo lectus
              pellentesque sed pellentesque nam auctor. Turpis cras massa mauris ut purus leo pretium. Aliquet sit ipsum
              vitae at enim volutpat. Facilisis tempor, non mi, et lacus, faucibus luctus quis aliquet. Sagittis, id
              viverra sed adipiscing tincidunt dictumst.</p>
          </div>


        </div>
      </div>
    </section>
    <!--End About Section -->

    <!-- Who we are Section -->
    <section id="Who-we-are" class="align-items-center about-main-heading">
      <div class="container">
        <div class="row ">
          <div class="col-sm-12">
            <h3 class="title-heading">Who we are<img src="~static/images/heading-arrow.svg"/></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in
              maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id.
              Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis. Leo lectus
              pellentesque sed pellentesque nam auctor. Turpis cras massa mauris ut purus leo pretium. Aliquet sit ipsum
              vitae at enim volutpat. Facilisis tempor, non mi, et lacus, faucibus luctus quis aliquet. Sagittis, id
              viverra sed adipiscing tincidunt dictumst.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="whoweare-box">
              <div class="image-box blue text-center">
                <img src="~static/images/Our-Mission.svg"/>
                <span>Our Mission</span>
              </div>
              <div class="content-box">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="whoweare-box">
              <div class="image-box green text-center">
                <img src="~static/images/Our-Vision.svg"/>
                <span>Our Vision</span>
              </div>
              <div class="content-box">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="whoweare-box">
              <div class="image-box light-blue text-center">
                <img src="~static/images/Our-Values.svg"/>
                <span>Our Values</span>
              </div>
              <div class="content-box">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Who We Are Section -->


    <!-- Our Company Section -->
    <OurCompany :is-about="true"/>

    <!-- // Our Company Section -->

    <!-- Counter Section -->
    <Statistics/>
    <!-- End Counter Section -->


    <!-- Join Team Section -->
    <join-our-team/>
    <!-- // Join Team Section -->


    <!-- Our Team Section -->
    <our-team/>
    <!-- // Our Team Section -->

    <!-- Brand Section -->
    <Clients/>
    <!-- Brand Section -->


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
import OurWorks from "@/pages/our-works";

export default {
  name: "about-us",
  components: {OurWorks},
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
