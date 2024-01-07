from django.shortcuts import render ,HttpResponse
# from api.models import Note
from django.http import JsonResponse
# Create your views here.
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
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
    return JsonResponse(routes,safe=False)



@api_view(['GET'])
def getNotes(request):
    notes  = Note.objects.all()
    serializer = NoteSerializer(notes , many=True)

    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def getNote(request,pk):
    notes  = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes , many=False)

    return JsonResponse(serializer.data,safe=False)