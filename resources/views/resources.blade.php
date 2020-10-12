<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.header')
    </head>
    <body>
      <div id="preloader">
        <div id="loading-animation">&nbsp;</div>
      </div>
        @include('partials.navbar')
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
          <section id="recontent" class="">
            <div id="app">
              <resources :resources='@json($res)'></resources>
            </div>
          </section>
          @include('partials.location')
          @include('partials.donate')
          @include('partials.footer')
      </body>
      <script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
      <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
      <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
      <script>
          AOS.init();
      </script>
</html>
