from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from django.template import loader
from .models import Item

# items = [
#     {"id": 1, "name": "Cheesecake", "quantity": 4},
#     {"id": 2, "name": "Pancake", "quantity": 14},
#     {"id": 3, "name": "Apple", "quantity": 35},
#     {"id": 4, "name": "Coriander", "quantity": 35}
# ]

# Create your views here.


def home(request):
    items = Item.objects.all
    context = {"items": items}
    template = loader.get_template('inventory/index.html')
    return HttpResponse(
        template.render(context, request)
    )


def about(request):
    items = Item.objects.all
    context = {"items": items}
    template = loader.get_template('inventory/about.html')
    return HttpResponse(
        template.render(context, request)
    )


def show(request, id):
    item = get_object_or_404(Item, pk=id)
    return HttpResponse(
        f"<p style='color:blue;'> We have {item.quantity} {item.name}'s on the menu </p>"
    )
