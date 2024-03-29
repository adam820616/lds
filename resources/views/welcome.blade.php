<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Lucky draw system - beta</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <script>
        window.app = <?= json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
        </script>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>