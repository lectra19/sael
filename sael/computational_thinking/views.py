from django.shortcuts import render


from django.http import HttpResponse
from django.template import loader




def index(request):
	template = loader.get_template('computational_thinking/index.html')
	context={'STATIC':"static/computational_thinking"}
	return HttpResponse(template.render(context, request))
    
	
#ΠΡΟΣΤΕΘΗΚΕ	
def decompose(request):
    template = loader.get_template('computational_thinking/decompose.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
    
def multi(request):
    template = loader.get_template('computational_thinking/multi.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
    
def cubes(request):
    template = loader.get_template('computational_thinking/cubes.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def tiles(request):
    template = loader.get_template('computational_thinking/tiles.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
    
def chess(request):
    template = loader.get_template('computational_thinking/chess.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def pattern(request):
    template = loader.get_template('computational_thinking/pattern.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def shapes(request):
    template = loader.get_template('computational_thinking/shapes.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def colorshapes(request):
    template = loader.get_template('computational_thinking/colorshapes.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def abstraction(request):
    template = loader.get_template('computational_thinking/abstraction.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
def practiseabstraction(request):
    template = loader.get_template('computational_thinking/practiseabstraction.html')
    context={'STATIC':"static/computational_thinking"}
    return HttpResponse(template.render(context, request))
	
	