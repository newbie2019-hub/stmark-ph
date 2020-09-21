<template>
  <div>
    <navbar></navbar>
    <section id="resources" class="resources">
      <div class="container d-flex h-100 justify-content-center align-items-center">
        <div class="mx-auto text-center">
          <h1 data-aos="fade-right" data-aos-duration="1400">
            <span class="header-primary">RESOURCES</span>
          </h1>
          <div class="row justify-content-center">
            <p
              class="header-secondary mw-80 font-italic"
              data-aos="fade-left"
              data-aos-duration="1400"
            >Unlimited access to resources like graphics, transcripts, kids lessons, hymns, videos, bible, apps and more.</p>
          </div>
        </div>
        <div class="icon-scroll"></div>
        <!--<h3><span class="scroll-text">Scroll Down</span></h3>-->
      </div>
    </section>
    <section id="recontent" class="resourcecontent">
        
    </section>
    <location></location>
    <donate></donate>
    <footerlayout></footerlayout>
    <gotop></gotop>
  </div>
</template>
<script>
import gotop from "../components/Gotop";
import navbar from "../components/Navbar";

import donate from "../pages/layouts/Donate";
import location from "../pages/layouts/Location";
import footerlayout from "../pages/layouts/Footer";

export default {
  data() {
    return {};
  },
  components: {
    gotop,
    navbar,
    donate,
    footerlayout,
    location,
  },
};
</script>