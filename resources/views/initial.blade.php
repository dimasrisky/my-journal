<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/assets/icons/logo.svg" type="image/x-icon">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <title>MyJournal</title>
    <style> 
        @font-face{
            font-family: 'Poetsen One';
            src: url('/assets/fonts/PoetsenOne-Regular.tff');
        }
    </style>
    <script>
    tailwind.config = {
      theme: {
        fontFamily : {
            'poetsen' : ['Poetsen One', 'sans-serif'];
            'inter' : ['Inter', 'sans-serif'];
        }
      }
    }
  </script>
</head>
<body>
    @yield('content')
</body>
</html>