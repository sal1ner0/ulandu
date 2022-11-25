<template>
  <section class="">
    <client-only>
      <swiper ref="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1400: {
            slidesPerView: 2
          },
          1199: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>
