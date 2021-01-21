from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from django.views.generic.base import RedirectView

from .views import UserViewSet
from apis.settings import ROOT_URL

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),

    # redirecting to UI application
    url(r'^$', RedirectView.as_view(url=ROOT_URL, query_string=True), name='index'),
]