<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous">
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="{{ asset('/css/styles.css') }}" rel="stylesheet" />

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
            <admin-main :user="{{ Auth::user() }}"></admin-main>
        @endif

    </div>
</body>
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossorigin="anonymous">
</script>
</html>
