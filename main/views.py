from django.http import HttpResponse

def home(request):
    lorem_ipsum = (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "
        "nisi ut aliquip ex ea commodo consequat."
    )
    return HttpResponse(f'<h1>Hello, World!</h1><p>{lorem_ipsum}</p>')