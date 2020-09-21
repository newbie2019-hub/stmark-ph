<template>
  <div>
    <div id="carouselGallery" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselGallery" data-slide-to="0" class="active"></li>
        <li data-target="#carouselGallery" data-slide-to="1"></li>
        <li data-target="#carouselGallery" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" v-bind:src="'/images/image1.jpg'" loading="lazy" data-interval="1000" />
        </div>
        <div class="carousel-item">
          <img class="img-fluid" v-bind:src="'/images/image2.jpg'" loading="lazy" data-interval="1000"/>
        </div>
        <div class="carousel-item">
          <img class="img-fluid" v-bind:src="'/images/image3.jpg'" loading="lazy" data-interval="1000" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselGallery"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselGallery"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
