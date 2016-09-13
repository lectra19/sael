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
    