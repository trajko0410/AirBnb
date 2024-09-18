from .serializers import UserDetailSerializer
from .models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from property.serializers import ReservationsListSerializer


@api_view(["GET"])
@authentication_classes([])  # evryone can see this
@permission_classes([])
def landlord_details(reques, pk):
    user = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)


@api_view(["GET"])
def reservations_list(request):
    reservations = request.user.reservations.all()
    serializer = ReservationsListSerializer(reservations, many=True)

    return JsonResponse(serializer.data, safe=False)
