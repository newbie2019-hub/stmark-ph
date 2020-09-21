<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
        <section class="notfound">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center">
                    <div class="notfound__container">
                        <img width="95%" src="{{ asset('/images/404-Not-Found.svg') }}" />
                        <h3 class="text-muted mt-3">Ooops! Page Not Found</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>

</html>
