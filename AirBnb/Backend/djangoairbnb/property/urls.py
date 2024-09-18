from django.urls import path

from . import api

urlpatterns = [
    path("", api.properties_list, name="api_properties_list"),
    path("create/", api.create_property, name="api_create_property"),
    path("<uuid:pk>/", api.properties_detail, name="api_properties_name"),
    path("<uuid:pk>/book/", api.book_property, name="api_book_property"),
    path("<uuid:pk>/reservations/", api.propertie_reservations,
         name="api_propertie_reservations"),
    path("<uuid:pk>/toogle_favorite/", api.toggle_favorite,
         name="api_toogle_favorite"),
]
