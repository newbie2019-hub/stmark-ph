<template>
  <div class="hero">
    <div class="container-fluid h-100">
      <div class="row d-flex h-100 justify-content-center align-items-center">
        <div class="col-sm-4 col-md-4 col-lg-4">
          <img class="img-fluid" v-bind:src="'/images/login.svg'" loading="lazy" />
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6" v-if="!isSignUp">
          <h3 class="mx-auto text-center pt-3 text-light pb-5">Please Log-in</h3>
          <div class="row justify-content-center">
            <div class="col-sm-5 col-md-5 col-lg-5">
              <form>
                <div class="form-group text-light">
                  Email Address
                  <input
                    type="email"
                    v-model="data.email"
                    class="form-control"
                    id="user_email"
                    placeholder="sampleemail@gmail.com"
                    aria-describedby="Email Address"
                  />
                </div>
                <div class="form-group text-light">
                  Password
                  <input
                    type="password"
                    v-model="data.password"
                    class="form-control"
                    id="user_password"
                    placeholder="******"
                  />
                </div>
                <p class="text-light">
                  Dont have an account?
                  <a
                    class="text-center mx-auto text-warning"
                    type="button"
                    @click="isSignUp = !isSignUp"
                  >Sign-Up</a>
                </p>
                <div class="row justify-content-center">
                  <a
                    type="button"
                    @click="login"
                    class="btn btn-info mt-4"
                  >{{isLoading? 'Logging in...' : 'Log-in'}}</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6" v-if="isSignUp">
          <h3 class="mx-auto text-center pt-3 text-light pb-5">Sign-Up</h3>
          <div class="row justify-content-center">
            <div class="col-sm-5 col-md-5 col-lg-5 text-light">
              Full Name
              <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder
                v-model="data.fullName"
              />
              Email Address
              <input
                type="text"
                class="form-control form-control-sm mb-2"
                placeholder
                v-model="data.email"
              />
              Password
              <input
                type="password"
                class="form-control form-control-sm mb-2"
                placeholder
                v-model="data.password"
              />
              <p class="text-light">
                Already have an account?
                <a
                  class="text-center mx-auto text-warning mt-3"
                  type="button"
                  @click="isSignUp = !isSignUp"
                >Sign-In</a>
              </p>
              <div class="row justify-content-center">
                <a
                  type="button"
                  @click="SignUp"
                  class="btn btn-info mt-4"
                >{{isLoading? 'Signing Up...' : 'Sign-Up'}}</a>
              </div>
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
      isSignUp: false,
      data: {
        fullName: "",
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
      this.isLoading = true;
      const res = await this.callApi("POST", "/userlogin", this.data);
      if (res.status == 200 || res.status == 201) {
        this.isLoading = false;
        window.location = "/manage";
      } else {
        this.data.email = "";
        this.data.password = "";
        this.isLoading = false;
        return this.err("Email or Password is incorrect");
      }
    },
    async SignUp() {
      if (this.data.fullName.trim() == "")
        return this.err("Full name is required");
      if (this.data.email.trim() == "") return this.err("Email is required");
      if (this.data.password.trim() == "")
        return this.err("Password is required");

      this.isAdding = true;
      const res = await this.callApi("post", "/create_user", this.data);
      if (res.status == 200 || res.status == 201) {
        this.success("User has been added successfully!");
        this.addingUser = false;
        this.isAdding = false;
        this.data.fullName = "";
        this.data.email = "";
        this.data.password = "";
      } else {
        if (res.status == 422) {
          for (let i in res.data.errors) {
            this.err(res.data.errors[i][0]);
            this.isAdding = false;
          }
        } else {
          this.swr();
        }
      }
    },
  },
};
</script>