<template>
  <div>
    <section id="resources" class="updatesection">
      <div class="container d-flex h-100 justify-content-center align-items-center">
        <div class="mx-auto text-center">
          <h1 class="pt-4" data-aos="fade-right" data-aos-duration="1200">
            <span class="header-primary">BLOG</span>
          </h1>
        </div>
        <!-- <div class="icon-scroll"></div> -->
        <!--<h3><span class="scroll-text">Scroll Down</span></h3>-->
      </div>
    </section>
    <div class="container-fluid p-3">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-7 mt-5">
          <div class="post-container__hero">
            <img
              class="img-fluid"
              :src="'/uploads/' + post.featuredImage"
              loading="lazy"
              style="width: 100%; max-height: 350px; object-fit:cover; filter: brightness(75%);"
            />
            <div class="container_header">
              <h3 class="text-light text-uppercase">{{post.title}}</h3>
              <small>
              <p class="text-light">
                <i class="fa fa-clock"></i>
                &nbsp;{{post.created_at | formatDate}}
              </p>
              <p class="text-light">
                <i class="fa fa-user-clock"></i>
                Created by: {{post.user['name']}}
              </p>
              </small>
            </div>
          </div>
          <div class="pl-4 pr-4 pt-2">
            <br />
            <div class="ql-snow">
              <div class="ql-editor">
                <div v-html="post.content"></div>
              </div>
            </div>
            <div class="pl-3 pt-5" v-if="tags != ''">
              TAGS
              <h6><span class="badge badge-primary mr-1" v-for="(tag, i) in tags" :key="i">{{tag.name}}</span></h6>
              <br />
            </div>
          </div>
          <div class="pt-3 pl-4 pb-4">
            <a role="button" href="/updates" class="button-card button-card--primary">
              Return
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 pt-5">
          <h3
            class="text-uppercase text-center mx-auto mb-3"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <span class="header-secondary text-secondary font-weight-bold">RECENT POST</span>
          </h3>
          <div v-for="(content, i) in recent" :key="i">
            <div class="row align-items-center justify-content-center mt-3">
              <div class="col-md-7 col-lg-7">
                <a v-bind:href="'/blog/'+ content.slug">
                  <h6 class="mt-3 text-lg-left text-center mx-auto">
                    {{content.title}}
                    <br />
                    <small><span class="text-muted">
                      <i class="fas fa-clock"></i>
                      {{content.created_at | formatDate }}
                      </span>
                    </small>
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<style>
.badge {
  padding: .5rem .5rem !important;
}
</style>
<script>

export default {
  props: ["post", "recent"],
  data() {
    return {
      tags: "",
    };
  },
  mounted() {},
  async created() {
    this.tags = this.post.tags;
    console.log(this.post);
  },
  components: {
  },
};
</script>
