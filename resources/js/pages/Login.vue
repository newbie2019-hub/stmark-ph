<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row d-flex h-100 justify-content-center align-items-center">
        <div class="col-sm-7 col-md-7 col-lg-7">
          <h3 class="mx-auto text-center pt-3 text-light pb-2">Please Log-in</h3>
          <div class="row justify-content-center">
            <div class="col-sm-8 col-md-8 col-lg-8">
              <form>
                <div class="form-group text-light">
                  <input
                    type="email"
                    v-model="data.email"
                    class="form-control rounded-pill"
                    id="user_email"
                    placeholder="Enter your Email"
                    aria-describedby="Email Address"
                  />
                </div>
                <div class="form-group text-light">
                  <input
                    type="password"
                    v-model="data.password"
                    class="form-control rounded-pill"
                    id="user_password"
                    placeholder="******"
                  />
                </div>
                <a
                  type="button"
                  @click="login"
                  class="form-control rounded-pill btn btn-primary mb-3"
                >{{isLoading? 'Logging in...' : 'Log-in'}}</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      isLoading: false,
      data: {
        email: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    async login() {
      if (this.data.email.trim() == "")
        return this.err("Email Address is required");
      if (this.data.password.trim() == "")
        return this.err("Password is required");
      this.isLoading = true
      const res = await this.callApi("POST", "/userlogin", this.data);
      if (res.status == 200 || res.status == 201) {
        this.isLoading = false
        window.location = "/manage";
      } else {
        this.data.email = "";
        this.data.password = "";
        this.isLoading = false
        return this.err("Email or Password is incorrect");
      }
      
    },
  },
};
</script>