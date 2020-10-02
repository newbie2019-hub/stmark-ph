<template>
  <div>
    <div class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand" href="#">ST MARK - PH</a>
        <button
          class="btn btn-link btn-sm order-1 order-lg-0"
          id="sidebarToggle"
          href="#"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar-->
        <ul
          class="navbar-nav d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="userDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-fw"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#" disabled>Settings</a>
              <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutmodal">Logout</a>
            </div>
          </li>
        </ul>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <div class="sb-sidenav-menu-heading">HOME</div>
                <router-link
                  class="nav-link"
                  to="/manage"
                  v-on:click.native="activeMenu(0)"
                  :class="{ activeMenu: isActiveIndex == 0 }"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-newspaper"></i>
                  </div>
                  Dashboard
                </router-link>
                <div class="sb-sidenav-menu-heading">UPDATES</div>
                <router-link
                  class="nav-link"
                  to="/manage/Updates"
                  v-on:click.native="activeMenu(1)"
                  :class="{ activeMenu: isActiveIndex == 1 }"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-newspaper"></i>
                  </div>
                  Post
                </router-link>
                <router-link
                  class="nav-link"
                  to="/manage/schedule"
                  v-on:click.native="activeMenu(2)"
                  :class="{ activeMenu: isActiveIndex == 2 }"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-calendar-alt"></i>
                  </div>
                  Schedules
                </router-link>
                <div class="sb-sidenav-menu-heading">RESOURCES</div>
                <router-link
                  class="nav-link"
                  to="/manage/resources"
                  v-on:click.native="activeMenu(3)"
                  :class="{ activeMenu: isActiveIndex == 3 }"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-folder-open"></i>
                  </div>
                  Resources
                </router-link>
                <div class="sb-sidenav-menu-heading">MANAGE</div>
                <router-link
                  class="nav-link"
                  to="/manage/accounts"
                  v-on:click.native="activeMenu(4)"
                  :class="{ activeMenu: isActiveIndex == 4 }"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-user-edit"></i>
                  </div>
                  Accounts
                </router-link>
              </div>
            </div>
            <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              {{ user.name }}
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <router-view></router-view>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid">
              <div
                class="d-flex align-items-center justify-content-between small"
              >
                <div class="text-muted">
                  &copy; ST. MARK COPTIC ORTHODX CHURCH, PHILIPPINES
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

    <!--LOGOUT MODAL--->
    <div id="logoutmodal" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Logout</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to log-out?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">
              Cancel
            </button>
            <a type="button" class="btn btn-sm btn-primary" href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.activeMenu {
  background: rgba(11, 164, 235, 0.733);
  min-height: 40px;
  transition: all 0.5s ease-in-out;
}
</style>
<script>
export default {
  props: ["user"],
  data() {
    return {
      isActiveIndex: null,
    };
  },
  mounted() {
    this.activeMenu(0);
    const currentUser = {
      id: this.user["id"],
      name: this.user["name"],
      email: this.user["email"],
      role: this.user["role"],
    };

    this.$store.commit("setUserObj", currentUser);
  },
  methods: {
    activeMenu(i) {
      this.isActiveIndex = i;
    },
  },
  components: {},
};
</script>