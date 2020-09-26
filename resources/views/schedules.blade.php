<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('partials.header')
    </head>
    <body>
        @include('partials.navbar')
        <div id="app">
          <schedules></schedules>
        </div>
        @include('partials.location')
        @include('partials.donate')
        @include('partials.footer')
    </body>
    <script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
    <script src="{{mix('/js/app.js')}}"></script>
    <script>
        AOS.init();
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous">
    </script>
</html>

