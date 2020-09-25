<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('partials.header')
</head>

<body>
    <!--- NAVIGATION BAR --->
    @include('partials.navbar')
    <div class="hero">
        <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
                <div class="row justify-content-center">
                    <div class="custom-image" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1100">
                        <img class="img-fluid" src="/images/phflag.png" loading="lazy" />
                    </div>
                </div>
                <h1 data-aos="fade-right" data-aos-duration="1400">
                    <span class="header-primary">St.Mark Coptic Orthodox Church</span>
                </h1>
                <div class="row justify-content-center">
                    <p class="header-secondary mw-80 font-italic" data-aos="fade-left" data-aos-duration="1400">The
                        first Coptic Orthodox Church in the Philippines ministering the Word of God and serving
                        congregants worldwide through it’s websites and TV programs.</p>
                </div>
                <div class="row justify-content-center mt-3">
                    <a class="button button--secondary" href="#aboutus" role="button" data-aos="fade-up"
                        data-aos-offset="0" data-aos-duration="1100">Learn More</a>
                    <a role="button" href="/schedules" class="button button--secondary" data-aos="fade-up"
                        data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">Schedules &nbsp;<i
                            class="fas fa-clock"></i></a>
                </div>
            </div>
        </div>
        <div class="icon-scroll"></div>
    </div>


    <!--- ST. MARK THE APOSTLE VIDEO --->
    <section id="aboutus">
        <div class="container mt-4 mb-3 pl-3 pr-3" style="overflow-x:hidden">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="row align-items-center pt-4">
                    <h3 class="text-center mx-auto text-uppercase" data-aos="fade-up" data-aos-duration="1400">
                        <span class="header-secondary text-secondary font-weight-bold">GET TO KNOW</span>
                    </h3>
                </div>
                <div class="row align-items-center">
                    <h3 class="text-center mx-auto" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="200">
                        <span class="sub-header-primary text-dark">Who is St. Mark?</span>
                    </h3>
                </div>
                <div class="row align-items-center no-gutters mb-4 mt-3 mb-lg-5">
                    <div class="col-xl-6 col-lg-5 mx-auto pt-3" data-aos="fade-right" data-aos-duration="1400">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="pb-2" width="560" height="315"
                                src="https://www.youtube.com/embed/JGuivvC8tjQ"
                                srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.6em black}</style><a href=https://www.youtube.com/embed/JGuivvC8tjQ?autoplay=1><img src=https://i.ytimg.com/vi/JGuivvC8tjQ/maxresdefault.jpg alt='St. Mark the Apostle'><span>▶</span></a>"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 mx-auto content-info" data-aos="fade-left" data-aos-duration="1400">
                        <div class="text-center text-lg-left">
                            <h4>
                                <span class="sub-header-primary text-warning">St. Mark the Apostle</span>
                            </h4>
                            <p class="header-secondary text-dark">Mark the Evangelist is the traditionally ascribed
                                author of the Gospel of Mark. Mark is said to have founded the Church of Alexandria, one
                                of the most important episcopal sees of early Christianity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!---SERVICES---->
    <div id="services" class="container mt-3 mb-3">
        <div class="container mt-4 mb-3 pl-3 pr-3">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="row align-items-center pt-4">
                    <h3 class="text-center mx-auto text-uppercase" data-aos="fade-up" data-aos-duration="1200">
                        <span class="header-secondary text-secondary font-weight-bold">CHURCH SERVICES</span>
                    </h3>
                </div>
                <div class="row align-items-center">
                    <h3 class="text-center mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                        <span class="sub-header-primary text-dark">WHAT WE OFFER</span>
                    </h3>
                </div>
                <div class="row align-items-center no-gutters mb-4 mt-3 mb-lg-5" data-aos="fade-right"
                    data-aos-duration="1400">
                    <div class="col-xl-6 col-lg-5 mx-auto pt-3">
                        <img class="img-fluid mb-3 mb-lg-0" src="/images/image-placeholder.jpg" loading="lazy" />
                    </div>
                    <div class="col-xl-4 col-lg-5 mx-auto content-info" data-aos="fade-left" data-aos-duration="1400">
                        <div class="text-center text-lg-left">
                            <h4>
                                <span class="sub-header-primary text-warning">Bible Study</span>
                            </h4>
                            <p class="header-secondary text-dark">Saint Mark Bible study is hosted every Sunday at 11
                                AM.Learning and Sharing with other members. Join Us Now!</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center no-gutters mb-4 mt-3 mb-lg-5" data-aos="fade-right"
                    data-aos-duration="1400">
                    <div class="col-xl-6 col-lg-5 mx-auto pt-3">
                        <img class="img-fluid mb-3 mb-lg-0" src="/images/image-placeholder.jpg" loading="lazy" />
                    </div>
                    <div class="col-xl-4 col-lg-5 mx-auto content-info" data-aos="fade-left" data-aos-duration="1400">
                        <div class="text-center text-lg-left">
                            <h4>
                                <span class="sub-header-primary text-warning">Sunday School</span>
                            </h4>
                            <p class="header-secondary text-dark">Saint Mark offers sunday school for all grades from
                                Pre-K to college and grad. Have fun while Learning. Join Us Now!</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center no-gutters mb-4 mt-3 mb-lg-5" data-aos="fade-right"
                    data-aos-duration="1400">
                    <div class="col-xl-6 col-lg-5 mx-auto pt-3">
                        <img class="img-fluid mb-3 mb-lg-0" src="/images/image-placeholder.jpg" loading="lazy" />
                    </div>
                    <div class="col-xl-4 col-lg-5 mx-auto content-info" data-aos="fade-left" data-aos-duration="1400">
                        <div class="text-center text-lg-left">
                            <h4 class>
                                <span class="sub-header-primary text-warning">Liturgy</span>
                            </h4>
                            <p class="header-secondary text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center no-gutters mb-4 mt-3 mb-lg-5" data-aos="fade-right"
                    data-aos-duration="1400">
                    <div class="col-xl-6 col-lg-5 mx-auto pt-3">
                        <img class="img-fluid mb-3 mb-lg-0" src="/images/image-placeholder.jpg" loading="lazy" />
                    </div>
                    <div class="col-xl-4 col-lg-5 mx-auto content-info" data-aos="fade-left" data-aos-duration="1400">
                        <div class="text-center text-lg-left">
                            <h4 class>
                                <span class="sub-header-primary text-warning">Catechism</span>
                            </h4>
                            <p class="header-secondary text-dark">The Orthodox Church has a long and rich history of
                                theology and revelation. In the following pages we hope to help explain how the Eastern
                                Orthodox Church understands the Church, God, and our place in relationship with them
                                both.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--- GALLERY --->
    <div class="container pb-5 pl-3 pr-3" id="gallery">
        <div class="row h-100 justify-content-center">
            <div class="col-sm-9 col-md-10 col-lg-10">
                <div class="row align-items-center pt-4">
                    <h3 class="text-center mx-auto text-uppercase" data-aos="fade-up" data-aos-duration="1200">
                        <span class="header-secondary text-secondary font-weight-bold">GALLERY</span>
                    </h3>
                </div>
                <div class="row align-items-center">
                    <h3 class="text-center mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                        <span class="sub-header-primary text-dark">TACLOBAN CITY</span>
                    </h3>
                </div>
                <div class="mt-4" data-aos="fade-up" data-aos-duration="1200">
                    <div id="carouselGallery" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselGallery" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselGallery" data-slide-to="1"></li>
                            <li data-target="#carouselGallery" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="img-fluid" src="/images/image1.jpg" loading="lazy"
                                    data-interval="1000" />
                            </div>
                            <div class="carousel-item">
                                <img class="img-fluid" src="/images/image2.jpg" loading="lazy"
                                    data-interval="1000" />
                            </div>
                            <div class="carousel-item">
                                <img class="img-fluid" src="/images/image3.jpg" loading="lazy"
                                    data-interval="1000" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselGallery" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselGallery" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
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
    < script >
        $('.carousel').carousel({
            interval: 2500,
            touch: true,
            keyboard: true,
            ride: true,
        })

</script>

</html>
