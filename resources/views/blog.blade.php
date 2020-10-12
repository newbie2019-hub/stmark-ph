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
    <div id="app">
        <blog :post='@json($blog)' :recent='@json($recent)'></blog>
    </div>
    @include('partials.location')
    @include('partials.donate')
    @include('partials.footer')
</body>
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</html>


