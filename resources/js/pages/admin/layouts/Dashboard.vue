<template>
  <div>
    <div class="p-4">
      <div class="row justify-content-center">
        <div class="col-sm-10 col-md-6 col-lg-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase">Blog Post</h5>
              <h6 class="card-subtitle mb-2 text-muted">Summary</h6>
              <p class="card-text">
                You currently have {{postCount}} post{{postCount > 1 ? 's' : ''}} in your website. You can gain more visitors on your site by adding some.
              </p>
              <a href="/manage/Updates" class="btn btn-sm btn-primary">Manage Post</a>
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-md-6 col-lg-6">
         <div class="card ">
            <div class="card-body ">
              <h5 class="card-title text-uppercase">Accounts</h5>
              <h6 class="card-subtitle mb-2 ">Summary</h6>
              <p class="card-text">
                You currently have {{accountsCount}} account{{accountsCount > 1 ? 's' : ''}} registered in your website. Do you want to add some accounts?
              </p>
              <a href="/manage/accounts" class="btn btn-sm btn-primary">Manage Accounts</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-sm-10 col-md-6 col-lg-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase">Schedules</h5>
              <h6 class="card-subtitle mb-2 text-muted">Summary</h6>
              <p class="card-text">
                You currently have {{scheduleCount}} schedule{{scheduleCount > 1 ? 's' : ''}}. Do you have any upcoming events for <strong>St. Mark Coptic Orthodox Church?</strong> Add it to your schedule now so no one will miss it!
              </p>
              <a href="/manage/schedule" class="btn btn-sm btn-primary">Manage Schedules</a>
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-md-6 col-lg-6">
         <div class="card ">
            <div class="card-body ">
              <h5 class="card-title text-uppercase">Account Info</h5>
              <h6 class="card-subtitle mb-3">Summary</h6>
              <ul class="card-text" style="list-style-type: none">
                <li>Name: {{getUserObj.name}}</li>
                <li>Email: {{getUserObj.email}}</li>
                <li>Role: {{getUserObj.role}}</li>
              </ul>
              <a href="/manage/accounts" class="btn btn-sm btn-primary">Update Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
        postCount: 0,
        accountsCount: 0,
        scheduleCount: 0,
    };
  },
  methods: {
      async countPost(){
          const res = await this.callApi('get','/postCount')
          if(res.status == 200 || res.status == 201){
              this.postCount = res.data
          }
      },
      async accountCount(){
          const res = await this.callApi('get','/accCount')
          if(res.status == 200 || res.status == 201){
              this.accountsCount = res.data
          }
      },
      async schedCount(){
          const res = await this.callApi('get','/schedCount')
          if(res.status == 200 || res.status == 201){
              this.scheduleCount = res.data
          }
      }
  },
  mounted() {
      this.countPost()
      this.accountCount()
      this.schedCount()
  },
  async created(){

  },
  computed: {
      ...mapGetters(["getUserObj"]),
  }
};
</script>