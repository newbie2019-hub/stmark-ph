<nav id="navbar">
    <input type="checkbox" id="nav" class="hidden">
    <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
    </label>
    <div class="logo" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
        <a href="#">ST MARK</a>
    </div>
    <div class="nav-wrapper">
        <ul>
            <li><a href="/index" >Home</a></li>
            <li><a href="/index#services">Services</a></li>
            <li><a href="/schedules">Events</a></li>
            <li><a href="/resource">Resources</a></li>
            <li><a href="/updates">Updates</a></li>
            @if (Auth::check())
            <li><a href="/logout">Log-Out</a></li>
            @else
            <li><a href="/login">Log-In</a></li>
            @endif
        </ul>
    </div>
</nav>