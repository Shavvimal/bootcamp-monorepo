from django.contrib.auth.decorators import login_required
from django.http import Http404, HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, redirect, render

from .forms import AdoptDogForm, NewDogForm
from .models import Dog


def not_found_404(request, exception):
    data = { 'err': exception }
    return render(request, 'adoption/404.html', data)

def server_error_500(request):
    return render(request, 'adoption/500.html')

def home(request):
    data = { 'doggos': Dog.objects.all() }
    return render(request, 'adoption/home.html', data)

def about(request):
    return render(request, 'adoption/about.html')

@login_required
def create(request):
    if request.method == 'POST':
        dog = NewDogForm(request.POST)
        if dog.is_valid():
            dog_id = dog.save().id
            return redirect("dog-show", dog_id=dog_id)
    else:
        form = NewDogForm()
    data = {'form': form}
    return render(request, 'dogs/new.html', data)


@login_required
def show(request, dog_id):
    dog = get_object_or_404(Dog, pk=dog_id)
    if request.method == 'POST':
        form = AdoptDogForm(request.POST)
        if form.is_valid():
            dog.owner = request.user
            dog.save()
            return redirect("dog-show", dog_id=dog_id)
    else:
        form = AdoptDogForm(initial={'owner': request.user})
    data = {
        'dog': dog,
        'form': form
    }
    return render(request, 'dogs/show.html', data)
