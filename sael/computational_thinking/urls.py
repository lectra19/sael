from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^index', views.index, name='index'),
	url(r'^decompose', views.decompose, name='decompose'),
	url(r'^multi', views.multi, name='multi'), #ΠΡΟΣΤΕΘΗΚΕ
	url(r'^cubes', views.cubes, name='cubes'),
	url(r'^tiles', views.tiles, name='tiles'),
	url(r'^chess', views.chess, name='chess'),
	url(r'^pattern', views.pattern, name='pattern'),
	url(r'^shapes', views.shapes, name='shapes')
	
]
