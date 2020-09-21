<template>
  <div>
    <div class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ADMIN PANEL</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
          <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar-->
          <ul class="navbar-nav d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
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
              {{user.name}}
                <i class="fas fa-user fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">Settings</a>
                <a class="dropdown-item" href="#">Activity Log</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/logout">Logout</a>
              </div>
            </li>
          </ul>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
              <div class="nav">
                <div class="sb-sidenav-menu-heading">UPDATES</div>
                <a class="nav-link text-uppercase" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-newspaper"></i>
                  </div><router-link class="nav-link" to="/manage/Updates">Posts</router-link>
                </a>
                <a class="nav-link text-uppercase" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-calendar-alt"></i>
                  </div><router-link class="nav-link" to="/manage/schedule">Schedules</router-link>
                </a>
                <div class="sb-sidenav-menu-heading">RESOURCES</div>
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-align-justify"></i>
                  </div> CATEGORIES
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="#"><router-link class="nav-link" to="/manage/resources/images">Images</router-link></a>
                    <a class="nav-link" href="#">Videos</a>
                    <a class="nav-link" href="#">Books</a>
                    <a class="nav-link" href="#">Audios</a>
                  </nav>
                </div>
                 <div class="sb-sidenav-menu-heading">MANAGE</div>
                <a class="nav-link text-uppercase" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-user-edit"></i>
                  </div> <router-link class="nav-link" to="/manage/accounts">Accounts</router-link>
                </a>
              </div>
            </div>
            <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div> {{user.name}}
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
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">&copy; ST. MARK COPTIC ORTHODX CHURCH, PHILIPPINES</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {};
  },
  mounted(){
    
  },
  methods: {

  },
  components: {},
};
</script>