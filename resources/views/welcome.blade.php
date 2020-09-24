<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="bg8CVWdiUaNLqzF1NsZdI14H1-z9HF9ZC9JkDGETZwo" />
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
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
        <home></home>

    </div>
</body>
<script type="text/javascript" src="{{ asset('js/jquery.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>

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
