<template>
  <div>
    <section id="resources" class="updatesection">
      <div class="container d-flex h-100 justify-content-center align-items-center">
        <div class="mx-auto text-center">
          <h1 data-aos="fade-right" data-aos-duration="1400">
            <span class="header-primary">UPDATES</span>
          </h1>
        </div>
        <div class="icon-scroll"></div>
        <!--<h3><span class="scroll-text">Scroll Down</span></h3>-->
      </div>
    </section>
    <section class="update-section">
      <div class="container">
          <div class="row justify-content-center  mt-5" v-if="hasContent">
            <div class="col-9 col-sm-9 col-md-10 col-lg-8">
              <h3
                class="text-uppercase mb-3"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <span class="header-secondary text-secondary font-weight-bold"
                  >RECENT POST</span
                >
              </h3>
              <div
                class="mb-4"
                style="max-width: 800px"
                v-for="(content, i) in postContent"
                :key="i"
              >
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img
                      :src="'/uploads/' + content.featuredImage"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h5 class="card-title">
                        <a class="" v-bind:href="/blog/ + content.slug" >{{ content.title }}</a>
                        <br />
                        <small class="text-muted update-date">
                          <!-- <Icon type="ios-clock-outline" /> -->
                          {{ content.created_at | formatDate }}
                          <br />
                          <!-- <Icon type="ios-eye" size="15" /> -->
                          VIEWS: {{ content.views }}
                          <br />
                        </small>
                      </h5>
                      <p class="card-text text-justify">
                        {{ content.description }}
                      </p>
                      <div class="row pt-5">
                        <a
                          role="button"
                          v-bind:href="/blog/ + content.slug"
                          class="button-card button-card--secondary"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9 col-sm-8 col-md-8 col-lg-4">
                <h3 class="text-uppercase mb-3 text-center mx-auto" data-aos="fade-up" data-aos-duration="1400">
                  <span class="header-secondary  text-secondary font-weight-bold ">POPULAR POST</span>
                </h3>
                <div v-for="(content, i) in popularPost" :key="i">
                  <a v-bind:href="'/blog/' + content.slug">
                    <div class="justify-content-center align-items-center mt-3">
                      <!-- <img
                        width="50%"
                        v-bind:src="'/uploads/' + content.featuredImage"
                        alt
                        class="img-fluid mx-auto"
                        style="display: block"
                      /> -->
                      <h6 class="mt-3">
                        {{ content.title }}
                        <br />
                        <!-- <Icon type="ios-clock-outline" /> -->
                        {{ content.created_at | formatDate }}
                      </h6>
                    </div>
                  </a>
                </div>
            </div>
          </div>
          <div class="row justify-content-center align-items-center" v-if="!hasContent">
              <div class="col-10 col-sm-9 col-md-9 col-lg-9 mt-5">
                <img v-bind:src="'/images/empty_post.svg'" style="display: block; margin: 0 auto; width: 75%; cursor: pointer"/>
                <h4 class="mx-auto text-center text-info mt-5 mb-3">It appears that there are no updates for St. Mark Coptic Orthodox Church Philippines. You may check this section later. </h4>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import gotop from "../components/Gotop";

export default {
  data() {
    return {
      data: {},
      postContent: "",
      popularPost: "",
      hasContent: true,
      total: 5,
      pageInfo: null,
    };
  },
  methods: {
    async getPost(page = 1) {
      const res = await this.callApi(
        "get",
        `/fetchUpdates?page=${page}&total=${this.total}`
      );
      if (res.status == 200 || res.status == 201) {
        if (res.data.data.length > 0) {
          this.hasContent = true;
        } else {
          this.hasContent = false;
        }
        this.pageInfo = res.data;
        this.postContent = res.data.data;
        console.log(this.postContent);
      } else {
        this.swr();
      }
    },
    async getPopularPost() {
      const res = await this.callApi("get", "/getPopularPost");
      if (res.status == 200 || res.status == 201) {
        this.popularPost = res.data;
      } else {
        this.swr();
      }
    },
  },
  async created() {
    this.getPost();
    this.getPopularPost();
  },
  components: {
    gotop,
  },
};
</script>