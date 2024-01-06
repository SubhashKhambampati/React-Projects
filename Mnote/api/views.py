from django.shortcuts import render ,HttpResponse
# from api.models import Note
from django.http import JsonResponse
# Create your views here.


def getRoutes(request):
    routes = [
        {
            'Endpoint':"/notes/",
            'method':'GET',
            'body':None,
            'description':"To get all notes"

        },
        {

            'Endpoint':'/notes/id',
            'method':'GET',
            'body':None,
            'description':"To get a single note"

        },
        {

            'Endpoint':'/notes/create/',
            'method':'POST',
            'body':{'body':''},
            'description':"Create a new note with data sent in post request"

        },
        {

            'Endpoint':'/notes/update/',
            'method':'PUT',
            'body':{'body':''},
            'description':"Create a existing note with data sent in post request"

        },
        {

            'Endpoint':'/notes/delete/',
            'method':'DELETE',
            'body':None,
            'description':"Deletes a note"

        },
    ]
    return JsonResponse(routes , safe=False)