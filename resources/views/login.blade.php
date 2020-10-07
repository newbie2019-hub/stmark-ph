<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous">
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    <title>St. Mark Coptic Orthodox Church, Philippines</title>
    <script>
        (function() {
            window.Laravel = {
                csrfToken: '{{ csrf_token() }}'
            };
        })();
    </script>
</head>

<body>
    <div id="app">
        @if (Auth::check())
            <log-in :user="{{ Auth::user() }}"></log-in>
        @else
            <log-in :user="false"></log-in>
        @endif
    </div>
</body>
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>

</html>
