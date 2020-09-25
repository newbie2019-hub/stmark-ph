<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.header')
    </head>
    <body>
        @include('partials.navbar')
        <header class="schedules">
            <div class="container d-flex h-100 justify-content-center align-items-center">
              <div class="row justify-content-center">
                <div class="col-sm-10 col-md-7 col-lg-6">
                  <div class="text-lg-left">
                    <div>
                      <h3 class="text-white" data-aos="fade-right" data-aos-duration="1200">
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
                    >Please be guided by the schedules and announcements of the upcoming events. Stay tuned for more updates!</p>
                  </div>
                  <div
                    class="col-sm-6 col-md-10 col-lg-5"
                    style="margin-left: -13px; margin-top: 6px; margin-bottom: 5px;"
                  >
                    <a
                      class="button button--secondary"
                      href="#sched-section"
                      role="button"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1100"
                    >See More</a>
                    <a
                      class="button button--secondary"
                      href="/updates"
                      role="button"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1100"
                    >Updates &nbsp; <i class="fas fa-clipboard"></i></a>
                  </div>
                </div>
      
                <div class="col-sm-10 col-md-5 col-lg-6">
                  <div class="pt-2" data-aos="fade-left" data-aos-duration="1200">
                    <h3 class="text-white text-uppercase">Current Schedule</h3>
                    <br />
                    <div>
                      <h4 class="text-white text-uppercase">&nbsp; - </h4>
                      <p class="text-white text-uppercase">&nbsp; &nbsp;START: &nbsp;</p>
                      <p class="text-white text-uppercase">&nbsp; &nbsp;END: &nbsp;</p>
                      <br />
                      <p class="text-white text-uppercase">&nbsp; &nbsp; No Shedules for today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
      
          <div id="sched-section" class="container mt-4 mb-4">
            <div class="container mt-4 mb-3 pl-3 pr-3">
              <div class="row align-items-center pt-4">
                <h3
                  class="text-center mx-auto text-uppercase"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <span class="header-secondary text-secondary font-weight-bold">UPDATES</span>
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
      
              <div class="row justify-content-center align-items-center mt-4 mb-2">
                <div class="col-sm-8 col-md-8 col-lg-8">
                  <div class="p-2" style=" max-height: 500px; overflow-y:auto">
                    <div class="card p-3 mb-1" >
                      <h5 class="text-dark text-uppercase font-weight-bold"></h5>
                      <p class="text-dark text-uppercase font-weight-bold"><small>STARTS ON: <br><i class="fas fa-clock"></i></small></p>
                      <p class="text-dark text-uppercase font-weight-bold"><small>ENDS ON: <br><i class="fas fa-clock"></i></small></p><br>
                      <p class="text-dark text-uppercase"><strong>DESCRIPTION</strong> <br></p>
                    </div>
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
                  <span class="header-secondary text-secondary font-weight-bold">PHILIPPINES</span>
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
                <div class="col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center">
                  <div class="row justify-content-center">
                    <div class="clergy-container">
                      <img
                        class="img-fluid"
                        src="/images/frmaurice.jpg"
                        loading="lazy"
                        style="max-width: 350px; max-height: 300px; object-fit:cover;"
                      />
                      <div class="clergy-container--content">
                        <h3
                          class="header-secondary font-weight-bold mt-2 text-dark text-uppercase"
                        >Fr. Mina Maurice</h3>
                        <p>
                          Contact Information:
                          <br />Phone: (+63) 912-345-6789
                          <br />Email: abounahany@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-10 col-md-5 col-lg-4 justify-content-center align-items-center">
                  <div class="row justify-content-center">
                    <div class="clergy-container justify-content-center">
                      <img
                        class="img-fluid"
                        src="/images/abounamina.jpg"
                        loading="lazy"
                        style="max-width: 350px; max-height: 300px; object-fit:cover;"
                      />
                      <div class="clergy-container--content">
                        <h3
                          class="header-secondary font-weight-bold mt-2 text-dark text-uppercase"
                        >Abouna Keryllos Hany</h3>
                        <p class>
                          Contact Information:
                          <br />Phone: (+63) 912-345-6789
                          <br />Email: abounahany@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-scroll"></div>
          </div>
        @include('partials.location')
        @include('partials.donate')
        @include('partials.footer')
    </body>
    <script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
    <script>
        AOS.init();
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
</html>

