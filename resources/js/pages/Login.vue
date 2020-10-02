<template>
  <div class="" style="height: 100vh">
    <div class="container-fluid h-100">
      <h6
        class="font-weight-bold login-logo"
        style="position: fixed; top: 2rem; left: 2.8rem; z-index: 999"
      >
        ST. MARK-PH
      </h6>
      <div class="btn-container">
        <a
          href="#"
          @click.prevent="isSignUp = !isSignUp"
          class="btn btn-sm btn-outline-light rounded-pill"
          style="min-width: 75px; margin-right: 7px"
          >{{ isSignUp ? "Login" : "Sign Up" }}</a
        >
        <a
          href="/"
          class="btn btn-sm btn-outline-light rounded-pill"
          style="min-width: 75px"
          >Visit Site</a
        >
      </div>
      <div class="row d-flex h-100 justify-content-center align-items-center">
        <div class="col-sm-12 col-md-7 col-lg-8 h-100 st-mark">
          <div class="element-container">
            <img
              :src="'/images/connection.svg'"
              alt=""
              class="img-fluid"
              style="width: 50%; display: block; margin: 0 auto"
            />
            <h3
              class="mx-auto text-center pt-5 text-uppercase font-weight-bold"
              style="letter-spacing: 0.4px; color: rgb(43, 160, 230)"
            >
              Welcome to St. Mark Coptic <br />
              Orthodox Church, Philippines
            </h3>
            <h6 class="mx-auto text-center mt-3">
              Please log-in to your account to get started
            </h6>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-5 col-lg-4"
          style="background: rgb(75, 85, 193); height: 100vh"
          v-if="!isSignUp"
        >
          <div class="element-container">
            <img
              :src="'/images/mobile_connection.svg'"
              alt=""
              class="img-fluid img-mobile"
              style="width: 60%; display: block; margin: 0 auto"
            />
            <p class="mx-auto text-center text-light lead">Welcome !</p>
            <p class="mx-auto text-center text-light lead">
              Sign-in to your account
            </p>
            <form
              class="needs-validation"
              novalidate
              :class="{ wasvalidated: isValidated }"
            >
              <div class="form-group text-light lead">
                <p class="pt-3"><small>Email</small></p>
                <div class="d-flex align-items-center">
                  <li
                    class="fas fa-envelope position-absolute ml-2 text-light"
                  ></li>
                  <input
                    type="text"
                    v-model="data.email"
                    class="form-control text-light"
                    placeholder="sample_email@gmail.com"
                    aria-describedby="Email Address"
                    style="padding-left: 35px"
                    @keydown.enter="login"
                    required
                  />
                  <div class="valid-feedback">Email address valid!</div>
                  <div class="invalid-feedback">
                    Email address should be valid
                  </div>
                </div>
              </div>
              <div class="form-group text-light lead">
                <p class=""><small>Password</small></p>
                <div class="d-flex align-items-center">
                  <i class="fas fa-key position-absolute ml-2 text-light"></i>
                  <input
                    type="password"
                    v-model="data.password"
                    class="form-control text-light"
                    id="user_password"
                    placeholder="******"
                    style="padding-left: 35px"
                    @keydown.enter="login"
                    required
                  />
                  <div class="invalid-feedback">Password is required</div>
                </div>
                <a
                  type="button"
                  @click="login"
                  class="btn btn-info rounded-pill btn-block mt-4"
                  :disabled="isLoading"
                  >{{ isLoading ? "Logging in..." : "Login" }}</a
                >
              </div>
            </form>
            <p class="text-center text-light pt-4" style="font-weight: 300">
              Follow us on
            </p>
            <div class="row justify-content-center mt-2">
              <a
                href="https://www.facebook.com/SMCOT/"
                target="_blank"
                class="text-light mr-3"
                ><i class="fab fa-facebook-f fa-2x"></i></a>
              <a
                href="https://www.youtube.com/channel/UCnrQkTHL-J97r_ggZ2LyTTA"
                target="_blank"
                class="text-light"
                ><i class="fab fa-youtube fa-2x"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- SIGN-UP --->
        <div
          class="col-sm-12 col-md-5 col-lg-4"
          style="background: rgb(75, 85, 193); height: 100vh"
          v-if="isSignUp"
        >
          <div class="element-container">
            <img
              :src="'/images/mobile_connection.svg'"
              alt=""
              class="img-fluid img-mobile"
              style="width: 60%; display: block; margin: 0 auto"
            />
            <p class="mx-auto text-center text-light lead">Sign Up !</p>
            <p class="mx-auto text-center text-light lead">
              We need your . . .
            </p>
            <div class="form-group text-light mt-3">
              Full Name
              <div class="d-flex align-items-center">
                <li
                  class="fas fa-user-circle position-absolute ml-2 text-light"
                ></li>
                <input
                  type="text"
                  class="form-control text-light"
                  placeholder="Juan Dela Cruz"
                  v-model="data.fullName"
                  style="padding-left: 30px"
                  @keydown.enter="SignUp"
                />
              </div>
            </div>
            <div class="form-group text-light">
              Email Address
              <div class="d-flex align-items-center">
                <li
                  class="fas fa-envelope position-absolute ml-2 text-light"
                ></li>
                <input
                  type="email"
                  v-model="data.email"
                  class="form-control text-light"
                  id="user_email"
                  placeholder="sampleemail@gmail.com"
                  aria-describedby="Email Address"
                  style="padding-left: 30px"
                />
              </div>
            </div>
            <div class="form-group text-light">
              Password
              <div class="d-flex align-items-center">
                <i class="fas fa-key position-absolute ml-2 text-light"></i>
                <input
                  type="password"
                  v-model="data.password"
                  class="form-control text-light"
                  id="user_password"
                  placeholder="******"
                  style="padding-left: 30px"
                  @keydown.enter="SignUp"
                />
              </div>
            </div>
            <a
              type="button"
              @click="SignUp"
              class="btn btn-info btn-block rounded-pill mt-4"
            >
              {{ isLoading ? "Signing Up..." : "Sign Up" }}
            </a>
            <p class="text-center text-light pt-4" style="font-weight: 300">
              Follow us on
            </p>
            <div class="row justify-content-center mt-2">
              <a
                href="https://www.facebook.com/SMCOT/"
                target="_blank"
                class="text-light mr-3"
                ><i class="fab fa-facebook-f fa-2x"></i></a>
              <a
                href="https://www.youtube.com/channel/UCnrQkTHL-J97r_ggZ2LyTTA"
                target="_blank"
                class="text-light"
                ><i class="fab fa-youtube fa-2x"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wasvalidated .form-control:invalid,
.form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.btn-container {
  position: fixed;
  z-index: 999;
  top: 1.2rem;
  right: 2.3rem;
}
.element-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}
.form-control {
  background: rgba(58, 68, 168);
  border: 0;

  &:focus {
    background: rgba(58, 68, 168);
    border-color: rgb(20, 208, 233) !important;
    box-shadow: 0 0 0 0.2rem rgba(20, 208, 233, 0.459);
  }
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