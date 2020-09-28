<template>
  <div class="hero" style="height: 100vh">
    <div class="container-fluid h-100">
      <div class="row d-flex h-100 justify-content-center align-items-center">
        <div class="col-sm-10 col-md-6 col-lg-6 text-light" v-if="!isSignUp">
          <h4 class="mx-auto text-center pt-3 pb-4 font-weight-bold">LOG-IN</h4>
          <div class="row justify-content-center">
            <div class="col-sm-8 col-md-8 col-lg-7">
              <form
                class="needs-validation"
                novalidate
                :class="{ wasvalidated: isValidated }"
              >
                <div class="form-group">
                  Email Address
                  <div class="d-flex align-items-center">
                    <li
                      class="fas fa-envelope position-absolute ml-2 text-dark"
                    ></li>
                    <input
                      type="email"
                      v-model="data.email"
                      class="form-control"
                      id="user_email"
                      placeholder="sampleemail@gmail.com"
                      aria-describedby="Email Address"
                      style="padding-left: 30px"
                      @keydown.enter="login"
                      required
                    />
                    <div class="valid-feedback">Email address valid!</div>
                    <div class="invalid-feedback">
                      Email address should be valid
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  Password
                  <div class="d-flex align-items-center">
                    <i class="fas fa-key position-absolute ml-2 text-dark"></i>
                    <input
                      type="password"
                      v-model="data.password"
                      class="form-control"
                      id="user_password"
                      placeholder="******"
                      style="padding-left: 30px"
                      @keydown.enter="login"
                      required
                    />
                    <div class="invalid-feedback">Password is required</div>
                  </div>
                </div>
                <p class="">
                  Dont have an account?
                  <a
                    class="text-center mx-auto text-warning"
                    type="button"
                    @click="isSignUp = !isSignUp"
                    >Sign-Up</a
                  >
                </p>
                <div class="row justify-content-center">
                  <a type="button" href="/" class="btn btn-info mt-4 mr-2"
                    >Visit Site</a
                  >
                  <a type="button" @click="login" class="btn btn-info mt-4">{{
                    isLoading ? "Logging in..." : "Log-in"
                  }}</a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-md-8 col-lg-6 text-light" v-if="isSignUp">
          <h3 class="mx-auto text-center pt-3 pb-3">SIGN-UP</h3>
          <div class="row justify-content-center">
            <div class="col-sm-7 col-md-7 col-lg-7">
              
              <div class="form-group">
                Full Name
                <div class="d-flex align-items-center">
                  <li
                    class="fas fa-user-circle position-absolute ml-2 text-dark"
                  ></li>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Juan Dela Cruz"
                    v-model="data.fullName"
                    style="padding-left: 30px"
                    @keydown.enter="SignUp"
                  />
                </div>
              </div>
              <div class="form-group">
                Email Address
                <div class="d-flex align-items-center">
                  <li
                    class="fas fa-envelope position-absolute ml-2 text-dark"
                  ></li>
                  <input
                    type="email"
                    v-model="data.email"
                    class="form-control"
                    id="user_email"
                    placeholder="sampleemail@gmail.com"
                    aria-describedby="Email Address"
                    style="padding-left: 30px"
                  />
                </div>
              </div>
              <div class="form-group">
                Password
                <div class="d-flex align-items-center">
                  <i class="fas fa-key position-absolute ml-2 text-dark"></i>
                  <input
                    type="password"
                    v-model="data.password"
                    class="form-control"
                    id="user_password"
                    placeholder="******"
                    style="padding-left: 30px"
                     @keydown.enter="SignUp"
                  />
                </div>
              </div>
              <p class="">
                Already have an account?
                <a
                  class="text-center mx-auto text-warning mt-1"
                  type="button"
                  @click="isSignUp = !isSignUp"
                  >Sign-In</a
                >
              </p>
              <div class="row justify-content-center">
                <a type="button" @click="SignUp" class="btn btn-info mt-4"
                  ><i class="fas fa-user-plus"></i>
                  {{ isLoading ? "Signing Up..." : "Sign-Up" }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.wasvalidated .form-control:invalid,
.form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
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
      isValidated: false,
    };
  },
  mounted() {},
  methods: {
    async login() {
      this.isValidated = true;
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
      const res = await this.callApi("post", "/sign-up", this.data);
      if (res.status == 200 || res.status == 201) {
        this.success("User has been added successfully!");
        this.addingUser = false;
        this.isAdding = false;
        this.data.fullName = "";
        this.data.email = "";
        this.data.password = "";
        window.location = "/manage";
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