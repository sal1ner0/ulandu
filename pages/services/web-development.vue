<template>
  <div>
    <PageHeader
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac sit sed fusce diam pulvinar id. Iaculis in maecenas ultrices adipiscing viverra. Tellus vulputate volutpat congue cursus urna sagittis viverra id. Pretium pretium dui mauris aliquet mauris eu, nulla eget quis. Dui gravida nec diam duis."
      subTitle="Development" title="Website"/>

    <section>
      <div v-for="service in services" :key="service.title">
        <ServiceFullCell
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :image-position-first="service.imagePositionFirst"
        />
      </div>
    </section>

    <IndustryWeWorked/>

    <Testimonial/>

    <Clients/>

  </div>
</template>

<script>
export default {
  name: "web-development",
  data() {
    return {
      services: [
        {
          title: "Enterprise Solution",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/780x520/3b635a/fff",
          imagePositionFirst: true,
        },
        {
          title: "E-Commerce",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/520x520/3b635a/fff",
          imagePositionFirst: false,
        },
        {
          title: "Mobile Backend & APIs",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/780x520/3b635a/fff",
          imagePositionFirst: true,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
