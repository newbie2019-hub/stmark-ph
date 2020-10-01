<template>
  <div>
    <section class="resources">
      <div
        class="container d-flex h-100 justify-content-center align-items-center"
      >
        <div class="row justify-content-center">
          <div class="col-sm-8 col-md-8 col-lg-10">
            <div class="text-lg-left">
              <div>
                <h3
                  class="text-white"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <span class="header-schedule">EVENTS SCHEDULE</span>
                </h3>
              </div>
            </div>
            <div class="text-lg-left">
              <p
                class="text-white"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Please be guided by the schedules and announcements of the
                upcoming events. Stay tuned for more updates!
              </p>
            </div>
            <div
              class="col-sm-10 col-md-10 col-lg-6"
              style="margin-left: -13px; margin-top: 6px; margin-bottom: 5px"
            >
              <a
                class="button button--secondary"
                href="#sched-section"
                role="button"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1100"
                >Schedules</a
              >
              <a
                class="button button--secondary"
                href="/updates"
                role="button"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1100"
                >Updates &nbsp; <i class="fas fa-clipboard"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="icon-scroll"></div>
      </div>
    </section>

    <div id="sched-section" class="container mt-4 mb-4">
      <div class="container mt-4 mb-3 pl-3 pr-3">
        <div class="row align-items-center pt-4">
          <h3
            class="text-center mx-auto text-uppercase"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <span class="header-secondary text-secondary font-weight-bold"
              >UPDATES</span
            >
          </h3>
        </div>
        <div class="row align-items-center">
          <h3
            class="text-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <span class="sub-header-primary text-dark">SCHEDULES</span>
          </h3>
        </div>

        <div
          class="row justify-content-center mt-4 mb-2"
          style="max-height: 1000px; overflow-y: auto"
        >
        <!-- EMPTY STATUS --->
        <div class="col-sm-8 col-md-8 col-lg-10" v-if="scheduleData.length == 0">
          <p style="font-size: 1.2rem" class="mx-auto text-center">- No Schedules Added!</p>
        </div>
        <!--- CARDS FOR SCHEDULE --->
          <div
            class="col-sm-5 col-md-5 col-lg-5 mb-1"
            v-for="(sched, i) in scheduleData"
            :key="i"
          >
            <div class="card p-3 mb-1" style="height: 100%">
              <h5 class="text-dark text-uppercase font-weight-bold">
                {{ sched.title }}
              </h5>
              <p class="text-dark text-uppercase font-weight-bold">
                <small
                  >STARTS ON: <br /><i class="fas fa-clock"></i>
                  {{ sched.start | formatDate }}</small
                >
              </p>
              <p class="text-dark text-uppercase font-weight-bold">
                <small
                  >ENDS ON: <br /><i class="fas fa-clock"></i>
                  {{ sched.end | formatDate }}</small
                >
              </p>
              <br />
              <p class="text-dark text-uppercase">
                <strong>DESCRIPTION</strong> <br />{{ sched.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="clergy" class="container mt-3 mb-3">
      <div class="container mt-4 mb-3 pl-3 pr-3">
        <div class="row align-items-center pt-4">
          <h3
            class="text-center mx-auto text-uppercase"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <span class="header-secondary text-secondary font-weight-bold"
              >PHILIPPINES</span
            >
          </h3>
        </div>
        <div class="row align-items-center">
          <h3
            class="text-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <span class="sub-header-primary text-dark">SERVING CLERGY</span>
          </h3>
        </div>

        <div class="row justify-content-center align-items-center">
          <div
            class="col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center"
          >
            <div class="row justify-content-center">
              <div class="clergy-container">
                <img
                  class="img-fluid"
                  v-bind:src="'/images/frmaurice.jpg'"
                  loading="lazy"
                  style="max-width: 350px; max-height: 300px; object-fit: cover"
                />
                <div class="clergy-container--content">
                  <h3
                    class="header-secondary font-weight-bold mt-2 text-dark text-uppercase"
                  >
                    Fr. Mina Maurice
                  </h3>
                  <p>
                    Contact Information:
                    <br />Phone: (+63) 912-345-6789 <br />Email:
                    abounahany@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center"
          >
            <div class="row justify-content-center">
              <div class="clergy-container justify-content-center">
                <img
                  class="img-fluid"
                  v-bind:src="'/images/abounamina.jpg'"
                  loading="lazy"
                  style="max-width: 350px; max-height: 300px; object-fit: cover"
                />
                <div class="clergy-container--content">
                  <h3
                    class="header-secondary font-weight-bold mt-2 text-dark text-uppercase"
                  >
                    Abouna Keryllos Hany
                  </h3>
                  <p class>
                    Contact Information:
                    <br />Phone: (+63) 912-345-6789 <br />Email:
                    abounahany@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gotop from "../components/Gotop";
import moment from "moment";

export default {
  data() {
    return {
      scheduleData: "",
      currentSchedule: [],
    };
  },
  components: {
    gotop,
  },
  methods: {
    async getSchedule() {
      const res = await this.callApi("get", "/getSchedule");
      if (res.status == 200 || res.status == 201) {
        this.scheduleData = res.data;

        let array = [];
        setTimeout(()=> {
          this.scheduleData.forEach(i => {
            if(moment(moment().format()).isSameOrAfter(moment(String(i['start'])).format())){
              array.push(i)
            }
          });
          this.scheduleData = array;
        }, 100);
        
        console.log(this.scheduleData)
      }
    },
  },
  async created() {
    this.getSchedule();
  },
};
</script>