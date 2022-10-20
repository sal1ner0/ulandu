<template>
  <div>
    <PageHeader
      title="Mobile App Development "
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    />

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
  name: "mobile-development",
  data() {
    return {
      services: [
        {
          title: "IOS Apps Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/300x600/3b635a/fff",
          imagePositionFirst: true,
        },
        {
          title: "Android Apps Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/300x600/3b635a/fff",
          imagePositionFirst: false,
        },
        {
          title: "Hybrid Apps Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: "https://dummyimage.com/400x600/3b635a/fff",
          imagePositionFirst: true,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
